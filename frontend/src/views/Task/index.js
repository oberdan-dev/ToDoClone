import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import * as S from './styles';
import { format } from 'date-fns';

import api from '../../services/api';

// NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

function Task({ match }) {

    const [lateCount, setLateCount] = useState();
    const [id, setId] = useState();
    const [type, setType] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState('11:11:11:11:11:11');
    const [redirect, setRedirect] = useState(false);


    async function lateVerify() {
        await api.get(`/task/filter/late/11:11:11:11:11:11`)
            .then(response => {
                setLateCount(response.data.length);
            })
    }

    async function loadTaskDetails() {
        await api.get(`/task/${match.params.id}`)
            .then(response => {
                setType(response.data.type)
                setTitle(response.data.title)
                setDescription(response.data.description)
                setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
                setHour(format(new Date(response.data.when), 'HH:mm'))
                setDone(response.data.done)
            })
    }

    async function save() {
        //Validação dos dados
        if(!type)
            return alert("Campo tipo é obrigatório")
        else if(!title)
            return alert("Campo título é obrigatório!")
        else if(!description)
            return alert("Campo descrição é obrigatório!")
        else if(!date)
            return alert("Campo data é obrigatório!")
        else if(!hour)
           return alert("Campo hora é obrigatório!")

        if (match.params.id) {
            await api.put(`/task/${match.params.id}`, {
                macaddress,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000Z`,
                done
            }).then(() =>
                setRedirect(true)
            )
        } else {
            await api.post(`/task`, {
                macaddress,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000Z`
            }).then(() =>
                setRedirect(true)
            )
        }
    }

    async function remove(){
        const resposta = window.confirm('Deseja realmente remover a tarefa?')
        if (resposta == true)
            await api.delete(`/task/${match.params.id}`)
                .then(() => setRedirect(true))
        else
            alert('OK, vamos manter')

    }

    useEffect(() => {
        lateVerify();
        loadTaskDetails();
    }, [])

    return (
        <S.Container>
            {redirect && <Redirect to="/" />}
            <Header lateCount={lateCount} />

            <S.Form>
                <S.TypeIcons>
                    {
                        TypeIcons.map((icon, index) => (
                            //if (index <= 0)
                            index > 0 &&
                            <button type="button" onClick={() => setType(index)}>
                                <img src={icon} alt="Tipo da tarefa"
                                    className={type && type != index && 'inactive'} />
                            </button>
                        ))
                    }
                </S.TypeIcons>

                <S.InputDataTask>
                    <span>Título</span>
                    <input type="text" placeholder="Título da tarefa..."
                        onChange={event => setTitle(event.target.value)} value={title} />
                </S.InputDataTask>

                <S.TextArea>
                    <span>Descrição</span>
                    <textarea rows={5} placeholder="Descrição da tarefa..."
                        onChange={event => setDescription(event.target.value)} value={description} />
                </S.TextArea>

                <S.InputDataTask>
                    <span>Data</span>
                    <input type="date" placeholder="Data da tarefa..."
                        onChange={event => setDate(event.target.value)} value={date} />
                    <img src={iconCalendar} alt="Calendário" />
                </S.InputDataTask>

                <S.InputDataTask>
                    <span>Hora</span>
                    <input type="time" placeholder="Hora da tarefa..."
                        onChange={event => setHour(event.target.value)} value={hour} />
                    <img src={iconClock} alt="Relógio" />
                </S.InputDataTask>

                <S.Options>
                    { match.params.id && <div>
                        <input type="checkbox" checked={done} onChange={() => setDone(!done)} />
                        <span>CONCLUÍDO</span>
                    </div> }
                    {match.params.id && <button type="button" onClick={remove}>EXCLUIR</button>}
                </S.Options>

                <S.Save>
                    <button type="button" onClick={save}>SALVAR</button>
                </S.Save>

            </S.Form>

            <Footer />
        </S.Container>
    )
}

export default Task;
