import { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import routes from 'routes';

import { generatePath, Link } from 'react-router-dom';

import useIsXs from 'hooks/useIsXs';

import AvatarMe from 'components/dumb/Avatar/Me';
import LogoNavLink from 'components/smart/Logo/NavLink';
import Button from '@material-ui/core/Button';

const ButtonHome = forwardRef(({ avatarProps, logoProps, ...props }, ref) => {
  const homeTo = generatePath(routes._);

  const isXs = useIsXs();

  const size = useMemo(
    () => (isXs ? 'small' : 'medium'),
    [isXs],
  );

  return (
    <Button
      ref={ref}
      variant="outlined"
      component={Link}
      to={homeTo}
      startIcon={<AvatarMe {...avatarProps} />}
      size={size}
      {...props}
    >
      <LogoNavLink to={homeTo} exact {...logoProps} />
    </Button>
  );
});

ButtonHome.propTypes = {
  avatarProps: PropTypes.object,
  logoProps: PropTypes.object,
};

ButtonHome.defaultProps = {
  avatarProps: {},
  logoProps: {},
};

export default ButtonHome;
