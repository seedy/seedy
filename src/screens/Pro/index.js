import Box from '@material-ui/core/Box';
// import LinkedinBadgeProfile from 'components/dumb/Badge/Profile/Linkedin';

import PdfViewerContextProvider from 'components/dumb/PdfViewer/Context';
import PdfViewerToolbar from 'components/dumb/PdfViewer/Toolbar';
import PdfViewer from 'components/dumb/PdfViewer';

import file from './cv/Cedric-Dupuis-cv-fr.pdf';

const Pro = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
  >
    <PdfViewerContextProvider>
      <PdfViewerToolbar />
      <PdfViewer file={file} />
    </PdfViewerContextProvider>
    {/* <LinkedinBadgeProfile /> */}
  </Box>
);

export default Pro;
