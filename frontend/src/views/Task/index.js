import React, { useState, useEffect } from 'react';
import * as S from './styles';

import api from '../../services/api';


// NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Task() {

//   const [filterActived, setFilterActived] = useState('all');
//   const [tasks, setTasks] = useState([]);
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
          
      </S.Form>

      <Footer/>
    </S.Container>
  ) 
}

export default Task;
