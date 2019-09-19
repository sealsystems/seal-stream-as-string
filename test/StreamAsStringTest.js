'use strict';

const stream = require('stream');

const assert = require('assertthat');

const StreamAsString = require('../lib/StreamAsString');

const Transform = stream.Transform;

suite('StreamAsString', () => {
  let streamAsString;

  setup(() => {
    streamAsString = new StreamAsString();
  });

  test('is a function.', (done) => {
    assert.that(StreamAsString).is.ofType('function');
    done();
  });

  test('returns a transform stream.', (done) => {
    assert.that(streamAsString).is.instanceOf(Transform);
    done();
  });

  test('raises an as-string event.', (done) => {
    streamAsString.once('as-string', (asString) => {
      assert.that(asString).is.equalTo('foobar');
      done();
    });

    streamAsString.write('foo');
    streamAsString.write('bar');
    streamAsString.end();
  });

  suite('asString', () => {
    test('is a function.', (done) => {
      assert.that(streamAsString.asString).is.ofType('function');
      done();
    });

    test('throws an exception if called before end.', (done) => {
      assert
        .that(() => {
          streamAsString.asString();
        })
        .is.throwing('Must be called after end.');
      done();
    });

    test('returns an empty string if write was not called.', (done) => {
      streamAsString.end();
      assert.that(streamAsString.asString()).is.equalTo('');
      done();
    });

    test('returns the stringified stream.', (done) => {
      streamAsString.write('foo');
      streamAsString.write('bar');
      streamAsString.end();
      assert.that(streamAsString.asString()).is.equalTo('foobar');
      done();
    });
  });
});
