import { forwardRef, useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import isNil from 'helpers/isNil';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';

import TranslateIcon from '@mui/icons-material/Translate';

// COMPONENTS
const IconButtonTranslate = forwardRef(({ children, title, ...props }, ref) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = useMemo(
    () => !isNil(anchorEl),
    [anchorEl],
  );

  const ariaExpanded = useMemo(
    () => (open ? 'true' : undefined),
    [open],
  );

  const onClick = useCallback(
    (e) => {
      setAnchorEl(e.currentTarget);
    },
    [setAnchorEl],
  );

  const onClose = useCallback(
    () => {
      setAnchorEl(null);
    },
    [setAnchorEl],
  );

  return (
    <>
      <Tooltip title={title}>
        <IconButton
          id="translate-button"
          ref={ref}
          aria-controls="translate-menu"
          aria-haspopup="true"
          aria-expanded={ariaExpanded}
          onClick={onClick}
          {...props}
        >
          <TranslateIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="translate-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        MenuListProps={{
          'aria-labelledby': 'translate-button',
          disablePadding: true,
        }}
      >
        {children}
      </Menu>
    </>
  );
});

IconButtonTranslate.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

IconButtonTranslate.defaultProps = {
  children: null,
};

export default IconButtonTranslate;
