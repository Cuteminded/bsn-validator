const test = require("node:test");
const assert = require("node:assert/strict");

const { isValidBSN } = require("../dist/index.js");

test("accepts known valid BSN 540261014", () => {
  assert.equal(isValidBSN("540261014"), true);
});

test("rejects clearly invalid BSN", () => {
  assert.equal(isValidBSN("123456789"), false);
});
