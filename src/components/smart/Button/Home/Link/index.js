import { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import routes from 'routes';

import { generatePath, Link } from 'react-router-dom';

import useIsXs from 'hooks/useIsXs';

import AvatarMe from 'components/dumb/Avatar/Me';
import LogoNavLink from 'components/smart/Logo/NavLink';
import ButtonHome from 'components/smart/Button/Home';

// COMPONENTS
const ButtonHomeLink = forwardRef(({ avatarProps, ...props }, ref) => {
  const homeTo = generatePath(routes._);

  const isXs = useIsXs();

  const size = useMemo(
    () => (isXs ? 'small' : 'medium'),
    [isXs],
  );

  return (
    <ButtonHome
      ref={ref}
      variant="outlined"
      component={Link}
      to={homeTo}
      startIcon={<AvatarMe {...avatarProps} />}
      size={size}
      logo={<LogoNavLink to={homeTo} exact />}
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
