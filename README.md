# @sealsystems/stream-as-string

[![CircleCI](https://circleci.com/gh/sealsystems/node-stream-as-string.svg?style=svg)](https://circleci.com/gh/sealsystems/node-stream-as-string)
[![AppVeyor](https://ci.appveyor.com/api/projects/status/4vcs1tw39nx3ieea?svg=true)](https://ci.appveyor.com/project/Plossys/node-stream-as-string)

@sealsystems/stream-as-string transforms streams to strings.

## Installation

```bash
$ npm install @sealsystems/stream-as-string
```

## Quick start

First you need to add a reference to @sealsystems/stream-as-string within your application.

```javascript
const StreamAsString = require('@sealsystems/stream-as-string');
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
