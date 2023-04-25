import React from 'react'
import AboutHero from '~/components/aboutHero'
import Footer from '~/components/footer'
import { Header } from '~/components/header'
import Logos from '~/components/logos'
import TeamsCore from '~/components/teamsCore'

const About = () => {
  return (
    <>
        <Header/>
        <AboutHero/>
        <Logos/>
        <TeamsCore/>
        <Footer/>
    </>
  )
}

export default About