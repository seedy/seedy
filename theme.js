import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import deepPurple from '@mui/material/colors/deepPurple';
import orange from '@mui/material/colors/orange';

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
  }) });

export const getTheme = (mode) => responsiveFontSizes(createTheme({
  palette: getPalette(mode),
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
