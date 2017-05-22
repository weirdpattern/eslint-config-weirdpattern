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

const reporter = require('../../lib/utils/reporter');

const off = reporter.off;
const warn = reporter.warn;
const error = reporter.error;

describe('reporter', () => {
  describe('off', () => {
    it('returns "off" when invoked', () => {
      expect(off()).toEqual('off');
    });

    it('ignores any arguments passed to the function', () => {
      expect(off(1)).toEqual('off');
      expect(off(1, 2)).toEqual('off');
      expect(off({})).toEqual('off');
      expect(off([])).toEqual('off');
    });
  });

  describe('warn', () => {
    it('returns "warn" when invoked', () => {
      expect(warn()).toEqual('warn');
    });

    it('takes multi parameters', () => {
      expect(warn(1)).toEqual(['warn', 1]);
      expect(warn(1, 'test')).toEqual(['warn', 1, 'test']);
      expect(warn({ test: 1 })).toEqual(['warn', { test: 1 }]);
      expect(warn('always', { test: 1 })).toEqual(['warn', 'always', { test: 1 }]);
      expect(warn('always', 5, { test: 1 })).toEqual(['warn', 'always', 5, { test: 1 }]);
    });
  });

  describe('error', () => {
    it('returns "error" when invoked', () => {
      expect(error()).toEqual('error');
    });

    it('takes multi parameters', () => {
      expect(error(1)).toEqual(['error', 1]);
      expect(error(1, 'test')).toEqual(['error', 1, 'test']);
      expect(error({ test: 1 })).toEqual(['error', { test: 1 }]);
      expect(error('always', { test: 1 })).toEqual(['error', 'always', { test: 1 }]);
      expect(error('always', 5, { test: 1 })).toEqual(['error', 'always', 5, { test: 1 }]);
    });
  });
});
