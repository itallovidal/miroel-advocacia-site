import React, { useState } from 'react'
import { NavbarModal, WrapperMobile } from './style.ts'
import { Button } from '../../styles'
import { Link } from 'react-router-dom'
import { CloseIcon } from '../../assets/CloseIcon.tsx'
import logo from '../../assets/images/logo.png'
import {Menu} from "lucide-react";
import {theme} from '../../styles/theme.ts'

export function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false)
    const {gold500} = theme.colors

  return (
    <WrapperMobile display={isOpen ? 'open' : 'closed'}>
      <Button onClick={() => setIsOpen((prev) => !prev)}>
          <Menu />
      </Button>

      <picture>
        <img src={logo} alt="logo" />
      </picture>

      <NavbarModal transform={isOpen ? 'open' : 'closed'}>
          <Link onClick={() => setIsOpen((prev) => !prev)}
              to={'/#home'}>Início</Link>
          <Link onClick={() => setIsOpen((prev) => !prev)}
              to={'/#about'}> Sobre </Link>
          <Link onClick={() => setIsOpen((prev) => !prev)}
              to={'/#serviceDetails'}> Área de Atuação</Link>
          <Link onClick={() => setIsOpen((prev) => !prev)}
              to={'/#contact'}>Contato</Link>
          <Link style={{color: gold500.toString(), fontWeight: 'bold'}} onClick={() => setIsOpen((prev) => !prev)}
              to={'/#form'}>
              Descreva seu caso
          </Link>

        <Button
          variantType={'light'}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <CloseIcon />
        </Button>
      </NavbarModal>
    </WrapperMobile>
  )
}
