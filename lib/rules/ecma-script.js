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

const { off, warn, error } = require('../utils/reporter');

module.exports = {
  rules: {
    'arrow-body-style': error('as-needed', { requireReturnForObjectLiteral: true }),
    'arrow-parens': error('always'),
    'arrow-spacing': error({ before: true, after: true }),
    'generator-star-spacing': error({ before: false, after: true }),
    'no-confusing-arrow': error({ allowParens: true }),
    'no-duplicate-imports': error({ includeExports: true }),
    'no-restricted-imports': off(),
    'no-useless-computed-key': error(),
    'no-useless-constructor': error(),
    'no-useless-rename': error(),
    'no-var': error(),
    'object-shorthand': error('always'),
    'prefer-arrow-callback': error(),
    'prefer-const': error(),
    'prefer-destructuring': error({ array: true, object: true }),
    'prefer-numeric-literals': error(),
    'prefer-rest-params': error(),
    'prefer-spread': error(),
    'prefer-template': error(),
    'rest-spread-spacing': error('never'),
    'sort-imports': off(),
    'symbol-description': error(),
    'template-curly-spacing': error('never'),
    'yield-star-spacing': error({ before: false, after: true }),
  },
};
