import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

const BoxFlexGap = (props) => <Box {...props} />;

BoxFlexGap.propTypes = {
  display: PropTypes.string,
  gap: PropTypes.number,
};

BoxFlexGap.defaultProps = {
  display: 'flex',
  gap: 1,
};

export default BoxFlexGap;
