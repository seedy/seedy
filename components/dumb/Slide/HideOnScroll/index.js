import PropTypes from 'prop-types';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const SlideHideOnScroll = ({ children }) => {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

SlideHideOnScroll.propTypes = {
  children: PropTypes.node,
};

SlideHideOnScroll.defaultProps = {
  children: null,
};

export default SlideHideOnScroll;
