import { useLocation } from 'react-router-dom'
import {Hero} from "./hero/hero.tsx";
import {useEffect, useRef} from "react";
import {About} from "./about/about.tsx";

export function Home() {
  const { hash } = useLocation()
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  // const techInfoRef = useRef<HTMLDivElement>(null)
  // const servicesRef = useRef<HTMLDivElement>(null)
  // const servicesDetailsRef = useRef<HTMLDivElement>(null)
  // const courseRef = useRef<HTMLDivElement>(null)
  // const teamRef = useRef<HTMLDivElement>(null)

  const refMap = {
    '#home': heroRef,
    '#about': aboutRef,
    // '#techInfo': techInfoRef,
    // '#services': servicesRef,
    // '#serviceDetails': servicesDetailsRef,
    // '#course': courseRef,
    // '#team': teamRef,
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
      {/*<Services ref={servicesRef} />*/}
      {/*<TechInfo ref={techInfoRef} />*/}
      {/*<ServicesDetails ref={servicesDetailsRef} />*/}
      {/*<Course ref={courseRef} />*/}
      {/*<Team ref={teamRef} />*/}
    </div>
  )
}
