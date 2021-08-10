import { useLocation, useHistory, matchPath } from 'react-router-dom';

import routes from 'routes';

import isNil from 'helpers/isNil';
import pick from 'helpers/pick';
import head from 'helpers/head';

import { useCallback, useMemo } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import FaceIcon from '@material-ui/icons/Face';
import WorkIcon from '@material-ui/icons/Work';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

// CONSTANTS
const PRO = 'pro';
const ABOUT = 'about';
const SOCIAL = 'social';

const TAB_ROUTES = pick([PRO, ABOUT, SOCIAL], routes);

// COMPONENTS
const TabsRoutes = (props) => {
  const { pathname } = useLocation();
  const { push } = useHistory();

  const routePair = useMemo(
    () => Object.entries(TAB_ROUTES)
      .find(([, tabRoute]) => !isNil(matchPath(pathname, {
        path: tabRoute,
      }))),
    [pathname],
  );

  const value = useMemo(
    () => (isNil(routePair) ? false : head(routePair)),
    [routePair],
  );

  const handleChange = useCallback(
    (e, newValue) => push(routes[newValue]),
    [push],
  );

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="fullWidth"
      indicatorColor="secondary"
      textColor="secondary"
      aria-label="tabs"
      {...props}
    >
      <Tab icon={<WorkIcon />} label={PRO} value={PRO} />
      <Tab icon={<FaceIcon />} label={SOCIAL} value={SOCIAL} />
      <Tab icon={<FingerprintIcon />} label={ABOUT} value={ABOUT} />
    </Tabs>
  );
};

export default TabsRoutes;
