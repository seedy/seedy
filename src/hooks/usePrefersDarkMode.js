import useMediaQuery from '@mui/material/useMediaQuery';

export default () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return prefersDarkMode;
};
