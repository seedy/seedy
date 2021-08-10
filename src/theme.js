import { createTheme } from '@material-ui/core';
import deepPurple from '@material-ui/core/colors/deepPurple';
import orange from '@material-ui/core/colors/orange';

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: orange,
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

export default theme;
