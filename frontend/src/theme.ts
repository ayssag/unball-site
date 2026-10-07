import { createTheme, alpha } from '@mui/material/styles'
import '@fontsource/inter'
import '@fontsource/bungee'
import '@fontsource/space-mono'
import '@fontsource-variable/trispace'

export const FONTS = {
  body: "'Inter', sans-serif",
  display: "'Bungee', system-ui",
  mono: "'Space Mono', monospace",
  tech: "'Trispace Variable', sans-serif",
} as const;

declare module '@mui/material/styles' {
  interface BorderPalette {
    main: string;
    subtle: string;
  }
  interface Palette {
    border: BorderPalette;
  }
  interface PaletteOptions {
    border?: BorderPalette;
  }
  interface TypographyVariants {
    fontFamilyMono: string;
    fontFamilyDisplay: string;
    fontFamilyTech: string;
  }
  interface TypographyVariantsOptions {
    fontFamilyMono?: string;
    fontFamilyDisplay?: string;
    fontFamilyTech?: string;
  }
}

const SECONDARY_MAIN = '#40A5FF'

const palette = {
    primary: {
      main: '#E3873E',
      dark: '#C55B14',
      contrastText: '#F4F7F6',
    },
    secondary: {
      main: SECONDARY_MAIN,
      contrastText: '#07192E',
    },
    background: {
      default: '#07192E',
      paper: '#0A2240',
    },
    text: {
      primary: '#F4F7F6',
      secondary: '#D8E3ED',
    },
    error: {
      main: '#FF5F56',
    },
    warning: {
      main: '#FFBD2E',
    },
    info: {
      main: '#40A5FF',
    },
    success: {
      main: '#27C93F',
    },
    border: {
      main: alpha(SECONDARY_MAIN, 0.4),
      subtle: alpha(SECONDARY_MAIN, 0.2),
    },
  }

export const theme = createTheme({
  palette,
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: FONTS.body,
    fontFamilyMono: FONTS.mono,
    fontFamilyDisplay: FONTS.display,
    fontFamilyTech: FONTS.tech,
    h1: {
      fontFamily: FONTS.display,
      fontWeight: 400,
      fontSize: '2.75rem',
    },
    h2: {
      fontFamily: FONTS.display,
      fontWeight: 400,
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
      '@media (min-width:900px)': {
        fontSize: '2.25rem',
      },
    },
    h3: {
      fontFamily: FONTS.display,
      fontWeight: 400,
      fontSize: '1.75rem',
    },
    h4: {
      fontFamily: FONTS.tech,
      fontWeight: 700,
      fontSize: '0.625rem',
      textTransform: 'uppercase'
    },
    h6: {
      fontFamily: FONTS.mono,
      fontSize: '1rem',
      textTransform: 'uppercase'
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body, #root': {
          margin: 0,
          padding: 0,
          width: '100%',
          minHeight: '100vh',
        },
        html: {
          WebkitHyphens: 'auto',
          msHyphens: 'auto',
          hyphens: 'auto',
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
        },
        body: {
          backgroundColor: palette.background.default,
          backgroundImage: `linear-gradient(${alpha(SECONDARY_MAIN, 0.04)} 1px, transparent 1px), linear-gradient(90deg, ${alpha(SECONDARY_MAIN, 0.04)} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${alpha(SECONDARY_MAIN, 0.2)}`,
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: FONTS.mono,
        },
      },
      variants: [
        {
          props: { 
            variant: "contained",
          },
          style: {
            backgroundColor: palette.primary.dark,
            "&:hover": {
              backgroundColor: alpha(palette.primary.dark, 0.85),
            }
          }
        },
        {
          props: {
            variant: "outlined",
          },
          style: {
            backgroundColor: "transparent",
            border: "1px solid",
            borderColor: palette.primary.main,
            color: palette.primary.main,
            "&:hover": {
              backgroundColor: alpha(palette.text.primary, 0.1)
            }
          }
        }
      ]
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontFamily: FONTS.mono,
          fontSize: '0.875rem',
          paddingBottom: 8,
          '&::placeholder': {
            color: alpha(palette.text.primary, 0.4),
            opacity: 1,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottom: `1px solid ${alpha(SECONDARY_MAIN, 0.4)}`,
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: `1px solid ${SECONDARY_MAIN}`,
          },
          '&:after': {
            borderBottom: `2px solid ${palette.primary.main}`,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: FONTS.mono,
          fontSize: '0.75rem',
          marginTop: 4,
        },
      },
    },
  },
})

export default theme
