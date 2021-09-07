import { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import isNil from 'helpers/isNil';

import makeStyles from '@material-ui/core/styles/makeStyles';

import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Portal from '@material-ui/core/Portal';

// HOOKS
const useStyles = makeStyles((theme) => ({
  boxSpaced: {
    display: 'flex',
    '&:not(:last-child)': {
      marginRight: theme.spacing(0.5),
    },
    [theme.breakpoints.only('xs')]: {
      margin: theme.spacing(0.5, 0),
      flexDirection: 'column',
    },
  },
}));

// COMPONENTS
const ChipTree = forwardRef(({ children, active, color, container, boxProps, ...props }, ref) => {
  const classes = useStyles();

  const activeColor = useMemo(
    () => {
      if (color === 'primary') {
        return 'secondary';
      }
      return 'primary';
    },
    [color],
  );

  const chipColor = useMemo(
    () => (active ? activeColor : color),
    [active, activeColor, color],
  );

  const canRender = useMemo(
    () => active && !isNil(container),
    [active, container],
  );

  return (
    <Box className={classes.boxSpaced} {...boxProps}>
      <Chip
        color={chipColor}
        ref={ref}
        {...props}
      />
      {canRender && (
      <Portal container={container}>
        <Box my={1}>
          <Divider />
        </Box>
          {children}
      </Portal>
      )}
    </Box>
  );
});

ChipTree.propTypes = {
  children: PropTypes.node,
  container: PropTypes.instanceOf(Element),
  active: PropTypes.bool,
  clickable: PropTypes.bool,
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  boxProps: PropTypes.object,
};

ChipTree.defaultProps = {
  children: null,
  container: null,
  active: false,
  clickable: true,
  color: 'default',
  boxProps: {},
};

export default ChipTree;
