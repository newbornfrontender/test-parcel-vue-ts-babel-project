'use strict';

const posthtmlBem = require('posthtml-bem')({
  elemPrefix: '__',
  modPrefix: '--',
  modDlmtr: '--',
});

const posthtmlHeadElements = require('posthtml-head-elements')({
  headElements: './public/posthtml-head-elements.json',
});

module.exports = {
  plugins: process.env.NODE_ENV === 'production' ? [
    posthtmlHeadElements,
    posthtmlBem,
  ] : [
    posthtmlHeadElements,
    posthtmlBem,
  ],
};
