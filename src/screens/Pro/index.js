import { useCallback, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Box from '@material-ui/core/Box';
// import LinkedinBadgeProfile from 'components/dumb/Badge/Profile/Linkedin';
import PdfViewerContextProvider from 'components/dumb/PdfViewer/Context';
import PdfViewerToolbar from 'components/dumb/PdfViewer/Toolbar';
import PdfViewer from 'components/dumb/PdfViewer';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import ButtonDownload from 'components/dumb/Button/Download';
import CardHeadline from 'components/dumb/Card/Headline';

import CloseIcon from '@material-ui/icons/Close';

import file from './cv/Cedric-Dupuis-cv-fr.pdf';

// CONSTANTS
const TOOLBAR_HEIGHT = 48;
const ACTIONS_FOOTER_HEIGHT = 52;
const CONTENT_PADDING = 32;

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
const Pro = () => {
  const classes = useStyles();

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
      >
        <CardHeadline onMore={onOpen} onMedia={onOpen} />
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
export default Pro;
