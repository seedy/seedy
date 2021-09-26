import { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import routes from 'routes';

import useIsDownMd from 'hooks/useIsDownMd';

import Link from 'next/link';
import LogoNavLink from 'components/smart/Logo/NavLink';
import ButtonHome from 'components/smart/Button/Home';

// COMPONENTS
const ButtonHomeLink = forwardRef(({ avatarProps, ...props }, ref) => {
  const isDownMd = useIsDownMd();

  const size = useMemo(
    () => (isDownMd ? 'small' : 'medium'),
    [isDownMd],
  );

  return (
    <Link href={routes._} passHref>
      <ButtonHome
        ref={ref}
        component="a"
        variant="outlined"
        color="secondary"
        avatarProps={avatarProps}
        size={size}
        logo={<LogoNavLink href={routes._} />}
        {...props}
      />
    </Link>
  );
});

ButtonHomeLink.propTypes = {
  avatarProps: PropTypes.object,
};

ButtonHomeLink.defaultProps = {
  avatarProps: {},
};

export default ButtonHomeLink;
