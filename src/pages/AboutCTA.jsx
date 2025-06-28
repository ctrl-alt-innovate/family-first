
import React from 'react'
import { Box, Card, CardContent, Typography, useTheme, Button } from '@mui/material'

import aboutCTA from '../assets/cta-about.png'

const AboutCTA = () => {
  const theme = useTheme();
  return (
<Box
  sx={{
    backgroundImage: `url(${aboutCTA})`,
    height: 600,
    p: 4,
    py: 10,
    backgroundPosition: '85% center',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',

    // Overlay using pseudo-element
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      bgcolor: {xs: 'rgba(0, 0, 0, 0.55)', md: 'transparent'}, // Adjust opacity as needed
      zIndex: 1,
    },
  }}
>

      <Card sx={{
        background: 'transparent',
        borderRadius: 0,
        boxShadow: 0,
        maxWidth: 400,
        display: 'flex',
        zIndex: 2,
  
      }}>
        <CardContent>
          <Typography variant='h4' color='background.paper' sx={{ py: 2}}> Our Committment</Typography>
          <Typography variant='body1' color='background.paper'> 
          At Family First Care, we are committed to providing a safe, loving, and supportive home for individuals with CES Waivers. We are dedicated to building strong relationships, fostering independence, and creating a sense of belonging. We believe that everyone deserves to live a full and meaningful life, and we are honored to be a part of that journey. We are more than just a care provider; we are a family.
          </Typography>
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: '999px', px: 4, py: 1, mt: 2 }}
            href="/join"
          >
            Join Our Family
          </Button>
        </CardContent>
      </Card>



    </Box>
  )
}

export default AboutCTA