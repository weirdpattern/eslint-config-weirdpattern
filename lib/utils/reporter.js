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
