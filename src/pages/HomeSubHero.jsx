// src/pages/Home.jsx
import React from 'react';
import {
  Button,
  Typography,
  Box,
  Container,
  useTheme,
  Grid,
  Card,
  CardContent,
} from '@mui/material';

import GroupsIcon from '@mui/icons-material/Groups';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SupportIcon from '@mui/icons-material/Support';

import InfoImage from '../assets/hero-image-2.jpg';

const SubHero = () => {
    const theme = useTheme();
    return (
    <Box>
              {/* Background image banner */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${InfoImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          color: 'common.white',
          width: '100%',
          minHeight: { xs: 600, md: 900 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          px: { xs: 2, md: 8 },
          py: 10,
          mt: {lg: -40, md: -50, xs: -20},
        }}
      >
        <Box sx={{ maxWidth: 500, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            More Than Caregivers, We're Family.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Unlike traditional caregiver services, we offer a unique at-home experience. Our residents
            don’t just receive care; they become part of our family, living with us 24/7. They’re not
            clients; they’re cherished members of our household.
          </Typography>
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: '999px', fontWeight: 'bold' }}
            href='/about'
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SubHero