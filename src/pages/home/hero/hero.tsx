import {HeroContent, HeroFooter, HeroWrapper, Watermark} from './style.ts'
import { forwardRef } from 'react'
import heroBackground from '../../../assets/images/hero-background.jpg'

export const Hero = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <HeroWrapper ref={ref} id={'home'} background={'black'}>
      <div>
        <HeroContent>
          <p>
            Precisa de Soluções Jurídicas para sua Empresa?
          </p>
          <h1>Nós temos a solução!</h1>
        </HeroContent>
        <HeroFooter>
          <div>
            <p>Localização</p>
            <h3>Endereço: Rua Rosalina Terra, 429 casa 3 Portinho - Cabo Frio RJ</h3>
          </div>

          <div>
            <p>Whatsapp</p>
            <h3>22 99988-1123</h3>
          </div>

        </HeroFooter>
        <Watermark>
          <img src={heroBackground} alt="" />
        </Watermark>
      </div>
    </HeroWrapper>
  )
})
