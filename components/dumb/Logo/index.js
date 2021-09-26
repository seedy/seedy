import { forwardRef, useCallback, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@mui/material/styles/styled';
import Vivus from 'vivus';

import isNil from 'helpers/isNil';
import isFunction from 'helpers/isFunction';

import LogoShort from 'components/dumb/Logo/Short';
import LogoLong from 'components/dumb/Logo/Long';

// CONSTANTS
const VIVUS_ID = 'LOGO_VIVUS';

// STYLED
const LogoShortStyled = styled(LogoShort)(({ theme }) => ({
  stroke: theme.palette.text.primary,
}));

const LogoLongStyled = styled(LogoLong)(({ theme }) => ({
  stroke: theme.palette.text.primary,
}));

// COMPONENTS
const Logo = forwardRef(({ short, onClick, ...props }, ref) => {
  const vivusRef = useRef();

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

  useEffect(
    () => {
      vivusRef.current = new Vivus(VIVUS_ID, {
        type: 'sync',
        duration: 30,
      });
    },
    [vivusRef],
  );

  if (short) {
    return (
      <LogoShortStyled
        id={VIVUS_ID}
        ref={ref}
        onClick={handleClick}
        {...props}
      />
    );
  }

  return (
    <LogoLongStyled
      id={VIVUS_ID}
      ref={ref}
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
