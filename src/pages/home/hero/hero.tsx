import { HeroContent, HeroWrapper, Watermark } from './style.ts'
import logoAlfa from '../../../assets/alfa_omega_logo_escrito.svg'
import watermarkLogo from '../../../assets/watermark.svg'
import { forwardRef } from 'react'

export const Hero = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <HeroWrapper ref={ref} id={'home'} background={'black'}>
      <div>
        <HeroContent>
          <picture>
            <img src={logoAlfa} alt="" />
          </picture>
          <p>
            Especializada em serviços de tráfego pago, dedicando estratégias de
            marketing digital direcionadas para aumentar a visibilidade e o
            alcance do seu negócio na internet.
          </p>
        </HeroContent>
        <Watermark>
          <img src={watermarkLogo} alt="" />
        </Watermark>
      </div>
    </HeroWrapper>
  )
})
