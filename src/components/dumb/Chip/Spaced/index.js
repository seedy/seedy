import styled from '@mui/material/styles/styled';

import Chip from '@mui/material/Chip';

// COMPONENTS
const ChipSpaced = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5, 0.5),
}));

export default ChipSpaced;
