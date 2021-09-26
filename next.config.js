const withTM = require('next-transpile-modules')(['@mui/material']);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['www.codewars.com']
  }
})
