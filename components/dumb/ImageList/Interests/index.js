import PropTypes from 'prop-types';

import { useTranslation } from 'next-i18next';

import ImageList from '@mui/material/ImageList';
import ImageListItemFlippable from 'components/dumb/ImageListItem/Flippable';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import CopyrightIcon from '@mui/icons-material/Copyright';
import tile1 from 'public/tiles/1.jpg';
import tile2 from 'public/tiles/2.jpg';
import tile3 from 'public/tiles/3.jpg';
import tile4 from 'public/tiles/4.jpg';
import tile5 from 'public/tiles/5.jpg';
import tile6 from 'public/tiles/6.jpg';
import tile7 from 'public/tiles/7.jpg';
import tile8 from 'public/tiles/8.jpg';
import tile9 from 'public/tiles/9.jpg';


// CONSTANTS
const ITEMS = [
  { title: 'uxDesign', img: tile1, info: 'thabor', date: 2020, copyright: 'Cédric DUPUIS', width: 300, height: 225 },
  { title: 'graphicalTrends', img: tile2, info: 'ticketToRide', date: 2021, copyright: 'Cédric DUPUIS', width: 300, height: 225 },
  { title: 'a11yPatterns', img: tile3, info: 'viaduct', date: 2021, copyright: 'Cédric DUPUIS', width: 300, height: 225 },
  { title: 'cleanCode', img: tile4, info: 'tomatoSauce', date: 2020, copyright: 'Cédric DUPUIS', width: 300, height: 225 },
  { title: 'componentLib', img: tile5, info: 'tomatoHouse', date: 2021, copyright: 'Cédric DUPUIS', width: 300, height: 225 },
  { title: 'techChallenges', img: tile6, info: 'forest', date: 2021, copyright: 'Cédric DUPUIS', width: 300, height: 225 },
  { title: 'enjoyWork', img: tile7, info: 'pond', date: 2021, copyright: 'Cédric DUPUIS', width: 300, height: 225 },
  { title: 'timeProductivity', img: tile8, info: 'kale', date: 2021, copyright: 'Cédric DUPUIS', width: 300, height: 225 },
  { title: 'workIdeals', img: tile9, info: 'cape', date: 2021, copyright: 'Cédric DUPUIS', width: 300, height: 225 },
];

const BACK_PROPS = {
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
};



// COMPONENTS
const ImageListInterests = (props) => {
  const { t } = useTranslation('interests');

  return (
    <ImageList sx={{ m: 0 }} {...props}>
      {ITEMS.map(({ title, img, info, date, copyright, ...rest }) => (
        <ImageListItemFlippable
          key={title}
          src={img}
          alt={t(`interests:${title}`)}
          front={(
            <Typography variant="caption">{t(`interests:${title}`)}</Typography>
        )}
          back={(
            <>
              <Typography variant="caption">{t(`interests:${info}`)}</Typography>
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
          {...rest}
        />
      ))}
    </ImageList>
  );
};

ImageListInterests.propTypes = {
  cols: PropTypes.number,
};

ImageListInterests.defaultProps = {
  cols: 1,
};

export default ImageListInterests;
