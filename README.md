# eslint-config-weirdpattern   
[![Build Status](https://travis-ci.org/weirdpattern/eslint-config-weirdpattern.svg?branch=master)](https://travis-ci.org/weirdpattern/eslint-config-weirdpattern) [![Coverage Status](https://coveralls.io/repos/github/weirdpattern/eslint-config-weirdpattern/badge.svg?branch=master)](https://coveralls.io/github/weirdpattern/eslint-config-weirdpattern?branch=master)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for JavaScript projects


## Installation

```
$ npm install --save-dev eslint eslint-config-weirdpattern
```


## Usage

Once the `eslint-config-weirdpattern` package is installed, you can use it by specifying `weirdpattern` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "weirdpattern",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## License

MIT © WeirdPattern
