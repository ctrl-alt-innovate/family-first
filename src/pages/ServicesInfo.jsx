
import React from 'react'

import { Box, Grid, useTheme, Typography, Button } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import InfoBackground from '../assets/about-info-background.png'

const services = [
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40, color: '#00897B' }} />,
      title: '24/7 Host Home Living',
      points: [
        'We offer a welcoming and supportive home environment where residents live with their families 24/7.',
        'Residents have their own private rooms, providing personal space and privacy.',
      ],
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: '#00897B' }} />,
      title: 'Family Integration and Community Inclusion',
      points: [
        'Residents become active members of our families, participating in daily life, including meals, outings, and celebrations.',
        'We facilitate community involvement, encouraging participation in events, activities, and social gatherings.',
        'We break down social barriers to promote inclusion.',
      ],
    },
    {
      icon: <HealthAndSafetyIcon sx={{ fontSize: 40, color: '#00897B' }} />,
      title: 'CES Waiver Support',
      points: [
        'We have experience with the CES Waiver program.',
        'We maintain communication with case managers and professionals to ensure coordinated care.',
      ],
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#00897B' }} />,
      title: 'Personalized Support and Skill Development',
      points: [
        'We provide individualized support based on each resident’s needs.',
        'We focus on life skills like meal prep, hygiene, and household management.',
        'We guide social and interpersonal skill development.',
        'We adjust care based on social preference and needs.',
      ],
    },
    {
      icon: <Diversity1Icon sx={{ fontSize: 40, color: '#00897B' }} />,
      title: 'Recreational and Social Activities',
      points: [
        'We organize a variety of outings, hobbies, and events.',
        'We support personal growth through interest exploration.',
        'We help plan vacations with families.',
      ],
    },
    {
      icon: <DirectionsBusIcon sx={{ fontSize: 40, color: '#00897B' }} />,
      title: 'Transportation and Assistance',
      points: [
        'We provide transportation to appointments and events.',
        'We assist with errands, shopping, and other tasks.',
      ],
    },
  ];
  

const ServicesInfo = () => {
  const theme = useTheme();
    return (
    <Box sx={{
        backgroundImage: `url(${InfoBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: { xs: 2500, md: 'auto' },  // 👈 increase mobile height
        mt: { md: -20, xs: -60 },

    }}>
        <Box sx={{
           position: 'relative',
           top: {md: -100, xs: 400}, // Laps upward over the Hero
           zIndex: 3,
           px: 4,
           py: 6,
           bgcolor: theme.palette.secondary.light,
           boxShadow: 3,
           borderRadius: 2,
           width: '80%',
           height: 'auto',
           margin: '0 auto',
        
    

        }}>
   
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Our Core Services
      </Typography>
      <Grid container spacing={4} mt={4} sx={{ maxWidth: 900, mx: 'auto' }}>
        {services.map((service, index) => (
                <Grid item xs={12} md={6} key={index} display="flex" >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    maxWidth: 400,        // ✅ Set max width
                    mx: 'auto',            // ✅ Center inside grid column
                  }}
                >
                  {service.icon}
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      {service.title}
                    </Typography>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                      {service.points.map((point, i) => (
                        <li key={i}>
                          <Typography variant="body2">{point}</Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                </Box>
              </Grid>
              
        ))}
      </Grid>
            <Box display="flex" justifyContent="center" mt={6}>
                <Button variant="contained" href='/about' color="success" size="large" sx={{ borderRadius: '999px', px: 4 }}>
                Learn What We Do
                </Button>
            </Box>
    
        </Box>
    </Box>
  )
}

export default ServicesInfo