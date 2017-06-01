/**
 * Copyright (c) 2017, WeirdPattern
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = {
  /**
   * Turns off the rule.
   * @returns {string} the string to be used to disable the rule.
   */
  off() {
    return 'off';
  },

  /**
   * Considers the rule as a warning.
   * @param {...*} args the arguments to be used.
   * @returns {string|Array.<*>} the values to be used to configure the warning.
   */
  warn(...args) {
    if (args.length === 0) return 'warn';
    if (args.length === 1) return ['warn', args[0]];
    if (args.length === 2) return ['warn', args[0], args[1]];

    return ['warn', ...args];
  },

  /**
   * Considers the rule as an error.
   * @param {...*} args the arguments to be used.
   * @returns {string|Array.<*>} the values to be used to configure the error.
   */
  error(...args) {
    if (args.length === 0) return 'error';
    if (args.length === 1) return ['error', args[0]];
    if (args.length === 2) return ['error', args[0], args[1]];

    return ['error', ...args];
  },
};
