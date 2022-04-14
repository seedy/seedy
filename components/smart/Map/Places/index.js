import { useTranslation } from 'next-i18next';

import { TileLayer, Marker, Popup } from 'react-leaflet';
import Typography from '@mui/material/Typography';
import TypographyPopupSecondary from 'components/dumb/Typography/PopupSecondary';
import Box from '@mui/material/Box';
import Image from 'next/image';
import MapContainer from 'components/dumb/MapContainer/Container';

// CONSTANTS
const PLACES = [
  { coordinates: [46.122, 4.392], title: 'ranchal.title', subtitle: 'ranchal.subtitle', img: '/places/home.jpg' },
  { coordinates: [45.773, 4.832], title: 'lyonStreet.title', subtitle: 'lyonStreet.subtitle' },
  { coordinates: [45.434, -1.154], title: 'gurpBeach.title', subtitle: 'gurpBeach.subtitle', img: '/places/gurp.jpg' },
  { coordinates: [45.116, 6.128], title: 'sarenne.title', subtitle: 'sarenne.subtitle', img: '/places/sarenne.jpg' },
  { coordinates: [56.379, -5.554], title: 'mccaig.title', subtitle: 'mccaig.subtitle', img: '/places/mccaig.jpg' },
  { coordinates: [56.379, -5.554], title: 'gylen.title', subtitle: 'gylen.subtitle', img: '/places/gylen.jpg' },
  { coordinates: [55.861, -4.250], title: 'georgeSq.title', subtitle: 'georgeSq.subtitle' },
  { coordinates: [57.643, -6.266], title: 'quiraing.title', subtitle: 'quiraing.subtitle', img: '/places/quiraing.jpg' },
  { coordinates: [55.954, -3.181], title: 'calton.title', subtitle: 'calton.subtitle', img: '/places/calton.jpg' },
  { coordinates: [45.120, 6.556], title: 'thaborSummit.title', subtitle: 'thaborSummit.subtitle', img: '/places/thabor.jpg' },
  { coordinates: [52.672, -8.571], title: 'stables.title', subtitle: 'stables.subtitle' },
  { coordinates: [56.101, -4.637], title: 'lussPier.title', subtitle: 'lussPier.subtitle', img: '/places/luss.jpg' },
  { coordinates: [45.369, 5.811], title: 'grandSom.title', subtitle: 'grandSom.subtitle' },
  { coordinates: [48.687, -2.317], title: 'capeFrehel.title', subtitle: 'capeFrehel.subtitle', img: '/places/frehel.jpg' },
  { coordinates: [48.086, -4.502], title: 'beuzec.title', subtitle: 'beuzec.subtitle', img: '/places/beuzec.jpg' },
  { coordinates: [45.002, -1.202], title: 'lacanauBeach.title', subtitle: 'lacanauBeach.subtitle', img: '/places/lacanau.jpg' },
  { coordinates: [44.595, -1.211], title: 'pilatDune.title', subtitle: 'pilatDune.subtitle' },
  { coordinates: [51.052, 13.736], title: 'dresdenCastle.title', subtitle: 'dresdenCastle.subtitle' },
  { coordinates: [-33.891, 151.275], title: 'bondiBeach.title', subtitle: 'bondiBeach.subtitle', img: '/places/bondi.jpg' },
  { coordinates: [48.046, -4.708], title: 'bay.title', subtitle: 'bay.subtitle' },
  { coordinates: [43.866, 15.973], title: 'krka.title', subtitle: 'krka.subtitle', img: '/places/krka.jpg' },
  { coordinates: [44.891, 13.798], title: 'fortPula.title', subtitle: 'fortPula.subtitle' },
  { coordinates: [47.510, -1.420], title: 'joue.title', subtitle: 'joue.subtitle' },
  { coordinates: [45.081, 13.634], title: 'rovinj.title', subtitle: 'rovinj.subtitle', img: '/places/rovinj.jpg' },
  { coordinates: [46.391, 14.016], title: 'triglav.title', subtitle: 'triglav.subtitle', img: '/places/triglav.jpg' },
  { coordinates: [45.784, 4.874], title: 'kfet.title', subtitle: 'kfet.subtitle' },
  { coordinates: [45.506, -73.589], title: 'montRoyal.title', subtitle: 'montRoyal.subtitle' },
  { coordinates: [45.436, 12.325], title: 'daVinci.title', subtitle: 'daVinci.subtitle' },
  { coordinates: [31.776, 35.234], title: 'wall.title', subtitle: 'wall.subtitle' },
  { coordinates: [40.952, -4.131], title: 'alcazar.title', subtitle: 'alcazar.subtitle' },
  { coordinates: [48.202, 7.309], title: 'ribeauvilleCastles.title', subtitle: 'ribeauvilleCastles.subtitle', img: '/places/ribeauville.jpg' },
  { coordinates: [57.273, -5.515], title: 'eileanDonan.title', subtitle: 'eileanDonan.subtitle', img: '/places/eilean.jpg' },
  { coordinates: [43.757, 5.502], title: 'bondePond.title', subtitle: 'bondePond.subtitle', img: '/places/bonde.jpg' },
  { coordinates: [43.919, 5.224], title: 'nearGordes.title', subtitle: 'nearGordes.subtitle', img: '/places/gordes.jpg' },
  { coordinates: [45.170, 5.936], title: 'crozetLake.title', subtitle: 'crozetLake.subtitle', img: '/places/crozet.jpg' },
  { coordinates: [43.510, 16.408], title: 'marjanPark.title', subtitle: 'marjanPark.subtitle', img: '/places/marjan.jpg' },
  { coordinates: [57.429, -5.818], title: 'applecross.title', subtitle: 'applecross.subtitle', img: '/places/applecross.jpg' },
  { coordinates: [57.716, -5.685], title: 'gairlochBeach.title', subtitle: 'gairlochBeach.subtitle', img: '/places/gairloch.jpg' },
  { coordinates: [57.318, -4.447], title: 'lochNess.title', subtitle: 'lochNess.subtitle', img: '/places/ness.jpg' },
  { coordinates: [57.048, -3.561], title: 'cairngorns.title', subtitle: 'cairngorns.subtitle', img: '/places/cairngorns.jpg' },
  { coordinates: [45.249, 6.910], title: 'lakeMontCenis.title', subtitle: 'lakeMontCenis.subtitle', img: '/places/cenis.jpg' },
  { coordinates: [56.876, -5.434], title: 'jacobiteGlenfinnan.title', subtitle: 'jacobiteGlenfinnan.subtitle', img: '/places/jacobite.jpg' },
  { coordinates: [56.103, -4.675], title: 'trossachsPark.title', subtitle: 'trossachsPark.subtitle', img: '/places/trossachs.jpg' },
  { coordinates: [50.929, 1.714], title: 'blancnezCliffs.title', subtitle: 'blancnezCliffs.subtitle', img: '/places/sangatte.jpg' },
];

// COMPONENTS
const MapPlaces = (props) => {
  const { t } = useTranslation('places');

  return (
    <MapContainer
      center={[37.9, 18.59]}
      zoom={2}
      scrollWheelZoom
      {...props}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {PLACES.map(({ coordinates, title, subtitle, img }) => (
        <Marker key={t(title)} position={coordinates}>
          <Popup>
            <Box width="100%" height="100%" display="flex" flexDirection="column" alignItems="center">
              <Typography variant="body1">{t(`places:${title}`)}</Typography>
              <TypographyPopupSecondary variant="subtitle1">{t(`places:${subtitle}`)}</TypographyPopupSecondary>
              {img && (
              <Image
                width={200}
                height={150}
                src={img}
                alt={t(`places:${title}`)}
              />
              )}
            </Box>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapPlaces;
