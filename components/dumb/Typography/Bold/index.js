import Typography from '@mui/material/Typography';
import styled from '@mui/material/styles/styled';

const TypographyBold = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
}));

export default TypographyBold;
