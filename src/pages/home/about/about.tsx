import React, { forwardRef } from 'react'
import Profile from '../../../assets/images/profile.png'
import { AboutDetails, AboutWrapper, ProfileWrapper } from './style.ts'

export const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <AboutWrapper ref={ref} id={'about'}>
      <div>
        <AboutDetails>
          <div>
            <h2>Dr. Miroel Paulino</h2>
            <p>
              O escritório Miroel Paulino Advocacia com mais de 15 anos de experiência representa os interesses de
              pessoa jurídica e física, tendo como sua principal característica o acompanhamento personalizado de seus
              clientes.
            </p>
          </div>

          <div>
            <h2>Sobre a nossa empresa</h2>
            <p>
              Somos um dos maiores escritórios de advocacia da região, composto inteiramente por advogados experientes e apaixonados pelo trabalho. Sabemos o que é preciso para elaborar e apresentar casos sólidos e convincentes, e é exatamente isso que fazemos. De forma vigorosa e sincera, enfrentamos os desafios mais complexos e conquistamos seus objetivos com bastante criatividade e determinação. Oferecemos ótimos serviços de assistência jurídica a empresas e pessoas físicas. Nossos advogados são os profissionais mais qualificados de suas áreas e oferecem as melhores soluções possíveis aos nossos clientes.
            </p>
          </div>
        </AboutDetails>

        <ProfileWrapper>
          <picture>
            <img src={Profile} alt={'profile.png'} />
          </picture>
        </ProfileWrapper>


      </div>
    </AboutWrapper>
  )
})
