import { Box } from '@mui/material'
import React from 'react'

import ServicesHero from './ServicesHero'
import ServicesInfo from './ServicesInfo'
import ServicesCTA from './ServicesCTA'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <Box>
        <ServicesHero />
        <ServicesInfo />
        <ServicesCTA />
        <Footer />
    </Box>
  )
}

export default Services