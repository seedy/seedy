import { forwardRef, useMemo } from 'react';

import routes from 'routes';

import { useRouter } from 'next/router';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';

import InfoIcon from '@mui/icons-material/Info';

// CONSTANTS
const ABOUT = 'About';


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
      <IconButton
        ref={ref}
        component={Link}
        href={routes.about}
        color={activeColor}
        {...props}
        size="large"
      >
        <InfoIcon />
      </IconButton>
    </Tooltip>
  );
});

export default IconButtonAbout;
