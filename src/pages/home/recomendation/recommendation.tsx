import {ProfileWrapper, RecommendationContent, RecommendationPost, RecommendationWrapper} from './style.ts'
import recommendationProfile1 from '../../../assets/images/recommendation-profile-1.jpg'
import recommendationProfile2 from '../../../assets/images/recommendation-profile-2.jpg'
import { forwardRef } from 'react'

export const Recommendation = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <RecommendationWrapper ref={ref} id={'recomendation'} background={'black'}>
      <div>

        <RecommendationContent>
          <div>
            <p>Olhamos para a lei de maneira diferente</p>
            <h2>
              O que nossos clientes dizem
            </h2>
          </div>
          <RecommendationPost>
            <p>
              "O Escritório Miroel Paulino cuidou de toda a parte de pesquisas jurídicas e documentais. Dr.Miroel é muito
              inteligente, e conduziu o projeto com muita seriedade."
            </p>

            <ProfileWrapper>
              <picture>
                <img src={recommendationProfile1} alt=""/>
              </picture>
              <div>
                <span>Vinicius Leal</span>
                <span>Búzios</span>
              </div>
            </ProfileWrapper>
          </RecommendationPost>
          <RecommendationPost>
            <p>
              "Quero agradecer a todos pelo trabalho que fizeram na minha Empresa. Eu nunca conseguiria fazer isso sozinho. Tudo foi feito de forma tão rápida e profissional!"
            </p>

            <ProfileWrapper>
              <picture>
                <img src={recommendationProfile2} alt=""/>
              </picture>
              <div>
                <span>Tatiana Queiroz</span>
                <span>Cabo Frio</span>
              </div>
            </ProfileWrapper>
          </RecommendationPost>

        </RecommendationContent>

      </div>
    </RecommendationWrapper>
  )
})
