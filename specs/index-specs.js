/**
 * Copyright (c) 2017, WeirdPattern
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { resolve } = require('path');

const eslint = require('eslint');
const conf = require('../');

describe('eslint-config-weirdpattern', () => {
  it('completes analysis without errors', () => {
    const files = [
      resolve('lib', 'index.js'),
      resolve('lib', 'rules', 'best-practices.js'),
      resolve('lib', 'rules', 'ecma-script.js'),
      resolve('lib', 'rules', 'environment.js'),
      resolve('lib', 'rules', 'import.js'),
      resolve('lib', 'rules', 'jsx-a11y.js'),
      resolve('lib', 'rules', 'possible-errors.js'),
      resolve('lib', 'rules', 'react.js'),
      resolve('lib', 'rules', 'strict.js'),
      resolve('lib', 'rules', 'stylistic-issues.js'),
      resolve('lib', 'rules', 'variables.js'),
      resolve('lib', 'utils', 'reporter.js'),
      resolve('specs', 'utils', 'reporter-specs.js'),
      resolve('specs', 'index-specs.js'),
    ];

    const options = {
      envs: ['browser', 'commonjs', 'es6', 'jest', 'node'],
      plugins: ['import', 'react', 'jsx-a11y'],
      useEslintrc: false,
      rules: conf.rules,
    };

    const report = new eslint.CLIEngine(options).executeOnFiles(files);
    expect(report.errorCount).toEqual(0);
    expect(report.warningCount).toEqual(0);

    files.forEach((file, index) => {
      expect(report.results[index].filePath.endsWith(file)).toBeTruthy();
    });
  });
});
