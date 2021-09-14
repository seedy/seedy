import makeStyles from '@material-ui/core/styles/makeStyles';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// CONSTANTS
const PLACES = [
  { coordinates: [46.122, 4.392], title: 'Ranchal', subtitle: 'Chez moi', img: 'places/home.jpg' },
  { coordinates: [45.773, 4.832], title: 'Rue des pierres plantées, Croix-Rousse, Lyon', subtitle: 'Une rue vivante, une belle vue' },
  { coordinates: [45.434, -1.154], title: 'Plage du Gurp', subtitle: 'Le surf spot de mon coeur', img: 'places/gurp.jpg' },
  { coordinates: [45.116, 6.128], title: 'Glacier de la Sarenne, Alpe d\'Huez', subtitle: 'La piste la plus longue d\'Europe', img: 'places/sarenne.jpg' },
  { coordinates: [56.379, -5.554], title: 'McCaig\'s tower, Oban', subtitle: 'Un superbe point de vue sur la mer depuis une ancienne tour', img: 'places/mccaig.jpg' },
  { coordinates: [56.379, -5.554], title: 'Gylen Castle, Kerrera', subtitle: 'Mon lieu préféré sur Terre', img: 'places/gylen.jpg' },
  { coordinates: [55.861, -4.250], title: 'George Square, Glasgow', subtitle: 'Haa, Glasgow...' },
  { coordinates: [55.954, -3.181], title: 'Calton Hill, Edinburgh', subtitle: 'Une magnifique vue sur Edinburgh', img: 'places/calton.jpg' },
  { coordinates: [45.120, 6.556], title: 'Pic du Mont Thabor', subtitle: '1400D+ en 2 jours !', img: 'places/thabor.jpg' },
  { coordinates: [52.672, -8.571], title: 'Stables Club, Limerick', subtitle: 'Les TGIF Erasmus étaient incroyables' },
  { coordinates: [56.101, -4.637], title: 'Luss Pier', subtitle: 'Un lieu incroyable pour se ressourcer', img: 'places/luss.jpg' },
  { coordinates: [45.369, 5.811], title: 'Le Grand Som, Chartreuse', subtitle: 'Une randonnée au milieu des arbres' },
  { coordinates: [48.687, -2.317], title: 'Pointe du Cap Fréhel', subtitle: 'Des falaises à perte de vue', img: 'places/frehel.jpg' },
  { coordinates: [48.086, -4.502], title: 'Beuzec-Cap-Sizun', subtitle: 'Un magnifique spot de camping sauvage', img: 'places/beuzec.jpg' },
  { coordinates: [45.002, -1.202], title: 'Plage de Lacanau Océan', subtitle: 'Un spot de surf bien connu des mordus', img: 'places/lacanau.jpg' },
  { coordinates: [44.595, -1.211], title: 'Dune du Pilat', subtitle: 'Le sable, la vue' },
  { coordinates: [51.052, 13.736], title: 'Dresden Royal Castle', subtitle: 'Un château magnifique' },
  { coordinates: [-33.891, 151.275], title: 'Bondi Beach, Sydney', subtitle: 'Une plage à couper le souffle', img: 'places/bondi.jpg' },
  { coordinates: [48.046, -4.708], title: 'Baie des Trépassés, Cap Sizun', subtitle: 'Plage aux eaux bleues' },
  { coordinates: [43.866, 15.973], title: 'Krka National Park', subtitle: 'Des cascades, partout', img: 'places/krka.jpg' },
  { coordinates: [44.891, 13.798], title: 'Fort Punta Cristo, Pula', subtitle: 'Un ancien fort dans un cadre idyllique' },
  { coordinates: [47.510, -1.420], title: 'Joué sur Erdre', subtitle: 'Des lacs partout, site Natura 2000' },
  { coordinates: [45.081, 13.634], title: 'Rovinj', subtitle: 'Un village en hauteur, vue sur la Mer', img: 'places/rovinj.jpg' },
  { coordinates: [46.391, 14.016], title: 'Triglav National Park', subtitle: 'Des rivières bleutées, la moyenne montagne autour', img: 'places/triglav.jpg' },
  { coordinates: [45.784, 4.874], title: 'K-fet Insa Lyon', subtitle: 'Tant de souvenirs alcoolisés...' },
  { coordinates: [45.506, -73.589], title: 'Mont Royal, Montréal', subtitle: 'Découverte du patin à glace en plein air' },
  { coordinates: [45.436, 12.325], title: 'Musée de Vinci, Venise', subtitle: 'Les inventions de Léonard, au coeur des canaux' },
  { coordinates: [31.776, 35.234], title: 'Mur des Lamentations, Jérusalem', subtitle: 'La ferveur est palpable en ce lieu' },
  { coordinates: [40.952, -4.131], title: 'Alcazar, Ségovia', subtitle: 'Un très beau château, ouvert aux visites' },
  { coordinates: [48.202, 7.309], title: 'Châteaux de Ribeauvillé', subtitle: 'Entre village médiéval et châteaux, un lieu apaisant', img: 'places/ribeauville.jpg' },
  { coordinates: [57.273, -5.515], title: 'Eilean Donan Castle, Kyle', subtitle: 'Un château restauré au bord de l\'eau', img: 'places/eilean.jpg' },
  { coordinates: [43.757, 5.502], title: 'Etang de la Bonde, Lubéron', subtitle: 'Pause au calme au milieu d\'un séjour rando', img: 'places/bonde.jpg' },
  { coordinates: [43.919, 5.224], title: 'Près de Gordes, Lubéron', subtitle: 'Des falaises, des gorges, de la verdure', img: 'places/gordes.jpg' },
  { coordinates: [45.170, 5.936], title: 'Lac du Crozet, Isère', subtitle: 'Un magnifique lac de montagne au milieu de la brume', img: 'places/crozet.jpg' },
  { coordinates: [43.510, 16.408], title: 'Park Marjan, Split', subtitle: 'Un parc en haut de colline offrant une vue sur le port de Split', img: 'places/marjan.jpg' },
  { coordinates: [57.429, -5.818], title: 'Applecross', subtitle: 'Une petite île en face de la plage, accessible à marée basse', img: 'places/applecross.jpg' },
  { coordinates: [57.716, -5.685], title: 'Gairloch beach, Gairloch', subtitle: 'Une vue à couper le souffle', img: 'places/gairloch.jpg' },
  { coordinates: [57.318, -4.447], title: 'Loch Ness', subtitle: 'Camping sauvage entre un feu et le loch', img: 'places/ness.jpg' },
  { coordinates: [57.048, -3.561], title: 'Cairngorns National Park', subtitle: 'Calme, moutons, montagnes', img: 'places/cairngorns.jpg' },
  { coordinates: [45.249, 6.910], title: 'Lac du Mont-Cenis', subtitle: 'Une halte bien méritée avant la frontière française', img: 'places/cenis.jpg' },
  { coordinates: [56.876, -5.434], title: 'Jacobite train, Glenfinnan Viaduct', subtitle: 'Le train de Poudlard sur un viaduc !', img: 'places/jacobite.jpg' },
  { coordinates: [56.103, -4.675], title: 'Trossachs National Park', subtitle: 'Moutons!', img: 'places/trossachs.jpg' },
  { coordinates: [50.929, 1.714], title: 'Falaises du Cap Blanc Nez, Sangatte', subtitle: 'Les falaises du nord pas', img: 'places/sangatte.jpg' },
];

// HOOKS
const useStyles = makeStyles(() => ({
  imgSmall: {
    width: 200,
    height: 150,
  },
  textSecondaryPopup: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
}));

// COMPONENTS
const MapPlaces = (props) => {
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
      {PLACES.map(({ coordinates, title, subtitle, img }) => (
        <Marker key={title} position={coordinates}>
          <Popup>
            <Box width="100%" height="100%" display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h6">{title}</Typography>
              <Typography variannt="subtitle1" className={classes.textSecondaryPopup}>{subtitle}</Typography>
              {img && (
                <img className={classes.imgSmall} src={img} alt={title} />
              )}
            </Box>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapPlaces;
