import { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { DRAWER_WIDTH } from 'constants/drawers/sizing';

import useIsXs from 'hooks/useIsXs';

// CONSTANTS
// CONTEXT
export const DrawerShrinkableContext = createContext({
  shrink: false,
  width: DRAWER_WIDTH,
  onShrinkToggle: null,
});

// HOOKS
export const useDrawerShrinkableContext = () => useContext(DrawerShrinkableContext);

// COMPONENTS
const DrawerShrinkableContextProvider = ({ children, width, ...props }) => {
  const isXs = useIsXs();

  const [shrink, setShrink] = useState(false);

  const onShrinkToggle = useCallback(
    () => {
      setShrink((prevShrink) => !prevShrink);
    },
    [setShrink],
  );

  const value = useMemo(
    () => ({
      shrink,
      width,
      onShrinkToggle,
    }),
    [shrink, width, onShrinkToggle],
  );

  useEffect(
    () => {
      if (isXs) {
        setShrink(true);
      }
    },
    [isXs, setShrink],
  );

  return (
    <DrawerShrinkableContext.Provider value={value} {...props}>
      {children}
    </DrawerShrinkableContext.Provider>
  );
};

DrawerShrinkableContextProvider.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
};

DrawerShrinkableContextProvider.defaultProps = {
  width: DRAWER_WIDTH,
  children: null,
};

export default DrawerShrinkableContextProvider;
