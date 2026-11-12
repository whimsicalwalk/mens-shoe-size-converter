# Men's Shoe Size Converter

Convert men's shoe sizes between **UK, EU, US** and **foot length (cm)**.
Tiny, no dependencies, works in Node.js and in the browser.

**Live demo:** https://whimsicalwalk.github.io/mens-shoe-size-converter/

## Install

```bash
npm install mens-shoe-size-converter
```

## Usage

```js
const ShoeSize = require("mens-shoe-size-converter");

ShoeSize.convert(9, "uk", "eu");   // 43
ShoeSize.convert(10, "us", "uk");  // 9
ShoeSize.lookup(27.1, "cm");       // { uk: 9, eu: 43, us: 10, cm: 27.1, exact: true, outOfRange: false }
ShoeSize.chart();                  // full chart, UK 5 to UK 13
```

In the browser, add `<script src="shoe-size.js"></script>` and use `window.ShoeSize`.

## API

| Function | Returns |
|---|---|
| `convert(size, from, to)` | The nearest size in the target system |
| `lookup(size, from)` | `{ uk, eu, us, cm, exact, outOfRange }` |
| `chart()` | Array of all rows in the size chart |

Systems: `"uk"`, `"eu"`, `"us"`, `"cm"`.

## How the chart works

- EU = UK + 34, US = UK + 1 (common for welted men's dress shoes)
- `cm` is approximate foot length, heel to longest toe
- If a size is between two rows, the nearest row is returned

Sizing differs between brands and lasts, so use this as a guide and always check the brand's own size guide before ordering.

## Tips for measuring

1. Measure in the evening, when feet are largest.
2. Stand on paper and mark the heel and the tip of the longest toe.
3. Measure both feet and use the longer one.

## Contributing

Issues and pull requests are welcome, especially brand-specific size data.

## License

MIT. Made by [Whimsical Walk](https://whimsicalwalk.com/), makers of hand-welted men's leather shoes. Size data follows the [Whimsical Walk size guide](https://whimsicalwalk.com/pages/size-guide-1).
