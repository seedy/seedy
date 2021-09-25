import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';

const ButtonDownload = forwardRef(({ href, download, ...props }, ref) => (
  <Button href={href} download={download} component="a" ref={ref} {...props} />
));

ButtonDownload.propTypes = {
  href: PropTypes.string.isRequired,
  download: PropTypes.string,
};

ButtonDownload.defaultProps = {
  download: undefined,
};

export default ButtonDownload;
