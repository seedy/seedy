import AvatarGroup from '@mui/material/AvatarGroup';
import styled from '@mui/material/styles/styled';
import { keyframes } from '@emotion/react';
import { useCallback, useState } from 'react';
import Button from '@mui/material/Button';

const spring = keyframes`
  0% {
    transform: scale(1) translateY(0)
  }

  30% {
    transform: scale(1.2, 0.6)
  }

  45% {
    transform: scale(0.8, 1.1) translateY(-35%)
  }

  60% {
    transform: translateY(0%)
  }

  100% {
    transform: translateY(0%)
  }
`;

const AvatarGroupAnimated = styled(AvatarGroup)({
  '& .MuiAvatar-root': {
    '&:last-of-type': {
      animation: `${spring} 3s ease infinite`,
      animationPlayState: 'running',
    },
    '&:nth-of-type(2)': {
      animation: `${spring} 3s ease infinite 1s`,
    },
    '&:first-of-type': {
      animation: `${spring} 3s ease infinite 2s`,
    },
    '@media (prefers-reduce-motion)': {
      animation: 'none !important',
    },
  },
}, (props) => props.paused && ({
  '& .MuiAvatar-root': {
    animationPlayState: 'paused !important',
  },
}));

const AvatarGroupAnimation = (props) => {
  const [paused, setPaused] = useState(false);

  const onToggle = useCallback((e) => {
    e.stopPropagation();
    setPaused((prev) => !prev);
  }, [setPaused]);
  return (
    <Button variant="text" color="inherit" onClick={onToggle}>
      <AvatarGroupAnimated paused={paused} {...props} />
    </Button>
  );
};

export default AvatarGroupAnimation;
