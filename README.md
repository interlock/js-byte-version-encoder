[![Node.js CI](https://github.com/interlock/js-byte-version-encoder/actions/workflows/node.js.yml/badge.svg)](https://github.com/interlock/js-byte-version-encoder/actions/workflows/node.js.yml)

## Byte Version Encoder

A dumb library to encode `1.1 => 0x10001` and decode `0x10008 => 1.8`

[Docs](https://interlock.github.io/js-byte-version-encoder/)

## Release Notes

### 0.4.1
- Very light docs have been added
- Builds a browser packed version
- Docs have an example of converting between the two formats

### 0.4.0
- Converted to TypeScript

### 0.3.0
- Fixed bug with decoding > 2 word versions

### 0.2.0

- ESLint configured `npm run lint`
- Fixed linter errors to bring compat to ES5

### 0.1.1

- Tests have been added.

### 0.1.0

- First release, no tests, no love, no deps. Perfect but not. 
