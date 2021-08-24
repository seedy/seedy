import makeStyles from '@material-ui/core/styles/makeStyles';

import AppBar from '@material-ui/core/AppBar';

// HOOKS
const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

// COMPONENTS
const AppBarOverDrawer = (props) => {
  const classes = useStyles();

  return (
    <AppBar classes={{ root: classes.root }} {...props} />
  );
};

export default AppBarOverDrawer;
