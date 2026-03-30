# bsn-validator

A tiny TypeScript/JavaScript package for validating Dutch BSN (Burgerservicenummer) numbers and generating fake BSNs for testing.

## Install

```bash
npm install bsn-validator
```

## Quick Start

### JavaScript

```js
const { isValidBSN, generateFakeBSN } = require("bsn-validator");

console.log(isValidBSN("123456782")); // true/false
console.log(generateFakeBSN()); // e.g. "123456789"
```

### TypeScript / ESM

```ts
import { isValidBSN, generateFakeBSN } from "bsn-validator";

const input = "123456782";

if (isValidBSN(input)) {
  console.log("Valid BSN");
}

const fake = generateFakeBSN();
console.log(fake);
```

## API

### isValidBSN(bsn: string): boolean

Validates a BSN using the Dutch 11-check.

Rules:
- Accepts only 8 or 9 digits.
- Ignores leading/trailing spaces.
- Returns `true` when the number passes the 11-check, otherwise `false`.

Example:

```ts
isValidBSN("123456782");
isValidBSN(" 123456782 ");
isValidBSN("abc");
```

### generateFakeBSN(): string

Generates a fake BSN-like value intended for testing and development.

Notes:
- Do not use generated values for real identity or production workflows.
- This utility is intended for mock data and local/test environments.

## Use Cases

- Form input validation for Dutch BSN fields.
- Backend request validation before processing.
- Creating mock BSN data for tests and demos.

## Development

```bash
npm run build
```

## References

- Check digit overview: https://en.wikipedia.org/wiki/Check_digit
- Citizen service number (BSN): https://www.government.nl/topics/personal-data/citizen-service-number-bsn

## License

MIT
