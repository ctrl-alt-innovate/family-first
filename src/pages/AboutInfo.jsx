import React from 'react';
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Container,
  Grid,
} from '@mui/material';

import aboutHeroImg from '../assets/about-info.jpg'; // desktop background
import foundingMobileImg from '../assets/about-left.jpg'; // mobile founding image
import missionMobileImg from '../assets/about-right.jpg';   // mobile mission image
import aboutInfoBackground from '../assets/about-info-background.png'


import GroupsIcon from '@mui/icons-material/Groups';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SupportIcon from '@mui/icons-material/Support';


import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import BannerImage from '../assets/contact-banner.jpg'

const features = [
    {
      icon: <GroupsIcon color="primary" />,
      title: 'Family-Centered Approach',
      desc: 'We don’t just provide care; we integrate residents into our families. They participate in daily life, share experiences, and build meaningful relationships.',
    },
    {
      icon: <PersonSearchIcon color="primary" />,
      title: 'Personalized Matching',
      desc: 'We understand that every individual is unique. We take the time to carefully match residents with families who share similar interests and lifestyles, ensuring a comfortable and harmonious living environment.',
    },
    {
      icon: <PsychologyAltIcon color="primary" />,
      title: 'Empowering Independence',
      desc: 'We believe in fostering independence and growth. We provide guidance and support to help residents develop essential life skills and participate fully in their communities.',
    },
    {
      icon: <Diversity3Icon color="primary" />,
      title: 'Community Integration',
      desc: 'We are committed to breaking down barriers and promoting inclusion. We strive to ensure that our residents are seen as valued members of the Glenwood community.',
    },
    {
      icon: <SettingsAccessibilityIcon color="primary" />,
      title: 'A Need-Based Approach',
      desc: 'We understand not everyone thrives in a large group setting. We are prepared to alter our care to meet the needs of those who need a less social environment.',
    },
    {
      icon: <SupportIcon color="primary" />,
      title: 'Five Years of Experience',
      desc: 'We have five years of experience in providing quality host home services to individuals with CES Waivers.',
    },
  ];
  


const AboutInfo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (isMobile) {
    // MOBILE VIEW: alternate image then text vertically
    return (
      <Box sx={{ bgcolor: '#f5f5f5', px: 2, py: 4 }}>
        {/* Founding Image */}
        <Box
          component="img"
          src={foundingMobileImg}
          alt="Founding Story"
          sx={{ width: '100%', borderRadius: 2, mb: 2, objectFit: 'cover' }}
        />

        {/* Founding Text */}
        <Box sx={{ color: 'black', mb: 6, }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Our Founding Story:
          </Typography>
          <Typography variant="body1" mb={3}>
            Like many families, we faced the frustration of searching for dependable caregivers. Traditional caregiving often fell short. We created Family First Care to offer something beyond basic care—a true sense of belonging.
          </Typography>
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: '999px', px: 4 }}
            href='/contact'
          >
            Contact Us
          </Button>
        </Box>

        {/* Mission Image */}
        <Box
          component="img"
          src={missionMobileImg}
          alt="Mission"
          sx={{ width: '100%', borderRadius: 2, mb: 2, objectFit: 'cover' }}
        />

        {/* Mission Text */}
        <Box sx={{ color: 'black'  }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Our Mission:
          </Typography>
          <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
            Building Families, Not Just Providing Care
          </Typography>
          <Typography variant="body1" mb={3}>
            Our mission is to create a nurturing environment where CES Waiver recipients feel connected and safe. Our host home model is more than housing—it’s a place to belong.
          </Typography>
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: '999px', px: 4, }}
            href='/services'
          >
            Learn More
          </Button>
        </Box>
        {/* Features Section (Mobile Only) */}
<Box
  sx={{
    mt: 6,
    background: 'linear-gradient(to bottom right, #ffe0b2, #f8bbd0)',
    borderRadius: 2,
    p: 3,
  }}
>
  <Grid container spacing={4}>
    {features.map(({ icon, title, desc }, index) => (
      <Grid item xs={12} sm={6} key={index}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Box sx={{ mb: 1, fontSize: 40, color: 'primary.main' }}>{icon}</Box>
          <Typography variant="h6" color="black" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="black">
            {desc}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
</Box>

        

      </Box>
    );
  }

  // DESKTOP VIEW: single background image with side-by-side text
  return (
    <Box sx={{ bgcolor: '#f5f5f5' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          height: 600,
          backgroundImage: `url(${aboutHeroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          px: 8,
          pt: 4,
          color: 'black',
        }}
      >
        {/* Left text: Mission */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            px: 4,
            pt: 2,
          }}
        >
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Our Mission:
          </Typography>
          <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
            Building Families, Not Just Providing Care
          </Typography>
          <Typography variant="body1" mb={3} maxWidth={400}>
            Our mission is to create a nurturing environment where CES Waiver recipients feel connected and safe. Our host home model is more than housing—it’s a place to belong.
          </Typography>
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: '999px', px: 4 }}
            href='/services'
          >
            Learn More
          </Button>
        </Box>

        {/* Right text: Founding Story */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            px: 4,
            pt: 2,
          }}
        >
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Our Founding Story:
          </Typography>
          <Typography variant="body1" mb={3} maxWidth={400}>
            Like many families, we faced the frustration of searching for dependable caregivers. Traditional caregiving often fell short. We created Family First Care to offer something beyond basic care—a true sense of belonging.
          </Typography>
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: '999px', px: 4 }}
            href='/contact'
          >
            Contact Us
          </Button>
        </Box>
    
      </Box>
      <Box sx={{
        backgroundImage: `url(${aboutInfoBackground})`,
        height: 600,
        py: 10,
        zIndex: 1,
        mt: -10,
        display: 'flex',
        alignItems: 'flex-end',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

      }}>
                <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center" alignItems="center" color="white" >
                <Grid item xs={12} sm={4} display="flex" alignItems="center" gap={2}>
                    <LocationOnIcon fontSize="large" />
                    <Typography variant="body1">
                    38 Coffman’s Hill Drive Glenwood AR<br />71943
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} display="flex" alignItems="center" gap={2}>
                    <PhoneIcon fontSize="large" />
                    <Typography variant="body1">
                    (870) 828-1782
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} display="flex" alignItems="center" gap={2}>
                    <EmailIcon fontSize="large" />
                    <Typography variant="body1" noWrap>
                    hotspringsfamilyfirstcare5@gmail.com
                    </Typography>
                </Grid>
                </Grid>
            </Container>
        </Box>
        <Box
  sx={{
    position: 'absolute',
    background: 'linear-gradient(to bottom right, #ffe0b2, #f8bbd0)',
    display: { xs: 'none', md: 'block'},
    height: 700,
    width: 1000,
    left: '50%',
    zIndex: 2,
    borderRadius: 2,
    boxShadow: 4,
    transform: 'translateX(-50%)',
    top: 1700,
    px: 4,
    py: 4,
  }}
>
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)', // 2 per row
      gridTemplateRows: 'repeat(3, 1fr)',    // 3 rows
      gap: 4,
      height: '100%',
    }}
  >
    {features.map(({ icon, title, desc }, index) => (
      <Box
        key={index}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          p: 1,
          bgcolor: 'transparent',
        }}
      >
        <Box sx={{ mb: 2, fontSize: 40, color: 'primary.main' }}>{icon}</Box>
        <Typography variant="h5" color='black' gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="black">
          {desc}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>

    </Box>
  );
};

export default AboutInfo;
