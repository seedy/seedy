import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import routes from 'routes';

import Link from 'next/link';
import LogoNavLink from 'components/smart/Logo/NavLink';
import ButtonHome from 'components/smart/Button/Home';

// COMPONENTS
const ButtonHomeLink = forwardRef(({ avatarProps, ...props }, ref) => (
  <Link href={routes._} passHref>
    <ButtonHome
      ref={ref}
      component="a"
      variant="text"
      color="secondary"
      avatarProps={avatarProps}
      logo={<LogoNavLink href={routes._} />}
      {...props}
    />
  </Link>
));

ButtonHomeLink.propTypes = {
  avatarProps: PropTypes.object,
};

ButtonHomeLink.defaultProps = {
  avatarProps: {},
};

export default ButtonHomeLink;
