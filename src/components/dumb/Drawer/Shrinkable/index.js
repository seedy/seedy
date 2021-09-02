import PropTypes from 'prop-types';
import clsx from 'clsx';

import { DRAWER_WIDTH } from 'constants/drawers/sizing';

import makeStyles from '@material-ui/core/styles/makeStyles';
import useIsDownSm from 'hooks/useIsDownSm';

import Drawer from '@material-ui/core/Drawer';
import { useCallback, useMemo } from 'react';
import { useDrawerShrinkableContext } from 'components/dumb/Drawer/Shrinkable/Context';


// HOOKS
const useStyles = makeStyles(
  (theme) => ({
    drawerOpen: ({ width }) => ({
      width,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
    drawerShrink: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(9) + 1,
    },
  }),
);

// COMPONENTS
const DrawerShrinkable = ({ shrink, width, children, ...props }) => {
  const classes = useStyles({ width });
  const isXs = useIsDownSm();

  const { onShrinkToggle } = useDrawerShrinkableContext();

  const variant = useMemo(
    () => ((isXs && !shrink) ? 'temporary' : 'permanent'),
    [isXs, shrink],
  );

  const onClose = useCallback(
    () => {
      onShrinkToggle();
    },
    [onShrinkToggle],
  );

  return (
    <Drawer
      open
      variant={variant}
      classes={{
        root: clsx({
          [classes.drawerOpen]: !shrink,
          [classes.drawerShrink]: shrink,
        }),
        paper: clsx({
          [classes.drawerOpen]: !shrink,
          [classes.drawerShrink]: shrink,
        }),
      }}
      onClose={onClose}
      {...props}
    >
      {children}
    </Drawer>
  );
};

DrawerShrinkable.propTypes = {
  shrink: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
};

DrawerShrinkable.defaultProps = {
  shrink: false,
  width: DRAWER_WIDTH,
  children: null,
};

export default DrawerShrinkable;
