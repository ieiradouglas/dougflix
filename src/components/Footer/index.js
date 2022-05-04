import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img height="50px" src={Logo} alt="Logo Dougflix" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
          Imersão React da Alura
      </p>
    </FooterBase>
  );
}

export default Footer;
