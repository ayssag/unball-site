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
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: 10,
    //       padding: '8px 22px',
    //       fontSize: '0.95rem',
    //       boxShadow: 'none',
    //       transition: 'all 0.2s ease-in-out',
    //       '&:hover': {
    //         boxShadow: '0px 6px 16px rgba(30, 64, 175, 0.25)',
    //         transform: 'translateY(-1px)',
    //       },
    //     },
    //     contained: ({ ownerState, theme }) => ({
    //       ...(ownerState.color === 'primary' && {
    //         background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    //       }),
    //       ...(ownerState.color === 'secondary' && {
    //         background: `linear-gradient(135deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 100%)`,
    //         color: '#ffffff',
    //       }),
    //     }),
    //   },
    // },
    // MuiCard: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: 16,
    //       boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
    //       border: '1px solid rgba(226, 232, 240, 0.8)',
    //       transition: 'all 0.3s ease',
    //       '&:hover': {
    //         boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.1)',
    //       },
    //     },
    //   },
    // },
    // MuiChip: {
    //   styleOverrides: {
    //     root: {
    //       fontWeight: 600,
    //       borderRadius: 8,
    //     },
    //   },
    // },
  },
})

export default theme
