/**
 * Copyright (c) 2017, WeirdPattern
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const possibleErrors  = require('./rules/possible-errors');
const bestPractices   = require('./rules/best-practices');
const strict          = require('./rules/strict');
const variables       = require('./rules/variables');
const environment     = require('./rules/environment');
const stylisticIssues = require('./rules/stylistic-issues');
const ecmaScript      = require('./rules/ecma-script');
const importPlugin    = require('./rules/import');
const reactPlugin     = require('./rules/react');
const jsxA11yPlugin   = require('./rules/jsx-a11y');

module.exports = {
  root: true,
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
