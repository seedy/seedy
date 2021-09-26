import PropTypes from 'prop-types';

import Image from 'next/image';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { forwardRef } from 'react';
import { useTheme } from '@mui/material/styles';

// COMPONENTS
const CardHeadline = forwardRef(({ onMore, onMedia, ...props }, ref) => {
  const theme = useTheme();
  return (
    <Card ref={ref} {...props}>
      <CardActionArea onClick={onMedia}>
        <Image
          alt="Cédric DUPUIS CV"
          src="/CV_Headline-1583w.png"
          title="Cédric DUPUIS CV"
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
