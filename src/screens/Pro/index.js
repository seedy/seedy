
import makeStyles from '@material-ui/core/styles/makeStyles';

import Box from '@material-ui/core/Box';
// import LinkedinBadgeProfile from 'components/dumb/Badge/Profile/Linkedin';
import PdfViewerContextProvider from 'components/dumb/PdfViewer/Context';
import PdfViewerToolbar from 'components/dumb/PdfViewer/Toolbar';
import PdfViewer from 'components/dumb/PdfViewer';
import Container from '@material-ui/core/Container';

import file from './cv/Cedric-Dupuis-cv-fr.pdf';

// CONSTANTS
const TOOLBAR_HEIGHT = 48;

// HOOKS
const useStyles = makeStyles((theme) => ({
  viewer: {
    maxWidth: '100%',
    maxHeight: `calc(100vh - 56px - ${TOOLBAR_HEIGHT}px)`,
    '@media (min-width:0px) and (orientation: landscape)': {
      maxHeight: `calc(100vh - 48px - ${TOOLBAR_HEIGHT}px)`,
    },
    [theme.breakpoints.up('sm')]: {
      maxHeight: `calc(100vh - 64px - ${TOOLBAR_HEIGHT}px)`,
    },
  },
}));

// COMPONENTS
const Pro = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <PdfViewerContextProvider>
          <PdfViewerToolbar />
          <PdfViewer
            file={file}
            className={classes.viewer}
          />
        </PdfViewerContextProvider>
        {/* <LinkedinBadgeProfile /> */}
      </Box>
    </Container>
  );
};
export default Pro;
