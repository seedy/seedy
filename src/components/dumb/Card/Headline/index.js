import PropTypes from 'prop-types';

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
        <CardMedia
          component="img"
          alt="Cédric DUPUIS CV"
          srcSet="CV_Headline-1583w.png 1583w,
        CV_Headline-408w.png 408w"
          sizes={`(max-width:${theme.breakpoints.values.sm}px) 408px,
        1583px`}
          src="CV_Headline-1583w.png"
          title="Cédric DUPUIS CV"
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
