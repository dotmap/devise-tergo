/* eslint-disable no-global-assign */
require = require('@std/esm')(module, {cjs: true})
module.exports = require('./server.mjs').default
