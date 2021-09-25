import THEME, { getTheme } from 'theme';
import isNil from 'helpers/isNil';

import { useDarkModeContext } from 'components/dumb/IconButton/DarkMode/Context';
import { useMemo } from 'react';

import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material';

// COMPONENTS
const ThemeProvider = (props) => {
  const { dark } = useDarkModeContext();

  const mode = useMemo(
    () => {
      if (isNil(dark)) {
        return null;
      }
      return dark ? 'dark' : 'light';
    },
    [dark],
  );

  const theme = useMemo(
    () => (isNil(mode) ? THEME : getTheme(mode)),
    [mode],
  );

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme} {...props} />
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
