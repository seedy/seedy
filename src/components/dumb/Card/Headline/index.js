import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import { forwardRef } from 'react';
import useTheme from '@material-ui/core/styles/useTheme';

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
