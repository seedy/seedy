import { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import useIsDownSm from 'hooks/useIsDownSm';

import AvatarMe from 'components/dumb/Avatar/Me';
import Logo from 'components/dumb/Logo';
import Button from '@material-ui/core/Button';

// COMPONENTS
const ButtonHome = forwardRef(({ avatarProps, logo, ...props }, ref) => {
  const isXs = useIsDownSm();

  const size = useMemo(
    () => (isXs ? 'small' : 'medium'),
    [isXs],
  );

  return (
    <Button
      ref={ref}
      variant="outlined"
      startIcon={<AvatarMe {...avatarProps} />}
      size={size}
      {...props}
    >
      {logo}
    </Button>
  );
});

ButtonHome.propTypes = {
  avatarProps: PropTypes.object,
  logo: PropTypes.node,
};

ButtonHome.defaultProps = {
  avatarProps: {},
  logo: <Logo />,
};

export default ButtonHome;
