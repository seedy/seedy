import { forwardRef, useCallback } from 'react';

import { post } from 'helpers/fetcher';

import { useTranslation } from 'next-i18next';
import useSWR from 'swr';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import ButtonUpvote from 'components/dumb/Button/Upvote';

// HELPERS
const vote = async (votes) => {
  await post('/api/vote');
  return votes + 1;
};

// COMPONENTS
const CardFestivalsSoon = forwardRef((props, ref) => {
  const { t } = useTranslation('common');

  const { data: votes, mutate } = useSWR('/api/vote');

  const onVote = useCallback(async () => {
    await mutate(vote(votes), { optimisticData: votes + 1, rollbackOnError: true });
  }, [mutate, votes]);

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

export default CardFestivalsSoon;
