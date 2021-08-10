import { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

import useIsXs from 'hooks/useIsXs';

// CONSTANTS
export const DrawerShrinkableContext = createContext({
  shrink: false,
  onShrinkToggle: null,
});

// HOOKS
export const useDrawerShrinkableContext = () => useContext(DrawerShrinkableContext);

// COMPONENTS
const DrawerShrinkableContextProvider = ({ children, ...props }) => {
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
      onShrinkToggle,
    }),
    [shrink, onShrinkToggle],
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
  children: PropTypes.node,
};

DrawerShrinkableContextProvider.defaultProps = {
  children: null,
};

export default DrawerShrinkableContextProvider;
