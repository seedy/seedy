import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import routes from 'routes';

import { generatePath, Link } from 'react-router-dom';

import AvatarMe from 'components/dumb/Avatar/Me';
import LogoNavLink from 'components/smart/Logo/NavLink';
import Button from '@material-ui/core/Button';

const ButtonHome = forwardRef(({ avatarProps, logoProps, ...props }, ref) => {
  const homeTo = generatePath(routes._);

  return (
    <Button
      ref={ref}
      variant="outlined"
      component={Link}
      to={homeTo}
      startIcon={<AvatarMe {...avatarProps} />}
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
