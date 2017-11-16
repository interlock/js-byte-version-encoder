/* Licensed under MIT, see LICENSE.md */

function padStart(string, count, fill) {
  count = count || 4;
  fill = fill || '0';
  while(string.length < count) {
    string = fill + string;
  }
  return string;
}

/**
 * Decode a version made up of words, default is two (firmware style)
 * but supports 3 (semver style).
 */
function decodeVersion(version, words ) {
  var v = parseInt(version, 10);
  var h = v.toString(16);
  var p;
  words = words || 3;

  var parts = [];
  for (var i = 0; i < words; i += 1) {
    p = h.substr(-4,4);
    h = h.substr(0, h.length - 4);
    parts.push((p === '' ? 0 : parseInt('0x' + p)));
  }

  return parts.reverse().join('.');
}

/**
 * Encodes a string version to a number
 * For major.minor, it is a 32bit int
 * For major.minor.patch it is a 64bit int
 *
 * Note: The dirty hack of converting each word to hex then back
 * is a work around for JS 32bit bitwise operations.
 */
function encodeVersion(v) {
  var split = v.split('.').map(function(i) { return parseInt(i, 10); });
  var out = '';
  for (var i = 0; i < split.length; i += 1) {
    var iv = split[i];
    out += padStart((iv).toString(16), 4, '0');
  }
  return parseInt('0x' + out, 16);
}

module.exports = {
  decodeVersion: decodeVersion,
  encodeVersion: encodeVersion,
  _padStart: padStart,
};