import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import * as S from './styles';
import Qr from 'qrcode.react';

// NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {

  const [macaddress, setMacaddress] = useState();
  const [redirect, setRedirect] = useState(false);

  async function saveMacaddress(){
    if(!macaddress)
      alert('Informe o número que apareceu no celular!');
    else {
      await localStorage.setItem('@todo/macaddress', macaddress);
      setRedirect(true);
      window.location.reload();
    }
  }

  return (
    <S.Container>
      {redirect && <Redirect to="/"/>}
      <Header />

      <S.Content>
        <h1>CAPTURE O QRCODE PELO APP</h1>
        <p>Suas atividades serão sincronizadas como a do seu celular.</p>
        <S.QrCodeArea>
          <Qr value='getmacaddress' size={350} />
        </S.QrCodeArea>

        <S.ValidationCode>
          <span>Digite a numeração que apareceu no celular</span>
          <input type="text" onChange={estado => setMacaddress(estado.target.value)}
            value={macaddress}/>
          <button type="button" onClick={saveMacaddress} >SINCRONIZAR</button>
        </S.ValidationCode>
      </S.Content>

      <Footer />
    </S.Container>)
}

export default QrCode;