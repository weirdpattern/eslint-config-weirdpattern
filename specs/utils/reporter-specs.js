/**
 * Copyright (c) 2017, WeirdPattern
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { off, warn, error } = require('../../lib/utils/reporter');

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
