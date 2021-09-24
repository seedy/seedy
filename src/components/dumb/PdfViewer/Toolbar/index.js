import { forwardRef, useMemo } from 'react';

import isNil from 'helpers/isNil';

import { usePdfViewerContext } from 'components/dumb/PdfViewer/Context';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';


// COMPONENTS
const PdfViewerToolbar = forwardRef((props, ref) => {
  const { onZoomIn, onZoomOut, scale } = usePdfViewerContext();

  const displayedScale = useMemo(
    () => (isNil(scale) ? 0 : (scale * 100).toFixed(1)),
    [scale],
  );

  return (
    <Toolbar
      sx={{
        minHeight: 'auto',
      }}
      ref={ref}
      {...props}
    >
      <IconButton onClick={onZoomIn} edge="start" size="large">
        <ZoomInIcon />
      </IconButton>
      <Typography
        sx={{
          mx: 1,
        }}
        variant="caption"
        align="center"
      >
        {`${displayedScale}%`}
      </Typography>
      <IconButton onClick={onZoomOut} edge="end" size="large">
        <ZoomOutIcon />
      </IconButton>
    </Toolbar>
  );
});

export default PdfViewerToolbar;
