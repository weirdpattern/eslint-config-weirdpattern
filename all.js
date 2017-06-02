/**
 * Copyright (c) 2017, WeirdPattern
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const possibleErrors  = require('./lib/rules/possible-errors');
const bestPractices   = require('./lib/rules/best-practices');
const strict          = require('./lib/rules/strict');
const variables       = require('./lib/rules/variables');
const environment     = require('./lib/rules/environment');
const stylisticIssues = require('./lib/rules/stylistic-issues');
const ecmaScript      = require('./lib/rules/ecma-script');
const importPlugin    = require('./lib/rules/import');
const reactPlugin     = require('./lib/rules/react');
const jsxA11yPlugin   = require('./lib/rules/jsx-a11y');

module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended'],
  plugins: ['import', 'jsx-a11y', 'react'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: Object.assign(
    {},
    possibleErrors.rules,
    bestPractices.rules,
    strict.rules,
    variables.rules,
    environment.rules,
    stylisticIssues.rules,
    ecmaScript.rules,
    importPlugin.rules,
    reactPlugin.rules,
    jsxA11yPlugin.rules
  ),
};
