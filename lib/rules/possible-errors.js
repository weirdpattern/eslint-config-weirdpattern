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
    'no-await-in-loop': error(),
    'no-compare-neg-zero': warn(),
    'no-extra-parens': warn('all', { nestedBinaryExpressions: false, ignoreJSX: 'all' }),
    'no-prototype-builtins': warn(),
    'no-template-curly-in-string': off(),
    'valid-jsdoc': warn({
      prefer: {
        arg: 'param',
        argument: 'param',
        class: 'constructor',
        return: 'returns',
        virtual: 'abstract',
      },
      preferType: {
        object: 'Object',
        function: 'Function',
        Boolean: 'boolean',
        String: 'string',
        Number: 'number',
        date: 'Date',
        regex: 'RegExp',
        regexp: 'RegExp',
        map: 'Map',
        set: 'Set',
        weakmap: 'WeakMap',
        weakset: 'WeakSet',
      },
      requireReturn: false,
      requireReturnType: true,
      requireParamDescription: true,
      requireReturnDescription: true,
    }),
  },
};
