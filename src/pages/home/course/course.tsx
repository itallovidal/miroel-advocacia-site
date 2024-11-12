import { CourseWrapper } from './style.ts'
import { Button } from '../../../styles'
import { forwardRef } from 'react'

export const Course = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <CourseWrapper ref={ref} id={'course'} background={'black'}>
      <div>
        <h1>Curso de Tráfego Pago</h1>
        <h2>
          Adquira conhecimento abrangente sobre Estratégias de Tráfego Pago de
          maneira direta e eficaz, desde o nível inicial até o avançado.{' '}
        </h2>

        <p>
          Este curso oferece um guia passo a passo minucioso, capacitando-o a
          dominar o tráfego para diversos propósitos: negócios locais, marketing
          de afiliados, E-commerce, etc..{' '}
        </p>
        <p>
          Seja para aumentar as conversões ou captar leads, o curso abrangerá
          todos os fundamentos essenciais para começar ou ampliar suas vendas
          online. A abordagem é simplificada, didática e completamente objetiva,
          proporcionando uma compreensão clara e prática das estratégias de
          tráfego pago.
        </p>

        <Button variantType={'light'}>Entrar na Turma</Button>
      </div>
    </CourseWrapper>
  )
})
