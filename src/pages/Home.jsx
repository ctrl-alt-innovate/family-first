// src/pages/Home.jsx
import React from 'react';
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
import HeroSection from './HomeHero';
import InfoSection from './HomeInfo';
import TestimonialsSection from './HomeTestimonials';
import ContactBanner from './HomeContactBanner';
import SubHero from './HomeSubHero';
import CallToActionSection from './HomeCTA';
import Footer from '../components/Footer';

import Background from '../assets/background.jpg'
import hero from '../assets/hero-image.png'
import HomeHeroRevised from './HomeHeroRevised';


const navItems = ['Home', 'About Us', 'Services', 'Testimonials', 'Join Our Family'];

const Home = () => {
  const theme = useTheme();

  return (
    <Box>
        <HomeHeroRevised />
        <Box sx={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url(${Background})`,
            backgroundSize: { xs: 'cover', md:'cover'},
            backgroundPosition: { xs: 'center center', md: 'center center' },
            backgroundRepeat: 'no-repeat',
            width: '100%',
            minHeight: '100vh', // or 'auto' if it's not full screen
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
        
    }
        }>
            
            <SubHero />
            <InfoSection />
           
         
            
        </Box> 
    
        <TestimonialsSection />
        <ContactBanner  />
        <CallToActionSection />
        <Footer />
    </Box>

  );
};

export default Home;
