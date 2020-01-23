(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.JSByteVersionEncoder = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
/* Licensed under MIT, see LICENSE.md */
Object.defineProperty(exports, "__esModule", { value: true });
function padStart(input, count = 4, fill = '0') {
    while (input.length < count) {
        input = fill + input;
    }
    return input;
}
exports.padStart = padStart;
/**
 * Decode a version made up of words, default is two (firmware style)
 * but supports 3 (semver style).
 *
 * @param version number|string
 * @param words number
 * @param padding number
 */
function decodeVersion(version, words = 3, padding = 0, padFirst = false) {
    let v;
    if (typeof version === 'string') {
        v = parseInt(version, 10);
    }
    else {
        v = version;
    }
    let h = v.toString(16);
    let p;
    const parts = [];
    for (let i = 0; i < words; i += 1) {
        p = h.substr(-4, 4);
        h = h.substr(0, h.length - 4);
        parts.push((p === '' ? 0 : parseInt('0x' + p, 16)));
    }
    return parts.reverse().map((part, index) => {
        if ((padFirst === true && index === 0) || index > 0) {
            return padStart(part.toString(), padding);
        }
        return part.toString();
    }).join('.');
}
exports.decodeVersion = decodeVersion;
/**
 * Encodes a string version to a number
 * For major.minor, it is a 32bit int
 * For major.minor.patch it is a 64bit int
 *
 * Note: The dirty hack of converting each word to hex then back
 * is a work around for JS 32bit bitwise operations.
 */
function encodeVersion(version) {
    const split = version.split('.').map((i) => parseInt(i, 10));
    let out = '';
    for (const iv of split) {
        out += padStart((iv).toString(16), 4, '0');
    }
    return parseInt('0x' + out, 16);
}
exports.encodeVersion = encodeVersion;

},{}]},{},[1])(1)
});
