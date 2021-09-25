export default () => {
  if (typeof window !== 'undefined') {
    return !window?.matchMedia('(hover: none)').matches;
  }
}
