import makeStyles from '@material-ui/core/styles/makeStyles';

import AppBarStatic from 'components/dumb/AppBar/Static';

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
    <AppBarStatic classes={{ root: classes.root }} {...props} />
  );
};

export default AppBarOverDrawer;
