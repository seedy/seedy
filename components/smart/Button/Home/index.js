import { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import useIsDownMd from 'hooks/useIsDownMd';

import Logo from 'components/dumb/Logo';
import Button from '@mui/material/Button';
import Image from 'next/image';
import styled from '@mui/material/styles/styled';
import ranchal from 'public/ranchal.jpg';

// COMPONENTS
const AvatarImage = styled(Image)({
  borderRadius: '50%',
  userSelect: 'none',
  objectFit: 'cover',
});

const ButtonHome = forwardRef(({ avatarProps, logo, ...props }, ref) => {
  const isDownMd = useIsDownMd();

  const size = useMemo(
    () => (isDownMd ? 'small' : 'medium'),
    [isDownMd],
  );

  return (
    <Button
      ref={ref}
      startIcon={<AvatarImage priority placeholder="blur" src={ranchal} width={40} height={40} {...avatarProps} />}
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
