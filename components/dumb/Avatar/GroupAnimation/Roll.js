import AvatarGroup from '@mui/material/AvatarGroup';
import styled from '@mui/material/styles/styled';
import { keyframes } from '@emotion/react';
import { animationPaused, prefersReducedMotionNoAnimation } from 'helpers/styles/animation';
import AvatarGroupAnimation from 'components/dumb/Avatar/GroupAnimation';

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

const AvatarGroupAnimated = styled(AvatarGroup, {
  shouldForwardProp: (prop) => prop !== 'paused',
})({
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
    ...prefersReducedMotionNoAnimation(),
  },
}, (props) => ({
  '& .MuiAvatar-root': animationPaused(props),
}));

const AvatarGroupAnimationRoll = (props) => (
  <AvatarGroupAnimation component={AvatarGroupAnimated} {...props} />
);

export default AvatarGroupAnimationRoll;
