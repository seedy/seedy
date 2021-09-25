import PropTypes from 'prop-types';

import ImageList from '@mui/material/ImageList';
import ImageListItemFlippable from 'components/dumb/ImageListItem/Flippable';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import CopyrightIcon from '@mui/icons-material/Copyright';

// CONSTANTS
const ITEMS = [
  { title: 'Prendre part au design UI/UX', img: 'tiles/1.jpg', info: 'Mont Thabor, Massif des Cerces', date: 2020, copyright: 'Cédric DUPUIS' },
  { title: 'Surveiller les dernières tendances graphiques', img: 'tiles/2.jpg', info: 'Aventuriers du rail', date: 2021, copyright: 'Cédric DUPUIS' },
  { title: 'Discuter accessibilité et design patterns', img: 'tiles/3.jpg', info: 'Viaduc du Châtelard, Monsols', date: 2021, copyright: 'Cédric DUPUIS' },
  { title: 'Implémenter du code clair et propre', img: 'tiles/4.jpg', info: 'Sauce tomate maison', date: 2020, copyright: 'Cédric DUPUIS' },
  { title: 'Construire une librairie de composants', img: 'tiles/5.jpg', info: 'Tomates en serre', date: 2021, copyright: 'Cédric DUPUIS' },
  { title: 'Relever des défis techniques', img: 'tiles/6.jpg', info: 'Fôret communale des Echarmeaux', date: 2021, copyright: 'Cédric DUPUIS' },
  { title: 'Faire du travail un lieu et un moment d\'enthousiasme', img: 'tiles/7.jpg', info: 'Etang de la Bonde, Lubéron', date: 2021, copyright: 'Cédric DUPUIS' },
  { title: 'Maîtriser mon temps et ma productivité', img: 'tiles/8.jpg', info: 'Egrenage de chou kale', date: 2021, copyright: 'Cédric DUPUIS' },
  { title: 'Travailler pour mes idéaux', img: 'tiles/9.jpg', info: 'Cap Fréhel, Bretagne', date: 2021, copyright: 'Cédric DUPUIS' },
];

const BACK_PROPS = {
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
};



// COMPONENTS
const ImageListInterests = ({ rowHeight, ...props }) => (
  <ImageList sx={{ m: 0 }} rowHeight={rowHeight} {...props}>
    {ITEMS.map(({ title, img, info, date, copyright }) => (
      <ImageListItemFlippable
        key={img}
        src={img}
        alt={title}
        front={(
          <Typography variant="caption">{title}</Typography>
          )}
        back={(
          <>
            <Typography variant="caption">{info}</Typography>
            <Typography variant="caption">{date}</Typography>
            <Box display="flex" alignItems="center" justifyContent="center">
              <CopyrightIcon />
              <Typography variant="caption">
                {copyright}
              </Typography>
            </Box>
          </>
        )}
        backProps={BACK_PROPS}
      />
    ))}
  </ImageList>
);

ImageListInterests.propTypes = {
  rowHeight: PropTypes.number,
  cols: PropTypes.number,
};

ImageListInterests.defaultProps = {
  rowHeight: 180,
  cols: 1,
};

export default ImageListInterests;
