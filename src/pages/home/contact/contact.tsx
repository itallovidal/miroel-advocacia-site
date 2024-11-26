import {ContactWrapper, Separator} from './style.ts'
import { Button } from '../../../styles'
import { forwardRef } from 'react'


export const Contact = forwardRef<HTMLDivElement>((_, ref) => {
  const handleRedirect = () => {
    window.location.href = "https://wa.me/5522999797009";
  };

  return (
    <ContactWrapper ref={ref} id={'contact'} >
      <div>
        <p>Ligue para nós</p>
        <h2>
          (22) 99988-1123
        </h2>

        <Separator>
          <span>ou</span>
        </Separator>

        <h2 id={'calltoaction'}>
          Obtenha sua primeira consulta <span id={'free'}>gratuita</span>
        </h2>

          <Button onClick={handleRedirect} variantType={'dark'}>Solicitar Agendamento</Button>
      </div>
    </ContactWrapper>
  )
})
