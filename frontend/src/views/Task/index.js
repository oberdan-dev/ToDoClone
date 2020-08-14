import React, { useState, useEffect } from 'react';
import * as S from './styles';

import api from '../../services/api';


// NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

function Task() {

    const [lateCount, setLateCount] = useState();
    const [id, setId] = useState();
    const [type, setType] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState('11:11:11:11:11:11');


    async function lateVerify(){
        await api.get(`/task/filter/late/11:11:11:11:11:11`)
        .then(response => {
            setLateCount(response.data.length);
        })
    }

    async function save(){
        await api.post(`/task`, {
            macaddress,
            type,
            title,
            description,
            when: `${date}T${hour}:00.000Z`
        }).then(
            alert('TAREFA CADASTRADA COM SUCESSO!')
        )
    }

    useEffect(() => {
        lateVerify();
    }, [])

    return (
        <S.Container>
        <Header lateCount={lateCount}/>

        <S.Form>
            <S.TypeIcons>
                {
                    TypeIcons.map((icon, index) => (
                        //if (index <= 0)
                        index > 0 && 
                        <button type="button" onClick={() => setType(index)}>
                            <img src={icon} alt="Tipo da tarefa"
                            className={type && type != index && 'inactive'}/>
                        </button>
                    ))
                }
            </S.TypeIcons>

            <S.InputDataTask>
                <span>Título</span>
                <input type="text" placeholder="Título da tarefa..." 
                    onChange={event => setTitle(event.target.value)} value={title}/>
            </S.InputDataTask>

            <S.TextArea>
                <span>Descrição</span>
                <textarea rows={5} placeholder="Descrição da tarefa..."
                onChange={event => setDescription(event.target.value)} value={description}/>
            </S.TextArea>

            <S.InputDataTask>
                <span>Data</span>
                <input type="date" placeholder="Data da tarefa..."
                    onChange={event => setDate(event.target.value)} value={date}/>
                <img src={iconCalendar} alt="Calendário"/>
            </S.InputDataTask>

            <S.InputDataTask>
                <span>Hora</span>
                <input type="time" placeholder="Hora da tarefa..."
                    onChange={event => setHour(event.target.value)} value={hour}/>
                <img src={iconClock} alt="Relógio"/>
            </S.InputDataTask>

            <S.Options>
                <div>
                    <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
                <span>CONCLUÍDO</span>
                </div>
                <button type="button">EXCLUIR</button>
            </S.Options>

            <S.Save>

                <button type="button" onClick={save}>SALVAR</button>
            </S.Save>

        </S.Form>

        <Footer/>
        </S.Container>
    ) 
    }

export default Task;
