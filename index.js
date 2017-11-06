/* Licensed under MIT, see LICENSE.md */

const maxWord = 0xffff;

/**
 * Decode a version made up of words, default is two (firmware style)
 * but supports 3 (semver style).
 */
decodeVersion(v, words ) {
  words = words || 3;

  const parts = [];
  for (let i = 0; i < words; i += 1) {
    parts.push((v & (maxWord << 16 * i)) >>> 16 * i);
  }

  return parts.reverse().join('.');
};

/**
 * Encodes a string version to a number
 * For major.minor, it is a 32bit int
 * For major.minor.patch it is a 64bit int
 *
 * Note: The dirty hack of converting each word to hex then back
 * is a work around for JS 32bit bitwise operations.
 */
encodeVersion(v) {
  const split = v.split('.').map(i => parseInt(i, 10));
  let out = '';
  for (let i = 0; i < split.length; i += 1) {
    const iv = split[i];
    out += (iv).toString(16).padStart(4, '0');
  }
  return parseInt(`0x${out}`, 16);
};

module.exports = {
  decodeVersion: decodeVersion,
  encodeVersion: encodeVersion,
};