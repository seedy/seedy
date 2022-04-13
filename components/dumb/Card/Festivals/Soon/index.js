import { forwardRef } from 'react';
import { useTranslation } from 'next-i18next';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import GitHubIcon from '@mui/icons-material/GitHub';

// COMPONENTS
const CardFestivalsSoon = forwardRef((props, ref) => {
  const { t } = useTranslation('common');
  return (
    <Card
      ref={ref}
      {...props}
    >
      <CardHeader
        title={t('common:soon.title')}
        subheader={t('common:soon.subtitle')}
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
          {t('common:soon.cta')}
        </Button>
      </CardContent>
    </Card>
  );
});

export default CardFestivalsSoon;
