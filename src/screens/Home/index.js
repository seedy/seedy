import matchMediaHover from 'helpers/matchMediaHover';

import { useCallback, useMemo, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useIsXs from 'hooks/useIsXs';
import useIsDownSm from 'hooks/useIsDownSm';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import PdfViewerContextProvider from 'components/dumb/PdfViewer/Context';
import PdfViewerToolbar from 'components/dumb/PdfViewer/Toolbar';
import PdfViewer from 'components/dumb/PdfViewer';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import ButtonDownload from 'components/dumb/Button/Download';
import CardHeadline from 'components/dumb/Card/Headline';
import Grid from '@material-ui/core/Grid';
import CardSkillsTech from 'components/dumb/Card/Skills/Tech';
import CardSkillsSoft from 'components/dumb/Card/Skills/Soft';
import ImageListInterests from 'components/dumb/ImageList/Interests';
import HeroTypewriter from 'components/dumb/Hero/Typewriter';

import CloseIcon from '@material-ui/icons/Close';

import file from './cv/Cedric-Dupuis-cv-fr.pdf';

// CONSTANTS
const TOOLBAR_HEIGHT = 48;
const ACTIONS_FOOTER_HEIGHT = 52;
const CONTENT_PADDING = 32;

const FIRST_DELAY = '2.8s';
const SECOND_DELAY = '4.8s';

// HOOKS
const useStyles = makeStyles((theme) => ({
  viewer: {
    maxWidth: '100%',
    maxHeight: `calc(100vh - ${ACTIONS_FOOTER_HEIGHT}px - ${TOOLBAR_HEIGHT}px - ${CONTENT_PADDING}px)`,
  },
  dialogTitleRoot: {
    padding: theme.spacing(0, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconRightAligned: {
    position: 'absolute',
    right: 0,
  },
  toolbarCentered: {
    margin: 'auto',
  },
}));

// COMPONENTS
const Home = () => {
  const classes = useStyles();
  const isXs = useIsXs();
  const isDownSm = useIsDownSm();

  const subtitleAction = useMemo(
    () => (matchMediaHover() ? 'Survole' : 'Clique sur'),
    [],
  );

  const listCols = useMemo(
    () => {
      if (isXs) {
        return 1;
      }
      if (isDownSm) {
        return 2;
      }
      return 3;
    },
    [isXs, isDownSm],
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
        <Box>
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
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography color="textPrimary" variant="h3">Je suis un passionné</Typography>
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
            <DialogTitle classes={{ root: classes.dialogTitleRoot }} disableTypography>
              <Box
                minHeight={48}
                width="100%"
                display="flex"
                alignItems="center"
                position="relative"
              >
                <Typography variant="h6">CV</Typography>
                <PdfViewerToolbar className={classes.toolbarCentered} />
                <IconButton classes={{ root: classes.iconRightAligned }} onClick={onClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent dividers>
              <PdfViewer
                file={file}
                className={classes.viewer}
              />
            </DialogContent>
            <DialogActions>
              <ButtonDownload href={file} download="Cedric-Dupuis-cv-fr.pdf">Télécharger</ButtonDownload>
            </DialogActions>
          </PdfViewerContextProvider>
        </Dialog>
        {/* <LinkedinBadgeProfile /> */}
      </Box>
    </Container>
  );
};
export default Home;
