import { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import routes from 'routes';

import { useRouter } from 'next/router';

import IconButtonLink from 'components/dumb/IconButton/Link';
import Tooltip from '@mui/material/Tooltip';

import InfoIcon from '@mui/icons-material/Info';

// COMPONENTS
const IconButtonAbout = forwardRef(({ title, ...props }, ref) => {
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
    <Tooltip title={title}>
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

IconButtonAbout.propTypes = {
  title: PropTypes.string.isRequired,
};

export default IconButtonAbout;
