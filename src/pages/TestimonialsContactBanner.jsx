// src/components/Footer.jsx
import React from 'react';
import { Box, Typography, Container, Grid, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import BannerImage from '../assets/contact-banner.jpg'

const TesitomonialsContactBanner = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundImage: `url(${BannerImage})`,
        backgroundColor: theme.palette.primary.dark,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        color: theme.palette.common.white,
        py: 6,
        px: 2,
        mt: -6
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={4} display="flex" alignItems="center" gap={2}>
            <LocationOnIcon fontSize="large" />
            <Typography variant="body1" align="center" component="a"
              href="https://www.google.com/maps?q=38+Coffman+Hill+Drive+Glenwood+AR+71943"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'inherit', textDecoration: 'none' }}
            >
              38 Coffman Hill Drive <br /> Glenwood AR 71943
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} display="flex" alignItems="center" gap={2}>
            <PhoneIcon fontSize="large" />
            <Typography variant="body1" component="a"
              href="tel:+18708281782"
              sx={{ color: 'inherit', textDecoration: 'none' }}
            >
              (870) 828-1782
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} display="flex" alignItems="center" gap={2}>
            <EmailIcon fontSize="large" />
            <Typography
              component="a"
              href="mailto:hotspringsfamilyfirstcare5@gmail.com"
              noWrap
              sx={{
                fontSize: {
                  xs: '.9rem',
                  sm: '1rem',
                },
                fontWeight: 400,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              hotspringsfamilyfirstcare5@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TesitomonialsContactBanner;
