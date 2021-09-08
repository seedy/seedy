import makeStyles from '@material-ui/core/styles/makeStyles';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CardMedia from 'components/dumb/Card/Media';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// CONSTANTS
const PLACES = [
  { coordinates: [46.122, 4.392], title: 'Ranchal', subtitle: 'My Home' },
  { coordinates: [45.773, 4.832], title: 'Rue des pierres plantées, Croix-Rousse, Lyon', subtitle: 'Une rue vivante, une belle vue' },
  { coordinates: [45.434, -1.154], title: 'Plage du Gurp', subtitle: 'Le surf spot de mon coeur' },
  { coordinates: [45.352, -1.056], title: 'Cimetière de Vendays-Montalivet', subtitle: 'Un spot de camping sauvage au calme' },
  { coordinates: [45.116, 6.128], title: 'Glacier de la Sarenne, Alpe d\'Huez', subtitle: 'La piste la plus longue d\'Europe' },
  { coordinates: [55.379, -5.556], title: 'Gylen Castle, Kerrera, Oban', subtitle: 'Mon lieu préféré sur Terre' },
  { coordinates: [55.861, -4.250], title: 'George Square, Glasgow', subtitle: 'Haa, Glasgow...' },
  { coordinates: [55.954, -3.181], title: 'Calton Hill, Edinburgh', subtitle: 'Une magnifique vue sur Edinburgh' },
  { coordinates: [45.120, 6.556], title: 'Pic du Mont Thabor', subtitle: '1400D+ en 2 jours !' },
  { coordinates: [52.672, -8.571], title: 'Stables Club, Limerick', subtitle: 'Les TGIF Erasmus étaient incroyables' },
  { coordinates: [56.101, -4.637], title: 'Luss Pier', subtitle: 'Un lieu incroyable pour se ressourcer' },
  { coordinates: [45.369, 5.811], title: 'Le Grand Som, Chartreuse', subtitle: 'Une randonnée au milieu des arbres' },
  { coordinates: [48.687, -2.317], title: 'Pointe du Cap Fréhel', subtitle: 'Des falaises à perte de vue' },
  { coordinates: [48.086, -4.502], title: 'Beuzec-Cap-Sizun', subtitle: 'Un magnifique spot de camping sauvage' },
  { coordinates: [45.002, -1.202], title: 'Plage de Lacanau Océan', subtitle: 'Un spot de surf bien connu des mordus' },
  { coordinates: [44.595, -1.211], title: 'Dune du Pilat', subtitle: 'Le sable, la vue' },
  { coordinates: [51.052, 13.736], title: 'Dresden Royal Castle', subtitle: 'Un château magnifique' },
  { coordinates: [-33.891, 151.275], title: 'Bondi Beach, Sydney', subtitle: 'Une plage à couper le souffle' },
  { coordinates: [48.046, -4.708], title: 'Baie des Trépassés, Cap Sizun', subtitle: 'Plage aux eaux bleues' },
  { coordinates: [43.866, 15.973], title: 'Krka National Park', subtitle: 'Des cascades, partout' },
  { coordinates: [44.891, 13.798], title: 'Fort Punta Cristo, Pula', subtitle: 'Un festival incroyable dans un cadre idyllique' },
  { coordinates: [47.510, -1.420], title: 'Joué sur Erdre', subtitle: 'Des lacs partout, site Natura 2000' },
  { coordinates: [45.081, 13.634], title: 'Rovinj', subtitle: 'Un village en hauteur, vue sur la Mer' },
  { coordinates: [46.391, 14.016], title: 'Triglav National Park', subtitle: 'Des rivières bleutées, la moyenne montagne autour' },
  { coordinates: [45.784, 4.874], title: 'K-fet Insa Lyon', subtitle: 'Tant de souvenirs alcoolisés...' },
  { coordinates: [45.506, -73.589], title: 'Mont Royal, Montréal', subtitle: 'Découverte du patin à glace en plein air' },
  { coordinates: [45.436, 12.325], title: 'Musée de Vinci, Venise', subtitle: 'Les inventions de Léonard, au coeur des canaux' },
];

// HOOKS
const useStyles = makeStyles(() => ({
  mapContainer: {
    height: 500,
  },
}));

// COMPONENTS
const About = () => (
  const classes = useStyles();

  return (
  <Container maxWidth="md">
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={1}
    >
      <CardMedia />
    </Box>
      <MapContainer
        className={classes.mapContainer}
        center={[45.9, 4.59]}
        zoom={4}
        scrollWheelZoom
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {PLACES.map(({ coordinates, title, subtitle }) => (
          <Marker position={coordinates}>
            <Popup>
              {title}
              <br />
              {subtitle}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
  </Container>
);
};

export default About;
