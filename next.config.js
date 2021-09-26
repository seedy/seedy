const withTM = require('next-transpile-modules')(['@mui/material']);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['www.codewars.com'],
  },
  eslint: {
    dirs: ['pages', 'components', 'constants', 'helpers', 'hooks', 'styles'],
  },
});
