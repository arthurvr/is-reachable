# is-online [![Build Status](https://travis-ci.org/sindresorhus/is-online.svg?branch=master)](https://travis-ci.org/sindresorhus/is-online)

> Check if you're online

Works in Node.js, CLI and the browser *(with [browserify](http://browserify.org))*.

In the browser you have [`navigator.onLine`](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine.onLine), but it's useless as it only tells you if there's a local connection, and not whether the internet is accessible.


## Install

```sh
$ npm install --save is-online
```


## Usage

```js
var isOnline = require('is-online');

isOnline(err, online) {
	console.log(online);
	//=> true
});
```


## API

### isOnline([domain], callback)

#### domain

*Optional*  
Type: `string`  
Default `'google.com'` *(recommend not to change this)*

When used in the browser, make sure the domain you choose has a `favicon.ico` in the root.

#### callback(error, online)

*Required*  
Type: `function`

`error` is there only by Node.js convention and is always `null`.


## CLI

<img src="screenshot.png" width="397">

```sh
$ npm install --global is-online
```

```
$ is-online --help

  Example
    is-online
    ✔︎ Online
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)