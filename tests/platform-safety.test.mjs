import assert from "node:assert/strict";

const localValues = new Map();
const sessionValues = new Map();
const storage = (values) => ({
  getItem: (key) => values.has(key) ? values.get(key) : null,
  setItem: (key, value) => values.set(key, String(value)),
  removeItem: (key) => values.delete(key)
});

globalThis.localStorage = storage(localValues);
globalThis.sessionStorage = storage(sessionValues);

const { setJurisdiction } = await import("../ai/jurisdiction.js");
const { exportCoverageGaps } = await import("../ai/coverage.js");
const { generateAIResponse } = await import("../ai/engine.js");
const { exportCustomCases, saveCustomCases } = await import("../ai/cases.js");

setJurisdiction("Maharashtra");
const utilityResponse = generateAIResponse("My electricity bill is wrong and I received a disconnection notice");
assert.match(utilityResponse.text, /Maharashtra/, "legal guidance should include the selected State/UT context");
assert.match(utilityResponse.text, /Official sources to verify/, "legal guidance should link to verification sources");

const emergencyResponse = generateAIResponse("I am in immediate danger because of violence");
assert.match(emergencyResponse.text, /112/, "immediate danger must escalate before ordinary matching");

generateAIResponse("I have an unclear situation with no known category");
const gaps = JSON.parse(exportCoverageGaps());
assert.equal(gaps.gaps.length, 1, "unclassified queries should create one coverage-gap record");
assert.equal(/unclear situation/.test(JSON.stringify(gaps)), false, "gap records must not keep raw user messages");

saveCustomCases([{ id: "local-test", category: "local_test", title: "Local test case", summary: "A vetted local test entry." }]);
assert.match(exportCustomCases(), /local-test/, "local catalogue entries should export for review and deployment");

console.log("platform safety tests passed");
