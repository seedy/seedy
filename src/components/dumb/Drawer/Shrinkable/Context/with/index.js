import { forwardRef } from 'react';

import { useDrawerShrinkableContext } from 'components/dumb/Drawer/Shrinkable/Context';

// HOC
const withDrawerShrinkableContext = (Component) => {
  const DrawerShrinkableContextHOC = forwardRef((props, ref) => {
    const context = useDrawerShrinkableContext();

    return (
      <Component ref={ref} {...props} {...context} />
    );
  });

  return DrawerShrinkableContextHOC;
};

export default withDrawerShrinkableContext;
