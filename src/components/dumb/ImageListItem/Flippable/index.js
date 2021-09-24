import { forwardRef, useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import isFunction from 'helpers/isFunction';

import styled from '@mui/material/styles/styled';

import ImageListItem from '@mui/material/ImageListItem';
import ButtonBase from '@mui/material/ButtonBase';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';

// HELPERS
const shouldForwardProp = (prop) => prop !== 'flip';

// STYLED
const ImageListItemStyled = styled(ImageListItem, {
  shouldForwardProp,
})(({ flip }) => ({
  overflow: 'hidden',
  '& .MuiImageListItem-img': {
    perspective: '10px',
    transition: 'transform 0.8s',
    transformStyle: 'preserve-3d',
    ...(flip && {
      transform: 'rotateY(180deg)',
    }),
  },
}));

const BackdropFlippable = styled(Backdrop, {
  shouldForwardProp,
})(({ flip, theme }) => ({
  position: 'absolute',
  zIndex: 'auto',
  color: theme.palette.common.white,
  transition: `height ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeIn} !important`,
  ...(flip ? {
    height: '100%',
    top: 'auto',
    bottom: 0,
  } : {
    bottom: 0,
    top: 'auto',
    height: 48,
  }),
}));

const BoxContent = styled(Box, {
  shouldForwardProp,
})(({ flip }) => ({
  ...(flip && {
    display: 'flex',
    height: '100%',
    width: '100%',
  }),
}));

// COMPONENTS
const ImageListItemFlippable = forwardRef(({
  onClick, alt, src,
  front, back,
  frontProps, backProps,
  ...props
}, ref) => {
  const [flip, setFlip] = useState(false);

  const handleClick = useCallback(
    (e) => {
      if (isFunction(onClick)) {
        onClick(e);
      }
      setFlip((prevFlip) => !prevFlip);
    },
    [setFlip, onClick],
  );

  const onMouseLeave = useCallback(
    () => {
      setFlip(false);
    },
    [setFlip],
  );

  const contentProps = useMemo(
    () => (flip ? backProps : frontProps),
    [flip, backProps, frontProps],
  );

  return (
    <ImageListItemStyled
      ref={ref}
      component={ButtonBase}
      onClick={handleClick}
      onMouseEnter={handleClick}
      onMouseLeave={onMouseLeave}
      flip={flip}
      {...props}
    >
      <img
        ref={ref}
        alt={alt}
        src={src}
      />
      <BackdropFlippable
        open
        flip={flip}
      >
        <BoxContent
          p={1}
          flip={flip}
          {...contentProps}
        >
          {flip ? back : front}
        </BoxContent>
      </BackdropFlippable>
    </ImageListItemStyled>
  );
});

ImageListItemFlippable.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  front: PropTypes.node,
  back: PropTypes.node,
  frontProps: PropTypes.object,
  backProps: PropTypes.object,
};

ImageListItemFlippable.defaultProps = {
  onClick: null,
  front: null,
  back: null,
  frontProps: {},
  backProps: {},
};

export default ImageListItemFlippable;
