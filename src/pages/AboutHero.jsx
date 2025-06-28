import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import WaveOverlay from '../assets/about-hero-top.png';
import heroBottom from '../assets/about-hero-bottom.jpg';

const AboutHero = () => {
  const theme = useTheme();

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', bgcolor: 'primary.dark' }}>
      {/* Wave Overlay Image */}
      <Box
        component="img"
        src={WaveOverlay}
        alt="wave overlay"
        sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: {
            xs: '150%', // 👈 increase size on mobile
            md: '100%',  // normal size on desktop
            },
            height: 'auto',
            zIndex: 2,
            pointerEvents: 'none',
            transform: {
            xs: 'translateX(-15%)', // 👈 center image after enlargement
            md: 'none',
            },
        }}
/>


      {/* Bottom Section with responsive background image and gradient */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: 2, md: 8 },
          pt: { xs: 40, md: 60 },
          pb: { xs: 6, md: 10 },
          mt: { xs: -10, md: 40 },
          zIndex: 1,
          color: 'common.white',
          backgroundImage: {
            xs: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${heroBottom})`,
            md: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url(${heroBottom})`,
          },
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Left Text */}
        <Box sx={{ flex: 0.5, zIndex: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
            Our Story, Our Mission, and Five Years of Dedication
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Family First Care isn’t just a business; it’s a deeply personal endeavor born from the heart of our own family. We understand firsthand the challenges of finding compassionate and reliable support for loved ones with CES Waivers.
          </Typography>
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: '999px', px: 4, py: 1 }}
            href="/testimonials"
          >
            Hear From Our Family
          </Button>
        </Box>

        {/* Right Image - optional: re-add later if needed */}
      </Box>
    </Box>
  );
};

export default AboutHero;
