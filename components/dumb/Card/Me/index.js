import PropTypes from 'prop-types';

import styled from '@mui/material/styles/styled';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { forwardRef } from 'react';
import meJpg from 'public/me.jpg';

const ImageBg = styled(Image)({
  zIndex: -1,
  opacity: 0.3,
});

const CardMe = forwardRef(({ children, ...props }, ref) => (
  <Box ref={ref} position="relative" {...props}>
    {children}
    <ImageBg
      alt="Cédric DUPUIS"
      src={meJpg}
      title="Cédric DUPUIS"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      priority
      placeholder="blur"
    />
  </Box>
));

CardMe.propTypes = {
  children: PropTypes.node,
};

CardMe.defaultProps = {
  children: null,
};

export default CardMe;
