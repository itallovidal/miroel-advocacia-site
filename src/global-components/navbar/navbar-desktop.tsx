import React from 'react'
import { WrapperDesktop } from './style.ts'
import { Link } from 'react-router-dom'

export function NavbarDesktop() {
  return (
    <WrapperDesktop>
      <div>
        <picture>
          {/*<img src={AlfaLogo} alt="AlfaLogo" />*/}
        </picture>

        <nav>
          <Link to={'/#home'}>Início</Link>
          <Link to={'/#serviceDetails'}> Serviços</Link>
          <Link to={'/#contact'}> Tráfego Pago</Link>
          <Link to={'/#about'}>Sobre</Link>
        </nav>
      </div>
    </WrapperDesktop>
  )
}
