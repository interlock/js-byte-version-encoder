<h2>Purpose</h2>

<p>This library can be used to take a semver version and convert it to an integer in JS. It can be useful for sorting, or if you are packing a version into bytes as an int/long.</p>

<h2>Examples</h2>

<p>Encoding a string semver, with two components:<p>

<pre>
const numericVersion = encodeVersion("1.20");
console.log(numericVersion);
// 12345
</pre>

<p>Decoding a number to semver string:</p>

<pre>
const semVer = decodeVersion(12345);
console.log(semVer);
// 1.1

const semVerThree = decodeVersion(123451, 3);
console.log(semVerThree);
// 1.2.2
</pre>
