import PropTypes from 'prop-types';

import createEmotionCache from 'helpers/createEmotionCache';
import { appWithTranslation, useTranslation } from 'next-i18next';

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
import ButtonAbout from 'components/smart/Button/About';
import IconButtonTranslate from 'components/smart/IconButton/Translate';
import BoxFlexFill from 'components/dumb/Box/FlexFill';
import MenuItem from '@mui/material/MenuItem';
import { CacheProvider } from '@emotion/react';
import GlobalSWRConfig from 'components/contexts/SWRConfig';

import 'styles/globals.css';
import Footer from 'components/dumb/Footer';
import SlideHideOnScroll from 'components/dumb/Slide/HideOnScroll';
import BoxFlexGap from 'components/dumb/Box/FlexGap';

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
const App = ({ Component, pageProps, emotionCache }) => {
  const { t } = useTranslation('common');
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{t('common:title')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <IconButtonDarkModeContext>
        <ThemeProvider>
          <GlobalSWRConfig>
            <CssBaseline />
            <Box display="flex" flexDirection="column">
              <SlideHideOnScroll>
                <AppBar color="transparent" enableColorOnDark position="fixed">
                  <Toolbar>
                    <ButtonHomeLink />
                    <BoxFlexFill />
                    <BoxFlexGap gap={2}>
                      <ButtonAbout variant="outlined" title={t('common:about')} />
                      <IconButtonTranslate title={t('common:changeLanguage')}>
                        <MenuItem component="a" href="https://github.com/seedy/seedy/issues/43#issue-1007457233">
                          {t('common:askTranslation')}
                        </MenuItem>
                      </IconButtonTranslate>
                      <IconButtonDarkModeWithContext
                        titleLight={t('common:toggleDarkMode')}
                        titleDark={t('common:toggleLightMode')}
                      />
                    </BoxFlexGap>
                  </Toolbar>
                </AppBar>
              </SlideHideOnScroll>
              <BoxToolbarOffset />
              <Component {...pageProps} />
              <Footer />
            </Box>
          </GlobalSWRConfig>
        </ThemeProvider>
      </IconButtonDarkModeContext>
    </CacheProvider>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

App.defaultProps = {
  emotionCache: CLIENT_SIDE_EMOTION_CACHE,
};

export default appWithTranslation(App);
