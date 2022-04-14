import AvatarGroup from '@mui/material/AvatarGroup';
import styled from '@mui/material/styles/styled';
import { keyframes } from '@emotion/react';
import { animationPaused, prefersReducedMotionNoAnimation } from 'helpers/styles/animation';
import AvatarGroupAnimation from 'components/dumb/Avatar/GroupAnimation';

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

const AvatarGroupAnimated = styled(AvatarGroup, {
  shouldForwardProp: (prop) => prop !== 'paused',
})({
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
    ...prefersReducedMotionNoAnimation(),
  },
}, (props) => ({
  '& .MuiAvatar-root': animationPaused(props),
}));

const AvatarGroupAnimationSpring = (props) => (
  <AvatarGroupAnimation component={AvatarGroupAnimated} {...props} />
);

export default AvatarGroupAnimationSpring;
