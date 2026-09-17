import assert from "node:assert/strict";

const localValues = new Map();
const cookies = new Map();

function storage(values) {
  return {
    getItem(key) {
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      values.set(key, String(value));
    },
    removeItem(key) {
      values.delete(key);
    }
  };
}

globalThis.localStorage = storage(localValues);
globalThis.location = { protocol: "https:" };
globalThis.window = { crypto: globalThis.crypto };
globalThis.document = {};

Object.defineProperty(document, "cookie", {
  get() {
    return [...cookies].map(([key, value]) => `${key}=${value}`).join("; ");
  },
  set(value) {
    const [pair, ...attributes] = value.split(";").map((part) => part.trim());
    const [key, cookieValue] = pair.split("=");
    if (attributes.includes("Max-Age=0")) cookies.delete(key);
    else cookies.set(key, cookieValue);
  }
});

const history = await import("../ai/history.js");

assert.equal(history.shouldShowConsentPrompt(), true, "new browsers should see the consent prompt");

// A declined answer is page-only and must not retain a browser identity.
cookies.set("chat_history_consent", "no");
cookies.set("chat_browser_id", "f1c1a8aa-3333-4a44-8b55-111111111111");
history.deferHistory();
assert.equal(cookies.has("chat_history_consent"), false, "a legacy No cookie must be removed");
assert.equal(cookies.has("chat_browser_id"), false, "No must not keep a persistent browser ID");
assert.equal(history.shouldShowConsentPrompt(), true, "No must prompt again after a page refresh");

const enabled = history.enableHistory();
assert.equal(enabled.ok, true, "history should enable when cookies and storage work");
assert.match(enabled.browserId, /^[0-9a-f-]{36}$/i, "browser ID should be a UUID");
assert.equal(history.getHistoryState().enabled, true, "saved consent should be restored");

const conversation = [{
  id: "conversation-1",
  title: "Example",
  entries: [{ role: "user", text: "Hello" }]
}];

assert.equal(history.saveHistory(enabled.browserId, conversation), true);
assert.deepEqual(history.loadHistory(enabled.browserId), conversation, "saved conversations should reload");
assert.equal(history.deleteSavedHistory(enabled.browserId), true);
assert.deepEqual(history.loadHistory(enabled.browserId), [], "delete-all should remove only this browser's saved history");

history.disableHistory();
assert.equal(history.shouldShowConsentPrompt(), true, "disabling history must allow the prompt to return after a refresh");

console.log("history consent tests passed");
