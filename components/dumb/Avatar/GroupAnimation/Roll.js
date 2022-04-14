import AvatarGroup from '@mui/material/AvatarGroup';
import styled from '@mui/material/styles/styled';
import { keyframes } from '@emotion/react';
import { useCallback, useState } from 'react';
import Button from '@mui/material/Button';

const roll = keyframes`
  0% {
    transform: rotate(0deg) translateX(0)
  }

  30% {
    transform: translateX(20%) rotate(90deg)
  }

  60% {
    transform: rotate(0deg) translateX(0)
  }

  100% {
    transform: translateX(0)
  }
`;

const AvatarGroupAnimated = styled(AvatarGroup)({
  '& .MuiAvatar-root': {
    '&:last-of-type': {
      animation: `${roll} 3s ease infinite`,
      animationPlayState: 'running',
    },
    '&:nth-of-type(2)': {
      animation: `${roll} 3s ease infinite 1s`,
    },
    '&:first-of-type': {
      animation: `${roll} 3s ease infinite 2s`,
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

const AvatarGroupAnimationRoll = (props) => {
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

export default AvatarGroupAnimationRoll;
