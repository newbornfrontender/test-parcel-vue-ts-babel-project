'use strict';

module.exports = {
  plugins: process.env.NODE_ENV === 'production' ? [
    require('autoprefixer')({
      cascade: false,
      grid: true,
    }),
  ] : [],
};
