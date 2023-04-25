import React from 'react'
import AboutHero from '~/components/aboutHero'
import Footer from '~/components/footer'
import { Header } from '~/components/header'
import Logos from '~/components/logos'

const About = () => {
  return (
    <>
        <Header/>
        <AboutHero/>
        <Logos/>
        <Footer/>
    </>
  )
}

export default About