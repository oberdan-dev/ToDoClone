import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Qr from 'qrcode.react';

// import api from '../../services/api';


// NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
  return (
    <S.Container>
      <Header />

      <S.Content>
        <h1>CAPTURE O QRCODE PELO APP</h1>
        <p>Suas atividades serão sincronizadas como a do seu celular.</p>
        <S.QrCodeArea>
          <Qr value='getmacaddress' size={400} />
        </S.QrCodeArea>

        <S.ValidationCode>
          <span>Digite a numeração que apareceu no celular</span>
          <input type="text" />
          <button type="button" >SINCRONIZAR</button>
        </S.ValidationCode>
      </S.Content>

      <Footer />
    </S.Container>)
}

export default QrCode;