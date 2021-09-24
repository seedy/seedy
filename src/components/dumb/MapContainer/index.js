import styled from '@mui/material/styles/styled';

import { MapContainer as LeafletMapContainer } from 'react-leaflet';

// COMPONENTS
const MapContainer = styled(LeafletMapContainer)({
  height: 'calc(100vh - 64px - 48px - 48px - 28px)',
  width: '100%',
});

export default MapContainer;
