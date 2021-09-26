import isNil from 'helpers/isNil';

// CONSTANTS
export const STATUS_ATTR = 'data-status';

export const LOADING = 'LOADING';
export const DONE = 'DONE';
export const ERROR = 'ERROR';

export const LOAD_EVENT = 'load';
export const ERROR_EVENT = 'error';

// HELPERS
const createScript = (src, options = null) => {
  const existingScript = document.querySelector(`script[src="${src}"]`);

  if (isNil(existingScript)) {
    const script = document.createElement('script');

    script.src = src;
    script.async = true;
    if (!isNil(options)) {
      Object.entries(options).forEach(([key, value]) => { script[key] = value; });
    }
    script.setAttribute(STATUS_ATTR, LOADING);
    // Add script to document body
    document.body.appendChild(script);

    // Store status in attribute on script
    // This can be read by other instances of this hook
    const setAttributeFromEvent = ({ type }) => {
      script.setAttribute(
        STATUS_ATTR,
        type === LOAD_EVENT ? DONE : ERROR,
      );
    };
    script.addEventListener(LOAD_EVENT, setAttributeFromEvent);
    script.addEventListener(ERROR_EVENT, setAttributeFromEvent);

    return script;
  }

  return existingScript;
};

export default createScript;
