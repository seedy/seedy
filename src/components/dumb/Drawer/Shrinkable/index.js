import PropTypes from 'prop-types';
import clsx from 'clsx';

import { DRAWER_WIDTH } from 'constants/drawers/sizing';

import makeStyles from '@material-ui/core/styles/makeStyles';

import Drawer from '@material-ui/core/Drawer';


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
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
  }),
);

// COMPONENTS
const DrawerShrinkable = ({ shrink, width, children, ...props }) => {
  const classes = useStyles({ width });

  return (
    <Drawer
      {...props}
      open
      variant="permanent"
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
