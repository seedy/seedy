import { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { matchPath, useLocation } from 'react-router-dom';

import isNil from 'helpers/isNil';

import Logo from 'components/dumb/Logo';
import makeStyles from '@material-ui/core/styles/makeStyles';

// HOOKS
const useStyles = makeStyles((theme) => ({
  navLinkActive: {
    stroke: `${theme.palette.secondary.main} !important`,
  },
}));

// COMPONENTS
const LogoNavLink = forwardRef(({ to, exact, strict, ...props }, ref) => {
  const classes = useStyles();

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
    <Logo
      className={clsx({ [classes.navLinkActive]: active })}
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
