import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// HOOKS
const useIsDownMd = () => {
  const theme = useTheme();
  const isDownSm = useMediaQuery(theme.breakpoints.down('md'));
  return isDownSm;
};

export default useIsDownMd;
