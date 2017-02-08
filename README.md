# seal-stream-as-string

[![CircleCI](https://circleci.com/gh/sealsystems/seal-stream-as-string.svg?style=svg)](https://circleci.com/gh/sealsystems/seal-stream-as-string)
[![AppVeyor](https://ci.appveyor.com/api/projects/status/k2pdancby8wrtdc3?svg=true)](https://ci.appveyor.com/project/Plossys/seal-stream-as-string)

seal-stream-as-string transforms streams to strings.

## Installation

```bash
$ npm install seal-stream-as-string
```

## Quick start

First you need to add a reference to seal-stream-as-string within your application.

```javascript
const StreamAsString = require('seal-stream-as-string');
```

Then use the `write` function to add data to the stream. Once you are done, call `end`. Afterwards, you may use the `asString` function to get the stringified stream.

```javascript
const streamAsString = new StreamAsString();

streamAsString.write('foo');
streamAsString.write('bar');
streamAsString.end();

console.log(streamAsString.asString()); // => 'foobar'
```

Alternatively, you may listen to the `as-string` event. It is raised after the stream has been ended.

```javascript
const streamAsString = new StreamAsString();

streamAsString.once('as-string', (asString) => {
  console.log(asString); // => 'foobar'
});

streamAsString.write('foo');
streamAsString.write('bar');
streamAsString.end();
```

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```bash
$ bot
```
