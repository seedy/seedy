import styled from '@mui/material/styles/styled';

import Avatar from '@mui/material/Avatar';

// COMPONENTS
const AvatarSecondary = styled(Avatar)(({ theme }) => ({
  color: theme.palette.getContrastText(theme.palette.secondary.main),
  backgroundColor: theme.palette.secondary.main,
}));

export default AvatarSecondary;
