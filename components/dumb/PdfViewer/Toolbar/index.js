import { forwardRef, useMemo } from 'react';

import { useTranslation } from 'next-i18next';

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

  const { t } = useTranslation('common');

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
      <IconButton
        onClick={onZoomIn}
        edge="start"
        size="large"
        aria-label={t('common:zoomIn')}
      >
        <ZoomInIcon />
      </IconButton>
      <Typography
        sx={{
          mx: 1,
          minWidth: '5rem',
        }}
        variant="caption"
        align="center"
      >
        {`${displayedScale}%`}
      </Typography>
      <IconButton
        onClick={onZoomOut}
        edge="end"
        size="large"
        aria-label={t('common:zoomOut')}
      >
        <ZoomOutIcon />
      </IconButton>
    </Toolbar>
  );
});

export default PdfViewerToolbar;
