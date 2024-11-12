import React from 'react'
import { AddressWrapper, ContactWrapper, FooterWrapper } from './style.ts'
import { Link } from 'react-router-dom'
export function Footer() {
  return (
    <FooterWrapper>
      <div>
        <AddressWrapper>
          <picture>
            {/*<img src={AlfaLogo} alt="AlfaLogo" />*/}
          </picture>
          <div>
            <p>Copacabana</p>
            <p>Rio de Janeiro - RJ, 22030001, BR</p>
            <p>contato@alfaeomegatecnologia.com</p>
          </div>
        </AddressWrapper>
        <ContactWrapper>
          <Link to={'/#home'}>Início</Link>
          <Link to={'/#serviceDetails'}> Serviços</Link>
          <Link to={'/#traffic'}> Tráfego Pago</Link>
          <Link to={'/#about'}>Sobre</Link>
        </ContactWrapper>
      </div>
    </FooterWrapper>
  )
}
