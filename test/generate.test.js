const test = require("node:test");
const assert = require("node:assert/strict");

const { generateFakeBSN, isValidBSN } = require("../dist/index.js");

test("generates a valid BSN", () => {
  const fakeBSN = generateFakeBSN();
  console.log("Generated BSN:", fakeBSN);
  assert.equal(typeof fakeBSN, "string");
  assert.equal(fakeBSN.length, 9);
  // We can also check if the generated BSN is valid using the validation function
  assert.equal(isValidBSN(fakeBSN), true);
});
