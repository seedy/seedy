import useMediaQuery from '@mui/material/useMediaQuery';

// HOOKS
const usePrefersReducedMotion = () => {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion)');

  return prefersReducedMotion;
};

export default usePrefersReducedMotion;
