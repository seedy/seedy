import { MapContainer as LeafletMapContainer } from 'react-leaflet';
import styled from '@mui/material/styles/styled';
import { HEIGHT } from 'components/dumb/MapContainer';


// COMPONENTS
const MapContainer = styled(LeafletMapContainer)({
  height: HEIGHT,
  width: '100%',
});

export default MapContainer;
