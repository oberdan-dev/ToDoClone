const TaskModel = require('../model/TaskModel');
const { response } = require('express');
const { startOfDay, endOfDay, 
        startOfWeek, endOfWeek, 
        startOfMonth, endOfMonth,
        startOfYear, endOfYear} = require('date-fns');

const current = new Date();

class TaskController {
    
    async create(req, res){
        //Pega o que vem no corpo da requisição 
        // e converte em TaskModel
        const task = new TaskModel(req.body); 
        await task
            .save() //Salva no mongo...
            // Se tudo der certo, ela captura as informações
            // e devolve em formato json e o status code 200
            .then(response => {
                return res.status(200).json(response);
            }) 
            // Se algo der errado, captura o erro 
            // e devolve em formato json e o status code 500
            .catch(error => {
                return res.status(500).json(error);
            }) 
    }

    async update(req, res){
        await TaskModel
            .findByIdAndUpdate(
                { '_id': req.params.id },
                req.body,
                { new: true})
            .then(response => {
                return res.status(200).json(response);
            }) 
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async all(req, res){
        await TaskModel
            .find(
                { macaddress: {'$in': req.params.macaddress} })
            .sort('when')
            .then(response => {
                return res
                    .status(200)
                    .json(response);
            })
            .catch(error => {
                return res
                    .status(500)
                    .json(error);
            })
    }

    async show(req, res){

        /* A string deve conter 24 caracteres hexadecimais para consultar no banco */
        const hexa = /[0-9A-Fa-f]{24}/g;
        const id = req.params.id;

        if (id.length === 24) {
            if (!hexa.test(id)) {
                hexa.lastIndex = 0;
                return res
                    .status(404)
                    .json(
                        { 
                            error: 'O id deve ser em hexadecimal!' 
                        });
            }
        } else
            return res.
                status(404).
                json(
                    { 
                        error: 'O id deve ter 24 caracteres!' 
                    });

        await TaskModel
            .findById(req.params.id)
            .then(response => {
                if(response)
                    return res
                        .status(200)
                        .json(response);
                else 
                    return res
                        .status(404)
                        .json(
                            {
                                error: "Tarefa não encontrada!"
                            });
            })
            .catch(error => {
                return res
                    .status(500)
                    .json(error);
            })
    }

    async delete(req, res){
        
        await TaskModel
            .deleteOne({'_id': req.params.id})
            .then(response => {
                return res
                    .status(200)
                    .json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async done(req, res){
        await TaskModel
            .findByIdAndUpdate(
                {'_id': req.params.id},
                {'done': req.params.done},
                {new: true})
            .then(response => {
                return res
                    .status(200)
                    .json(response)
            })
            .catch(error => {
                return res
                    .status(500)
                    .json(error);
           })
    }

    async late(req,res){
        await TaskModel
            .find({
                'when': {'$lt': current},
                'macaddress': {'$in': req.params.macaddress},
        })
        .sort('when')
        .then(response => {
            return res
                .status(200)
                .json(response)
        })
        .catch(error => {
            return res
                .status(500)
                .json(error)
        })
    }

    async today(req,res){
        await TaskModel
            .find({
                'when': {
                    '$gte': startOfDay(current),
                    '$lte': endOfDay(current)},
                'macaddress': {'$in': req.params.macaddress},
        })
        .sort('when')
        .then(response => {
            return res
                .status(200)
                .json(response)
        })
        .catch(error => {
            return res
                .status(500)
                .json(error)
        })
    }

    async week(req,res){
        await TaskModel
            .find({
                'when': {
                    '$gte': startOfWeek(current),
                    '$lte': endOfWeek(current)},
                'macaddress': {'$in': req.params.macaddress},
        })
        .sort('when')
        .then(response => {
            return res
                .status(200)
                .json(response)
        })
        .catch(error => {
            return res
                .status(500)
                .json(error)
        })
    }

    async month(req,res){
        await TaskModel
            .find({
                'when': {
                    '$gte': startOfMonth(current),
                    '$lte': endOfMonth(current)},
                'macaddress': {'$in': req.params.macaddress},
        })
        .sort('when')
        .then(response => {
            return res
                .status(200)
                .json(response)
        })
        .catch(error => {
            return res
                .status(500)
                .json(error)
        })
    }

    async year(req,res){
        await TaskModel
            .find({
                'when': {
                    '$gte': startOfYear(current),
                    '$lte': endOfYear(current)},
                'macaddress': {'$in': req.params.macaddress},
        })
        .sort('when')
        .then(response => {
            return res
                .status(200)
                .json(response)
        })
        .catch(error => {
            return res
                .status(500)
                .json(error)
        })
    }

}

module.exports = new TaskController();