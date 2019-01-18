"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const version = __importStar(require("./index"));
describe('decodeVersion', () => {
    it('works with unpadded number', () => {
        expect(version.decodeVersion(1, 2)).toEqual('0.1');
    });
    it('works with zero', () => {
        expect(version.decodeVersion(0, 2)).toEqual('0.0');
    });
    it('works with max major', () => {
        expect(version.decodeVersion(0xFFFF0000, 2)).toEqual('65535.0');
    });
    it('works with max minor', () => {
        expect(version.decodeVersion(0x0000FFFF, 2)).toEqual('0.65535');
    });
    it('handles a string as a number', () => {
        expect(version.decodeVersion('12')).toEqual('0.0.12');
    });
    it('full encode/decode with three words', () => {
        expect(version.decodeVersion(version.encodeVersion('1.2.3'))).toEqual('1.2.3');
    });
    it('works with m.n.p', () => {
        expect(version.decodeVersion(0xFFFF0000FFFF)).toEqual('65535.0.65535');
    });
});
describe('encodeVersion', () => {
    it('works with single digit', () => {
        expect(version.encodeVersion('12')).toEqual(12);
    });
    it('works on max single', () => {
        expect(version.encodeVersion('65535')).toEqual(65535);
    });
    it('works with two digits', () => {
        expect(version.encodeVersion('1.14')).toEqual(0x1000E);
    });
    it('works on max two digit', () => {
        expect(version.encodeVersion('65535.0')).toEqual(0xffff0000);
    });
    it('works with three digits', () => {
        expect(version.encodeVersion('1.1.14')).toEqual(0x10001000E);
    });
    it('works on max three digit', () => {
        expect(version.encodeVersion('65535.0.0')).toEqual(0xffff00000000);
    });
});
describe('padStart', () => {
    it('empty string', () => {
        expect(version.padStart('')).toEqual('0000');
    });
    it('number', () => {
        expect(version.padStart('12')).toEqual('0012');
    });
    it('larger string', () => {
        expect(version.padStart('abcd')).toEqual('abcd');
    });
});
