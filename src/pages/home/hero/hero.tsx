import {HeroContent, HeroFooter, HeroWrapper, } from './style.ts'
import { forwardRef } from 'react'
import {MapPin} from "lucide-react";
import {WhatsappIcon} from "../../../assets/whatsappIcon.tsx";

export const Hero = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <HeroWrapper ref={ref} id={'home'}>
      <div>
        <HeroContent>
          <p>
            Precisa de Soluções Jurídicas para sua Empresa?
          </p>
          <h1>Nós temos a solução!</h1>
        </HeroContent>
        <HeroFooter>
          <div>
            <div>
              <MapPin />
              <p>Localização</p>
            </div>
            <h3>Endereço: Rua Rosalina Terra, 429 casa 3 Portinho - Cabo Frio RJ</h3>
          </div>

          <div>
            <div>
              <WhatsappIcon/>
              <p>Whatsapp</p>
            </div>
            <h3>22 99988-1123</h3>
          </div>

        </HeroFooter>
        {/*<Watermark>*/}
        {/*  <img src={heroBackground} alt="" />*/}
        {/*</Watermark>*/}
      </div>
    </HeroWrapper>
  )
})
