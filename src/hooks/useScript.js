import isString from 'helpers/isString';
import isNil from 'helpers/isNil';
import noop from 'helpers/noop';
import createScript, { STATUS_ATTR, LOADING, DONE, ERROR } from 'helpers/createScript';

import { useEffect, useReducer, useMemo, useCallback, useRef } from 'react';

// CONSTANTS
const LOADING_SCRIPT = Symbol('LOADING_SCRIPT');
const LOADED_SCRIPT = Symbol('LOADED_SCRIPT');
const SCRIPT_ERROR = Symbol('SCRIPT_ERROR');
const RESET = Symbol('RESET');

const INITIAL_STATE = {
  error: null,
  loading: false,
  done: false,
};

// HELPERS


// REDUCER
const reducer = (state, { type }) => {
  switch (type) {
    case LOADING_SCRIPT:
      return { ...state, loading: true };
    case LOADED_SCRIPT:
      return { ...state, loading: false, done: true };
    case SCRIPT_ERROR:
      return { ...state, loading: false, error: SCRIPT_ERROR };
    case RESET:
      return INITIAL_STATE;
    default:
      throw new Error();
  }
};

// HOOKS
export default (src) => {
  const idle = useMemo(
    () => !isString(src),
    [src],
  );

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const scriptRef = useRef();


  const dispatchStatusChanges = useCallback(
    (status) => {
      if (isNil(status)) {
        return dispatch({ type: RESET });
      }
      if (status === LOADING) {
        return dispatch({ type: LOADING_SCRIPT });
      }
      if (status === DONE) {
        return dispatch({ type: LOADED_SCRIPT });
      }
      if (status === ERROR) {
        return dispatch({ type: SCRIPT_ERROR });
      }
      throw new Error('Unknown script attribute');
    },
    [dispatch],
  );

  const onInit = useCallback(
    (script) => {
      const status = script.getAttribute(STATUS_ATTR);
      dispatchStatusChanges(status);
    },
    [dispatchStatusChanges],
  );

  const onUpdate = useCallback(
    () => {
      const { current } = scriptRef;

      const status = current.getAttribute(STATUS_ATTR);
      dispatchStatusChanges(status);
    },
    [dispatchStatusChanges, scriptRef],
  );

  useEffect(
    () => {
      if (idle) {
        return noop;
      }
      const script = createScript(src);
      scriptRef.current = script;
      onInit(script);

      script.addEventListener('load', onUpdate);
      script.addEventListener('error', onUpdate);
      return () => {
        script.removeEventListener('load', onUpdate);
        script.removeEventListener('error', onUpdate);
      };
    },
    [idle, onInit, onUpdate, scriptRef, src],
  );

  return state;
};
