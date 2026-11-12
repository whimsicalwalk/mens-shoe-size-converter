const assert = require("assert");
const ShoeSize = require("../shoe-size.js");

assert.strictEqual(ShoeSize.convert(9, "uk", "eu"), 43);
assert.strictEqual(ShoeSize.convert(9, "uk", "us"), 10);
assert.strictEqual(ShoeSize.convert(43, "eu", "uk"), 9);
assert.strictEqual(ShoeSize.convert(10, "us", "uk"), 9);
assert.strictEqual(ShoeSize.lookup(9, "uk").exact, true);
assert.strictEqual(ShoeSize.lookup(9.2, "uk").exact, false);
assert.strictEqual(ShoeSize.lookup(20, "uk").outOfRange, true);
assert.strictEqual(ShoeSize.chart().length, 17);
assert.throws(() => ShoeSize.convert(9, "jp", "uk"));
assert.throws(() => ShoeSize.convert("abc", "uk", "eu"));
console.log("All tests passed");
