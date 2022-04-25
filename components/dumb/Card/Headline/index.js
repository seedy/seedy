import { forwardRef, useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';

import styled from '@mui/material/styles/styled';
import Image from 'next/image';
import CardActionArea from '@mui/material/CardActionArea';
import { useTranslation } from 'next-i18next';
import isFunction from 'helpers/isFunction';

// CONSTANTS
const TITLE = 'Cédric DUPUIS CV';
const SRC = {
  en: '/cv/cv-en.jpg',
  fr: '/cv/cv-fr.jpg',
};

// COMPONENTS
const Backdrop = styled('div')({
  position: 'relative',
  display: 'flex',
  '&::before': {
    position: 'absolute',
    content: "''",
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
  },
});

const CardActionAreaFlex = styled(CardActionArea)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1),
  '&:hover,&:focus': {
    '& > .backdrop': {
      boxShadow: theme.shadows[10],
    },
    '& > .caption': {
      border: '4px solid currentColor',
      '& > .underline': {
        visibility: 'hidden',
      },
    },
  },
}));

const CardActionCaption = styled('span', { shouldForwardProp: (prop) => prop !== 'imageLoaded' })(({ theme }) => ({
  textTransform: 'uppercase',
  textAlign: 'center',
  padding: theme.spacing(2, 4),
  color: 'white',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  opacity: 0,
  transition: 'opacity 2s ease',
}), ({ imageLoaded }) => imageLoaded && {
  opacity: 1,
});

const CaptionUnderline = styled('span')({
  position: 'absolute',
  display: 'inline-block',
  left: '25%',
  right: '25%',
  bottom: 0,
  backgroundColor: 'white',
  height: '3px',
});

const CardHeadline = forwardRef(({ onClick, onLoadingComplete, ...props }, ref) => {
  const { locale, defaultLocale } = useRouter();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setImageLoaded(true);
    if (isFunction(onLoadingComplete)) {
      onLoadingComplete();
    }
  }, [setImageLoaded, onLoadingComplete]);

  const { t } = useTranslation('common');

  const src = useMemo(
    () => SRC[locale || defaultLocale],
    [locale, defaultLocale],
  );

  return (
    <CardActionAreaFlex ref={ref} onClick={onClick} {...props}>
      <Backdrop className="backdrop">
        <Image
          alt={TITLE}
          src={src}
          title={TITLE}
          height={512}
          width={362}
          onLoadingComplete={handleLoadingComplete}
        />
      </Backdrop>
      <CardActionCaption className="caption" imageLoaded={imageLoaded}>
        {t('common:viewCv')}
        <CaptionUnderline aria-hidden className="underline" />
      </CardActionCaption>
    </CardActionAreaFlex>
  );
});

CardHeadline.propTypes = {
  onClick: PropTypes.func.isRequired,
  onLoadingComplete: PropTypes.func,
};

CardHeadline.defaultProps = {
  onLoadingComplete: null,
};

export default CardHeadline;
