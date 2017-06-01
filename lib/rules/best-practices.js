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
    'accessor-pairs': error({ setWithoutGet: true }),
    'array-callback-return': warn(),
    'block-scoped-var': error(),
    'class-methods-use-this': warn(),
    'complexity': warn(),
    'consistent-return': warn(),
    'curly': warn('multi-or-nest'),
    'default-case': warn({ commentPattern: '^(?:no|ignore)\\sdefault$' }),
    'dot-location': warn('property'),
    'dot-notation': warn(),
    'eqeqeq': error('always', { null: 'ignore' }),
    'guard-for-in': off(),
    'no-alert': error(),
    'no-caller': error(),
    'no-div-regex': off(),
    'no-else-return': warn(),
    'no-empty-function': warn(),
    'no-eq-null': off(),
    'no-eval': error(),
    'no-extend-native': warn(),
    'no-extra-bind': warn(),
    'no-extra-label': error(),
    'no-floating-decimal': error(),
    'no-implicit-coercion': warn(),
    'no-implicit-globals': error(),
    'no-implied-eval': error(),
    'no-invalid-this': error(),
    'no-iterator': error(),
    'no-labels': error(),
    'no-lone-blocks': warn(),
    'no-loop-func': warn(),
    'no-magic-numbers': off(),
    'no-multi-spaces': warn({
      exceptions: {
        Property: true,
        VariableDeclarator: true,
        ImportDeclaration: true,
      },
    }),
    'no-multi-str': error(),
    'no-new': warn(),
    'no-new-func': error(),
    'no-new-wrappers': warn(),
    'no-octal-escape': warn(),
    'no-param-reassign': warn({ props: false }),
    'no-proto': error(),
    'no-restricted-properties': off(),
    'no-return-assign': warn('always'),
    'no-return-await': off(),
    'no-script-url': off(),
    'no-self-compare': warn(),
    'no-sequences': warn(),
    'no-throw-literal': error(),
    'no-unmodified-loop-condition': warn(),
    'no-unused-expressions': warn({ allowShortCircuit: true, allowTernary: true }),
    'no-useless-call': warn(),
    'no-useless-concat': warn(),
    'no-useless-escape': warn(),
    'no-useless-return': warn(),
    'no-void': off(),
    'no-warning-comments': warn({ terms: ['todo', 'fix', 'fixme', 'hack', 'review ', 'needs review'] }),
    'no-with': error(),
    'prefer-promise-reject-errors': warn({ allowEmptyReject: true }),
    'radix': warn('as-needed'),
    'require-await': warn(),
    'vars-on-top': off(),
    'wrap-iife': warn('inside', { functionPrototypeMethods: true }),
    'yoda': warn('never'),
  },
};
