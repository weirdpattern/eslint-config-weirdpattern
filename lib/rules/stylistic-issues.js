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
    'array-bracket-spacing': error('never'),
    'block-spacing': error('always'),
    'brace-style': error('1tbs', { allowSingleLine: true }),
    'camelcase': error({ properties: 'always' }),
    'capitalized-comments': off(),
    'comma-dangle': error({
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'never',
      exports: 'never',
      functions: 'never',
    }),
    'comma-spacing': error({ before: false, after: true }),
    'comma-style': error('last'),
    'computed-property-spacing': error('never'),
    'consistent-this': error('self'),
    'eol-last': error('always'),
    'func-call-spacing': error('never'),
    'func-name-matching': error(),
    'func-names': error('always'),
    'func-style': off(),
    'id-blacklist': off(),
    'id-length': off(),
    'id-match': off(),
    'indent': error(2, {
      SwitchCase: 1,
      VariableDeclarator: {
        var: 2,
        let: 2,
        const: 3,
      },
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: { parameters: 'first' },
      FunctionExpression: { parameters: 'first' },
    }),
    'jsx-quotes': error('prefer-single'),
    'key-spacing': error({ beforeColon: false, afterColon: true, mode: 'strict' }),
    'keyword-spacing': error({ before: true, after: true }),
    'line-comment-position': off(),
    'linebreak-style': error('unix'),
    'lines-around-comment': off(),
    'lines-around-directive': error('always'),
    'max-depth': warn(4),
    'max-len': warn({
      code: 120,
      ignoreUrls: true,
      ignoreTrailingComments: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }),
    'max-lines': warn({ max: 300, skipBlankLines: true, skipComments: true }),
    'max-nested-callbacks': error({ max: 10 }),
    'max-params': error({ max: 3 }),
    'max-statements': error(10, { ignoreTopLevelFunctions: true }),
    'max-statements-per-line': error({ max: 1 }),
    'multiline-ternary': off(),
    'new-cap': error({ newIsCap: true, capIsNew: true }),
    'new-parens': error(),
    'newline-after-var': off(),
    'newline-before-return': off(),
    'newline-per-chained-call': error(),
    'no-array-constructor': error(),
    'no-bitwise': off(),
    'no-continue': off(),
    'no-inline-comments': off(),
    'no-lonely-if': error(),
    'no-mixed-operators': error({
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: true,
    }),
    'no-multi-assign': off(),
    'no-multiple-empty-lines': error({ max: 1 }),
    'no-negated-condition': error(),
    'no-nested-ternary': error(),
    'no-new-object': error(),
    'no-plusplus': off(),
    'no-restricted-syntax': error('WithStatement'),
    'no-tabs': error(),
    'no-ternary': off(),
    'no-trailing-spaces': error({ skipBlankLines: false }),
    'no-underscore-dangle': error(),
    'no-unneeded-ternary': error({ defaultAssignment: false }),
    'no-whitespace-before-property': error(),
    'nonblock-statement-body-position': error('beside'),
    'object-curly-newline': error({ multiline: true }),
    'object-curly-spacing': error('always', { arraysInObjects: true, objectsInObjects: true }),
    'object-property-newline': off(),
    'one-var': error('never'),
    'one-var-declaration-per-line': error('always'),
    'operator-assignment': error('always'),
    'operator-linebreak': error('after', { overrides: { '?': 'ignore', ':': 'ignore' } }),
    'padded-blocks': off(),
    'quote-props': error('consistent-as-needed'),
    'quotes': error('single'),
    'require-jsdoc': error({
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
        ArrowFunctionExpression: true,
      },
    }),
    'semi': error('always'),
    'semi-spacing': error({ before: false, after: true }),
    'sort-keys': off(),
    'sort-vars': off(),
    'space-before-blocks': error('always'),
    'space-before-function-paren': error({ anonymous: 'never', named: 'never', asyncArrow: 'always' }),
    'space-in-parens': error('never'),
    'space-infix-ops': error(),
    'space-unary-ops': error({ words: true, nonwords: false }),
    'spaced-comment': error('always'),
    'template-tag-spacing': error('never'),
    'unicode-bom': error('never'),
    'wrap-regex': off(),
  },
};
