import { Box } from '@mui/material'
import React from 'react'
import JoinOurFamHero from './JoinOurFamHero'
import ContactBanner from './HomeContactBanner'
import Footer from '../components/Footer'
import TesitomonialsContactBanner from './TestimonialsContactBanner'

const JoinOurFam = () => {
  return (
    <Box>
        <JoinOurFamHero />

        <TesitomonialsContactBanner />
        <Footer />
    </Box>
  )
}

export default JoinOurFam