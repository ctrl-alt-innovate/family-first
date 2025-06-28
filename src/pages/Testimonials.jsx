import { Box } from '@mui/material'
import React from 'react'
import TestimonialsHero from './TestimonialsHero'
import ContactBanner from './HomeContactBanner'
import TesitomonialsContactBanner from './TestimonialsContactBanner'
import TestimonialsCTA from './TestimonialsCTA'
import Footer from '../components/Footer'

const TestimonialsPage = () => {
  return (
    <Box>
        <TestimonialsHero />
        <TesitomonialsContactBanner />
        <TestimonialsCTA />
        <Footer />
    </Box>
  )
}

export default TestimonialsPage