// HELPERS
const matchMediaHover = () => {
  if (typeof window !== 'undefined') {
    return !window?.matchMedia('(hover: none)').matches;
  }
  return false;
};

export default matchMediaHover;
