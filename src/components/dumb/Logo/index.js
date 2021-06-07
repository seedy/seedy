import { forwardRef, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import Vivus from 'vivus';

import isNil from 'helpers/isNil';

import { ReactComponent as ShortLogo } from './Seedy.svg';
import { ReactComponent as LongLogo } from './SeedyDupuis.svg';

// CONSTANTS
const VIVUS_ID = 'LOGO_VIVUS';

// COMPONENTS
const Logo = forwardRef(({ short, ...props }, ref) => {
  const vivusRef = useRef();

  const onMount = useCallback(
    (node) => {
      if (!isNil(ref)) {
        ref.current = node; // eslint-disable-line no-param-reassign
      }
      vivusRef.current = new Vivus(VIVUS_ID, {
        type: 'sync',
        duration: 30,
      });
    },
    [ref, vivusRef],
  );

  const onClick = useCallback(
    () => {
      if (!isNil(vivusRef.current)) {
        vivusRef.current.reset().play();
      }
    },
    [vivusRef],
  );

  if (short) {
    return (
      <ShortLogo
        id={VIVUS_ID}
        ref={onMount}
        onClick={onClick}
        {...props}
      />
    );
  }

  return (
    <LongLogo
      id={VIVUS_ID}
      ref={onMount}
      onClick={onClick}
      {...props}
    />
  );
});

Logo.propTypes = {
  short: PropTypes.bool,
};

Logo.defaultProps = {
  short: false,
};

export default Logo;
