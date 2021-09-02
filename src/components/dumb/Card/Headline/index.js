import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import { forwardRef } from 'react';

// COMPONENTS
const CardHeadline = forwardRef(({ onMore, onMedia, ...props }, ref) => (
  <Card ref={ref} {...props}>
    <CardActionArea onClick={onMedia}>
      <CardMedia
        component="img"
        alt="Cédric DUPUIS CV"
        image="CV_Headline.png"
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
));

CardHeadline.propTypes = {
  onMore: PropTypes.func.isRequired,
  onMedia: PropTypes.func.isRequired,
};

export default CardHeadline;
