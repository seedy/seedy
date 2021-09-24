import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default () => {
  const theme = useTheme();
  const isDownSm = useMediaQuery(theme.breakpoints.down('md'));
  return isDownSm;
};
