/*!
 * mens-shoe-size-converter
 * Convert men's shoe sizes between UK, EU, US and foot length (cm).
 * MIT License · https://github.com/whimsicalwalk/mens-shoe-size-converter
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.ShoeSize = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // Men's size chart, UK 5 to UK 13 in half sizes.
  // EU = UK + 34 and US = UK + 1 (common for welted dress shoes).
  // cm = approximate foot length (heel to longest toe).
  // Sizing varies by brand and last, so treat this as a guide.
  var CHART = [];
  for (var uk = 5; uk <= 13; uk += 0.5) {
    CHART.push({
      uk: uk,
      eu: uk + 34,
      us: uk + 1,
      cm: Math.round(((uk + 25) * 0.8467 - 1.65) * 10) / 10
    });
  }

  var SYSTEMS = ["uk", "eu", "us", "cm"];

  function chart() {
    return CHART.map(function (r) {
      return { uk: r.uk, eu: r.eu, us: r.us, cm: r.cm };
    });
  }

  function lookup(value, from) {
    var v = Number(value);
    var sys = String(from || "uk").toLowerCase();
    if (SYSTEMS.indexOf(sys) === -1) {
      throw new Error("Unknown size system: " + from + ". Use uk, eu, us or cm.");
    }
    if (!isFinite(v)) throw new Error("Size must be a number.");

    var best = CHART[0], bestDiff = Infinity;
    for (var i = 0; i < CHART.length; i++) {
      var d = Math.abs(CHART[i][sys] - v);
      if (d < bestDiff) { best = CHART[i]; bestDiff = d; }
    }
    var first = CHART[0][sys], last = CHART[CHART.length - 1][sys];
    return {
      uk: best.uk, eu: best.eu, us: best.us, cm: best.cm,
      exact: bestDiff < 1e-9,
      outOfRange: v < first - 0.25 || v > last + 0.25
    };
  }

  function convert(value, from, to) {
    var t = String(to).toLowerCase();
    if (SYSTEMS.indexOf(t) === -1) {
      throw new Error("Unknown size system: " + to + ". Use uk, eu, us or cm.");
    }
    return lookup(value, from)[t];
  }

  return { chart: chart, lookup: lookup, convert: convert };
});
