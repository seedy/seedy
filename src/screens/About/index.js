import { useState, useCallback } from 'react';
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
import MapPlaces from 'components/smart/Map/Places';
import MapFestivals from 'components/smart/Map/Festivals';

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

  const handleChange = useCallback(
    (event, newValue) => {
      setValue(newValue);
    },
    [setValue],
  );

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={1}
      >
        <HeroWordSlide mb={2} items={ITEMS}>Je suis</HeroWordSlide>
        <Typography paragraph>
          Je crois que nos
          {' '}
          <SpanBold>expériences</SpanBold>
          {' '}
          nous construisent.
          Les plus intenses ont eu lieu lorsque j&apos;ai quitté ma
          {' '}
          <SpanBold>zone de confort</SpanBold>
          .
          <br />
          <br />
          Le voyage, seul, à pied, vers l&apos;inconnu, m&apos;a permis de grandir et
          trouver ce qui m&apos;est essentiel.
          Le bénévolat m&apos;a appris à m&apos;impliquer volontairement dans des projets.
          La musique et la cuisine m&apos;aident à me concentrer, à me canalyser.
          Le surf est une activité de patience et de spontanéité.
          Il faut apprendre à attendre la vague puis se donner à fond.
          <br />
          <br />
          J&apos;aimerais en
          {' '}
          <SpanBold>partager</SpanBold>
          {' '}
          quelques-unes avec toi, si tu le veux bien.
        </Typography>
        <TabContext value={value}>
          <TabList
            centered
            onChange={handleChange}
            aria-label="Cartes"
          >
            <Tab label="Voyages" value="1" />
            <Tab label="Festivals" value="2" />
          </TabList>
          <TabPanel sx={{ width: '100%' }} value="1">
            <Typography color="textSecondary" variant="subtitle1">Clique sur les marqueurs pour en savoir plus. Visitons quelques lieux ensemble.</Typography>
            <MapPlaces />
          </TabPanel>
          <TabPanel sx={{ width: '100%' }} value="2">
            <Typography color="textSecondary" variant="subtitle1">Clique sur les marqueurs pour en savoir plus. Découvrons quelques festivals ensemble.</Typography>
            <MapFestivals />
          </TabPanel>
        </TabContext>
        <CardMedia size={isXs ? 'small' : undefined} />
      </Box>

    </Container>
  );
};

export default About;
