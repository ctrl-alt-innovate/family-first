import React from 'react'

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Stack,
  MuiLink,
  Container,
  useTheme,
  Link,
} from '@mui/material';

import HeroImage from '../assets/hero-image.png'
import HeroImage2 from '../assets/hero-image-2.jpg'

const HeroSection = () => {
    const theme = useTheme();
  
    return (
        <Box>


      {/* HERO SECTION */}
      <Box
       sx={{
    position: 'relative',
    backgroundImage: `linear-gradient(rgba(101, 169, 142, 0.85), rgba(101, 169, 142, 0.3)), url(${HeroImage})`,
    backgroundSize: { xs: 'contain', md: 'cover' },  // contain on mobile, cover on desktop
    backgroundRepeat: 'no-repeat',
    backgroundPosition: { xs: 'center 110%', md: 'center center' },
    width: '100%',
    minHeight: { xs: 600, md: 900 },
    pb: 16,
    pt: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: theme.palette.common.white,
  }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h1"
            fontWeight="bold"
            gutterBottom
            align="center"
            color="common.black"
          >
            Welcome to Family First Care:
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="bold"
            align="center"
            color="common.black"
            gutterBottom
          >
            Where Family and Care Meet in Glenwood, AR
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="common.black"
            sx={{ mt: 3, mb: 8 }}
          >
            At Family First Care, we believe in more than just providing care; we build families.
            Born from our own struggle to find reliable support for loved ones with CES Waivers,
            Family First Care is a heartfelt initiative designed to offer a true home for individuals
            seeking supportive living in Glenwood, Arkansas and surrounding areas.
          </Typography>
          <Box display="flex" justifyContent="center" margin={8}>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                px: 3,
                py: 1.5,
                borderRadius: '999px',
                fontWeight: 'bold',
                color: theme.palette.secondary.contrastText,
              }}
            >
              Join Our Family
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default HeroSection