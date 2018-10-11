# is-container

[![Build Status](https://travis-ci.org/ruanmartinelli/is-container.svg?branch=master)](https://travis-ci.org/ruanmartinelli/is-container) [![NPM downloads](https://img.shields.io/npm/dm/is-container.svg?style=flat)](https://npmjs.com/package/is-container) [![NPM version](https://img.shields.io/npm/v/is-container.svg?style=flat)](https://npmjs.com/package/is-container)

> Validates a container number according to [ISO 6346](https://en.wikipedia.org/wiki/ISO_6346)

## Install

#### yarn

```
$ yarn add is-container
```

#### npm

```
$ npm install --save is-container
```

## Usage

See [tests](/test/index.spec.ts) for more examples.

```js
const isContainer = require('is-container')

isContainer('MSKU6011672')
//=> true
```

## API

### isContainer(code)

#### input

Type: `string`

The container code to be validated.

## License

MIT © [Ruan Martinelli](https://github.com/ruanmartinelli)
