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
    'react/display-name': warn({ ignoreTranspilerName: true }),
    'react/forbid-component-props': warn(),
    'react/forbid-elements': off(),
    'react/forbid-prop-types': warn({ forbid: ['any', 'array'] }),
    'react/forbid-foreign-prop-types': warn(),
    'react/no-array-index-key': warn(),
    'react/no-children-prop': error(),
    'react/no-danger': error(),
    'react/no-danger-with-children': error(),
    'react/no-deprecated': error(),
    'react/no-did-mount-set-state': warn(),
    'react/no-did-update-set-state': warn(),
    'react/no-direct-mutation-state': error(),
    'react/no-find-dom-node': warn(),
    'react/no-is-mounted': error(),
    'react/no-multi-comp': off(),
    'react/no-redundant-should-component-update': error(),
    'react/no-render-return-value': error(),
    'react/no-set-state': off(),
    'react/no-string-refs': error(),
    'react/no-unescaped-entities': error(),
    'react/no-unknown-property': warn(),
    'react/no-unused-prop-types': warn(),
    'react/no-will-update-set-state': warn(),
    'react/prefer-es6-class': warn(),
    'react/prefer-stateless-function': warn(),
    'react/prop-types': warn({ skipUndeclared: true }),
    'react/react-in-jsx-scope': error(),
    'react/require-default-props': off(),
    'react/require-optimization': warn(),
    'react/require-render-return': error(),
    'react/self-closing-comp': warn({ component: true, html: true }),
    'react/sort-comp': off(),
    'react/sort-prop-types': off(),
    'react/style-prop-object': error(),
    'react/void-dom-elements-no-children': error(),
    'react/jsx-boolean-value': warn('always'),
    'react/jsx-closing-bracket-location': warn('after-aligned'),
    'react/jsx-curly-spacing': warn('never'),
    'react/jsx-equals-spacing': warn('never'),
    'react/jsx-filename-extension': warn({ extensions: ['.js', '.jsx'] }),
    'react/jsx-first-prop-new-line': off(),
    'react/jsx-handler-names': off(),
    'react/jsx-indent': warn(2),
    'react/jsx-indent-props': off(),
    'react/jsx-key': off(),
    'react/jsx-max-props-per-line': off(),
    'react/jsx-no-bind': off(),
    'react/jsx-no-comment-textnodes': warn(),
    'react/jsx-no-duplicate-props': error({ ignoreCase: true }),
    'react/jsx-no-literals': warn(),
    'react/jsx-no-target-blank': error(),
    'react/jsx-no-undef': warn({ allowGlobals: true }),
    'react/jsx-pascal-case': error({ allowAllCaps: true }),
    'react/jsx-sort-props': off(),
    'react/jsx-space-before-closing': warn(),
    'react/jsx-tag-spacing': warn({ beforeSelfClosing: 'always' }),
    'react/jsx-uses-react': error(),
    'react/jsx-wrap-multilines': error(),
  },
};
