import React from 'react'
import { Box, Card, CardContent, Typography, Button, useTheme } from '@mui/material'

import ServicesCta from '../assets/services-cta.jpg'

const ServicesCTA = () => {
  const theme = useTheme()
  return (
        <Box
        sx={{
            backgroundImage: `url(${ServicesCta})`,
            height: 600,
            p: 4,
            py: {md: 10, xs: 50 },
            mt: { xs: 0, md: 0},
            backgroundPosition: {md: '53% center', xs: '82% center'},
            backgroundSize: 'cover',
            display: 'flex',
            position: 'relative',
            alignItems: 'center',

            // Pseudo-element for overlay on mobile
            '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0,0,0,0.7)',
            zIndex: 1,
            display: { xs: 'block', md: 'none' }, // Only show on mobile
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
          <Typography variant='h4' sx={{ py: 2, fontWeight: 'bold', color: { md: 'black', xs: theme.palette.background.paper} }} >Our Mission to Individualized Care</Typography>
          <Typography variant='body1' sx={{ color: { xs: theme.palette.background.paper, md: 'black'}}}> 
          We understand that every individual is unique. We take the time to get to know each resident, understand their needs and preferences, and develop a personalized care plan that supports their goals. Our goal is to create a nurturing and supportive environment where individuals with CES Waivers can thrive, build meaningful relationships, and live fulfilling lives.
          </Typography>
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: '999px', px: 4, py: 1, mt: 2 }}
            href="/join"
          >
           Fill Out the Intake Form
          </Button>
        </CardContent>
      </Card>



    </Box>
  )
}

export default ServicesCTA