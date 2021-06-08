import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';

const BoxFlexFill = (props) => <Box {...props} />;

BoxFlexFill.propTypes = {
  display: PropTypes.string,
  flexGrow: PropTypes.number,
};

BoxFlexFill.defaultProps = {
  display: 'flex',
  flexGrow: 1,
};

export default BoxFlexFill;
