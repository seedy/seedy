import styled from '@mui/material/styles/styled';

import Box from '@mui/material/Box';

// COMPONENTS
const BoxXsResponsiveRowColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.only('xs')]: {
    flexDirection: 'column',
  },
}));

export default BoxXsResponsiveRowColumn;
