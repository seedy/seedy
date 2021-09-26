const withTM = require('next-transpile-modules')(['@mui/material']);
const { i18n } = require('./next-i18next.config');

module.exports = withTM({
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['www.codewars.com'],
  },
  eslint: {
    dirs: ['pages', 'components', 'constants', 'helpers', 'hooks', 'styles'],
  },
});
