/**
 * MIT License
 *
 * Copyright (c) 2017 WeirdPattern
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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
      resolve('lib', 'rules', 'possible-errors.js'),
      resolve('lib', 'rules', 'strict.js'),
      resolve('lib', 'rules', 'stylistic-issues.js'),
      resolve('lib', 'rules', 'variables.js'),
      resolve('lib', 'utils', 'reporter.js'),
      resolve('specs', 'utils', 'reporter-specs.js'),
      resolve('specs', 'index-specs.js'),
    ];

    const options = {
      envs: ['node', 'es6', 'jest'],
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
