// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#65a98e',      // Calming teal
      light: '#92c6b2',     // Lighter shade
      dark: '#3d7a68',      // Darker shade
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f2b880',      // Soft peach
      light: '#f6d3a8',     // Lighter peach
      dark: '#c68f5d',      // Darker shade
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8faf9',   // Very light grey
      paper: '#ffffff',     // Clean white
    },
    text: {
      primary: '#2e3b3a',   // Deep grey-green
      secondary: '#5c6f6d', // Muted complementary tone
    },
  },
  typography: {
    fontFamily: `'Playfair Display', Georgia, 'Baskerville', serif`,
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiTextField : {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          borderRadius: 12
        },

      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme;
