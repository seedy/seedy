import styled from '@mui/material/styles/styled';

import { MapContainer as LeafletMapContainer } from 'react-leaflet';

// COMPONENTS
const MapContainer = styled(LeafletMapContainer)({
  height: 500,
  width: '100%',
});

export default MapContainer;
