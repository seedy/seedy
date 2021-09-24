import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

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
