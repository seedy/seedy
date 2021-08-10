import { forwardRef, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Vivus from 'vivus';

import isNil from 'helpers/isNil';
import isFunction from 'helpers/isFunction';

import makeStyles from '@material-ui/core/styles/makeStyles';

import { ReactComponent as ShortLogo } from './Seedy.svg';
import { ReactComponent as LongLogo } from './SeedyDupuis.svg';

// CONSTANTS
const VIVUS_ID = 'LOGO_VIVUS';

// HOOKS
const useStyles = makeStyles(
  (theme) => ({
    logoRoot: {
      stroke: theme.palette.common.black,
    },
  }),
);

// COMPONENTS
const Logo = forwardRef(({ className, short, onClick, ...props }, ref) => {
  const innerClasses = useStyles();

  const vivusRef = useRef();

  const onMount = useCallback(
    (node) => {
      if (!isNil(ref)) {
        ref.current = node; // eslint-disable-line no-param-reassign
      }
      vivusRef.current = new Vivus(VIVUS_ID, {
        type: 'sync',
        duration: 30,
      });
    },
    [ref, vivusRef],
  );

  const handleClick = useCallback(
    (e) => {
      if (!isNil(vivusRef.current)) {
        vivusRef.current.reset().play();
      }
      if (isFunction(onClick)) {
        onClick(e);
      }
    },
    [vivusRef, onClick],
  );

  if (short) {
    return (
      <ShortLogo
        className={clsx(innerClasses.logoRoot, className)}
        id={VIVUS_ID}
        ref={onMount}
        onClick={handleClick}
        {...props}
      />
    );
  }

  return (
    <LongLogo
      className={clsx(innerClasses.logoRoot, className)}
      id={VIVUS_ID}
      ref={onMount}
      onClick={handleClick}
      {...props}
    />
  );
});

Logo.propTypes = {
  className: PropTypes.string,
  short: PropTypes.bool,
  onClick: PropTypes.func,
};

Logo.defaultProps = {
  className: '',
  short: false,
  onClick: null,
};

export default Logo;
