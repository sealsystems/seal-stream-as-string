'use strict';

const stream = require('stream');
const util = require('util');

const Transform = stream.Transform;

const StreamAsString = function () {
  Transform.call(this);

  this.data = '';
  this.isEnded = false;
};

util.inherits(StreamAsString, Transform);

/* eslint-disable no-underscore-dangle */
StreamAsString.prototype._transform = function (chunk, encoding, callback) {
  this.data += chunk;
  callback();
};

StreamAsString.prototype._flush = function (callback) {
  this.isEnded = true;
  this.emit('as-string', this.data);

  callback();
};
/* eslint-enable no-underscore-dangle */

StreamAsString.prototype.asString = function () {
  if (!this.isEnded) {
    throw new Error('Must be called after end.');
  }

  return this.data;
};

module.exports = StreamAsString;
