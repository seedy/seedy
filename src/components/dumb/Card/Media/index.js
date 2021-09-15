import { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import IconSoundcloud from 'components/dumb/Icon/SoundCloud';
import IconCodeWars from 'components/dumb/Icon/CodeWars';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

// CONSTANTS
const SIZING = {
  small: 30,
  medium: 48,
};

// COMPONENTS
const CardMedia = forwardRef(({ size, ...props }, ref) => {
  const sizing = useMemo(
    () => SIZING[size],
    [size],
  );
  return (
    <Card ref={ref} {...props}>
      <CardHeader
        title="Media"
        subheader="Pour me suivre ou me contacter"
      />
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box mr={1}>
            <Tooltip title="Voir le profil Linkedin">
              <IconButton size={size} href="https://fr.linkedin.com/in/cedric-dupuis-69470?trk=public-profile-badge-profile-badge-view-profile-cta">
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
              <Button size={size} variant="outlined" href="https://www.codewars.com/users/pro.seedy">
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
  size: PropTypes.oneOf(['small', 'medium']),
};

CardMedia.defaultProps = {
  size: 'medium',
};

export default CardMedia;
