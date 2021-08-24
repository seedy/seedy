import { forwardRef, useMemo } from 'react';

import isNil from 'helpers/isNil';

import { usePdfViewerContext } from 'components/dumb/PdfViewer/Context';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';

// HOOKS
const useStyles = makeStyles(() => ({
  root: {
    maxHeight: 'none',
  },
}));

// COMPONENTS
const PdfViewerToolbar = forwardRef((props, ref) => {
  const classes = useStyles();

  const { onZoomIn, onZoomOut, scale } = usePdfViewerContext();

  const displayedScale = useMemo(
    () => (isNil(scale) ? 0 : (scale * 100).toFixed(1)),
    [scale],
  );

  return (
    <Toolbar classes={{ root: classes.root }} ref={ref} {...props}>
      <IconButton onClick={onZoomIn} edge="start">
        <ZoomInIcon />
      </IconButton>
      <Typography variant="caption" align="center">
        {`${displayedScale}%`}
      </Typography>
      <IconButton onClick={onZoomOut} edge="end">
        <ZoomOutIcon />
      </IconButton>
    </Toolbar>
  );
});

PdfViewerToolbar.propTypes = {

};

PdfViewerToolbar.defaultProps = {

};

export default PdfViewerToolbar;
