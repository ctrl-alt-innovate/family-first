import React from 'react';
import { Box, Stack, Typography, useTheme, Paper } from '@mui/material';

import testimonialsHeroTop from '../assets/testimonials-hero-top.png';
import testimonialHeroBottom from '../assets/testimonials-hero-bottom.png';

const testimonials = [
  {
    quote: "Before Family First Care, we worried constantly about our son’s well-being. Now, we have peace of mind. He’s thriving, learning, and truly part of a loving family. They go above and beyond, and we’re incredibly grateful.",
    author: "Sarah M.",
    role: "Parent",
  },
  {
    quote: "Moving to Family First Care was the best decision I’ve made. I have my own space, yet I’m never alone. I’ve made friends, learned new skills, and feel like I belong. It’s a real home.",
    author: "David L.",
    role: "Resident",
  },
  {
    quote: "As a case manager, I’ve seen firsthand the positive impact Family First Care has on its residents. Their commitment to personalized care and community integration is truly remarkable. They create a safe and nurturing environment where individuals can flourish.",
    author: "Emily R.",
    role: "Case Manager",
  },
  {
    quote: "We were looking for a place that would accept our daughter as she is, not try to change her. Family First Care does exactly that. They respect her need for quiet and space, while still including her in family life when she’s ready. It’s a perfect balance.",
    author: "Thomas K.",
    role: "Parent",
  },
  {
    quote: "The family at Family First Care truly cares. They include my brother in everything, from grocery shopping to holiday celebrations. It’s more than just care; it’s a genuine family experience.",
    author: "Jessica P.",
    role: "Sibling",
  },
];

const TestimonialsHero = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Top image */}
      <Box
        component="img"
        src={testimonialsHeroTop}
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

      {/* Background section with text + testimonials */}
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
        <Box sx={{ maxWidth: 1000, mb: 4 }}>
          <Typography
            variant="h4"
            color="background.paper"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
          >
            Our Family’s Voices: Sharing the Family First Care Experience
          </Typography>
          <Typography variant="subtitle1" color="background.paper" textAlign="center">
            At Family First Care, we’re deeply honored by the trust families and individuals place in us.
            Their experiences speak volumes about the heart of our mission.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 1000, width: '100%' }}>
          <Typography variant="h4" align="center" fontWeight="bold" gutterBottom color="background.paper">
            Stories of Connection and Growth: 
              </Typography>
          <Stack spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: theme.palette.secondary.light,
                }}
              >
                <Typography variant="body1" fontStyle="italic" gutterBottom>
                  “{testimonial.quote}”
                </Typography>
                <Typography variant="subtitle2" fontWeight="bold">
                  – {testimonial.author}, {testimonial.role}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialsHero;
