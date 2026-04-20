# bsn-validator

A tiny TypeScript/JavaScript package for validating Dutch BSN (Burgerservicenummer) numbers and generating fake BSNs for testing.

## Install

### npm

```bash
npm install @cuteminded/bsn-validator
```

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@cuteminded/bsn-validator/dist/index.global.js"></script>
```

## Quick Start

### JavaScript

```js
const { isValidBSN, generateFakeBSN } = require("@cuteminded/bsn-validator");
const input = "123456782";
const fakeBSN = generateFakeBSN();

if (isValidBSN(input)) {
  console.log("Valid BSN");
}

console.log(fakeBSN);
```

### TypeScript / ESM

```ts
import { isValidBSN, generateFakeBSN } from "@cuteminded/bsn-validator";

const input = "123456782";
const fakeBSN = generateFakeBSN();

if (isValidBSN(input)) {
  console.log("Valid BSN");
}

console.log(fakeBSN);
```

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@cuteminded/bsn-validator/dist/index.global.js"></script>
<script>
  const input = "123456782";
  const fakeBSN = bsnValidator.generateFakeBSN();

  if (bsnValidator.isValidBSN(input)) {
    console.log("Valid BSN");
  }

  console.log(fakeBSN);
</script>
```

## API

### isValidBSN(bsn: string): boolean

Validates a BSN using the Dutch 11-check.

Rules:

- Accepts only 8 or 9 digits.
- Ignores leading/trailing spaces.
- Returns `true` when the number passes the 11-check, otherwise `false`.

### generateFakeBSN(): string

Generates a fake BSN-like value intended for testing and development.

Notes:
- Generated values may coincide with a real BSN they are not guaranteed to be fictitious.
- The generated values are primarily intended for testing the application you are developing, not for real identity or production workflows.

## Use Cases

- Form input validation for Dutch BSN fields.
- Backend request validation before processing.
- Creating mock BSN data for tests and demos.

## References

- Check digit overview: https://en.wikipedia.org/wiki/Check_digit
- Citizen service number (BSN): https://www.government.nl/topics/personal-data/citizen-service-number-bsn

## License

MIT
