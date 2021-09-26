import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import isNil from 'helpers/isNil';

import { useState, useCallback, useRef, useMemo } from 'react';
import useIsXs from 'hooks/useIsXs';
import { useTranslation, Trans } from 'next-i18next';

import Head from 'next/head';
import SpanBold from 'components/dumb/Span/Bold';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CardMedia from 'components/dumb/Card/Media';
import HeroWordSlide from 'components/dumb/Hero/WordSlide';
import CardFestivalsSoon from 'components/dumb/Card/Festivals/Soon';

const MapPlaces = dynamic(() => import('components/smart/Map/Places'), { ssr: false });
const MapFestivals = dynamic(() => import('components/smart/Map/Festivals'), { ssr: false });

// CONSTANTS
const ITEMS = [
  'dev',
  'travel',
  'music',
  'festival',
  'volunteer',
  'cook',
  'hike',
  'surf',
  'plural',
];

// SSG
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'places', 'festivals'])),
  },
});

// COMPONENTS
const About = () => {
  const isXs = useIsXs();

  const { t } = useTranslation(['common', 'places', 'festivals']);

  const items = useMemo(
    () => ITEMS.map((item) => t(`common:heroWordSlide.${item}`)),
    [t],
  );

  const [value, setValue] = useState('1');

  const tabListRef = useRef();

  const handleChange = useCallback(
    (event, newValue) => {
      setValue(newValue);
    },
    [setValue],
  );

  const onScrollPanelIntoView = useCallback(
    () => {
      const { current } = tabListRef;
      if (!isNil(current)) {
        current?.scrollIntoView();
      }
    },
    [tabListRef],
  );

  return (
    <>
      <Head>
        {/* <!-- LEAFLET's CSS --> */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        {/* <!-- Make sure you put this AFTER Leaflet's CSS --> */}
        <script
          defer
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossOrigin=""
        />
      </Head>
      <Container maxWidth="md">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt={1}
          mb={2}
        >
          <HeroWordSlide mb={2} items={items}>{t('common:heroWordSlide.title')}</HeroWordSlide>
          <Typography paragraph>
            <Trans
              i18nKey="common:presentation"
              components={{ bold: <SpanBold /> }}
            />
          </Typography>
          <TabContext value={value}>
            <TabList
              centered
              onChange={handleChange}
              aria-label={t('common:maps')}
              onClick={onScrollPanelIntoView}
              ref={tabListRef}
              sx={{
                scrollMarginTop: 64,
                scrollPaddingTop: 64,
              }}
            >
              <Tab label={t('common:trips')} value="1" />
              <Tab label={t('common:festivals')} value="2" />
            </TabList>
            <TabPanel
              sx={{ width: '100%' }}
              value="1"
            >
              <Typography color="textSecondary" variant="subtitle2">{t('common:clickMarkers')}</Typography>
              <MapPlaces />
            </TabPanel>
            <TabPanel
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
              value="2"
            >
              <Typography color="textSecondary" variant="subtitle2">{t('common:clickMarkers')}</Typography>
              <MapFestivals />
              <CardFestivalsSoon sx={{ mt: 2, alignSelf: 'center' }} />
            </TabPanel>
          </TabContext>
          <CardMedia
            size={isXs ? 'small' : undefined}
            title={t('common:media.title')}
            subheader={t('common:media.subheader')}
          />
        </Box>
      </Container>
    </>
  );
};

export default About;
