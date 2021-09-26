import { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from '@mui/material/styles/styled';

import { useRouter } from 'next/router';

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
const LogoNavLink = forwardRef(({ href, match, ...props }, ref) => {
  const { pathname } = useRouter();

  const active = useMemo(
    () => {
      const exactMatch = href === pathname;
      return isNil(match)
        ? exactMatch
        : match === pathname;
    },
    [href, match, pathname],
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
  href: PropTypes.string.isRequired,
  match: PropTypes.string,
  onClick: PropTypes.func,
};

LogoNavLink.defaultProps = {
  match: null,
  onClick: null,
};

export default LogoNavLink;
