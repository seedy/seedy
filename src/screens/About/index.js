import makeStyles from '@material-ui/core/styles/makeStyles';
import { useState, useCallback } from 'react';

import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CardMedia from 'components/dumb/Card/Media';
import HeroWordSlide from 'components/dumb/Hero/WordSlide';
import MapPlaces from 'components/smart/Map/Places';
import MapFestivals from 'components/smart/Map/Festivals';
import useIsXs from 'hooks/useIsXs';

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

// HOOKS
const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: 500,
    width: '100%',
  },
  panelFullWidth: {
    width: '100%',
  },
  boldWord: {
    fontWeight: theme.typography.fontWeightBold,
  },
  heroParagraph: {
    marginBottom: theme.spacing(2),
  },
}));


// COMPONENTS
const About = () => {
  const classes = useStyles();

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
        <HeroWordSlide className={classes.heroParagraph} items={ITEMS}>Je suis</HeroWordSlide>
        <Typography paragraph>
          Je crois que nos
          {' '}
          <span className={classes.boldWord}>expériences</span>
          {' '}
          nous construisent.
          Les plus intenses ont eu lieu lorsque j&apos;ai quitté ma
          {' '}
          <span className={classes.boldWord}>zone de confort</span>
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
          <span className={classes.boldWord}>partager</span>
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
          <TabPanel className={classes.panelFullWidth} value="1">
            <Typography color="textSecondary" variant="subtitle1">Clique sur les marqueurs pour en savoir plus. Visitons quelques lieux ensemble.</Typography>
            <MapPlaces className={classes.mapContainer} />
          </TabPanel>
          <TabPanel className={classes.panelFullWidth} value="2">
            <Typography color="textSecondary" variant="subtitle1">Clique sur les marqueurs pour en savoir plus. Découvrons quelques festivals ensemble.</Typography>
            <MapFestivals className={classes.mapContainer} />
          </TabPanel>
        </TabContext>
        <CardMedia size={isXs ? 'small' : undefined} />
      </Box>

    </Container>
  );
};

export default About;
