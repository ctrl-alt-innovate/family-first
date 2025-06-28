import React from 'react'
import { Box, useTheme, Typography } from '@mui/material'
import joinHeroTop from '../assets/join-hero-top.png'
import testimonialHeroBottom from '../assets/testimonials-hero-bottom.png'
import IntakeForm from '../components/IntakeForm'

const JoinOurFamHero = () => {
  const theme = useTheme();
    return (
    <Box>

        <Box
        component="img"
        src={joinHeroTop}
        sx={{
            width: {
                xs: '150%',
                md: '100%',
            },
            transform: {
                xs: 'translateX(-15%)',
                md: 'none',
            },
            display: 'block',
            position: 'relative',
            zIndex: 2,
        }}
        />
              <Box
        sx={{
          mt: -40,
          pt: 30,
          backgroundImage: `url(${testimonialHeroBottom})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          minHeight: 1200,
          px: 2,
          pb: 8,
        }}
      >

        <IntakeForm />


      </Box>
        
         
    
    </Box>

  )
}

export default JoinOurFamHero