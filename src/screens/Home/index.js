import matchMediaHover from 'helpers/matchMediaHover';

import { useCallback, useMemo, useState } from 'react';
import useIsXs from 'hooks/useIsXs';
import useIsDownMd from 'hooks/useIsDownMd';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import PdfViewerContextProvider from 'components/dumb/PdfViewer/Context';
import PdfViewerToolbar from 'components/dumb/PdfViewer/Toolbar';
import PdfViewer from 'components/dumb/PdfViewer';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import ButtonDownload from 'components/dumb/Button/Download';
import CardHeadline from 'components/dumb/Card/Headline';
import Grid from '@mui/material/Grid';
import CardSkillsTech from 'components/dumb/Card/Skills/Tech';
import CardSkillsSoft from 'components/dumb/Card/Skills/Soft';
import ImageListInterests from 'components/dumb/ImageList/Interests';
import HeroTypewriter from 'components/dumb/Hero/Typewriter';

import CloseIcon from '@mui/icons-material/Close';

import file from './cv/Cedric-Dupuis-cv-fr.pdf';

// CONSTANTS
const TOOLBAR_HEIGHT = 48;
const ACTIONS_FOOTER_HEIGHT = 52;
const CONTENT_PADDING = 32;

const FIRST_DELAY = '2.8s';
const SECOND_DELAY = '4.8s';

// COMPONENTS
const Home = () => {
  const isXs = useIsXs();
  const isDownMd = useIsDownMd();

  const subtitleAction = useMemo(
    () => (matchMediaHover() ? 'Survole' : 'Clique sur'),
    [],
  );

  const listCols = useMemo(
    () => {
      if (isXs) {
        return 1;
      }
      if (isDownMd) {
        return 2;
      }
      return 3;
    },
    [isXs, isDownMd],
  );

  const [open, setOpen] = useState(false);

  const onOpen = useCallback(
    () => {
      setOpen(true);
    },
    [setOpen],
  );

  const onClose = useCallback(
    () => {
      setOpen(false);
    },
    [setOpen],
  );

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={1}
      >
        <Box mb={2}>
          <HeroTypewriter color="textPrimary" variant="h3">Salut, moi c&apos;est :</HeroTypewriter>
        </Box>
        <Fade in style={{ transitionDelay: FIRST_DELAY }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <CardHeadline onMore={onOpen} onMedia={onOpen} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardSkillsTech />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardSkillsSoft />
            </Grid>
          </Grid>
        </Fade>
        <Box pt={3}>
          <Fade in style={{ transitionDelay: SECOND_DELAY }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography paragraph color="textPrimary" variant="h3">Je suis un passionné</Typography>
                <Typography color="textSecondary" variant="subtitle1">
                  {subtitleAction}
                  {' '}
                  les images pour en savoir plus
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ImageListInterests cols={listCols} />
              </Grid>
            </Grid>
          </Fade>
        </Box>
        <Dialog maxWidth={false} fullScreen onClose={onClose} open={open}>
          <PdfViewerContextProvider>
            <DialogTitle
              sx={{
                px: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                minHeight={48}
                width="100%"
                display="flex"
                alignItems="center"
                position="relative"
              >
                <Typography variant="h6">CV</Typography>
                <PdfViewerToolbar
                  sx={{
                    margin: 'auto',
                  }}
                />
                <IconButton
                  sx={{
                    position: 'absolute',
                    right: 0,
                  }}
                  onClick={onClose}
                  size="large"
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent dividers>
              <PdfViewer
                file={file}
                maxWidth="100%"
                maxHeight={`calc(100vh - ${ACTIONS_FOOTER_HEIGHT}px - ${TOOLBAR_HEIGHT}px - ${CONTENT_PADDING}px)`}
              />
            </DialogContent>
            <DialogActions>
              <ButtonDownload href={file} download="Cedric-Dupuis-cv-fr.pdf">Télécharger</ButtonDownload>
            </DialogActions>
          </PdfViewerContextProvider>
        </Dialog>
      </Box>
    </Container>
  );
};
export default Home;
