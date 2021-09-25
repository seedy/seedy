import { useLocation, useHistory, matchPath } from 'react-router-dom';

import routes from 'routes';

import isNil from 'helpers/isNil';
import pick from 'helpers/pick';
import head from 'helpers/head';

import { useCallback, useMemo } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import PersonPinIcon from '@mui/icons-material/PersonPin';

// CONSTANTS
const ABOUT = 'about';

const TAB_ROUTES = pick([ABOUT], routes);

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
      <Tab icon={<PersonPinIcon />} label={ABOUT} value={ABOUT} />
    </Tabs>
  );
};

export default TabsRoutes;
