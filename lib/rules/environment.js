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
    'callback-return': warn(),
    'global-require': off(),
    'handle-callback-err': warn('^.*(e|E)rr'),
    'no-mixed-requires': warn({ grouping: false, allowCall: false }),
    'no-new-require': warn(),
    'no-path-concat': warn(),
    'no-process-env': warn(),
    'no-process-exit': warn(),
    'no-restricted-modules': off(),
    'no-sync': off(),
  },
};
