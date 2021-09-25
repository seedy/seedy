import { forwardRef } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import GitHubIcon from '@mui/icons-material/GitHub';

// COMPONENTS
const CardFestivalsSoon = forwardRef((props, ref) => (
  <Card
    ref={ref}
    {...props}
  >
    <CardHeader
      title="Prochainement"
      subheader="Des revues de festivals"
      titleTypographyProps={{ align: 'center' }}
      subheaderTypographyProps={{ align: 'center' }}
    />
    <CardContent>
      <Button
        color="secondary"
        variant="contained"
        href="https://github.com/seedy/seedy/issues/38#issue-1006857129"
        startIcon={<GitHubIcon />}
      >
        Je suis intéressé·e !

      </Button>
    </CardContent>
  </Card>
));

export default CardFestivalsSoon;
