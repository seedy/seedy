import { forwardRef, useMemo } from 'react';

import routes from 'routes';

import { useRouter } from 'next/router';

import IconButtonLink from 'components/dumb/IconButton/Link';
import Tooltip from '@mui/material/Tooltip';

import InfoIcon from '@mui/icons-material/Info';

// CONSTANTS
const ABOUT = 'A propos';


// COMPONENTS
const IconButtonAbout = forwardRef((props, ref) => {
  const { pathname } = useRouter();

  const active = useMemo(
    () => pathname === routes.about,
    [pathname],
  );

  const activeColor = useMemo(
    () => (active ? 'secondary' : undefined),
    [active],
  );

  return (
    <Tooltip title={ABOUT}>
      <IconButtonLink
        ref={ref}
        href={routes.about}
        color={activeColor}
        {...props}
        size="large"
      >
        <InfoIcon />
      </IconButtonLink>
    </Tooltip>
  );
});

export default IconButtonAbout;
