import PropTypes from 'prop-types';

import withDrawerShrinkableContext from 'components/dumb/Drawer/Shrinkable/Context/with';
import DrawerShrinkable from 'components/dumb/Drawer/Shrinkable';

const DrawerShrinkableWithContext = ({ onShrinkToggle, ...props }) => (
  <DrawerShrinkable {...props} />
);

DrawerShrinkableWithContext.propTypes = {
  onShrinkToggle: PropTypes.func,
};

DrawerShrinkableWithContext.defaultProps = {
  onShrinkToggle: null,
};

export default withDrawerShrinkableContext(DrawerShrinkableWithContext);
