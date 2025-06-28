import React from 'react';
import {
  Button,
  Typography,
  Box,
  Container,
  useTheme,
  Card,
  CardContent,
} from '@mui/material';

import GroupsIcon from '@mui/icons-material/Groups';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SupportIcon from '@mui/icons-material/Support';

import InfoHero from '../assets/info-hero.png';

const features = [
  {
    icon: <GroupsIcon color="primary" />,
    title: 'Family Integration',
    desc: 'Join us on vacations, errands, celebrations, and even church services if they wish.',
  },
  {
    icon: <PersonSearchIcon color="primary" />,
    title: 'Personalized Matching',
    desc: 'We carefully match residents with families who share similar interests.',
  },
  {
    icon: <PsychologyAltIcon color="primary" />,
    title: 'Independence and Growth',
    desc: 'Private rooms and a less restrictive environment help develop independence.',
  },
  {
    icon: <SettingsAccessibilityIcon color="primary" />,
    title: 'Essential Life Skills',
    desc: 'We focus on daily living and social skills to thrive in the community.',
  },
  {
    icon: <Diversity3Icon color="primary" />,
    title: 'Community Inclusion',
    desc: 'We break down barriers so residents are seen as valued community members.',
  },
  {
    icon: <SupportIcon color="primary" />,
    title: 'Individualized Support',
    desc: 'We tailor support based on preferences for quiet or active environments.',
  },
];

// ...imports and features array remain unchanged...
const InfoSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: 'transparent',
        py: 4,
        px: 2,
      }}
    >
      <Container>
        {/* Small screen: bigger image with first heading only, positioned higher */}
 {/* Small screen: bigger image with first heading only, positioned higher */}
<Box
  sx={{
    position: 'relative',
    display: { xs: 'block', md: 'none' },
    width: '100%',
    height: 500, // bigger image on mobile
    borderRadius: 3,
    overflow: 'hidden',
    mb: 4,
    userSelect: 'none',
    pointerEvents: 'none',
    boxShadow: 3,
    backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0)), url(${InfoHero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <Box
    sx={{
      position: 'absolute',
      top: '10%',    // moved text farther up (was 20%)
      left: '50%',
      transform: 'translate(-50%, -30%)',
      color: 'common.white',
      textAlign: 'center',
      px: 1,
      py:2,
      width: '90%',
    }}
  >
    <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ fontSize: '1.2rem' }}>
      Life at Family First Care is Life Lived Fully.
    </Typography>
    <Typography variant="body2" align="center" sx={{ mb: 4, fontSize: '0.85rem' }}>
      Imagine a life filled with shared experiences, laughter, and genuine connection.
    </Typography>
  </Box>
</Box>


        {/* Desktop: Card with background image + both heading and description */}
        <Card
          elevation={3}
          sx={{
            borderRadius: 6,
            p: 4,
            backgroundColor: '#ddc29a',
            backgroundImage: { xs: 'none', md: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${InfoHero})` },
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            minHeight: { xs: 'auto', md: 900 },
            display: { xs: 'none', md: 'block' },
            mb: 6,
            color: 'common.white',
            textShadow: '0 0 5px rgba(0,0,0,0.7)',
          }}
        >
          <CardContent>
            <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
              Life at Family First Care is Life Lived Fully.
            </Typography>
            <Typography variant="h5" align="center" sx={{ mb: 4 }}>
              Imagine a life filled with shared experiences, laughter, and genuine connection.
            </Typography>
          </CardContent>
        </Card>

        {/* The second typography - description above features on all screen sizes */}
        <Typography
          variant="h5"
          align="center"
          sx={{
            mb: 4,
            px: { xs: 2, md: 0 },
            maxWidth: 700,
            mx: 'auto',
            display: { xs: 'block', md: 'block' },
            fontWeight: 'bold' // show only on mobile
          }}
        >
           Our
          residents enjoy:
        </Typography>

        {/* Features container */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 4,
            px: { xs: 0, md: 6 },
          }}
        >
          {/* Left Column */}
          <Box
            sx={{
              flexBasis: { xs: '100%', md: '30%' },
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              alignItems: 'flex-start',
            }}
          >
            {features.slice(0, 3).map((item, index) => (
              <Box key={index} display="flex" alignItems="flex-start" gap={2}>
                {item.icon}
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body1">{item.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Spacer only visible on md+ */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              flexBasis: '10%',
            }}
          />

          {/* Right Column */}
          <Box
            sx={{
              flexBasis: { xs: '100%', md: '30%' },
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              alignItems: 'flex-start',
            }}
          >
            {features.slice(3).map((item, index) => (
              <Box key={index} display="flex" alignItems="flex-start" gap={2}>
                {item.icon}
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body1">{item.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Button below features */}
        <Box display="flex" justifyContent="center" mt={5}>
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: '999px', fontWeight: 'bold' }}
            href='/services'
          >
            Learn What We Do
          </Button>
        </Box>
      </Container>
    </Box>
  );
};



export default InfoSection;
