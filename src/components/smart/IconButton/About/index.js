import { forwardRef, useMemo } from 'react';
import { useLocation, Link, matchPath } from 'react-router-dom';

import routes from 'routes';

import isNil from 'helpers/isNil';

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import InfoIcon from '@material-ui/icons/Info';

// CONSTANTS
const ABOUT = 'About';


// COMPONENTS
const IconButtonAbout = forwardRef((props, ref) => {
  const { pathname } = useLocation();

  const active = useMemo(
    () => !isNil(matchPath(pathname, {
      path: routes.about,
      exact: true,
      strict: true,
    })),
    [pathname],
  );

  const activeColor = useMemo(
    () => (active ? 'secondary' : undefined),
    [active],
  );

  return (
    <Tooltip title={ABOUT}>
      <IconButton ref={ref} component={Link} to={routes.about} color={activeColor} {...props}>
        <InfoIcon />
      </IconButton>
    </Tooltip>
  );
});

export default IconButtonAbout;
