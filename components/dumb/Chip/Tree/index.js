import { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import isNil from 'helpers/isNil';
import noop from 'helpers/noop';

import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import ChipBox from 'components/dumb/Chip/Box';
import Portal from '@mui/material/Portal';

// COMPONENTS
const ChipTree = forwardRef(({ children, active, color, container, boxProps, ...props }, ref) => {
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        '&:not(:last-child)': {
          marginRight: {
            xs: 0,
            md: 0.5,
          },
          marginBottom: {
            xs: 0.5,
            md: 0,
          },
        },
      }}
      {...boxProps}
    >
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
          <ChipBox>
            {children}
          </ChipBox>
        </Portal>
      )}
    </Box>
  );
});

ChipTree.propTypes = {
  children: PropTypes.node,
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? noop : Element),
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
