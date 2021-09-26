import { useMemo } from 'react';

import { PropTypes } from 'prop-types';

import Tooltip from '@mui/material/Tooltip';

// COMPONENTS
const TooltipDarkMode = ({ dark, titleDark, titleLight, ...props }) => {
  const title = useMemo(
    () => (dark ? titleDark : titleLight),
    [dark, titleDark, titleLight],
  );

  return (
    <Tooltip title={title} {...props} />
  );
};

TooltipDarkMode.propTypes = {
  dark: PropTypes.bool,
  titleDark: PropTypes.string.isRequired,
  titleLight: PropTypes.string.isRequired,
};

TooltipDarkMode.defaultProps = {
  dark: false,
};

export default TooltipDarkMode;
