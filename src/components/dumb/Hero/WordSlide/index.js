import PropTypes from 'prop-types';

import styled from '@mui/material/styles/styled';
import { keyframes } from '@emotion/react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// CONSTANTS
const HEIGHT = 60;

// HELPERS
const writeChangeSteps = (items) => {
  const styles = {};
  const steps = items.length;

  const forwardCount = steps - 1;

  const animationPercent = Math.round((100 - forwardCount) / steps);

  const delay = 5;

  styles[`${delay}%`] = {
    transform: 'translate3d(0,0,0)',
  };

  for (let i = 1; i <= forwardCount; i += 1) {
    styles[`${i * animationPercent}%`] = {
      transform: `translate3d(0,-${i * 100}%,0)`,
    };
    styles[`${i * animationPercent + delay}%`] = {
      transform: `translate3d(0,-${i * 100}%,0)`,
    };
  }

  return styles;
};

// KEYFRAMES
const change = (items) => keyframes({
  '0%': {
    transform: 'translate3d(0,0,0)',
  },
  '100%': {
    transform: 'translate3d(0,0,0)',
  },
  ...writeChangeSteps(items),
});

const opacity = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

// COMPONENTS
const SlideBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'items',
})(({ items, theme }) => ({
  textAlign: 'left',
  animation: `${change(items)} ${theme.transitions.easing.sharp} ${1.5 * items.length}s 1s infinite both`,
}));

const HeroWordSlide = ({ children, items, typographyProps, ...props }) => (
  <Box
    sx={{
      display: 'flex',
      overflow: 'hidden',
      position: 'relative',
      px: 2,
      height: HEIGHT,
      lineHeight: `${HEIGHT}px`,
      '&:before': {
        content: '"["',
        left: 0,
      },
      '&:after': {
        content: '"]"',
        right: 0,
      },
      '&:after, &:before': {
        position: 'absolute',
        top: 0,
        color: 'divider',
        fontSize: '42px',
        lineHeight: `${HEIGHT}px`,
        animation: `${opacity} 2s infinite`,
      },
    }}
    {...props}
  >
    <Typography
      variant="h3"
      sx={{
        display: 'inline',
        float: 'left',
        margin: 0,
        lineHeight: 'inherit',
      }}
      {...typographyProps}
    >
      {children}
    </Typography>
    <SlideBox
      items={items}
      mt={0}
      pl={2}
    >
      {items.map((item) => (
        <Typography
          variant="h3"
          key={item}
          sx={{
            margin: 0,
            lineHeight: 'inherit',
            height: HEIGHT,
            '&:after': {
              content: '","',
            },
            '&:last-child': {
              color: 'secondary.main',
              '&:after': {
                content: '"."',
              },
            },
          }}
        >
          {item}
        </Typography>
      ))}
    </SlideBox>
  </Box>
);

HeroWordSlide.propTypes = {
  children: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.string),
  typographyProps: PropTypes.object,
};

HeroWordSlide.defaultProps = {
  children: null,
  items: [],
  typographyProps: {},
};

export default HeroWordSlide;
