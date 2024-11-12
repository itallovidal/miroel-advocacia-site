import React, { forwardRef } from 'react'
import Profile from '../../../assets/profile.png'
import { AboutDetails, AboutWrapper, ProfileWrapper } from './style.ts'

export const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <AboutWrapper ref={ref} id={'about'} background={'gray'}>
      <div>
        <ProfileWrapper>
          <picture>
            <img src={Profile} alt={'profile.png'} />
          </picture>

          <span>Camila Paulino</span>
        </ProfileWrapper>

        <AboutDetails>
          <h1>Professora</h1>
          <p>
            Mestre em Educação; Especialista em Análise, Projeto e Gerência de
            Sistemas. Especialista em Docência do Ensino Superior e Graduada em
            Ciências da Computação Certificada pela APMG –US em COBIT5 e ITIL
            V3. No âmbito empresarial, desenvolvedora, Analista de sistema,
            Analista de negócio, Gerente de projetos e Consultora de Tecnologia,
            atuando em várias empresas como TV Globo -Living Consultoria.
            Atualmente é professora UVA e IBMEC
          </p>
        </AboutDetails>
      </div>
    </AboutWrapper>
  )
})
