import PropTypes from 'prop-types';

import makeStyles from '@material-ui/core/styles/makeStyles';

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import InfoIcon from '@material-ui/icons/Info';

// CONSTANTS
const ITEMS = [
  { title: 'Prendre part au design UI/UX', img: 'tiles/1.jpg', info: 'Mont Thabor - 2020' },
  { title: 'Surveiller les dernières tendances graphiques', img: 'tiles/2.jpg', info: 'Aventuriers du rail - 2021' },
  { title: 'Discuter accessibilité et design patterns', img: 'tiles/3.jpg', info: 'Viaduc du Châtelard - 2021' },
  { title: 'Implémenter du code clair et propre', img: 'tiles/4.jpg', info: 'Sauce tomate - 2020' },
  { title: 'Construire une librairie de composants', img: 'tiles/5.jpg', info: 'Tomates en serre - 2021' },
  { title: 'Relever des défis techniques', img: 'tiles/6.jpg', info: 'Fôret communale des Echarmeaux - 2021' },
  { title: 'Faire du travail un lieu et un moment d\'enthousiasme', img: 'tiles/7.jpg', info: 'Etang de la Bonde - 2021' },
  { title: 'Maîtriser mon temps et ma productivité', img: 'tiles/8.jpg', info: 'Egrenage de chou kale - 2021' },
  { title: 'Travailler pour mes idéaux', img: 'tiles/9.jpg', info: 'Cap Fréhel - 2021' },
];

// HOOKS
const useStyles = makeStyles((theme) => ({
  iconButtonWhite: {
    color: theme.palette.grey[300],
  },
}));

// COMPONENTS
const ImageListInterests = ({ rowHeight, ...props }) => {
  const classes = useStyles();
  return (
    <ImageList rowHeight={rowHeight} {...props}>
      {ITEMS.map(({ title, img, info }) => (
        <ImageListItem key={img}>
          <img src={img} alt={title} />
          <ImageListItemBar
            title={(
              <Typography variant="caption">{title}</Typography>
            )}
            actionIcon={(
              <Tooltip title={info}>
                <IconButton classes={{ root: classes.iconButtonWhite }} aria-label={info}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
          )}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

ImageListInterests.propTypes = {
  rowHeight: PropTypes.number,
  cols: PropTypes.number,
};

ImageListInterests.defaultProps = {
  rowHeight: 180,
  cols: 1,
};

export default ImageListInterests;
