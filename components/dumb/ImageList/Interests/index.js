import PropTypes from 'prop-types';

import { useTranslation } from 'next-i18next';

import ImageList from '@mui/material/ImageList';
import ImageListItemFlippable from 'components/dumb/ImageListItem/Flippable';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import CopyrightIcon from '@mui/icons-material/Copyright';

// CONSTANTS
const ITEMS = [
  { title: 'uxDesign', img: '/tiles/1.jpg', info: 'thabor', date: 2020, copyright: 'Cédric DUPUIS', width: 300, height: 225 },
  { title: 'graphicalTrends', img: '/tiles/2.jpg', info: 'ticketToRide', date: 2021, copyright: 'Cédric DUPUIS', width: 300, height: 225 },
  { title: 'a11yPatterns', img: '/tiles/3.jpg', info: 'viaduct', date: 2021, copyright: 'Cédric DUPUIS', width: 300, height: 225 },
  { title: 'cleanCode', img: '/tiles/4.jpg', info: 'tomatoSauce', date: 2020, copyright: 'Cédric DUPUIS', width: 300, height: 225 },
  { title: 'componentLib', img: '/tiles/5.jpg', info: 'tomatoHouse', date: 2021, copyright: 'Cédric DUPUIS', width: 300, height: 225 },
  { title: 'techChallenges', img: '/tiles/6.jpg', info: 'forest', date: 2021, copyright: 'Cédric DUPUIS', width: 300, height: 225 },
  { title: 'enjoyWork', img: '/tiles/7.jpg', info: 'pond', date: 2021, copyright: 'Cédric DUPUIS', width: 300, height: 225 },
  { title: 'timeProductivity', img: '/tiles/8.jpg', info: 'kale', date: 2021, copyright: 'Cédric DUPUIS', width: 300, height: 225 },
  { title: 'workIdeals', img: '/tiles/9.jpg', info: 'cape', date: 2021, copyright: 'Cédric DUPUIS', width: 300, height: 225 },
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
          key={img}
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
