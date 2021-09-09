import makeStyles from '@material-ui/core/styles/makeStyles';
import { useState, useCallback } from 'react';

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

// CONSTANTS
const ITEMS = [
  'développeur',
  'voyageur',
  'mélomane',
  'festivalier',
  'cuisinier',
  'randonneur',
  'surfeur',
  'pluriel',
];

// HOOKS
const useStyles = makeStyles(() => ({
  mapContainer: {
    height: 500,
    width: '100%',
  },
  panelFullWidth: {
    width: '100%',
  },
}));


// COMPONENTS
const About = () => {
  const classes = useStyles();

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
        <HeroWordSlide items={ITEMS}>Je suis</HeroWordSlide>
        <CardMedia />
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
            <MapPlaces className={classes.mapContainer} />
          </TabPanel>
          <TabPanel className={classes.panelFullWidth} value="2">
            <MapFestivals className={classes.mapContainer} />
          </TabPanel>
        </TabContext>
      </Box>

    </Container>
  );
};

export default About;
