export const prefersReducedMotionNoAnimation = () => ({
  '@media (prefers-reduced-motion)': {
    animation: 'none !important',
  },
});

export const animationPaused = ({ paused }) => paused && {
  animationPlayState: 'paused !important',
};
