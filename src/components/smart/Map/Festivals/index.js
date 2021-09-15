import clsx from 'clsx';

import makeStyles from '@material-ui/core/styles/makeStyles';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';

import LoyaltyIcon from '@material-ui/icons/Loyalty';

// CONSTANTS
const PLACES = [
  { coordinates: [47.510, -1.419], title: 'Dub Camp', subtitle: 'Le plus grand festival de dub et sound system en France', volunteer: true, img: 'festivals/dubcamp.jpg' },
  { coordinates: [45.559, 5.286], title: 'Bruit du Marteau', subtitle: 'Un festival de montage d\'échafaudages', volunteer: true, img: 'festivals/bdm.jpg' },
  { coordinates: [48.833, 2.445], title: 'We Love Green', subtitle: 'Musiques électroniques et écologie' },
  { coordinates: [48.582, -3.834], title: 'Panorama', subtitle: 'Techno, toujours pareil' },
  { coordinates: [45.784, 4.876], title: '24 Heures de L\'INSA', subtitle: 'Mon tout premier', volunteer: true, img: 'festivals/24.jpg' },
  { coordinates: [45.783, 4.876], title: 'Karnaval Humanitaire', subtitle: 'Le festival des copains, écolo, humanitaire', volunteer: true },
  { coordinates: [45.779, 4.924], title: 'Archisound', subtitle: 'Organisé par les copains architectes' },
  { coordinates: [45.611, 4.706], title: 'FestBouc', subtitle: 'Une grosse expérience en cuisine', volunteer: true },
  { coordinates: [45.780, 4.872], title: 'Elektrhone', subtitle: 'Musiques électroniques' },
  { coordinates: [45.780, 4.872], title: 'Reperkusound', subtitle: 'De nombreux souvenirs de bénévolat en cuisine avec Mediatone', volunteer: true },
  { coordinates: [45.524, 4.878], title: 'Authentiks', subtitle: 'Mediatone en équipe réduite', volunteer: true },
  { coordinates: [45.524, 4.878], title: 'Jazz à Vienne', subtitle: 'Pour les puristes du jazz' },
  { coordinates: [48.827, 2.216], title: 'Rock en Seine', subtitle: 'Rock et musiques actuelles' },
  { coordinates: [48.856, 2.232], title: 'Solidays', subtitle: 'Musiques actuelles et solidarité sida' },
  { coordinates: [46.522, 5.617], title: 'Mousse toi là', subtitle: 'Mini festival organisé par la Brasserie des Trois Epis' },
  { coordinates: [49.179, -0.224], title: 'Rastart', subtitle: 'Festival reggae et sound system engagé', volunteer: true, img: 'festivals/rastart.jpg', reverse: true },
  { coordinates: [44.891, 13.797], title: 'Outlook', subtitle: 'La plus grande célébration européenne de la culture Sound System dans un fort', img: 'festivals/outlook.jpg' },
  { coordinates: [48.902, 2.367], title: 'Forward - bass culture', subtitle: 'Festival Sound System à Paris, anciennement Telerama Dub', img: 'festivals/forward.jpg' },
  { coordinates: [47.076, 2.397], title: 'Printemps de Bourges', subtitle: 'Musiques électroniques' },
  { coordinates: [47.230, 6.038], title: 'Détonation', subtitle: 'Dub et électro' },

];

// HOOKS
const useStyles = makeStyles(() => ({
  imgSmall: {
    width: 200,
    height: 150,
  },
  imgReverse: {
    width: 150,
    height: 200,
  },
  textSecondaryPopup: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
}));

// COMPONENTS
const MapFestivals = (props) => {
  const classes = useStyles();

  return (
    <MapContainer
      center={[45.9, 4.59]}
      zoom={4}
      scrollWheelZoom
      {...props}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {PLACES.map(({ coordinates, title, subtitle, img, reverse, volunteer }) => (
        <Marker key={title} position={coordinates}>
          <Popup>
            <Box width="100%" height="100%" display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h6">
                {title}
                {volunteer && (
                  <Box display="inline" ml={1}>
                    <Chip
                      color="primary"
                      label="Bénévole"
                      icon={(
                        <LoyaltyIcon />
                    )}
                    />
                  </Box>
                )}
              </Typography>
              <Typography variannt="subtitle1" className={classes.textSecondaryPopup}>{subtitle}</Typography>
              {img && (
                <img
                  className={clsx(classes.imgSmall, { [classes.imgReverse]: reverse })}
                  src={img}
                  alt={title}
                />
              )}
            </Box>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapFestivals;
