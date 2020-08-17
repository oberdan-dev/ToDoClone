import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

import api from '../../services/api'
import isConnected from '../../utils/isConnected'

import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'



function Header({ clickNotification }) {

  const [lateCount, setLateCount] = useState();

  async function lateVerify() {
    await api.get(`/task/filter/late/${isConnected}`)
      .then(response => {
        setLateCount(response.data.length);
      })

  }

  useEffect(() => {
    lateVerify();
  })

  async function logout() {
    localStorage.removeItem('@todo/macaddress');
    window.location.reload();
  }

  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
        {
          !isConnected ?
            < Link to='/qrcode'>SINCRONIZAR CELULAR</Link>
            :
            <>
              < Link to='/'>INÍCIO</Link>
              <span className="divisor"></span>
              < Link to='/task'>NOVA TAREFA</Link>
              <span className="divisor"></span>
              <button type="button" onClick={logout}>SAIR</button>
              {/* { */}
                {/* lateCount && */}
                {/* <> */}
                  <span className="divisor"></span>
                  < button onClick={clickNotification} id="notification">
                    <img src={bell} alt="Notificação" />
                    <span>{lateCount}</span>
                  </ button>
                {/* </> */}
              {/* } */}
            </>
        }
      </S.RightSide>
    </S.Container>
  )
}

export default Header;
