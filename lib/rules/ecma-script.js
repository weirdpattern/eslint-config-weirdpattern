/**
 * Copyright (c) 2017, WeirdPattern
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { error, off, warn } = require('../utils/reporter');

module.exports = {
  rules: {
    'arrow-body-style': warn('as-needed', { requireReturnForObjectLiteral: true }),
    'arrow-parens': warn('always'),
    'arrow-spacing': warn({ before: true, after: true }),
    'generator-star-spacing': warn({ before: false, after: true }),
    'no-confusing-arrow': warn({ allowParens: true }),
    'no-duplicate-imports': error({ includeExports: true }),
    'no-restricted-imports': off(),
    'no-useless-computed-key': warn(),
    'no-useless-constructor': warn(),
    'no-useless-rename': warn(),
    'no-var': error(),
    'object-shorthand': warn('always'),
    'prefer-arrow-callback': warn(),
    'prefer-const': warn(),
    'prefer-destructuring': warn({ array: true, object: true }),
    'prefer-numeric-literals': warn(),
    'prefer-rest-params': warn(),
    'prefer-spread': warn(),
    'prefer-template': warn(),
    'rest-spread-spacing': warn('never'),
    'sort-imports': off(),
    'symbol-description': warn(),
    'template-curly-spacing': warn('never'),
    'yield-star-spacing': warn({ before: false, after: true }),
  },
};
