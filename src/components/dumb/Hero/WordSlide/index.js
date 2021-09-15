import PropTypes from 'prop-types';
import clsx from 'clsx';

import makeStyles from '@material-ui/core/styles/makeStyles';

import Typography from '@material-ui/core/Typography';
import { useMemo } from 'react';

// CONSTANTS
const HEIGHT = 60;

// HELPERS
const writeChangeSteps = (items) => {
  const styles = {};
  const steps = items.length;

  const forwardCount = steps - 1;

  const animationPercent = Math.round((100 - forwardCount) / steps);

  const delay = 5;

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

// HOOKS
const useDynamicKeyFrames = (props) => {
  const useStyles = makeStyles((theme) => ({
    '@keyframes change': {
      '0%': { transform: 'translate3d(0,0,0)' },
      '100%': { transform: 'translate3d(0,0,0)' },
      ...writeChangeSteps(props.items),
    },
    list: {
      marginTop: 0,
      paddingLeft: theme.spacing(2),
      textAlign: 'left',
      animation: '$change 10s 1s infinite backwards',
    },
  }));
  return useStyles(props);
};

const useStyles = makeStyles((theme) => ({
  '@keyframes opacity': {
    '0%': { opacity: 0 },
    '100%': { opacity: 0 },
    '50%': { opacity: 1 },
  },
  container: {
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    padding: theme.spacing(0, 2),
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
      color: theme.palette.divider,
      fontSize: '42px',
      lineHeight: `${HEIGHT}px`,
      animation: '$opacity 2s infinite',
    },
  },
  text: {
    display: 'inline',
    float: 'left',
    margin: 0,
    lineHeight: 'inherit',
  },
  item: {
    margin: 0,
    lineHeight: 'inherit',
    height: HEIGHT,
    '&:after': {
      content: '","',
    },
    '&:last-child': {
      color: theme.palette.secondary.main,
      '&:after': {
        content: '"."',
      },
    },
  },
}));

// COMPONENTS
const HeroWordSlide = ({ children, items, className, ...props }) => {
  const classes = useStyles();

  const styleProps = useMemo(
    () => ({ items }),
    [items],
  );

  const dynamicKeyFramesClasses = useDynamicKeyFrames(styleProps);

  return (
    <div className={clsx(classes.container, className)}>
      <Typography variant="h3" className={classes.text} {...props}>{children}</Typography>
      <div className={dynamicKeyFramesClasses.list}>
        {items.map((item) => (
          <Typography variant="h3" key={item} className={classes.item}>
            {item}
          </Typography>
        ))}
      </div>
    </div>
  );
};

HeroWordSlide.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.string),
};

HeroWordSlide.defaultProps = {
  className: '',
  children: null,
  items: [],
};

export default HeroWordSlide;
