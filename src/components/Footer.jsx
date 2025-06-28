import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Link,
  useTheme,
} from '@mui/material';

import Logo from '../assets/Layer-4.png';
import WahrmundWW from '../assets/wahrmund-webworks.png'
//import WebMonsterLogo from '../assets/webmonster-logo.png'; // ✅ Ensure this is imported correctly

const Footer = () => {
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', pt: 6, pb: 0 }}>
      <Grid
        container
        spacing={4}
        sx={{
          px: { xs: 3, md: 10 },
          pb: 6,
          justifyContent: 'center',
        }}
      >
        {/* Left - Logo */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' },
            alignItems: 'center',
            width: { xs: '100%', md: 'auto' },
          }}
        >
          <Box
            component="img"
            src={Logo}
            alt="Family First Care logo"
            sx={{ height: 60 }}
          />
        </Grid>

        {/* Center - Navigation Links */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 2,
              textAlign: 'center',
            }}
          >
            {[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Testimonials', href: '/testimonials' },
              { label: 'Join Our Family', href: '/join' },
              { label: 'Contact Us', href: '/contact' },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                underline="none"
                color="text.primary"
                sx={{ fontWeight: 500, fontSize: '0.95rem' }}
              >
                {link.label}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Right - WebMonster Logo */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' },
            alignItems: 'center',
            width: { xs: '100%', md: 'auto' },
          }}
        >
          <Box
            component="img"
            src={WahrmundWW}
            alt="Powered by WebMonster"
            sx={{ height: 100 }}
          />
        </Grid>
      </Grid>

      {/* Bottom copyright */}
      <Box sx={{ bgcolor: '#2f5730', py: 2 }}>
        <Typography
          variant="body2"
          color="common.white"
          align="center"
          sx={{ fontWeight: 500 }}
        >
          Copyright © 2025 Family First Care | All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
