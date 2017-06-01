/**
 * Copyright (c) 2017, WeirdPattern
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { error, warn } = require('../utils/reporter');

module.exports = {
  rules: {
    'init-declarations': warn('always'),
    'no-catch-shadow': warn(),
    'no-label-var': warn(),
    'no-restricted-globals': warn('event'),
    'no-shadow': warn({ builtinGlobals: true, hoist: 'all' }),
    'no-shadow-restricted-names': warn(),
    'no-undef-init': error(),
    'no-undefined': error(),
    'no-use-before-define': error({ functions: true, classes: true, variables: true }),
  },
};
