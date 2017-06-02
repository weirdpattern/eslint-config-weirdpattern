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
    'jsx-a11y/accessible-emoji': warn(),
    'jsx-a11y/alt-text': error(),
    'jsx-a11y/anchor-has-content': error(),
    'jsx-a11y/anchor-is-valid': warn(),
    'aria-activedescendant-has-tabindex': warn(),
    'jsx-a11y/aria-props': error(),
    'jsx-a11y/aria-proptypes': error(),
    'jsx-a11y/aria-role': warn(),
    'jsx-a11y/aria-unsupported-elements': error(),
    'jsx-a11y/click-events-have-key-events': warn(),
    'jsx-a11y/heading-has-content': error(),
    'jsx-a11y/href-no-hash': off(),
    'jsx-a11y/html-has-lang': error(),
    'jsx-a11y/iframe-has-title': warn(),
    'jsx-a11y/img-redundant-alt': warn(),
    'jsx-a11y/interactive-supports-focus': error(),
    'jsx-a11y/label-has-for': error(),
    'jsx-a11y/lang': error(),
    'jsx-a11y/media-has-caption': warn(),
    'jsx-a11y/mouse-events-have-key-events': warn(),
    'jsx-a11y/no-access-key': warn(),
    'jsx-a11y/no-autofocus': warn(),
    'jsx-a11y/no-distracting-elements': error(),
    'jsx-a11y/no-interactive-element-to-noninteractive-role': warn(),
    'jsx-a11y/no-noninteractive-element-handlers': warn(),
    'jsx-a11y/no-noninteractive-element-to-interactive-role': warn(),
    'jsx-a11y/no-noninteractive-tabindex': warn(),
    'jsx-a11y/no-onchange': warn(),
    'jsx-a11y/no-redundant-roles': warn(),
    'jsx-a11y/no-static-element-interactions': warn(),
    'jsx-a11y/role-has-required-aria-props': error(),
    'jsx-a11y/role-supports-aria-props': error(),
    'jsx-a11y/scope': warn(),
    'jsx-a11y/tabindex-no-positive': warn(),
  },
};
