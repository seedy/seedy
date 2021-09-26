import { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';

import Image from 'next/image';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

// CONSTANTS
const TITLE = 'Cédric DUPUIS CV';
const SRC = {
  en: '/CV_Headline-en.png',
  fr: '/CV_Headline-fr.png',
};

// COMPONENTS
const CardHeadline = forwardRef(({ onMore, onMedia, ...props }, ref) => {
  const { locale, defaultLocale } = useRouter();

  const src = useMemo(
    () => SRC[locale || defaultLocale],
    [locale, defaultLocale],
  );

  return (
    <Card ref={ref} {...props}>
      <CardActionArea onClick={onMedia}>
        <Image
          alt={TITLE}
          src={src}
          title={TITLE}
          height={443}
          width={1583}
        />
      </CardActionArea>
      <CardActions>
        <Button
          onClick={onMore}
          size="small"
        >
          En savoir plus

        </Button>
      </CardActions>
    </Card>
  );
});

CardHeadline.propTypes = {
  onMore: PropTypes.func.isRequired,
  onMedia: PropTypes.func.isRequired,
};

export default CardHeadline;
