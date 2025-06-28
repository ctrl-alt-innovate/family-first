import React from 'react';
import { Box, Typography, useTheme, Container } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import contactHero from '../assets/contact-hero.png';
import testimonialHeroBottom from '../assets/testimonials-hero-bottom.png';

const ContactHero = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Top image */}
      <Box
        component="img"
        src={contactHero}
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

      {/* Bottom background with contact box */}
      <Box
        sx={{
          mt: -30,
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
        <Box
          sx={{
            backgroundColor: theme.palette.secondary.light,
            py: 6,
            px: { xs: 4, md: 8 },
            maxWidth: 1000,
            height: 'auto',
            borderRadius: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: { md: '80%', xs: '100%' },
          }}
        >
          <Typography variant="h4" color="black" fontWeight="bold" gutterBottom>
            Family First Care
          </Typography>

          {/* Contact Info Section */}
          <Container maxWidth="sm">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                gap: 4,
                mt: 4,
              }}
            >
              <Box display="flex" alignItems="center" gap={2}>
                <LocationOnIcon fontSize="large" />
                <Typography variant="body1" align="center">
                  38 Coffman’s Hill Drive<br />
                  Glenwood AR 71943
                </Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={2}>
                <PhoneIcon fontSize="large" />
                <Typography variant="body1" align="center">
                  (870) 828-1782
                </Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={2}>
                <EmailIcon fontSize="large" />
                <Typography variant="body1" align="center" noWrap>
                  hotspringsfamilyfirstcare5@gmail.com
                </Typography>
              </Box>
            </Box>
          </Container>

            <Container maxWidth="sm">
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      mt: 4,
    }}
  >
    {/* Contact info (as before) */}
    {/* ... */}

    {/* Embedded Google Map */}
    <Box sx={{ width: '100%', height: '100%', mt: 4, border: 0, }}>
    
    <Box sx={{ width: '100%', height: { xs: 300, md: 400 }, mt: 4 }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6590.3356697214585!2d-93.5742341!3d34.3207449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86334fd307ed58d9%3A0x5263b8d8280f9f6c!2s38%20Coffman%20Hill%20Dr%2C%20Glenwood%2C%20AR%2071943!5e0!3m2!1sen!2sus!4v1751067580984!5m2!1sen!2sus"
    style={{ width: '100%', height: '100%', border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Map"
  />
</Box>
    </Box>
  </Box>
</Container>



        </Box>
      </Box>
    </Box>
  );
};

export default ContactHero;
