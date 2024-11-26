import { useLocation } from 'react-router-dom'
import {Hero} from "./hero/hero.tsx";
import {useEffect, useRef} from "react";
import {About} from "./about/about.tsx";
import {ServicesDetails} from "./servicesDetails/services-details.tsx";
import {Contact} from "./contact/contact.tsx";
import {Recommendation} from "./recomendation/recommendation.tsx";
import {Form} from "./form/form.tsx";
import {Partners} from "./partners/partners.tsx";

export function Home() {
  const { hash } = useLocation()
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesDetailsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const recommendationRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  const refMap = {
    '#home': heroRef,
    '#about': aboutRef,
    '#serviceDetails': servicesDetailsRef,
    '#Recomendation': recommendationRef,
    '#contact': contactRef,
    '#form': formRef,
  }

  useEffect(() => {
    const element = refMap[hash as keyof typeof refMap]
    if (hash && element && element.current) {
      element.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  return (
    <div>
      <Hero ref={heroRef} />
      <About ref={aboutRef} />
      <ServicesDetails ref={servicesDetailsRef} />
      <Partners/>
      <Contact ref={contactRef} />
      <Recommendation ref={recommendationRef} />
      <Form />
    </div>
  )
}
