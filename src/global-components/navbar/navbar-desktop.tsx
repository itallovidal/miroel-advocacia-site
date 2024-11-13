import React from 'react'
import { WrapperDesktop } from './style.ts'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {Button} from "../../styles";

export function NavbarDesktop() {
  return (
    <WrapperDesktop>
      <div>
        <picture>
          <img src={logo} alt="AlfaLogo" />
        </picture>

        <nav>
          <Link to={'/#home'}>Início</Link>
          <Link to={'/#about'}> Sobre </Link>
          <Link to={'/#serviceDetails'}> Área de Atuação</Link>
          <Link to={'/#contact'}>Contato</Link>
          <Link to={'/#form'}>
            <Button>Descreva seu caso</Button>
          </Link>
        </nav>
      </div>
    </WrapperDesktop>
  )
}
