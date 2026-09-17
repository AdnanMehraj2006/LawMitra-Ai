import assert from "node:assert/strict";
import { detectIntent } from "../ai/intents.js";

const scenarios = [
  ["My visa overstay needs urgent clarification", "immigration"],
  ["I need business registration for my LLP and Udyam certificate", "business"],
  ["I received an NCLT insolvency notice from a creditor", "insolvency"],
  ["The contract has an arbitration clause and I received an arbitral award", "arbitration"],
  ["My electricity bill is wrong and the meter was disconnected", "utilities"],
  ["A SIM swap changed my mobile account and telecom provider will not help", "telecom"],
  ["My employer denied reasonable accommodation for my disability", "disability"],
  ["I need help with adoption and guardianship for a child", "child_welfare"],
  ["My voter ID is missing from the electoral roll", "elections"],
  ["A government employee received a departmental inquiry notice about pension arrears", "service_matters"]
];

for (const [message, category] of scenarios) {
  const result = detectIntent(message);
  assert.equal(result.intent, category, `${message} should route to ${category}`);
  assert.equal(result.responseType, "legal", `${category} should have sufficient confidence`);
}

assert.equal(
  detectIntent("I have a difficult issue but do not know the legal category").responseType,
  "fallback",
  "uncovered issues should stay on the safe fallback path"
);

console.log("expanded legal intent tests passed");
