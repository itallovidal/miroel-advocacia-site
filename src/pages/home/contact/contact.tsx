import {ContactWrapper, Separator} from './style.ts'
import { Button } from '../../../styles'
import { forwardRef } from 'react'

export const Contact = forwardRef<HTMLDivElement>((_, ref) => {
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

        <h2>
          Obtenha sua primeira consulta <span id={'free'}>gratuita</span>
        </h2>

        <Button variantType={'dark'}>Solicitar Agendamento</Button>
      </div>
    </ContactWrapper>
  )
})
