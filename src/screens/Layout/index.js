import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ButtonHomeLink from 'components/smart/Button/Home/Link';
import Box from '@mui/material/Box';
import BoxToolbarOffset from 'components/dumb/Box/ToolbarOffset';
import IconButtonDarkModeWithContext from 'components/smart/IconButton/DarkMode/WithContext';
import IconButtonAbout from 'components/smart/IconButton/About';
import BoxFlexFill from 'components/dumb/Box/FlexFill';
// COMPONENTS
const Layout = ({ children }) => (
  <Box display="flex" flexDirection="column">
    <AppBar position="fixed">
      <Toolbar>
        <ButtonHomeLink />
        <BoxFlexFill />
        <IconButtonAbout />
        <IconButtonDarkModeWithContext />
      </Toolbar>
    </AppBar>
    <BoxToolbarOffset />
    {children}
  </Box>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
