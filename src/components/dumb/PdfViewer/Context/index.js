import { createContext, useContext, useCallback, useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';

// CONSTANTS
const ZOOM_FACTOR = 1.1;

const ZOOM_IN = Symbol('ZOOM_IN');
const ZOOM_OUT = Symbol('ZOOM_OUT');
const INIT = Symbol('INIT');
const RESET = Symbol('RESET');

const INITIAL_SCALE_STATE = {
  scale: undefined,
};

//   CONTEXT
export const PdfViewerContext = createContext({
  doc: null,
  ...INITIAL_SCALE_STATE,
  onScaleChanged: null,
  onZoomIn: null,
  onZoomOut: null,
  onInit: null,
  onReset: null,
  onLoadDoc: null,
});

// REDUCER
const reducer = ({ scale, ...state }, { type, scale: updatedScale }) => {
  switch (type) {
    case ZOOM_IN:
      return { ...state, scale: scale * ZOOM_FACTOR };
    case ZOOM_OUT:
      return { ...state, scale: scale / ZOOM_FACTOR };
    case INIT:
      return { ...state, scale: updatedScale };
    case RESET:
      return INITIAL_SCALE_STATE;
    default:
      throw new Error();
  }
};

// HOOKS
export const usePdfViewerContext = () => useContext(PdfViewerContext);

// COMPONENTS
const PdfViewerContextProvider = ({ children, ...props }) => {
  const [{ scale }, dispatch] = useReducer(reducer, INITIAL_SCALE_STATE);

  const onZoomIn = useCallback(
    () => dispatch({ type: ZOOM_IN }),
    [dispatch],
  );

  const onZoomOut = useCallback(
    () => dispatch({ type: ZOOM_OUT }),
    [dispatch],
  );

  const onInit = useCallback(
    (initScale) => dispatch({ type: INIT, scale: initScale }),
    [dispatch],
  );

  const onReset = useCallback(
    () => dispatch({ type: RESET }),
    [dispatch],
  );

  const value = useMemo(
    () => ({
      scale,
      onZoomIn,
      onZoomOut,
      onInit,
      onReset,
    }),
    [
      scale,
      onZoomIn, onZoomOut, onInit, onReset,
    ],
  );

  return (
    <PdfViewerContext.Provider value={value} {...props}>
      {children}
    </PdfViewerContext.Provider>
  );
};

PdfViewerContextProvider.propTypes = {
  children: PropTypes.node,
};

PdfViewerContextProvider.defaultProps = {
  children: null,
};

export default PdfViewerContextProvider;
