import { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from '@mui/material/styles/styled';

import { matchPath, useLocation } from 'react-router-dom';

import isNil from 'helpers/isNil';

import Logo from 'components/dumb/Logo';

// STYLED
const LogoActive = styled(Logo, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active, theme }) => ({
  ...(active && {
    stroke: `${theme.palette.secondary.main} !important`,
  }),
}));

// COMPONENTS
const LogoNavLink = forwardRef(({ to, exact, strict, ...props }, ref) => {
  const { pathname } = useLocation();

  const active = useMemo(
    () => !isNil(matchPath(pathname, {
      path: to,
      exact,
      strict,
    })),
    [to, exact, strict, pathname],
  );
  return (
    <LogoActive
      active={active}
      ref={ref}
      {...props}
    />
  );
});

LogoNavLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]).isRequired,
  exact: PropTypes.bool,
  strict: PropTypes.bool,
  onClick: PropTypes.func,
};

LogoNavLink.defaultProps = {
  exact: false,
  strict: false,
  onClick: null,
};

export default LogoNavLink;
