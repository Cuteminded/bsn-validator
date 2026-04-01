const test = require("node:test");
const assert = require("node:assert/strict");

const { generateFakeBSN } = require("../dist/index.js");

test("generates a valid BSN", () => {
  const fakeBSN = generateFakeBSN();
  console.log("Generated BSN:", fakeBSN);
  assert.equal(typeof fakeBSN, "string");
  assert.equal(fakeBSN.length, 9);
});
