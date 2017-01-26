# is-container 

>Validates a container number according to [ISO 6346](https://en.wikipedia.org/wiki/ISO_6346)

## Install

```
$ npm install --save is-container
```


## Usage

See [test.js](https://github.com/ruanmartinelli/is-container/blob/master/test.js) for more examples.

```js
const isContainer = require('is-container');

isContainer('MSKU6011672');
//=> true
```


## API

### isContainer(code)

#### input

Type: `string`

The container code to be validated.

## License

MIT © [Ruan Martinelli](https://github.com/ruanmartinelli)