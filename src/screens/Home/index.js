import makeStyles from '@material-ui/core/styles/makeStyles';

import AppBarStatic from 'components/dumb/AppBar/Static';
import AppBarOverDrawer from 'components/dumb/AppBar/OverDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import ButtonHome from 'components/smart/Button/Home';
import TabsRoutes from 'components/smart/Tabs/Routes';
import DrawerShrinkable from 'components/dumb/Drawer/Shrinkable';
import Box from '@material-ui/core/Box';
import withDrawerShrinkableContext from 'components/dumb/Drawer/Shrinkable/Context/with';
import DrawerShrinkableContextProvider from 'components/dumb/Drawer/Shrinkable/Context';
import IconButtonWithDrawerShrinkableContext from 'components/dumb/Drawer/Shrinkable/Context/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

// HOOKS
const useStyles = makeStyles((theme) => ({
  buttonCentered: {
    marginLeft: theme.spacing(-1.5),
    marginRight: theme.spacing(1.5),
  },
}));

// COMPONENTS
const DrawerShrinkableWithContext = withDrawerShrinkableContext(DrawerShrinkable);

const Home = () => {
  const classes = useStyles();

  return (
    <Box display="flex">
      <DrawerShrinkableContextProvider>
        <AppBarOverDrawer>
          <Toolbar>
            <IconButtonWithDrawerShrinkableContext classes={{ root: classes.buttonCentered }}>
              <MenuIcon />
            </IconButtonWithDrawerShrinkableContext>
            <ButtonHome />
          </Toolbar>
        </AppBarOverDrawer>
        <DrawerShrinkableWithContext>
          <AppBarStatic elevation={0}>
            <Toolbar />
          </AppBarStatic>
          <TabsRoutes orientation="vertical" />
        </DrawerShrinkableWithContext>
      </DrawerShrinkableContextProvider>
    </Box>
  );
};

export default Home;
