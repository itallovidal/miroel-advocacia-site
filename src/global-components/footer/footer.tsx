import React from 'react'
import {AddressWrapper, ContactWrapper, FooterContent, FooterWrapper} from './style.ts'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
export function Footer() {
  return (
    <FooterWrapper>
      <div>
        <FooterContent>
          <picture>
            <img src={logo} alt="AlfaLogo"/>
          </picture>
          <AddressWrapper>
            <div>
              <p>15 ANOS DE ATENDIMENTO</p>
              <p>Prestamos consultoria jurídica a clientes de todo o estado do Rio de Janeiro há mais de 15 anos.</p>
              <p>contato@alfaeomegatecnologia.com</p>
            </div>
          </AddressWrapper>

          <AddressWrapper>
            <div>
              <p>Contato</p>
              <p>miroelpaulinoadvocacia@gmail.com</p>
              <p>(22) 2041-0558 </p>
              <p>(22) 99988-1123 </p>
              <p>Rua Rosalina Terra, 429 Casa 3</p>
              <p>Portinho – Cabo Frio RJ</p>
            </div>
          </AddressWrapper>

          <ContactWrapper>
            <p><Link to={'/#home'}>Início</Link></p>
            <p><Link to={'/#about'}> Sobre </Link></p>
            <p><Link to={'/#serviceDetails'}> Área de Atuação</Link></p>
            <p><Link to={'/#contact'}>Contato</Link></p>
            <p><Link to={'/#form'}>Descreva seu caso</Link></p>
          </ContactWrapper>
        </FooterContent>
      </div>
    </FooterWrapper>
  )
}
