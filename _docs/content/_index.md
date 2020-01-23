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
  <tr>
  <td>Bytes:</td>
  <td>
    <select name="words">
      <option value="2" selected>2</option>
      <option value="3">3</option>
    </select>
  </td>
  </tr>
  <tr>
  <td>Padding:</td>
  <td>
    <select name="padding">
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3" selected>3</option>
    </select>
  </td>
  </tr>
  </table>
</form>

<script>
  jQuery("input[name=to_semver]").on('click', function() {
    var v = jQuery("input[name=numver]").val();
    var words = jQuery("select[name=words]").val();
    var padding = jQuery("select[name=padding]").val();
    if (v && v.length > 0) {
      var semver = JSByteVersionEncoder.decodeVersion(v, words, padding);
      jQuery("input[name=semver]").val(semver);
    }
  });
   jQuery("input[name=to_numver]").on('click', function() {
    var v = jQuery("input[name=semver]").val();
    if (v && v.length > 0) {
      v = v.replace(/[^0123456789\.]/g, '');
      var semver = JSByteVersionEncoder.encodeVersion(v);
      jQuery("input[name=numver]").val(semver);
    }
  });
</script>
