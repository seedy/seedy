import PropTypes from 'prop-types';

import isNil from 'helpers/isNil';

import { useMemo } from 'react';

import Image from 'next/image';

// CONSTANTS
const BASE_URL = 'https://www.codewars.com/users/pro.seedy/badges';
const ALT = 'CodeWars';

const SIZES = {
  micro: {
    width: 120,
    height: 20,
  },
  small: {
    width: 300,
    height: 20,
  },
  large: {
    width: 400,
    height: 40,
  },
};

// COMPONENTS
const IconCodeWars = ({ size }) => {
  const hasSize = useMemo(
    () => !isNil(size),
    [size],
  );

  const src = useMemo(
    () => `${BASE_URL}/${size}`,
    [size],
  );

  const sizeProps = useMemo(
    () => SIZES[size],
    [size],
  );

  if (hasSize) {
    return (
      <Image src={src} alt={ALT} {...sizeProps} />
    );
  }

  return (
    <Image
      src={`${BASE_URL}/large`}
      alt={ALT}
      width={400}
      height={40}
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
