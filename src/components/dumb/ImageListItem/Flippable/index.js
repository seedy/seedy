import { forwardRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import isFunction from 'helpers/isFunction';

import makeStyles from '@material-ui/core/styles/makeStyles';

import ImageListItem from '@material-ui/core/ImageListItem';
import ButtonBase from '@material-ui/core/ButtonBase';
import Backdrop from '@material-ui/core/Backdrop';
import Box from '@material-ui/core/Box';

// HOOKS
const useStyles = makeStyles((theme) => ({
  image: {
    perspective: '10px',
    transition: 'transform 0.8s',
    transformStyle: 'preserve-3d',
  },
  flipping: {
    transform: 'rotateY(180deg)',
  },
  backdrop: {
    position: 'absolute',
    zIndex: 'auto',
    color: theme.palette.common.white,
    transition: `height ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeIn} !important`,
  },
  backdropFull: {
    height: '100%',
    top: 'auto',
    bottom: 0,
  },
  content: {
    padding: theme.spacing(1),
  },
  contentReverted: {
    display: 'flex',
    height: '100%',
    width: '100%',
    transform: 'rotateY(180deg)',
  },
  backdropBottom: {
    bottom: 0,
    top: 'auto',
    height: 48,
  },
}));

// COMPONENTS
const ImageListItemFlippable = forwardRef(({
  onClick, alt, src,
  front, back,
  classes,
  ...props
}, ref) => {
  const [flip, setFlip] = useState(false);

  const internalClasses = useStyles();

  const handleClick = useCallback(
    (e) => {
      if (isFunction(onClick)) {
        onClick(e);
      }
      setFlip((prevFlip) => !prevFlip);
    },
    [setFlip, onClick],
  );

  return (
    <ImageListItem
      ref={ref}
      component={ButtonBase}
      onClick={handleClick}
      onMouseEnter={handleClick}
      onMouseLeave={handleClick}
      classes={{
        root: classes.root,
        item: clsx(
          classes.item,
          internalClasses.image, {
            [internalClasses.flipping]: flip,
          },
        ),
      }}
      {...props}
    >
      <img
        ref={ref}
        className={classes.image}
        alt={alt}
        src={src}
      />
      <Backdrop
        open
        classes={{
          root: clsx(internalClasses.backdrop, {
            [internalClasses.backdropFull]: flip,
            [internalClasses.backdropBottom]: !flip,
          }),
        }}
      >
        <Box className={clsx(internalClasses.content, {
          [internalClasses.contentReverted]: flip,
          [classes.back]: flip,
          [classes.front]: !flip,
        })}
        >
          {flip ? back : front}
        </Box>
      </Backdrop>
    </ImageListItem>
  );
});

ImageListItemFlippable.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  classes: PropTypes.shape({
    root: PropTypes.string,
    item: PropTypes.string,
    image: PropTypes.string,
    front: PropTypes.string,
    back: PropTypes.string,
  }),
  front: PropTypes.node,
  back: PropTypes.node,
};

ImageListItemFlippable.defaultProps = {
  onClick: null,
  classes: {
    root: '',
    item: '',
    image: '',
    front: '',
    back: '',
  },
  front: null,
  back: null,
};

export default ImageListItemFlippable;
