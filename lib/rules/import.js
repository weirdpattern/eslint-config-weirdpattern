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
    'import/no-unresolved': error(),
    'import/named': off(),
    'import/default': error(),
    'import/namespace': error(),
    'import/no-restricted-paths': off(),
    'import/no-absolute-path': error(),
    'import/no-dynamic-require': warn(),
    'import/no-internal-modules': off(),
    'import/no-webpack-loader-syntax': error(),
    'import/export': error(),
    'import/no-named-as-default': error(),
    'import/no-named-as-default-member': error(),
    'import/no-deprecated': off(),
    'import/no-extraneous-dependencies': warn({
      devDependencies: [
        '**/*[Tt]est{,s}.js',
        '**/*[Ss]pec{,s}.js',
      ],
    }),
    'import/no-mutable-exports': error(),
    'import/unambiguous': error(),
    'import/no-commonjs': off(),
    'import/no-amd': error(),
    'import/no-nodejs-modules': off(),
    'import/first': error(),
    'import/no-duplicates': error(),
    'import/no-namespace': off(),
    'import/extensions': off(),
    'import/order': off(),
    'import/newline-after-import': warn(),
    'import/prefer-default-export': warn(),
    'import/max-dependencies': off(),
    'import/no-unassigned-import': off(),
    'import/no-named-default': warn(),
    'import/no-anonymous-default-export': off(),
  },
};
