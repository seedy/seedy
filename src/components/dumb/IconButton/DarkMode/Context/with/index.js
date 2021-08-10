import { forwardRef } from 'react';

import { useDarkModeContext } from 'components/dumb/IconButton/DarkMode/Context';

// HOC
const withDarkModeContext = (Component) => {
  const IconButtonDarkModeContextHOC = forwardRef((props, ref) => {
    const context = useDarkModeContext();

    return (
      <Component ref={ref} {...props} {...context} />
    );
  });

  return IconButtonDarkModeContextHOC;
};

export default withDarkModeContext;
