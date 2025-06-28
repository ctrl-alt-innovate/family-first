// src/components/PaletteTester.jsx
import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  useTheme,
} from '@mui/material';

const ColorBox = ({ label, color }) => (
  <Paper
    elevation={3}
    sx={{
      p: 2,
      height: 100,
      backgroundColor: color,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}
  >
    <Typography variant="body2">{label}</Typography>
  </Paper>
);

const PaletteTester = () => {
  const theme = useTheme();

  const paletteSamples = [
    { label: 'Primary Main', color: theme.palette.primary.main },
    { label: 'Primary Light', color: theme.palette.primary.light },
    { label: 'Primary Dark', color: theme.palette.primary.dark },
    { label: 'Secondary Main', color: theme.palette.secondary.main },
    { label: 'Secondary Light', color: theme.palette.secondary.light },
    { label: 'Secondary Dark', color: theme.palette.secondary.dark },
    { label: 'Background Default', color: theme.palette.background.default },
    { label: 'Paper', color: theme.palette.background.paper },
    { label: 'Text Primary', color: theme.palette.text.primary },
    { label: 'Text Secondary', color: theme.palette.text.secondary },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Family First Care Theme Palette
      </Typography>
      <Grid container spacing={2}>
        {paletteSamples.map((sample, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ColorBox label={`${sample.label}: ${sample.color}`} color={sample.color} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PaletteTester;
