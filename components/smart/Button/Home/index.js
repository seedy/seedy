import { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import useIsDownMd from 'hooks/useIsDownMd';

import AvatarMe from 'components/dumb/Avatar/Me';
import Logo from 'components/dumb/Logo';
import Button from '@mui/material/Button';

// COMPONENTS
const ButtonHome = forwardRef(({ avatarProps, logo, ...props }, ref) => {
  const isDownMd = useIsDownMd();

  const size = useMemo(
    () => (isDownMd ? 'small' : 'medium'),
    [isDownMd],
  );

  return (
    <Button
      ref={ref}
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
