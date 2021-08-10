import { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

import usePrefersDarkMode from 'hooks/usePrefersDarkMode';

// CONSTANTS
export const DarkModeContext = createContext({
  dark: false,
  onSwitchMode: null,
});

// HOOKS
export const useDarkModeContext = () => useContext(DarkModeContext);

// COMPONENTS
const DarkModeContextProvider = ({ children, ...props }) => {
  const prefersDarkMode = usePrefersDarkMode();

  const prefersDarkModeOrDefault = useMemo(
    () => prefersDarkMode || false,
    [prefersDarkMode],
  );

  const [dark, setDark] = useState(prefersDarkModeOrDefault);

  const onSwitchMode = useCallback(
    () => {
      setDark((prevDark) => !prevDark);
    },
    [setDark],
  );

  const value = useMemo(
    () => ({
      dark,
      onSwitchMode,
    }),
    [dark, onSwitchMode],
  );

  useEffect(
    () => {
      if (prefersDarkMode) {
        setDark(true);
      }
    },
    [prefersDarkMode, setDark],
  );

  return (
    <DarkModeContext.Provider value={value} {...props}>
      {children}
    </DarkModeContext.Provider>
  );
};

DarkModeContextProvider.propTypes = {
  children: PropTypes.node,
};

DarkModeContextProvider.defaultProps = {
  children: null,
};

export default DarkModeContextProvider;
