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

//   const [filterActived, setFilterActived] = useState('all');
  const [type, setType] = useState();
  const [lateCount, setLateCount] = useState();

  async function lateVerify(){
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response => {
        setLateCount(response.data.length);
    })
  
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
              <input type="text" placeholder="Título da tarefa..."/>
          </S.InputDataTask>

          <S.TextArea>
              <span>Descrição</span>
              <textarea rows={5} placeholder="Descrição da tarefa..."/>
          </S.TextArea>

          <S.InputDataTask>
              <span>Data</span>
              <input type="date" placeholder="Data da tarefa..."/>
              <img src={iconCalendar} alt="Calendário"/>
          </S.InputDataTask>

          <S.InputDataTask>
              <span>Hora</span>
              <input type="time" placeholder="Hora da tarefa..."/>
              <img src={iconClock} alt="Relógio"/>
          </S.InputDataTask>

          <S.Options>
              <div>
                <input type="checkbox"/>
                <span>CONCLUÍDO</span>
              </div>
              <button type="button">EXCLUIR</button>
          </S.Options>

          <S.Save>

              <button type="button">SALVAR</button>
          </S.Save>

      </S.Form>

      <Footer/>
    </S.Container>
  ) 
}

export default Task;
