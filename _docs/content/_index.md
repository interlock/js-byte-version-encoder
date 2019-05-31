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

<script src="./bundle.js"></script>

<h2>Widget</h2>

<form>
  <table>
  <tr>
    <td><input name="semver" placeholder="v1.2.3" size="15" /></td>
    <td><input type="button" name="to_semver" value="<= Semver"/></td>
    <td><input type="button" name="to_numver" value="Number =>" /></td>
    <td><input name="numver" placeholder="65433" size="15"/></td>
  </tr>
  </table>
</form>

<script>
  jQuery("input[name=to_semver]").on('click', function() {
    var v = jQuery("input[name=numver]").val();
    if (v && v.length > 0) {
      var semver = JSByteVersionEncode.decodeVersion(v);
      jQuery("input[name=semver]").val(semver);
    }
  });
   jQuery("input[name=to_numver]").on('click', function() {
    var v = jQuery("input[name=semver]").val();
    if (v && v.length > 0) {
      var semver = JSByteVersionEncode.encodeVersion(v);
      jQuery("input[name=numver]").val(semver);
    }
  });
</script>