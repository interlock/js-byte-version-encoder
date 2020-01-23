/* Licensed under MIT, see LICENSE.md */
export function padStart(input, count, fill) {
    if (count === void 0) { count = 4; }
    if (fill === void 0) { fill = '0'; }
    while (input.length < count) {
        input = fill + input;
    }
    return input;
}
/**
 * Decode a version made up of words, default is two (firmware style)
 * but supports 3 (semver style).
 *
 * @param version number|string
 * @param words number
 * @param padding number
 */
export function decodeVersion(version, words, padding, padFirst) {
    if (words === void 0) { words = 3; }
    if (padding === void 0) { padding = 0; }
    if (padFirst === void 0) { padFirst = false; }
    var v;
    if (typeof version === 'string') {
        v = parseInt(version, 10);
    }
    else {
        v = version;
    }
    var h = v.toString(16);
    var p;
    var parts = [];
    for (var i = 0; i < words; i += 1) {
        p = h.substr(-4, 4);
        h = h.substr(0, h.length - 4);
        parts.push((p === '' ? 0 : parseInt('0x' + p, 16)));
    }
    return parts.reverse().map(function (part, index) {
        if ((padFirst === true && index === 0) || index > 0) {
            return padStart(part.toString(), padding);
        }
        return part.toString();
    }).join('.');
}
/**
 * Encodes a string version to a number
 * For major.minor, it is a 32bit int
 * For major.minor.patch it is a 64bit int
 *
 * Note: The dirty hack of converting each word to hex then back
 * is a work around for JS 32bit bitwise operations.
 */
export function encodeVersion(version) {
    var split = version.split('.').map(function (i) { return parseInt(i, 10); });
    var out = '';
    for (var _i = 0, split_1 = split; _i < split_1.length; _i++) {
        var iv = split_1[_i];
        out += padStart((iv).toString(16), 4, '0');
    }
    return parseInt('0x' + out, 16);
}
