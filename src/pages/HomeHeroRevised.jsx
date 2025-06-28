import React from 'react';
import { Box, useTheme, useMediaQuery, Typography, Button } from '@mui/material';
import HomeHero from '../assets/home-hero.png';
import HomeHeroBlank from '../assets/hero-image.png';

const HomeHeroRevised = () => {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = false;

  return (
    <Box>
      {!isMobile && (
        <Box sx={{ position: 'relative' }}>
          {/* Background image box */}
          <Box
            sx={{
              backgroundImage: `url(${HomeHeroBlank})`,
              width: {
                xs: '120%',
                md: '100%',
              },
              transform: {
                xs: 'translateX(-15%)',
                md: 'none',
              },
              display: 'block',
              position: 'relative',
              zIndex: 2,
              height: { md: 1500, xs: 400 },
              backgroundPosition: '25% center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              py: 36,
            }}
          />
            <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '85%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // translucent black
      zIndex: 2,
      display: { xs: 'block', md: 'none' }, // only on mobile
    }}
  />

          {/* Text overlay */}
          <Box
  sx={{
    position: 'absolute',
    top: { xs: '40%', md: '20%' },
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '95%', md: '80%' }, // wider to allow inner control
    padding: { xs: 2, md: 0 },
    zIndex: 3,
    color: 'white',
    textAlign: 'center',
  }}
>
  {/* Heading — widest */}
  <Typography
    variant="h3"
    sx={{
      fontSize: { xs: '1.55rem', md: '3rem' },
      fontWeight: 'bold',
      width: { xs: '100%', md: '80%' }, // wider
      margin: '0 auto',
      
      
    }}
  >
    Welcome to Family First Care:
  </Typography>

  {/* Subheading — medium width */}
  <Typography
    variant="h5"
    sx={{
      fontSize: { xs: '1.25rem', md: '2rem' },
      mt: 1,
      width: { xs: '100%', md: '70%' },
      margin: '0 auto',
      fontWeight: 'bold',
      p: 2,
    }}
  >
    Where Family and Care Meet in The Natural State
  </Typography>

  {/* Paragraph — narrowest */}
  <Typography
    variant="body1"
    sx={{
      fontSize: { xs: '0.8rem', md: '1.2rem' },
      mt: 2,
      width: { xs: '60%', md: '50%' }, // narrowest
      margin: '0 auto',
    }}
  >
    At Family First Care, we believe in more than just providing care; we build families.
    Born from our own struggle to find reliable support for loved ones with CES Waivers,
    Family First Care is a heartfelt initiative designed to offer a true home for individuals
    seeking supportive living throughout Arkansas
  </Typography>
  <Button
              variant="contained"
             
              sx={{
                bgcolor: theme.palette.secondary.dark,
                px: 3,
                py: 1,
                mt: 1,
                borderRadius: '999px',
                fontWeight: 'bold',
              }}
              href="/join"
            >
              Join Our Family
            </Button>



</Box>

        </Box>
      )}
    </Box>
  );
};

export default HomeHeroRevised;
