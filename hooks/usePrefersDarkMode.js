import useMediaQuery from '@mui/material/useMediaQuery';

// HOOKS
const usePrefersDarkMode = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return prefersDarkMode;
};

export default usePrefersDarkMode;
