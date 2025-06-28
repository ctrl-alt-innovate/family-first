import React from 'react';
import { Box, Typography, Button, Grid, useTheme } from '@mui/material';
import CTAImage from '../assets/call-to-action.jpg'; // Desktop image
import CTAImageMobile from '../assets/cta-mobile.png'; // Mobile-specific image

const CallToActionSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 10,
        px: 2,
        backgroundColor: '#a88f6c',
        backgroundImage: {
          xs: 'none', // No background on mobile
          md: `linear-gradient(to right, rgba(168,143,108,0.95) 50%, transparent 50%), url(${CTAImage})`,
        },
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxWidth: 500,
              mx: { xs: 'auto', md: 0 },
              px: { xs: 2, md: 6 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom color="common.white">
              Ready to Get Started?
            </Typography>
            <Typography
              variant="body1"
              color="common.white"
              sx={{ mb: 4, fontWeight: 500 }}
            >
              To begin the process of joining the Family First Care family, please complete our intake form.
              This will allow us to better understand your needs and determine the best possible fit
              for you or your loved one.
            </Typography>
            <Button
              variant="contained"
              color="success"
              size="large"
              sx={{
                borderRadius: '999px',
                fontWeight: 'bold',
                px: 4,
              }}
              href='/join'
            >
              Get Started
            </Button>
          </Box>
        </Grid>

        {/* Only show this image on mobile */}
        <Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
          <Box
            component="img"
            src={CTAImageMobile}
            alt="Smiling resident"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 0,
              mt: 4,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CallToActionSection;
