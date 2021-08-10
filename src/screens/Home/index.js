import makeStyles from '@material-ui/core/styles/makeStyles';

import AppBarStatic from 'components/dumb/AppBar/Static';
import AppBarOverDrawer from 'components/dumb/AppBar/OverDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import ButtonHome from 'components/smart/Button/Home';
import TabsRoutes from 'components/smart/Tabs/Routes';
import DrawerShrinkableWithContext from 'components/smart/Drawer/Shrinkable/WithContext';
import Box from '@material-ui/core/Box';
import DrawerShrinkableContextProvider from 'components/dumb/Drawer/Shrinkable/Context';
import IconButtonWithDrawerShrinkableContext from 'components/dumb/Drawer/Shrinkable/Context/IconButton';
import IconButtonDarkModeWithContext from 'components/smart/IconButton/DarkMode/WithContext';
import BoxFlexFill from 'components/dumb/Box/FlexFill';

import MenuIcon from '@material-ui/icons/Menu';

// HOOKS
const useStyles = makeStyles((theme) => ({
  buttonCentered: {
    marginLeft: theme.spacing(-0.5),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(-1.5),
    },
    marginRight: theme.spacing(1.5),
  },
}));

// COMPONENTS
const Home = () => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column">
      <DrawerShrinkableContextProvider>
        <AppBarOverDrawer>
          <Toolbar>
            <IconButtonWithDrawerShrinkableContext classes={{ root: classes.buttonCentered }}>
              <MenuIcon />
            </IconButtonWithDrawerShrinkableContext>
            <ButtonHome />
            <BoxFlexFill />
            <IconButtonDarkModeWithContext />
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
