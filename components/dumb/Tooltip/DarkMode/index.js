import { useMemo } from 'react';

import { PropTypes } from 'prop-types';

import Tooltip from '@mui/material/Tooltip';

// CONSTANTS
const DARK_TITLE = 'Activer le light mode';
const LIGHT_TITLE = 'Activer le dark mode';

// COMPONENTS
const TooltipDarkMode = ({ dark, ...props }) => {
  const title = useMemo(
    () => (dark ? DARK_TITLE : LIGHT_TITLE),
    [dark],
  );

  return (
    <Tooltip title={title} {...props} />
  );
};

TooltipDarkMode.propTypes = {
  dark: PropTypes.bool,
};

TooltipDarkMode.defaultProps = {
  dark: false,
};

export default TooltipDarkMode;
