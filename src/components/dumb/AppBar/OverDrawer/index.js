import styled from '@mui/material/styles/styled';

import AppBar from '@mui/material/AppBar';

// COMPONENTS
const AppBarOverDrawer = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));


export default AppBarOverDrawer;
