var version = require('./index');

describe('decodeVersion', function() {
  it('works with unpadded number', function() {
    expect(version.decodeVersion(1, 2)).toEqual('0.1');
  });

  it('works with zero', function() {
    expect(version.decodeVersion(0, 2)).toEqual('0.0');
  });

  it('works with max major', function() {
    expect(version.decodeVersion(0xFFFF0000, 2)).toEqual('65535.0');
  });

  it('works with max minor', function() {
    expect(version.decodeVersion(0x0000FFFF, 2)).toEqual('0.65535');
  });

  it('works with m.n.p', function() {
    expect(version.decodeVersion(0xFFFF0000FFFF)).toEqual('65535.0.65535');
  });
});

describe('encodeVersion', function() {
  it('works with single digit', function() {
    expect(version.encodeVersion('12')).toEqual(12);
  });

  it('works on max single', function() {
    expect(version.encodeVersion('65535')).toEqual(65535);
  });

  it('works with two digits', function() {
    expect(version.encodeVersion('1.14')).toEqual(0x1000E);
  });

  it('works on max two digit', function() {
    expect(version.encodeVersion('65535.0')).toEqual(0xffff0000);
  });

  it('works with three digits', function() {
    expect(version.encodeVersion('1.1.14')).toEqual(0x10001000E);
  });

  it('works on max three digit', function() {
    expect(version.encodeVersion('65535.0.0')).toEqual(0xffff00000000);
  });
});

describe('padStart', function() {
  it('empty string', function() {
    expect(version._padStart('')).toEqual('0000');
  });

  it('number', function() {
    expect(version._padStart('12')).toEqual('0012');
  });

  it('larger string', function() {
    expect(version._padStart('abcd')).toEqual('abcd');
  });
});
