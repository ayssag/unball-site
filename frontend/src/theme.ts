import { createTheme } from '@mui/material/styles'
import '@fontsource/inter'
import '@fontsource/bungee'
import '@fontsource/space-mono'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#E3873E',
      contrastText: '#F4F7F6',
    },
    secondary: {
      main: '#40A5FF',
      contrastText: '#07192E',
    },
    background: {
      default: '#07192E',
      paper: '#0A2240',
    },
    text: {
      primary: '#D8E3ED',
      secondary: '#F4F7F6',
    },
    error: {
      main: '#9E3D1D',
    },
    warning: {
      main: '#C55B14',
    },
    info: {
      main: '#40A5FF',
    },
    success: {
      main: '#008236',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: "'Bungee', system-ui",
      fontWeight: 400,
      letterSpacing: '0.03em',
      fontSize: '2.75rem',
    },
    h2: {
      fontFamily: "'Bungee', system-ui",
      fontWeight: 400,
      letterSpacing: '0.02em',
      fontSize: '2.25rem',
    },
    h3: {
      fontFamily: "'Bungee', system-ui",
      fontWeight: 400,
      fontSize: '1.75rem',
    },
    h6: {
      fontFamily: "'Space Mono', monospace",
      fontSize: '1rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        h1: {
          fontFamily: "'Bungee', system-ui",
        },
        h2: {
          fontFamily: "'Bungee', system-ui",
        },
        h3: {
          fontFamily: "'Bungee', system-ui",
        },
        h6: {
          fontFamily: "'Space Mono', monospace",
        },
      },
    },
  },
})

export default theme
