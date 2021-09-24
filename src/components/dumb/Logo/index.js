import { forwardRef, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@mui/material/styles/styled';
import Vivus from 'vivus';

import isNil from 'helpers/isNil';
import isFunction from 'helpers/isFunction';

import { ReactComponent as ShortLogo } from './Seedy.svg';
import { ReactComponent as LongLogo } from './SeedyDupuis.svg';

// CONSTANTS
const VIVUS_ID = 'LOGO_VIVUS';

// STYLED
const ShortLogoStyled = styled(ShortLogo)(({ theme }) => ({
  stroke: theme.palette.text.primary,
}));

const LongLogoStyled = styled(LongLogo)(({ theme }) => ({
  stroke: theme.palette.text.primary,
}));

// COMPONENTS
const Logo = forwardRef(({ short, onClick, ...props }, ref) => {
  const vivusRef = useRef();

  const onMount = useCallback(
    (node) => {
      if (!isNil(ref)) {
        ref.current = node; // eslint-disable-line no-param-reassign
      }
      vivusRef.current = new Vivus(VIVUS_ID, {
        type: 'sync',
        duration: 30,
      });
    },
    [ref, vivusRef],
  );

  const handleClick = useCallback(
    (e) => {
      if (!isNil(vivusRef.current)) {
        vivusRef.current.reset().play();
      }
      if (isFunction(onClick)) {
        onClick(e);
      }
    },
    [vivusRef, onClick],
  );

  if (short) {
    return (
      <ShortLogoStyled
        id={VIVUS_ID}
        ref={onMount}
        onClick={handleClick}
        {...props}
      />
    );
  }

  return (
    <LongLogoStyled
      id={VIVUS_ID}
      ref={onMount}
      onClick={handleClick}
      {...props}
    />
  );
});

Logo.propTypes = {
  short: PropTypes.bool,
  onClick: PropTypes.func,
};

Logo.defaultProps = {
  short: false,
  onClick: null,
};

export default Logo;
