import { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import IconSoundcloud from 'components/dumb/Icon/SoundCloud';
import IconCodeWars from 'components/dumb/Icon/CodeWars';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

// CONSTANTS
const SIZING = {
  small: 30,
  medium: 48,
};

// COMPONENTS
const CardMedia = forwardRef(({ title, subheader, size, ...props }, ref) => {
  const sizing = useMemo(
    () => SIZING[size],
    [size],
  );
  return (
    <Card ref={ref} {...props}>
      <CardHeader
        title={title}
        subheader={subheader}
      />
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box mr={1}>
            <Tooltip title="Linkedin">
              <IconButton size={size} href="https://linkedin.com/in/cedric-dupuis-69470?trk=public-profile-badge-profile-badge-view-profile-cta">
                <LinkedinIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box mr={1}>
            <Tooltip title="Github">
              <IconButton size={size} href="https://github.com/seedy">
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box mr={1}>
            <Tooltip title="CodeWars">
              <Button size={size} color="secondary" variant="outlined" href="https://www.codewars.com/users/pro.seedy">
                <IconCodeWars size="micro" />
              </Button>
            </Tooltip>
          </Box>
          <Box mr={1}>
            <Tooltip title="Instagram">
              <IconButton size={size} href="https://www.instagram.com/seedy.drawings">
                <InstagramIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width={sizing}
            height={sizing}
          >
            <Tooltip title="Soundcloud">
              <IconSoundcloud />
            </Tooltip>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Tooltip title="Email">
            <Button
              variant="contained"
              color="secondary"
              href="mailto:pro.cedric.dupuis@gmail.com"
              startIcon={<AlternateEmailIcon />}
            >
              pro.cedric.dupuis
            </Button>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
});

CardMedia.propTypes = {
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium']),
};

CardMedia.defaultProps = {
  size: 'medium',
};

export default CardMedia;
