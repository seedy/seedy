import MuiSkeleton from '@mui/material/Skeleton';
import { HEIGHT } from 'components/dumb/MapContainer';

const Skeleton = () => (
  <MuiSkeleton variant="rectangular" width="100%" height={HEIGHT} />
);


export default Skeleton;
