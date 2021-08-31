import { forwardRef } from 'react';
import clsx from 'clsx';

import { useDrawerShrinkableContext } from 'components/dumb/Drawer/Shrinkable/Context';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Box from '@material-ui/core/Box';

// HOOKS
const useStyles = makeStyles((theme) => ({
  content: ({ width }) => ({
    marginLeft: width,
    // XS : drawer floats over content rather than pushing it
    [theme.breakpoints.only('xs')]: {
      marginLeft: theme.spacing(9) + 1,
    },
  }),
  contentShrink: {
    marginLeft: theme.spacing(9) + 1,
  },
}));


// COMPONENTS
const BoxWithDrawerShrinkableContext = forwardRef((props, ref) => {
  const { width, shrink } = useDrawerShrinkableContext();
  const classes = useStyles({ width });

  return (
    <Box
      className={clsx({
        [classes.content]: !shrink,
        [classes.contentShrink]: shrink,
      })}
      ref={ref}
      {...props}
    />
  );
});

export default BoxWithDrawerShrinkableContext;
