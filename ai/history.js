const CONSENT_COOKIE = "chat_history_consent";
const BROWSER_ID_COOKIE = "chat_browser_id";
const HISTORY_PREFIX = "lawmitra_chat_history_v1_";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function getHistoryState() {
  const consent = getCookie(CONSENT_COOKIE) === "yes";
  let browserId = getCookie(BROWSER_ID_COOKIE);

  // Older versions could leave a persistent "no" or browser ID behind.
  // Neither is valid without an affirmative opt-in.
  if (!consent) {
    clearNonConsentedPersistence();
    browserId = null;
  }

  if (consent && !isBrowserId(browserId)) {
    browserId = createBrowserId();
    if (!browserId || !setPersistentCookie(BROWSER_ID_COOKIE, browserId)) {
      return { enabled: false, browserId: null, storageAvailable: false };
    }
  }

  return {
    enabled: consent && isBrowserId(browserId) && canUseStorage(),
    browserId: isBrowserId(browserId) ? browserId : null,
    storageAvailable: canUseStorage()
  };
}

export function shouldShowConsentPrompt() {
  const hasPersistentConsent = getCookie(CONSENT_COOKIE) === "yes";
  if (!hasPersistentConsent) clearNonConsentedPersistence();
  return !hasPersistentConsent;
}

export function enableHistory() {
  if (!canUseStorage()) return { ok: false, reason: "storage" };

  const browserId = createBrowserId();
  if (!browserId) return { ok: false, reason: "crypto" };

  const consentSaved = setPersistentCookie(CONSENT_COOKIE, "yes");
  const idSaved = setPersistentCookie(BROWSER_ID_COOKIE, browserId);

  if (!consentSaved || !idSaved) {
    deleteCookie(CONSENT_COOKIE);
    deleteCookie(BROWSER_ID_COOKIE);
    return { ok: false, reason: "cookies" };
  }

  return { ok: true, browserId };
}

export function deferHistory() {
  clearNonConsentedPersistence();
}

export function disableHistory() {
  deleteCookie(CONSENT_COOKIE);
  deleteCookie(BROWSER_ID_COOKIE);
}

export function loadHistory(browserId) {
  if (!isBrowserId(browserId) || !canUseStorage()) return [];

  try {
    const stored = localStorage.getItem(historyKey(browserId));
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed.map(sanitizeConversation).filter(Boolean) : [];
  } catch (error) {
    console.warn("Unable to load saved chat history", error);
    return [];
  }
}

export function saveHistory(browserId, conversations) {
  if (!isBrowserId(browserId) || !canUseStorage()) return false;

  try {
    const safeConversations = Array.isArray(conversations)
      ? conversations.map(sanitizeConversation).filter(Boolean).slice(0, 12)
      : [];
    localStorage.setItem(historyKey(browserId), JSON.stringify(safeConversations));
    return true;
  } catch (error) {
    console.warn("Unable to save chat history", error);
    return false;
  }
}

export function deleteSavedHistory(browserId) {
  if (!isBrowserId(browserId) || !canUseStorage()) return false;

  try {
    localStorage.removeItem(historyKey(browserId));
    return true;
  } catch (error) {
    console.warn("Unable to delete saved chat history", error);
    return false;
  }
}

export function isHistoryStorageEvent(event, browserId) {
  return Boolean(browserId && event.key === historyKey(browserId));
}

function sanitizeConversation(value) {
  if (!value || typeof value !== "object" || typeof value.id !== "string" || !value.id) return null;

  const entries = Array.isArray(value.entries)
    ? value.entries.map(sanitizeEntry).filter(Boolean).slice(-80)
    : [];

  return {
    id: value.id.slice(0, 128),
    title: typeof value.title === "string" ? value.title.slice(0, 120) : "Untitled conversation",
    entries
  };
}

function sanitizeEntry(entry) {
  if (!entry || typeof entry !== "object") return null;

  if (entry.role === "user" && typeof entry.text === "string") {
    return { role: "user", text: entry.text.slice(0, 12000) };
  }

  if (entry.role === "assistant" && entry.result && typeof entry.result.text === "string") {
    return {
      role: "assistant",
      result: {
        text: entry.result.text.slice(0, 30000),
        suggestions: Array.isArray(entry.result.suggestions)
          ? entry.result.suggestions.filter((item) => typeof item === "string").slice(0, 6)
          : []
      }
    };
  }

  return null;
}

function createBrowserId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  if (!window.crypto?.getRandomValues) return null;

  const bytes = window.crypto.getRandomValues(new Uint8Array(16));
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

function isBrowserId(value) {
  return UUID_PATTERN.test(String(value || ""));
}

function historyKey(browserId) {
  return `${HISTORY_PREFIX}${browserId}`;
}

function canUseStorage() {
  try {
    const key = "__lawmitra_storage_test__";
    localStorage.setItem(key, "1");
    localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}

function getCookie(name) {
  const prefix = `${encodeURIComponent(name)}=`;
  const match = document.cookie.split(";").map((item) => item.trim()).find((item) => item.startsWith(prefix));
  return match ? decodeURIComponent(match.slice(prefix.length)) : null;
}

function setPersistentCookie(name, value) {
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
  return getCookie(name) === value;
}

function deleteCookie(name) {
  document.cookie = `${encodeURIComponent(name)}=; Max-Age=0; Path=/; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
}

function clearNonConsentedPersistence() {
  const consent = getCookie(CONSENT_COOKIE);
  if (consent && consent !== "yes") deleteCookie(CONSENT_COOKIE);
  if (getCookie(BROWSER_ID_COOKIE)) deleteCookie(BROWSER_ID_COOKIE);
}
