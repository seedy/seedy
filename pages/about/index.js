import dynamic from 'next/dynamic';

import isNil from 'helpers/isNil';

import { useState, useCallback, useRef } from 'react';
import useIsXs from 'hooks/useIsXs';

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
const MapPlaces = dynamic(() => import('components/smart/Map/Places'), { ssr: false });
const MapFestivals = dynamic(() => import('components/smart/Map/Festivals'), { ssr: false });
import CardFestivalsSoon from 'components/dumb/Card/Festivals/Soon';

// CONSTANTS
const ITEMS = [
  'développeur',
  'voyageur',
  'mélomane',
  'festivalier',
  'bénévole',
  'cuisinier',
  'randonneur',
  'surfeur',
  'pluriel',
];


// COMPONENTS
const About = () => {
  const isXs = useIsXs();

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
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={1}
        mb={2}
      >
        <HeroWordSlide mb={2} items={ITEMS}>Je suis</HeroWordSlide>
        <Typography paragraph>
          Je suis convaincu que nous nous construisons par nos
          {' '}
          <SpanBold>expériences</SpanBold>
          .
          <br />
          Raconte moi ce que tu aimes faire, je te dirai
          {' '}
          <SpanBold>qui tu es</SpanBold>
          .
          <br />
          <br />
          Le voyage, seul, à pied, vers l&apos;inconnu, m&apos;a permis de grandir et
          trouver ce qui m&apos;est essentiel.
          <br />
          Le bénévolat m&apos;a fait découvrir une autre façon de m&apos;impliquer.
          Je ne sais pas ce que je ferais sans musique, sans festival, sans fête.
          Cuisiner en festival, c&apos;est aussi faire des rencontres,
          passer du temps avec un groupe et se soutenir dans les moments de rush.
          <br />
          Pratiquer un sport dépendant des éléments enseigne la patience et l&apos;engagement.
          <br />
          Toutes ces activités d&apos;extérieur sont pour moi un moyen de m&apos;équilibrer et
          d&apos;apprécier le retour chez moi, à mon bureau.
          <br />
          <br />
          J&apos;aimerais
          {' '}
          <SpanBold>partager</SpanBold>
          {' '}
          quelques souvenirs avec toi, si tu le veux bien.
        </Typography>
        <TabContext value={value}>
          <TabList
            centered
            onChange={handleChange}
            aria-label="Cartes"
            onClick={onScrollPanelIntoView}
            ref={tabListRef}
            sx={{
              scrollMarginTop: 64,
              scrollPaddingTop: 64,
            }}
          >
            <Tab label="Voyages" value="1" />
            <Tab label="Festivals" value="2" />
          </TabList>
          <TabPanel
            sx={{ width: '100%' }}
            value="1"
          >
            <Typography color="textSecondary" variant="subtitle2">Clique sur les marqueurs pour en savoir plus.</Typography>
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
            <Typography color="textSecondary" variant="subtitle2">Clique sur les marqueurs pour en savoir plus.</Typography>
            <MapFestivals />
            <CardFestivalsSoon sx={{ mt: 2, alignSelf: 'center' }} />
          </TabPanel>
        </TabContext>
        <CardMedia size={isXs ? 'small' : undefined} />
      </Box>

    </Container>
  );
};

export default About;
