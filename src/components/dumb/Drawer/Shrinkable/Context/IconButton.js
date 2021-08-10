import { forwardRef, useCallback } from 'react';
import PropTypes from 'prop-types';

import isFunction from 'helpers/isFunction';

import { useDrawerShrinkableContext } from 'components/dumb/Drawer/Shrinkable/Context';

import IconButton from '@material-ui/core/IconButton';

// COMPONENTS
const IconButtonWithDrawerShrinkableContext = forwardRef(({ onClick, ...props }, ref) => {
  const { onShrinkToggle } = useDrawerShrinkableContext();

  const handleClick = useCallback(
    (e) => {
      onShrinkToggle();
      if (isFunction(onClick)) {
        onClick(e);
      }
    },
    [onClick, onShrinkToggle],
  );

  return (
    <IconButton ref={ref} onClick={handleClick} {...props} />
  );
});

IconButtonWithDrawerShrinkableContext.propTypes = {
  onClick: PropTypes.func,
};

IconButtonWithDrawerShrinkableContext.defaultProps = {
  onClick: null,
};

export default IconButtonWithDrawerShrinkableContext;
