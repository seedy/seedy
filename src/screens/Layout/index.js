import PropTypes from 'prop-types';

import makeStyles from '@material-ui/core/styles/makeStyles';

// import AppBarStatic from 'components/dumb/AppBar/Static';
import AppBarOverDrawer from 'components/dumb/AppBar/OverDrawer';
import Toolbar from '@material-ui/core/Toolbar';
// import ButtonHome from 'components/smart/Button/Home';
import ButtonHomeLink from 'components/smart/Button/Home/Link';
// import DrawerShrinkableWithContext from 'components/smart/Drawer/Shrinkable/WithContext';
import Box from '@material-ui/core/Box';
// import BoxWithDrawerShrinkableContext from 'components/dumb/Drawer/Shrinkable/Context/Box';
import DrawerShrinkableContextProvider from 'components/dumb/Drawer/Shrinkable/Context';
// import IconButtonWithDrawerShrinkableContext
//  from 'components/dumb/Drawer/Shrinkable/Context/IconButton';
import IconButtonDarkModeWithContext from 'components/smart/IconButton/DarkMode/WithContext';
import IconButtonAbout from 'components/smart/IconButton/About';
import BoxFlexFill from 'components/dumb/Box/FlexFill';

// import MenuIcon from '@material-ui/icons/Menu';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// HOOKS
const useStyles = makeStyles((theme) => ({
  buttonCentered: {
    marginLeft: theme.spacing(-0.5),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(-1.5),
    },
    marginRight: theme.spacing(1.5),
  },
  fixedOffset: theme.mixins.toolbar,
}));

// COMPONENTS
const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column">
      <DrawerShrinkableContextProvider>
        <AppBarOverDrawer position="fixed">
          <Toolbar>
            {/* <IconButtonWithDrawerShrinkableContext classes={{ root: classes.buttonCentered }}>
              <MenuIcon />
            </IconButtonWithDrawerShrinkableContext> */}
            <ButtonHomeLink />
            <BoxFlexFill />
            <IconButtonAbout />
            <IconButtonDarkModeWithContext />
          </Toolbar>
        </AppBarOverDrawer>
        <Box className={classes.fixedOffset} />
        {/* <DrawerShrinkableWithContext>
        <AppBarStatic elevation={0}>
          <Toolbar>
            <ButtonHome disabled />
            <BoxFlexFill />
            <IconButtonWithDrawerShrinkableContext edge="end">
              <ArrowBackIosIcon />
            </IconButtonWithDrawerShrinkableContext>
          </Toolbar>
        </AppBarStatic>
        </DrawerShrinkableWithContext> */}
        {/* <BoxWithDrawerShrinkableContext> */}
        {children}
        {/* </BoxWithDrawerShrinkableContext> */}
      </DrawerShrinkableContextProvider>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
