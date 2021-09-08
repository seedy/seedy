import { forwardRef } from 'react';

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
import LinkedinBadgeProfile from 'components/dumb/Badge/Profile/Linkedin';
import InstagramIcon from '@material-ui/icons/Instagram';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const CardMedia = forwardRef((props, ref) => (
  <Card ref={ref} {...props}>
    <CardHeader
      title="Media"
      subheader="Pour me suivre ou me contacter"
    />
    {/* @FIXME ml to compensate for LinkedinBadgeProfile iframe layout */}
    <Box display="flex" alignItems="center" justifyContent="center" ml="60px">
      <LinkedinBadgeProfile />
    </Box>
    <CardContent>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box mr={1}>
          <Tooltip title="Github">
            <IconButton href="https://github.com/seedy">
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box mr={1}>
          <Tooltip title="CodeWars">
            <Button variant="outlined" href="https://www.codewars.com/users/pro.seedy">
              <IconCodeWars size="micro" />
            </Button>
          </Tooltip>
        </Box>
        <Box mr={1}>
          <Tooltip title="Instagram">
            <IconButton href="https://www.instagram.com/seedy.drawings">
              <InstagramIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Tooltip title="Soundcloud">
          <IconSoundcloud />
        </Tooltip>
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
));

export default CardMedia;
