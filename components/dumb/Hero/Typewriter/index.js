import styled from '@mui/material/styles/styled';
import { keyframes } from '@emotion/react';

import Typography from '@mui/material/Typography';

// KEYFRAMES
const typing = keyframes({
  from: {
    width: 0,
  },
  to: {
    width: '100%',
  },
});

const blinkCaret = (theme) => keyframes({
  from: {
    borderColor: 'transparent',
  },
  to: {
    borderColor: 'transparent',
  },
  '50%': {
    borderColor: theme.palette.secondary.main,
  },
});

// STYLED
const HeroTypewriter = styled(Typography)(({ theme }) => ({
  overflow: 'hidden',
  borderRight: `0.10em solid ${theme.palette.secondary.main}`,
  whiteSpace: 'nowrap',
  margin: theme.spacing(0, 'auto'),
  // blink for the duration of typing, plus one more cycle
  animation: `
      ${typing} 2.5s steps(25, end),
      ${blinkCaret(theme)} 0.5s step-end 6 forwards;
    `,
  fontWeight: theme.typography.fontWeightBold,
}));

export default HeroTypewriter;
