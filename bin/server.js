#!/usr/bin/env node
require('babel-register'); // babel registration (runtime transpilation for node)

/* eslint-disable no-underscore-dangle */
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

require('../src/server');
