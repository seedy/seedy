import makeStyles from '@material-ui/core/styles/makeStyles';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// HOOKS
const useStyles = makeStyles(() => ({
  mapContainer: {
    height: 500,
  },
}));

// COMPONENTS
const Map = () => {
  const classes = useStyles();

  return (
    <MapContainer
      className={classes.mapContainer}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup.
          {' '}
          <br />
          {' '}
          Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
