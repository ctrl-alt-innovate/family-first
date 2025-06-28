import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Link,
} from '@mui/material';

import { useLocation, Link as RouterLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../assets/Layer-4.png";

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Join Our Family', path: '/join' },
    { label: 'Contact Us', path: '/contact'}
  ];

const Navbar = () => {
    const theme = useTheme();
    const location = useLocation();
    const currentPath = location.pathname;
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);
  
    const toggleDrawer = (open) => () => {
      setDrawerOpen(open);
    };

  const drawer = (
    <Box
      sx={{
        width: 250,
        bgcolor: theme.palette.background.paper,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        px: 2,
        py: 3,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
        <List sx={{ flexGrow: 1 }}>
  {navItems.map(({ label, path }, index) => {
    const isActive = currentPath === path;

    return (
      <ListItem
        button
        key={index}
        component={RouterLink}
        to={path}
        sx={{
          borderRadius: 2,
          mb: 1,
          bgcolor: isActive ? theme.palette.primary.main : 'transparent',
          color: isActive ? theme.palette.primary.contrastText : theme.palette.text.primary,
          '&:hover': {
            bgcolor: isActive ? theme.palette.primary.dark : theme.palette.primary.light,
            color: isActive ? theme.palette.primary.contrastText : theme.palette.primary.main,
          },
          textDecoration: 'none',
        }}
        onClick={toggleDrawer(false)} // close drawer on navigation
      >
        <ListItemText
          primary={label}
          primaryTypographyProps={{
            fontWeight: 600,
            fontSize: '1.1rem',
          }}
        />
      </ListItem>
    );
  })}
</List>

  
      <Box sx={{ mt: 'auto', px: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          href="#contact"
          sx={{
            borderRadius: '999px',
            py: 1.2,
            fontWeight: 'bold',
            fontSize: '1rem',
            display: { xs: 'none', md: 'block'}
        }}
          
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
  

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: theme.palette.background.paper, borderRadius: 0}} >
      <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
        <Box component="img" src={logo} alt="Family First Care" sx={{ height: 70 }} />

        {isMobile ? (
          <>
            <IconButton edge="end" color="black" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawer}
            </Drawer>
          </>
        ) : (
          <Stack direction="row" spacing={3} alignItems="center">
            {navItems.slice(0,5).map(({ label, path }, index) => (
            <Link
                key={index}
                component={RouterLink}
                to={path}
                underline="none"
                color={currentPath === path ? theme.palette.primary.main : theme.palette.text.primary}
                fontWeight={currentPath === path ? 'bold' : 'medium'}
                sx={{ cursor: 'pointer', fontWeight: 'bold' }}
            >
                {label}
            </Link>
            ))}

            <Button
              variant="contained"
              color="success"
              sx={{
                px: 3,
                py: 1,
                borderRadius: '999px',
                fontWeight: 'bold',
              }}
              href="/contact"
            >
              Contact Us
            </Button>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
