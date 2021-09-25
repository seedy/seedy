import styled from '@mui/material/styles/styled';

import BoxResponsiveRowColumn from 'components/dumb/Box/XsResponsive/RowColumn';

// COMPONENTS
const BoxXsResponsiveRowCenterColumnStretch = styled(BoxResponsiveRowColumn)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  [theme.breakpoints.only('xs')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
}));

export default BoxXsResponsiveRowCenterColumnStretch;
