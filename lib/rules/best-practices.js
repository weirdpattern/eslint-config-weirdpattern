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
    'accessor-pairs': error({ setWithoutGet: true }),
    'array-callback-return': error(),
    'block-scoped-var': error(),
    'class-methods-use-this': error(),
    'complexity': warn(),
    'consistent-return': error(),
    'curly': error('multi-or-nest'),
    'default-case': error({ commentPattern: '^(?:no|ignore)\\sdefault$' }),
    'dot-location': error('property'),
    'dot-notation': error(),
    'eqeqeq': error('always', { null: 'ignore' }),
    'guard-for-in': off(),
    'no-alert': error(),
    'no-caller': error(),
    'no-div-regex': off(),
    'no-else-return': error(),
    'no-empty-function': error(),
    'no-eq-null': off(),
    'no-eval': error(),
    'no-extend-native': error(),
    'no-extra-bind': error(),
    'no-extra-label': error(),
    'no-floating-decimal': error(),
    'no-implicit-coercion': error(),
    'no-implicit-globals': error(),
    'no-implied-eval': error(),
    'no-invalid-this': error(),
    'no-iterator': error(),
    'no-labels': error(),
    'no-lone-blocks': error(),
    'no-loop-func': error(),
    'no-magic-numbers': off(),
    'no-multi-spaces': error({
      exceptions: {
        Property: true,
        VariableDeclarator: true,
        ImportDeclaration: true,
      },
    }),
    'no-multi-str': error(),
    'no-new': error(),
    'no-new-func': error(),
    'no-new-wrappers': error(),
    'no-octal-escape': error(),
    'no-param-reassign': error({ props: false }),
    'no-proto': error(),
    'no-restricted-properties': off(),
    'no-return-assign': error('always'),
    'no-return-await': off(),
    'no-script-url': off(),
    'no-self-compare': error(),
    'no-sequences': error(),
    'no-throw-literal': error(),
    'no-unmodified-loop-condition': error(),
    'no-unused-expressions': error({ allowShortCircuit: true, allowTernary: true }),
    'no-useless-call': error(),
    'no-useless-concat': error(),
    'no-useless-escape': error(),
    'no-useless-return': error(),
    'no-void': off(),
    'no-warning-comments': error({ terms: ['todo', 'fix', 'fixme', 'hack', 'review ', 'needs review'] }),
    'no-with': error(),
    'prefer-promise-reject-errors': error({ allowEmptyReject: true }),
    'radix': error('as-needed'),
    'require-await': error(),
    'vars-on-top': off(),
    'wrap-iife': error('inside', { functionPrototypeMethods: true }),
    'yoda': error('never'),
  },
};
