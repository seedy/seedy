import { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import useIsDownMd from 'hooks/useIsDownMd';

import AvatarMe from 'components/dumb/Avatar/Me';
import LogoNavLink from 'components/smart/Logo/NavLink';
import ButtonHome from 'components/smart/Button/Home';
import routes from '../../../../../routes';

// COMPONENTS
const ButtonHomeLink = forwardRef(({ avatarProps, ...props }, ref) => {

  const isDownMd = useIsDownMd();

  const size = useMemo(
    () => (isDownMd ? 'small' : 'medium'),
    [isDownMd],
  );

  return (
    <ButtonHome
      ref={ref}
      variant="outlined"
      color="secondary"
      component={Link}
      href={routes._}
      startIcon={<AvatarMe {...avatarProps} />}
      size={size}
      logo={<LogoNavLink href={routes._} />}
      {...props}
    />
  );
});

ButtonHomeLink.propTypes = {
  avatarProps: PropTypes.object,
};

ButtonHomeLink.defaultProps = {
  avatarProps: {},
};

export default ButtonHomeLink;
