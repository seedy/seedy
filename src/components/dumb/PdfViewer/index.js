import { forwardRef, useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import isFunction from 'helpers/isFunction';
import isNil from 'helpers/isNil';
import floor from 'helpers/floor';

import { getDocument } from 'helpers/pdfjs';
import * as PDFJSViewer from 'pdfjs-dist/web/pdf_viewer';

import { usePdfViewerContext } from 'components/dumb/PdfViewer/Context';

import Box from '@mui/material/Box';

import 'pdfjs-dist/web/pdf_viewer.css';

// CONSTANTS
const CSS_UNITS = 96 / 72;

// COMPONENTS
const PdfViewer = forwardRef(({ file, ...props }, ref) => {
  const { scale, onInit } = usePdfViewerContext();

  const pdfViewerRef = useRef();
  const rootRef = useRef();

  const initViewer = useCallback(
    () => {
      const eventBus = new PDFJSViewer.EventBus();
      eventBus.on('pagesinit', async () => {
        const { current } = pdfViewerRef;
        if (isNil(current)) {
          throw new Error('init failed');
        }
        const { pdfDocument, container } = current;
        const page = await pdfDocument.getPage(1);
        const viewport = page.getViewport({ scale: 1 });
        const maxWidthScale = Math.min(1, container.clientWidth / (viewport.width * CSS_UNITS));
        const maxHeightScale = Math.min(1, container.clientHeight / (viewport.height * CSS_UNITS));
        const maxScale = Math.min(maxWidthScale, maxHeightScale);
        current.currentScaleValue = floor(maxScale, 1);

        const { currentScale } = current;
        if (isFunction(onInit)) {
          onInit(currentScale);
        }
      });

      const pdfFindController = new PDFJSViewer.PDFFindController({
        eventBus,
      });
      pdfViewerRef.current = new PDFJSViewer.PDFSinglePageViewer({
        container: rootRef.current,
        eventBus,
        findController: pdfFindController,

      });
    },
    [
      pdfViewerRef, rootRef,
      onInit,
    ],
  );

  const loadDocument = useCallback(
    async (document) => {
      const pdf = await getDocument(document);
      pdfViewerRef.current.setDocument(pdf);
    },
    [pdfViewerRef],
  );

  useEffect(
    () => {
      initViewer();
    },
    [initViewer],
  );

  useEffect(
    () => {
      const { current } = pdfViewerRef;
      if (!isNil(current) && !isNil(scale) && !Number.isNaN(scale)) {
        current.currentScale = scale;
      }
    },
    [scale, pdfViewerRef],
  );

  useEffect(
    () => {
      if (!isNil(file)) {
        loadDocument(file);
      }
    },
    [file, loadDocument],
  );

  return (
    <Box {...props} ref={rootRef}>
      <div ref={ref} className="pdfViewer" />
    </Box>
  );
});

PdfViewer.propTypes = {
  file: PropTypes.string,
};

PdfViewer.defaultProps = {
  file: null,
};

export default PdfViewer;
