import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { deepPurple, orange } from '@mui/material/colors';

// CONSTANTS
const DEFAULT_THEME = 'dark';

// HELPERS
export const getPalette = (mode) => ({
  mode,
  ...(mode === 'light' ? {
    primary: deepPurple,
    secondary: orange,
  } : {
    primary: deepPurple,
    secondary: orange,
  }),
});

export const getTheme = (mode) => responsiveFontSizes(createTheme({
  palette: getPalette(mode),
  typography: {
    h1: {
      fontSize: '3rem',
      lineHeight: 1.167,
    },
    h2: {
      fontSize: '2.125rem',
      lineHeight: 1.235,
    },
    h3: {
      fontSize: '1.25rem',
      lineHeight: 1.6,
    },
  },
  overrides: {
    MuiTab: {
      root: {
        '@media (min-width: 600px)': {
          minWidth: 'auto',
        },
      },
    },
    MuiAccordionSummary: {
      root: {
        padding: '0px 8px',
      },
    },
    MuiAccordionDetails: {
      root: {
        padding: '16px 8px',
      },
    },
    MuiImageListItemBar: {
      title: {
        whiteSpace: 'normal',
      },
    },
  },
}));

export default getTheme(DEFAULT_THEME);
