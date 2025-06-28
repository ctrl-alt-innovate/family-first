import React from 'react'
import { Box,
    Card,
    CardContent,
    Typography, Button,

 } from '@mui/material'

 import testimonialsCTA from '../assets/testimonials-cta.jpg'
import theme from '../theme'

const TestimonialsCTA = () => {
  return (
    <Box
    sx={{
        backgroundImage: `url(${testimonialsCTA})`,
        height: 600,
        p: 4,
        py: 10,
        backgroundPosition: {md: '53% center', xs: '75% center'},
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
      <Typography variant='h4' color='black' gutt sx={{ py: 2, fontWeight: 'bold', color: {md: 'black', xs: theme.palette.background.paper}}}>We Value Your Feedback</Typography>
      <Typography variant='body1' color='black' sx={{ color: { xs: theme.palette.background.paper, md: 'black'}}}> 
      Your experiences help us continue to provide the best possible care. If you’d like to share your story, please don’t hesitate to contact us.
      </Typography>
      <Button
        variant="contained"
        color="success"
        sx={{ borderRadius: '999px', px: 4, py: 1, mt: 2 }}
        href="/contact"
      >
       Share Your Story
      </Button>
    </CardContent>
  </Card>



</Box>
  )
}

export default TestimonialsCTA