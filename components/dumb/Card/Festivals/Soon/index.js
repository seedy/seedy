import PropTypes from 'prop-types';
import { forwardRef, useCallback } from 'react';
import { useTranslation } from 'next-i18next';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import ButtonUpvote from 'components/dumb/Button/Upvote';

// COMPONENTS
const CardFestivalsSoon = forwardRef(({ votes, ...props }, ref) => {
  const { t } = useTranslation('common');

  const onVote = useCallback(async () => {
    await fetch('/api/vote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  }, []);

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

        <ButtonUpvote
          votes={votes}
          onClick={onVote}
        >
          {t('common:soon.cta')}
        </ButtonUpvote>
      </CardContent>
    </Card>
  );
});

CardFestivalsSoon.propTypes = {
  votes: PropTypes.number,
};
CardFestivalsSoon.defaultProps = {
  votes: 0,
};

export default CardFestivalsSoon;
