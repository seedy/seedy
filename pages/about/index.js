import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import isNil from 'helpers/isNil';

import { useState, useCallback, useRef, useMemo } from 'react';
import { useTranslation, Trans } from 'next-i18next';

import SpanBold from 'components/dumb/Span/Bold';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import HeroWordSlide from 'components/dumb/Hero/WordSlide';
import MapContainerSkeleton from 'components/dumb/MapContainer/Skeleton';

const MapPlaces = dynamic(() => import('components/smart/Map/Places'), { ssr: false, loading: () => <MapContainerSkeleton /> });
const MapFestivals = dynamic(() => import('components/smart/Map/Festivals'), { ssr: false, loading: () => <MapContainerSkeleton /> });

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
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
};

export default About;
