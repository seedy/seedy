import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import Button from '@mui/material/Button';
import usePrefersReducedMotion from 'hooks/usePrefersReducedMotion';

const AvatarGroupAnimation = ({ component: Component, ...props }) => {
  const [paused, setPaused] = useState(false);

  const prefersReducedMotion = usePrefersReducedMotion();

  const onToggle = useCallback((e) => {
    e.stopPropagation();
    setPaused((prev) => !prev);
  }, [setPaused]);
  return (
    <Button variant="text" color="inherit" onClick={onToggle} disabled={prefersReducedMotion}>
      <Component paused={paused} {...props} />
    </Button>
  );
};

AvatarGroupAnimation.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default AvatarGroupAnimation;
