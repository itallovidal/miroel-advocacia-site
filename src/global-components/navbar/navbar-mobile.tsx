import React, { useState } from 'react'
import { NavbarModal, WrapperMobile } from './style.ts'
import { HamburguerIcon } from '../../assets/HamburguerIcon.tsx'
import { Button } from '../../styles'
import { Link } from 'react-router-dom'
import { CloseIcon } from '../../assets/CloseIcon.tsx'

export function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <WrapperMobile display={isOpen ? 'open' : 'closed'}>
      <Button onClick={() => setIsOpen((prev) => !prev)}>
        <HamburguerIcon />
      </Button>

      <picture>
        {/*<img src={AlfaLogo} alt="AlfaLogo" />*/}
      </picture>

      <NavbarModal transform={isOpen ? 'open' : 'closed'}>
        <Link onClick={() => setIsOpen((prev) => !prev)} to={'/#home'}>
          Início
        </Link>

        <Link
          onClick={() => setIsOpen((prev) => !prev)}
          to={'/#serviceDetails'}
        >
          Serviços
        </Link>
        <Link onClick={() => setIsOpen((prev) => !prev)} to={'/#course'}>
          Tráfego Pago
        </Link>
        <Link onClick={() => setIsOpen((prev) => !prev)} to={'/#about'}>
          Sobre
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
