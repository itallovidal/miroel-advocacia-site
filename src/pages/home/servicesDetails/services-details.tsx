import { Button } from '../../../styles'
import { BoxWrapper, ServiceBox, ServicesWrapper } from './style.ts'
import { forwardRef } from 'react'
import empresarialPic from '../../../assets/images/empresarial.png'
import trabalhistaPic from '../../../assets/images/trabalhista.jpg'
import civilPic from '../../../assets/images/civil.png'
import criminalPic from '../../../assets/images/criminal.png'

export const ServicesDetails = forwardRef<HTMLDivElement>((_, ref) => {

  return (
    <ServicesWrapper ref={ref} id={'serviceDetails'}>
      <div>
        <h1>Área de Atuação</h1>
        <BoxWrapper>

          <ServiceBox>
            <picture>
              <img src={empresarialPic} alt={'empresarial'}/>
            </picture>
            <div>
              <h2>Empresarial</h2>
              <p>
                Empresarial são responsáveis pela mediação entre empresas, colaboradores e consumidores do mercado.
              </p>
            </div>

          </ServiceBox>
          <ServiceBox>
            <picture>
              <img src={trabalhistaPic} alt={'empresarial'}/>
            </picture>
            <div>
              <h2>Trabalhista</h2>
              <p>Especialista na área para resolver problemas jurídicos, seja para um empregado, uma empresa ou
                sindicato.</p>
            </div>
          </ServiceBox>

          <ServiceBox>
            <picture>
              <img src={civilPic} alt={'empresarial'}/>
            </picture>
            <div>
              <h2>Civil</h2>
              <p>Direito contratual, das pessoas, da família, das coisas, dos bens, dos fatos jurídicos, das
                obrigações.</p>
            </div>
          </ServiceBox>

          <ServiceBox>
            <picture>
              <img src={criminalPic} alt={'empresarial'}/>
            </picture>
            <div>
              <h2>Criminal</h2>
              <p>Atuamos em defesa dos direitos de cidadãos que estão sendo acusados pela prática de um crime.</p>
            </div>
          </ServiceBox>

        </BoxWrapper>
      </div>
    </ServicesWrapper>
  )
})
