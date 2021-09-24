import PropTypes from 'prop-types';

import isNil from 'helpers/isNil';

import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';

// CONSTANTS
const BASE_URL = 'https://www.codewars.com/users/pro.seedy/badges';
const ALT = 'CodeWars';

// COMPONENTS
const IconCodeWars = ({ size }) => {
  const theme = useTheme();

  const hasSize = useMemo(
    () => !isNil(size),
    [size],
  );

  const src = useMemo(
    () => `${BASE_URL}/${size}`,
    [size],
  );

  if (hasSize) {
    return (
      <img src={src} alt={ALT} />
    );
  }

  return (
    <img
      srcSet={`${BASE_URL}/large 400w,
    ${BASE_URL}/small 300w,
    ${BASE_URL}/micro 120w`}
      sizes={`(min-width:${theme.breakpoints.values.sm + 1}px) and (max-width:${theme.breakpoints.values.md}px) 300px,
    (max-width:${theme.breakpoints.values.sm}px) 120px,
    400px`}
      alt={ALT}
    />
  );
};

IconCodeWars.propTypes = {
  size: PropTypes.oneOf(['large', 'small', 'micro']),
};

IconCodeWars.defaultProps = {
  size: null,
};

export default IconCodeWars;
