
import React from 'react'
import {
    Box
 } from '@mui/material'

 import AboutHero from './AboutHero'
 import AboutCTA from './AboutCTA'
 import AboutInfo from './AboutInfo'
import Footer from '../components/Footer'

const About = () => {
  return (
    <Box>   
        <AboutHero />
        <AboutInfo />
        <AboutCTA />
        <Footer />
    </Box>
  )
}

export default About