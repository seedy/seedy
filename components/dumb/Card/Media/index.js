import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import IconSoundcloud from 'components/dumb/Icon/SoundCloud';
import IconCodeWars from 'components/dumb/Icon/CodeWars';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import styled from '@mui/material/styles/styled';
import { useTranslation } from 'next-i18next';
import IconBandcamp from 'components/dumb/Icon/Bandcamp';

// CONSTANTS
const IconButtonBounce = styled(IconButton)({
  '&:hover': {
    transform: 'translateY(-2%)',
  },
});

const ButtonBounce = styled(Button)({
  '&:hover': {
    transform: 'translateY(-2%)',
  },
});

// COMPONENTS
const CardMedia = forwardRef(({ title, size, ...props }, ref) => {
  const { t } = useTranslation('common');

  return (
    <Card ref={ref} {...props}>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mb={2} mt={1}>
          <Typography variant="h2">
            {t('common:media.title')}
          </Typography>

          <Typography variant="p">
            {t('common:media.mail')}
            &nbsp;
            <Link
              color="secondary"
              href="mailto:pro.cedric.dupuis@gmail.com"
              startIcon={<AlternateEmailIcon />}
            >
              pro.cedric.dupuis@gmail.com
            </Link>
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
          <Box>
            <Tooltip title="Linkedin">
              <IconButtonBounce size={size} href="https://linkedin.com/in/cedric-dupuis-69470?trk=public-profile-badge-profile-badge-view-profile-cta">
                <LinkedinIcon />
              </IconButtonBounce>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip title="Github">
              <IconButtonBounce size={size} href="https://github.com/seedy">
                <GitHubIcon />
              </IconButtonBounce>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip title="CodeWars">
              <ButtonBounce size={size} color="secondary" variant="outlined" href="https://www.codewars.com/users/pro.seedy">
                <IconCodeWars size="micro" />
              </ButtonBounce>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip title="Instagram">
              <IconButtonBounce size={size} href="https://www.instagram.com/seedy.drawings">
                <InstagramIcon />
              </IconButtonBounce>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip title="Soundcloud">
              <IconButtonBounce size={size} href="https://soundcloud.com/seedygging?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
                <IconSoundcloud />
              </IconButtonBounce>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip title="Bandcamp">
              <IconButtonBounce size={size} href="https://bandcamp.com/seedy-gger">
                <IconBandcamp />
              </IconButtonBounce>
            </Tooltip>
          </Box>
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
