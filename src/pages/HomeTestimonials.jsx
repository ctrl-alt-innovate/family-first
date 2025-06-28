// src/components/TestimonialsSection.jsx
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  Avatar,
  Button,
  useTheme,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import agnes from '../assets/agnes.png'
import jason from '../assets/jason.png'
import sam from '../assets/sam.png'

const testimonials = [
  {
    name: 'Agnes S.',
    quote:
      'Family First Care feels like a true home. They treat my sister like their own family.',
    image: agnes,
  },
  {
    name: 'Jason T.',
    quote:
      'I’ve learned so much and feel more confident since joining Family First Care. It’s a great place to live.',
    image: jason ,
  },
  {
    name: 'Sam G.',
    quote:
      'The personalized care and community inclusion at Family First Care are exceptional.',
    image: sam,
  },
];

const TestimonialsSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 4,
        px: 2,
        backgroundColor: 'transparent',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Hear From Our Family
      </Typography>
      <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}>
        At Family First Care, we believe the greatest testament to our work comes from the families
        and individuals we serve. Here’s what some of them have to say:
      </Typography>

        <Box
  sx={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 4,
    maxWidth: '1200px',
    mx: 'auto',
  }}
>
  {testimonials.map((item, i) => (
    <Box
      key={i}
      sx={{
        flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 32px)', md: '1 1 calc(33.333% - 32px)' },
        display: 'flex',
      }}
    >
            <Card
  sx={{
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    p: 4,
    pt: 8, // Extra top padding to make room for quote icon
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    overflow: 'visible',
  }}
  elevation={3}
>
  <FormatQuoteIcon
    sx={{
      position: 'absolute',
      top: -40,
      left: '50%',
      transform: 'translateX(-50%)',
      color: theme.palette.secondary.dark,
      fontSize: 100, // or 100 if you want it bigger
    }}
  />


        <Typography variant="body1" sx={{ mb: 1, mt: 1 }}>
          {item.quote}
        </Typography>
        <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
          {item.name}
        </Typography>
        <Avatar
          src={item.image}
          alt={item.name}
          sx={{ width: 60, height: 60, mt: 2 }}
        />
      </Card>
    </Box>
  ))}
</Box>


      <Box mt={6}>
        <Button
          variant="contained"
          color="success"
          sx={{ borderRadius: '999px', fontWeight: 'bold', px: 4 }}
          href='/testimonials'
        >
          View More
        </Button>
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
