import { forwardRef, useCallback } from 'react';
import PropTypes from 'prop-types';

import isFunction from 'helpers/isFunction';

import IconButton from '@mui/material/IconButton';
import TooltipDarkMode from 'components/dumb/Tooltip/DarkMode';

import DarkIcon from '@mui/icons-material/Brightness3';
import LightIcon from '@mui/icons-material/Brightness5';


// COMPONENTS
const IconButtonDarkMode = forwardRef(({
  dark, titleLight, titleDark,
  onSwitchMode, onClick, ...props
}, ref) => {
  const handleClick = useCallback(
    (e) => {
      if (isFunction(onSwitchMode)) {
        onSwitchMode(e);
      }
      if (isFunction(onClick)) {
        onClick(e);
      }
    },
    [onSwitchMode, onClick],
  );

  return (
    <TooltipDarkMode dark={dark} titleLight={titleLight} titleDark={titleDark}>
      <IconButton ref={ref} onClick={handleClick} {...props} size="large">
        {dark ? <LightIcon /> : <DarkIcon />}
      </IconButton>
    </TooltipDarkMode>
  );
});

IconButtonDarkMode.propTypes = {
  dark: PropTypes.bool,
  titleLight: PropTypes.string.isRequired,
  titleDark: PropTypes.string.isRequired,
  onSwitchMode: PropTypes.func,
  onClick: PropTypes.func,
};

IconButtonDarkMode.defaultProps = {
  dark: false,
  onSwitchMode: null,
  onClick: null,
};

export default IconButtonDarkMode;
