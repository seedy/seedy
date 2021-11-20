import { forwardRef, useRef, useState, useCallback, useMemo, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';

import styled from '@mui/material/styles/styled';

import Image from 'next/image';
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
  alt, src,
  front, back,
  frontProps, backProps,
  width, height,
  ...props
}, ref) => {
  const innerRef = useRef(null);
  useImperativeHandle(ref, () => innerRef.current);

  const [flip, setFlip] = useState(false);

  const contentProps = useMemo(
    () => (flip ? backProps : frontProps),
    [flip, backProps, frontProps],
  );

  const onMouseEnter = useCallback(
    () => {
      setFlip(true);
    },
    [setFlip],
  );

  const onMouseLeave = useCallback(
    () => {
      setFlip(false);
    },
    [setFlip],
  );

  const onPointerUp = useCallback(
    () => {
      setFlip((prevFlip) => !prevFlip);
    },
    [setFlip],
  );

  return (
    <ImageListItemStyled
      ref={innerRef}
      component={ButtonBase}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onPointerUp={onPointerUp}
      flip={flip}
      {...props}
    >
      <Image
        className="MuiImageListItem-img"
        alt={alt}
        src={src}
        width={width}
        height={height}
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
  front: PropTypes.node,
  back: PropTypes.node,
  frontProps: PropTypes.object,
  backProps: PropTypes.object,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

ImageListItemFlippable.defaultProps = {
  front: null,
  back: null,
  frontProps: {},
  backProps: {},
};

export default ImageListItemFlippable;
