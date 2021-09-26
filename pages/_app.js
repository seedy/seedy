import PropTypes from 'prop-types';

import createEmotionCache from 'helpers/createEmotionCache';

import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from 'components/dumb/IconButton/DarkMode/Context/ThemeProvider';
import IconButtonDarkModeContext from 'components/dumb/IconButton/DarkMode/Context';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ButtonHomeLink from 'components/smart/Button/Home/Link';
import Box from '@mui/material/Box';
import BoxToolbarOffset from 'components/dumb/Box/ToolbarOffset';
import IconButtonDarkModeWithContext from 'components/smart/IconButton/DarkMode/WithContext';
import IconButtonAbout from 'components/smart/IconButton/About';
import BoxFlexFill from 'components/dumb/Box/FlexFill';
import { CacheProvider } from '@emotion/react';

import 'styles/globals.css';

// CONSTANTS
// Client-side cache, shared for the whole session of the user in the browser.
const CLIENT_SIDE_EMOTION_CACHE = createEmotionCache();

// REPORT WEB VITALS
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// PAGE
const App = ({ Component, pageProps, emotionCache }) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <title>Seedy.Dupuis | A portfolio app</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <IconButtonDarkModeContext>
      <ThemeProvider>
        <CssBaseline />
        <Box display="flex" flexDirection="column">
          <AppBar position="fixed">
            <Toolbar>
              <ButtonHomeLink />
              <BoxFlexFill />
              <IconButtonAbout />
              <IconButtonDarkModeWithContext />
            </Toolbar>
          </AppBar>
          <BoxToolbarOffset />
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </IconButtonDarkModeContext>
  </CacheProvider>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

App.defaultProps = {
  emotionCache: CLIENT_SIDE_EMOTION_CACHE,
};

export default App;
