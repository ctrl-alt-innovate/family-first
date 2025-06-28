import { Box, Typography } from '@mui/material'
import React from 'react'

import serviceHeroTop from '../assets/services-hero-top.png'
import serviceHeroBottom from '../assets/services-hero-bottom.jpg'

const ServicesHero = () => {
  return (
    <Box>
      {/* Top image - regular block element */}
      <Box
        component="img"
        src={serviceHeroTop}
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

      {/* Bottom image section with text */}
      <Box
        sx={{
          width: '100%',
          height: { xs: 600, md: 1000 },
          position: 'relative',
          backgroundImage: `url(${serviceHeroBottom})`,
          backgroundSize: 'cover',
          backgroundPosition: '80% center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: {xs: 'center', md: 'left'},
          mt: { md: -30, xs: -10 },
          px: 2,
        }}
      >
        {/* Overlay for mobile transparency */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: {
              xs: 'rgba(255, 255, 255, 0.7)', // translucent white overlay on mobile
              md: 'transparent',              // no overlay on desktop
            },
            zIndex: 1,
          }}
        />

        {/* Centered text content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            maxWidth: { xs: '90%', md: '50%' },
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            color="black"
            fontWeight="bold"
            sx={{ mb: 2 }}
          >
            Comprehensive and Compassionate Support at Family First Care
          </Typography>
          <Typography variant="subtitle1" color="black">
            At Family First Care, we provide a unique and family-centered approach to supportive living for individuals with CES Waivers in Glenwood, Arkansas. Our services are designed to foster independence, build community, and create a true sense of belonging.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ServicesHero
