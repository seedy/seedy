import { createTheme } from '@material-ui/core';
import deepPurple from '@material-ui/core/colors/deepPurple';
import orange from '@material-ui/core/colors/orange';

// CONSTANTS
const DEFAULT_THEME = 'dark';

// HELPERS
export const getTheme = (type) => createTheme({
  palette: {
    primary: deepPurple,
    secondary: orange,
    type,
  },
  overrides: {
    MuiTab: {
      root: {
        '@media (min-width: 600px)': {
          minWidth: 'auto',
        },
      },
    },
  },
});

export default getTheme(DEFAULT_THEME);
