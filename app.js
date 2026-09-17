import { generateAIResponse } from "./ai/engine.js";
import { LEGAL_CASES, exportCustomCases, saveCustomCases } from "./ai/cases.js";
import {
  HELP_CONTACTS,
  MAP_HELP_OPTIONS
} from "./ai/help.js";
import { clearMemory, saveMessage } from "./ai/memory.js";
import { exportCoverageGaps } from "./ai/coverage.js";
import { getJurisdiction, setJurisdiction } from "./ai/jurisdiction.js";
import {
  deferHistory,
  deleteSavedHistory,
  disableHistory,
  enableHistory,
  getHistoryState,
  isHistoryStorageEvent,
  loadHistory,
  saveHistory,
  shouldShowConsentPrompt
} from "./ai/history.js";

const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");
const sendButton = document.getElementById("send-btn");
const newChatButton = document.getElementById("new-chat-btn");
const topbarNewChat = document.getElementById("topbar-new-chat");
const sidebar = document.getElementById("app-sidebar");
const sidebarToggleBtn = document.getElementById("sidebar-toggle-btn");
const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
const sidebarBackdrop = document.getElementById("sidebar-backdrop");
const caseLibraryList = document.getElementById("case-library-list");
const chatHistoryList = document.getElementById("chat-history-list");
const caseCatalogGrid = document.getElementById("case-catalog-grid");
const contactList = document.getElementById("help-contact-list");
const mapActions = document.getElementById("map-actions");
const mapOpenLink = document.getElementById("map-open-link");
const useLocationButton = document.getElementById("use-location-btn");
const currentLocationButton = document.getElementById("current-location-btn");
const footerLocationButton = document.getElementById("footer-location-btn");
const topbarLocationButton = document.getElementById("topbar-location-btn");
const caseCatalogLinks = document.querySelectorAll("[data-scroll-to-cases]");
const openChatButtons = document.querySelectorAll("[data-open-chat]");
const landingLinks = document.querySelectorAll("[data-landing-link]");
const historySettingsButton = document.getElementById("history-settings-btn");
const historySettingsPanel = document.getElementById("history-settings-panel");
const historyStatus = document.getElementById("history-status");
const enableHistoryButton = document.getElementById("enable-history-btn");
const disableHistoryButton = document.getElementById("disable-history-btn");
const deleteAllHistoryButton = document.getElementById("delete-all-history-btn");
const historyConsentModal = document.getElementById("history-consent-modal");
const consentSaveButton = document.getElementById("consent-save-history-btn");
const consentNotNowButton = document.getElementById("consent-not-now-btn");
const consentMessage = document.getElementById("history-consent-message");
const jurisdictionSelect = document.getElementById("jurisdiction-select");
const exportCoverageGapsButton = document.getElementById("export-coverage-gaps-btn");
const customCasesJson = document.getElementById("custom-cases-json");
const saveCustomCasesButton = document.getElementById("save-custom-cases-btn");
const exportCustomCasesButton = document.getElementById("export-custom-cases-btn");

let isGenerating = false;
let activeMapOption = MAP_HELP_OPTIONS[0];
let userCoordinates = null;
let mapSearchInProgress = false;
let historyState = getHistoryState();
let chatHistory = historyState.enabled ? loadHistory(historyState.browserId) : [];
let activeConversationId = null;
let viewTransitionTimer = null;

sendButton?.addEventListener("click", () => sendMessage());
newChatButton?.addEventListener("click", startNewChat);
topbarNewChat?.addEventListener("click", startNewChat);
input?.addEventListener("keydown", handleKey);
input?.addEventListener("input", resizeInput);
useLocationButton?.addEventListener("click", requestLocation);
currentLocationButton?.addEventListener("click", requestLocation);
footerLocationButton?.addEventListener("click", requestLocation);
topbarLocationButton?.addEventListener("click", requestLocation);
caseCatalogLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showCaseCatalog();
  });
});
historySettingsButton?.addEventListener("click", () => {
  const isHidden = historySettingsPanel?.hidden;
  if (historySettingsPanel) historySettingsPanel.hidden = !isHidden;
  historySettingsButton.setAttribute("aria-expanded", String(Boolean(isHidden)));
});
enableHistoryButton?.addEventListener("click", activateHistory);
disableHistoryButton?.addEventListener("click", deactivateHistory);
deleteAllHistoryButton?.addEventListener("click", deleteAllHistory);
jurisdictionSelect?.addEventListener("change", () => setJurisdiction(jurisdictionSelect.value));
exportCoverageGapsButton?.addEventListener("click", () => downloadText("lawmitra-coverage-gaps.json", exportCoverageGaps()));
exportCustomCasesButton?.addEventListener("click", () => downloadText("lawmitra-custom-cases.json", exportCustomCases()));
saveCustomCasesButton?.addEventListener("click", () => {
  try {
    saveCustomCases(customCasesJson?.value || "[]");
    window.location.reload();
  } catch (error) {
    window.alert(error.message || "Could not save the local catalogue.");
  }
});
consentSaveButton?.addEventListener("click", activateHistory);
consentNotNowButton?.addEventListener("click", () => {
  deferHistory();
  closeConsentModal();
  renderHistorySettings();
});

sidebarToggleBtn?.addEventListener("click", () => toggleSidebar(true));
sidebarCloseBtn?.addEventListener("click", () => toggleSidebar(false));
sidebarBackdrop?.addEventListener("click", () => toggleSidebar(false));

openChatButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleSidebar(false);
    openChatView();
  });
});

landingLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleSidebar(false);
    showLandingView();
  });
});

function toggleSidebar(open) {
  if (!sidebar) return;
  const shouldOpen = typeof open === "boolean" ? open : !sidebar.classList.contains("is-open");
  sidebar.classList.toggle("is-open", shouldOpen);
  sidebarBackdrop?.classList.toggle("is-active", shouldOpen);
  document.body.classList.toggle("sidebar-open", shouldOpen);
}

function showCaseCatalog() {
  const welcome = document.getElementById("chat-welcome");

  if (welcome) welcome.style.display = "";
  if (!messages || !caseCatalogGrid) return;

  window.requestAnimationFrame(() => {
    const targetTop = messages.scrollTop
      + caseCatalogGrid.getBoundingClientRect().top
      - messages.getBoundingClientRect().top
      - 16;

    messages.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
    caseCatalogGrid.setAttribute("tabindex", "-1");
    caseCatalogGrid.focus({ preventScroll: true });
  });
}

renderStructuredContent();
if (jurisdictionSelect) jurisdictionSelect.value = getJurisdiction();
updateExternalMapLink(activeMapOption);
renderHistorySettings();

if (shouldShowConsentPrompt()) {
  openConsentModal();
}

window.addEventListener("storage", (event) => {
  if (!historyState.enabled || !isHistoryStorageEvent(event, historyState.browserId) || isGenerating) return;
  chatHistory = loadHistory(historyState.browserId);
  if (!chatHistory.some((item) => item.id === activeConversationId)) activeConversationId = null;
  renderChatHistory();
});

if (!document.body.classList.contains("is-landing")) {
  showLandingView();
}

document.addEventListener("click", (event) => {
  const mapLink = event.target.closest('a[href*="google.com/maps/search"]');

  if (mapLink) {
    event.preventDefault();
    openMapAfterLocation(mapLink.href);
    return;
  }

  const promptButton = event.target.closest("[data-prompt]");

  if (!promptButton || isGenerating) return;

  const prompt = promptButton.getAttribute("data-prompt");

  if (!prompt) return;

  if (promptButton.hasAttribute("data-start-new-chat")) {
    startNewChat();
  }

  toggleSidebar(false);
  openChatView();
  input.value = prompt;
  resizeInput();

  if (promptButton.getAttribute("data-submit") !== "false") {
    sendMessage(prompt);
  } else {
    input.focus();
  }
});

function sendMessage(forcedText) {
  const text = String(forcedText || input.value).trim();

  if (!text || isGenerating) return;

  hideWelcome();
  saveConversationStart(text);
  appendUserMessage(text);
  addConversationEntry({ role: "user", text });
  clearInput();
  showTyping();
  setGenerating(true);

  let aiResult;

  try {
    aiResult = generateAIResponse(text);
  } catch (error) {
    console.error("LawMitra response failed", error);
    aiResult = {
      text: "I could not process that safely. Please try again with a shorter description of what happened.",
      suggestions: [
        "Show me legal cases with sanctions",
        "What evidence should I preserve?",
        "Draft a complaint outline"
      ]
    };
  }

  const delay = Math.min(1100, 450 + aiResult.text.length * 2);

  window.setTimeout(() => {
    hideTyping();
    appendAIMessage(aiResult);
    addConversationEntry({
      role: "assistant",
      result: {
        text: aiResult.text,
        suggestions: Array.isArray(aiResult.suggestions) ? [...aiResult.suggestions] : []
      }
    });
    setGenerating(false);
    input?.focus();
  }, delay);
}

function handleKey(event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
}

function startNewChat() {
  if (isGenerating) return;

  toggleSidebar(false);
  openChatView();
  clearMemory();
  activeConversationId = null;
  messages.querySelectorAll(".msg-user-wrap, .msg-ai-wrap").forEach((node) => {
    node.remove();
  });

  const welcome = document.getElementById("chat-welcome");
  if (welcome) {
    welcome.style.display = "";
  }

  clearInput();
  input?.focus();
}

function openChatView() {
  if (document.body.classList.contains("is-chat")) {
    input?.focus();
    return;
  }

  window.clearTimeout(viewTransitionTimer);
  document.body.classList.add("is-transitioning");

  viewTransitionTimer = window.setTimeout(() => {
    document.body.classList.remove("is-landing");
    document.body.classList.add("is-chat");
  }, 260);

  window.setTimeout(() => {
    document.body.classList.remove("is-transitioning");
    input?.focus();
  }, 760);
}

function showLandingView() {
  window.clearTimeout(viewTransitionTimer);
  document.body.classList.add("is-transitioning");

  viewTransitionTimer = window.setTimeout(() => {
    document.body.classList.add("is-landing");
    document.body.classList.remove("is-chat");
  }, 180);

  window.setTimeout(() => {
    document.body.classList.remove("is-transitioning");
  }, 620);
}

function appendUserMessage(text) {
  const wrapper = document.createElement("div");
  const bubble = document.createElement("div");

  wrapper.className = "msg-user-wrap";
  bubble.className = "msg-user";
  bubble.textContent = text;

  wrapper.append(bubble, createCopyButton(text));
  messages.appendChild(wrapper);
  scrollBottom();
}

function appendAIMessage(result) {
  const wrapper = document.createElement("div");
  const avatar = document.createElement("div");
  const response = document.createElement("div");

  wrapper.className = "msg-ai-wrap";
  avatar.className = "ai-avatar";
  avatar.setAttribute("aria-hidden", "true");
  avatar.textContent = "⚖️";

  response.className = "ai-response";
  response.innerHTML = formatResponse(result.text);

  if (Array.isArray(result.suggestions) && result.suggestions.length > 0) {
    response.appendChild(renderSuggestions(result.suggestions));
  }

  wrapper.append(avatar, response);
  messages.appendChild(wrapper);
  scrollBottom();
}

function createCopyButton(text) {
  const button = document.createElement("button");

  button.type = "button";
  button.className = "copy-message-btn";
  button.textContent = "⧉";
  button.title = "Copy message";
  button.setAttribute("aria-label", "Copy message");
  button.addEventListener("click", () => copyMessage(text, button));

  return button;
}

async function copyMessage(text, button) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }

    const originalLabel = button.textContent;
    button.textContent = "✓";
    button.disabled = true;
    window.setTimeout(() => {
      button.textContent = originalLabel;
      button.disabled = false;
    }, 1400);
  } catch (error) {
    button.textContent = "!";
    window.setTimeout(() => {
      button.textContent = "⧉";
    }, 1400);
  }
}

function renderSuggestions(suggestions) {
  const group = document.createElement("div");

  group.className = "ai-suggestions";
  group.setAttribute("aria-label", "Suggested follow up questions");

  suggestions.slice(0, 4).forEach((suggestion) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "suggestion-btn";
    button.textContent = suggestion;
    button.setAttribute("data-prompt", suggestion);

    group.appendChild(button);
  });

  return group;
}

function showTyping() {
  const wrapper = document.createElement("div");
  const avatar = document.createElement("div");
  const card = document.createElement("div");

  wrapper.className = "msg-ai-wrap";
  wrapper.id = "typing";

  avatar.className = "ai-avatar";
  avatar.setAttribute("aria-hidden", "true");
  avatar.textContent = "⚖️";

  card.className = "typing-card";
  card.innerHTML = `
    <div class="typing-dots" aria-hidden="true">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
    <span>LawMitra is reviewing the facts...</span>
  `;

  wrapper.append(avatar, card);
  messages.appendChild(wrapper);
  scrollBottom();
}

function hideTyping() {
  document.getElementById("typing")?.remove();
}

function hideWelcome() {
  const welcome = document.getElementById("chat-welcome");
  if (welcome) {
    welcome.style.display = "none";
  }
}

function saveConversationStart(text) {
  if (activeConversationId) return;

  activeConversationId = window.crypto?.randomUUID?.() || String(Date.now());

  chatHistory = [
    {
      id: activeConversationId,
      title: text.length > 54 ? `${text.slice(0, 54)}...` : text,
      entries: []
    },
    ...chatHistory
  ].slice(0, 12);

  renderChatHistory();
  persistChatHistory();
}

function addConversationEntry(entry) {
  const conversation = chatHistory.find((item) => item.id === activeConversationId);
  if (conversation) {
    conversation.entries.push(entry);
    persistChatHistory();
  }
}

function restoreConversation(conversation) {
  if (!conversation || isGenerating) return;

  toggleSidebar(false);
  openChatView();
  activeConversationId = conversation.id;
  clearMemory();
  messages.querySelectorAll(".msg-user-wrap, .msg-ai-wrap").forEach((node) => node.remove());
  hideWelcome();

  conversation.entries.forEach((entry) => {
    if (entry.role === "user") {
      appendUserMessage(entry.text);
      saveMessage("user", entry.text);
      return;
    }

    if (entry.role === "assistant" && entry.result) {
      appendAIMessage(entry.result);
      saveMessage("assistant", entry.result.text);
    }
  });

  clearInput();
  renderChatHistory();
  input?.focus();
}

function renderChatHistory() {
  if (!chatHistoryList) return;

  chatHistoryList.textContent = "";

  if (chatHistory.length === 0) {
    const empty = document.createElement("div");
    empty.className = "history-empty";
    empty.textContent = "No conversations yet";
    chatHistoryList.appendChild(empty);
    return;
  }

  chatHistory.forEach((item) => {
    const row = document.createElement("div");
    const button = document.createElement("button");
    const deleteButton = document.createElement("button");

    row.className = "chat-history-row";
    button.type = "button";
    button.className = "history-item chat-history-item";
    button.textContent = item.title;
    button.addEventListener("click", () => {
      restoreConversation(item);
    });

    deleteButton.type = "button";
    deleteButton.className = "delete-chat-btn";
    deleteButton.textContent = "Delete";
    deleteButton.title = `Delete ${item.title}`;
    deleteButton.setAttribute("aria-label", `Delete chat: ${item.title}`);
    deleteButton.addEventListener("click", () => deleteConversation(item.id));

    row.append(button, deleteButton);
    chatHistoryList.appendChild(row);
  });
}

function deleteConversation(id) {
  const isActiveConversation = activeConversationId === id;
  if (isActiveConversation && isGenerating) return;

  chatHistory = chatHistory.filter((item) => item.id !== id);

  if (isActiveConversation) {
    activeConversationId = null;
    clearMemory();
    messages.querySelectorAll(".msg-user-wrap, .msg-ai-wrap").forEach((node) => node.remove());

    const welcome = document.getElementById("chat-welcome");
    if (welcome) welcome.style.display = "";

    clearInput();
  }

  renderChatHistory();
  persistChatHistory();
}

function persistChatHistory() {
  if (!historyState.enabled) return;
  if (!saveHistory(historyState.browserId, chatHistory)) {
    console.warn("Chat history could not be saved in this browser.");
  }
}

function activateHistory() {
  const result = enableHistory();

  if (!result.ok) {
    if (consentMessage) {
      consentMessage.textContent = "Persistent history needs cookies and browser storage. You can still use this chat without saving history.";
    }
    return;
  }

  historyState = { enabled: true, browserId: result.browserId, storageAvailable: true };
  persistChatHistory();
  closeConsentModal();
  renderHistorySettings();
}

function deactivateHistory() {
  if (historyState.enabled) disableHistory();
  historyState = { enabled: false, browserId: null, storageAvailable: false };
  renderHistorySettings();
}

function deleteAllHistory() {
  if (!historyState.enabled) return;
  if (!window.confirm("Delete all saved conversations from this browser? This cannot be undone.")) return;

  deleteSavedHistory(historyState.browserId);
  chatHistory = [];
  activeConversationId = null;
  clearMemory();
  messages.querySelectorAll(".msg-user-wrap, .msg-ai-wrap").forEach((node) => node.remove());
  const welcome = document.getElementById("chat-welcome");
  if (welcome) welcome.style.display = "";
  clearInput();
  renderChatHistory();
}

function renderHistorySettings() {
  if (!historyStatus) return;
  const enabled = historyState.enabled;
  historyStatus.textContent = enabled
    ? "History is saved on this browser. You can stop saving or delete it at any time."
    : "History is not being saved. You can enable it whenever you like.";
  if (enableHistoryButton) enableHistoryButton.hidden = enabled;
  if (disableHistoryButton) disableHistoryButton.hidden = !enabled;
  if (deleteAllHistoryButton) deleteAllHistoryButton.hidden = !enabled;
}

function openConsentModal() {
  if (!historyConsentModal) return;
  historyConsentModal.hidden = false;
  window.setTimeout(() => consentSaveButton?.focus(), 0);
}

function closeConsentModal() {
  if (historyConsentModal) historyConsentModal.hidden = true;
}

function clearInput() {
  if (!input) return;
  input.value = "";
  resizeInput();
}

function resizeInput() {
  if (!input) return;
  input.style.height = "auto";
  input.style.height = `${Math.min(input.scrollHeight, 150)}px`;
}

function setGenerating(value) {
  isGenerating = value;
  if (sendButton) sendButton.disabled = value;
  if (input) input.disabled = value;
}

function scrollBottom() {
  if (messages) {
    messages.scrollTop = messages.scrollHeight;
  }
}

function downloadText(filename, text) {
  const blob = new Blob([text], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function renderStructuredContent() {
  renderChatHistory();
  renderCaseLibrary();
  renderContactCards();
  renderMapActions();
}

function renderCaseLibrary() {
  if (caseLibraryList) {
    const groupedCases = groupCasesByCategory(LEGAL_CASES);
    caseLibraryList.textContent = "";

    groupedCases.forEach(([category, cases]) => {
      const label = document.createElement("div");

      label.className = "history-title";
      label.textContent = getCategoryLabel(category);
      caseLibraryList.appendChild(label);

      cases.forEach((legalCase) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "history-item";
        button.textContent = legalCase.title;
        button.setAttribute("data-prompt", `Help me with ${legalCase.title}`);
        button.setAttribute("data-start-new-chat", "");

        caseLibraryList.appendChild(button);
      });
    });
  }

  if (!caseCatalogGrid) return;

  caseCatalogGrid.textContent = "";

  LEGAL_CASES.forEach((legalCase) => {
    const button = document.createElement("button");
    const category = document.createElement("span");
    const title = document.createElement("strong");
    const summary = document.createElement("span");

    button.type = "button";
    button.className = "catalog-card";
    button.setAttribute("data-prompt", `Help me with ${legalCase.title}`);

    category.className = "category-label";
    category.textContent = getCategoryLabel(legalCase.category);
    title.textContent = legalCase.title;
    summary.textContent = legalCase.summary;

    button.append(category, title, summary);
    caseCatalogGrid.appendChild(button);
  });
}

function renderContactCards() {
  if (!contactList) return;

  contactList.textContent = "";

  HELP_CONTACTS.forEach((contact) => {
    const card = document.createElement("article");
    const title = document.createElement("strong");
    const description = document.createElement("p");
    const actions = document.createElement("div");
    const phone = document.createElement("a");
    const site = document.createElement("a");

    card.className = "contact-card";
    title.textContent = `${contact.shortName} - ${contact.phone}`;
    description.textContent = contact.availability;
    actions.className = "contact-actions";

    phone.className = "contact-action";
    phone.href = `tel:${contact.phone.replace(/\s/g, "")}`;
    phone.textContent = "Call";

    site.className = "contact-action";
    site.href = contact.website;
    site.target = "_blank";
    site.rel = "noopener noreferrer";
    site.textContent = "Website";

    actions.append(phone, site);

    if (contact.whatsapp) {
      const whatsapp = document.createElement("a");
      whatsapp.className = "contact-action";
      whatsapp.href = `https://wa.me/91${contact.whatsapp}`;
      whatsapp.target = "_blank";
      whatsapp.rel = "noopener noreferrer";
      whatsapp.textContent = "WhatsApp";
      actions.appendChild(whatsapp);
    }

    card.append(title, description, actions);
    contactList.appendChild(card);
  });
}

function renderMapActions() {
  if (!mapActions) return;

  mapActions.textContent = "";

  MAP_HELP_OPTIONS.forEach((option) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "map-action";
    button.textContent = option.label;
    button.setAttribute("aria-pressed", String(option.id === activeMapOption?.id));

    if (option.id === activeMapOption?.id) {
      button.classList.add("is-active");
    }

    button.addEventListener("click", () => {
      activeMapOption = option;
      updateExternalMapLink(option);
      renderMapActions();
    });

    mapActions.appendChild(button);
  });
}

function requestLocation() {
  if (userCoordinates) return;

  setLocationButtonState("Locating…", true);
  getUserLocation()
    .then((coordinates) => {
      userCoordinates = coordinates;
      updateExternalMapLink(activeMapOption);
      setLocationButtonState("Location active", true);
    })
    .catch(() => setLocationButtonState("Use my location", false));
}

function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is unavailable."));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => resolve({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }),
      reject,
      {
        enableHighAccuracy: true,
        timeout: 8000,
        maximumAge: 300000
      }
    );
  });
}

function openMapAfterLocation(href) {
  if (mapSearchInProgress) return;

  mapSearchInProgress = true;
  setLocationButtonState("Locating…", true);

  const openMap = (coordinates) => {
    userCoordinates = coordinates;
    updateExternalMapLink(activeMapOption);
    setLocationButtonState("Location active", true);
    mapSearchInProgress = false;

    const destination = createLocationMapUrl(href, coordinates);
    const newTab = window.open(destination, "_blank");
    if (newTab) {
      newTab.opener = null;
    } else {
      window.location.assign(destination);
    }
  };

  if (userCoordinates) {
    openMap(userCoordinates);
    return;
  }

  getUserLocation()
    .then(openMap)
    .catch(() => {
      mapSearchInProgress = false;
      setLocationButtonState("Use my location", false);
    });
}

function createLocationMapUrl(href, coordinates) {
  const url = new URL(href);
  const query = url.searchParams.get("query") || "nearby legal help";

  url.searchParams.set(
    "query",
    `${query} near ${coordinates.latitude},${coordinates.longitude}`
  );

  return url.toString();
}

function updateExternalMapLink(option) {
  if (!mapOpenLink || !option) return;

  const locationQuery = userCoordinates
    ? `${option.query} near ${userCoordinates.latitude},${userCoordinates.longitude}`
    : option.query;

  mapOpenLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationQuery)}`;
  mapOpenLink.textContent = `Open ${option.label} in Google Maps →`;
}

function setLocationButtonState(text, disabled) {
  [useLocationButton, currentLocationButton, topbarLocationButton].forEach((button) => {
    if (!button) return;
    const label = button.querySelector("[data-button-label]");
    if (label) {
      label.textContent = text;
    } else {
      button.textContent = text;
    }
    button.setAttribute("aria-label", text);
    button.title = text;
    button.disabled = disabled;
  });

  if (footerLocationButton) {
    footerLocationButton.title = text;
    footerLocationButton.disabled = disabled;
  }
}

function groupCasesByCategory(cases) {
  const groups = new Map();

  cases.forEach((legalCase) => {
    const group = groups.get(legalCase.category) || [];
    group.push(legalCase);
    groups.set(legalCase.category, group);
  });

  return [...groups.entries()];
}

function getCategoryLabel(category) {
  const labels = {
    accident: "Accident",
    banking: "Banking",
    cheque: "Cheque",
    civic: "Civic",
    consumer: "Consumer",
    contract: "Contract",
    criminal: "Criminal",
    cyber_fraud: "Cyber",
    disability: "Disability Rights",
    defamation: "Defamation",
    elections: "Elections & Voting",
    environment: "Environment",
    housing: "Housing",
    insurance: "Insurance",
    immigration: "Immigration & Visas",
    insolvency: "Debt & Insolvency",
    intellectual_property: "IP",
    landlord: "Landlord",
    medical: "Medical",
    passport: "Passport",
    police: "Police",
    privacy: "Privacy",
    property: "Property",
    public_records: "RTI",
    public_service: "Public Service",
    relationship: "Family",
    rights: "Rights",
    service_matters: "Government & Service",
    senior: "Senior",
    student: "Student",
    tax: "Tax",
    traffic: "Traffic",
    telecom: "Telecom & Internet",
    utilities: "Utilities",
    child_welfare: "Child Welfare",
    business: "Business Compliance",
    arbitration: "Arbitration & Mediation",
    workplace: "Workplace"
  };

  return labels[category] || category.replace(/_/g, " ");
}

function formatResponse(text) {
  const lines = String(text || "").trim().split("\n");
  const introLines = [];
  const sections = [];
  let currentSection = null;

  for (const rawLine of lines) {
    const heading = rawLine.trim().match(/^\*\*(.+)\*\*$/);

    if (heading) {
      currentSection = {
        heading: heading[1],
        lines: []
      };
      sections.push(currentSection);
      continue;
    }

    if (currentSection) {
      currentSection.lines.push(rawLine);
    } else {
      introLines.push(rawLine);
    }
  }

  let html = "";
  const introHtml = formatContentLines(introLines);

  if (introHtml) {
    html += `<div class="response-lead">${introHtml}</div>`;
  }

  let templatesStarted = false;

  sections.forEach((section) => {
    const headingText = escapeHtml(section.heading);

    if (isDraftSection(section.heading)) {
      if (!templatesStarted) {
        html += `<div class="template-title">Ready-to-send templates</div>`;
        templatesStarted = true;
      }

      html += `
        <details class="draft-details">
          <summary>${getSectionIcon(section.heading)} ${headingText}</summary>
          <pre>${escapeHtml(section.lines.join("\n").trim())}</pre>
        </details>
      `;
      return;
    }

    html += `
      <section class="response-section ${getSectionClass(section.heading)}">
        <div class="response-heading">
          <span class="response-icon" aria-hidden="true">${getSectionIcon(section.heading)}</span>
          <span>${headingText}</span>
        </div>
        ${formatContentLines(section.lines)}
      </section>
    `;
  });

  return html || `<div class="response-lead">${escapeHtml(String(text || ""))}</div>`;
}

function formatContentLines(rawLines) {
  let html = "";
  let listType = null;

  for (const rawLine of rawLines) {
    const line = escapeHtml(rawLine.trim());

    if (!line) {
      html += closeOpenList(listType);
      listType = null;
      continue;
    }

    if (line.startsWith("- ")) {
      if (listType !== "ul") {
        html += closeOpenList(listType);
        html += "<ul>";
        listType = "ul";
      }

      html += `<li>${formatInline(line.slice(2))}</li>`;
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      if (listType !== "ol") {
        html += closeOpenList(listType);
        html += "<ol>";
        listType = "ol";
      }

      html += `<li>${formatInline(line.replace(/^\d+\.\s/, ""))}</li>`;
      continue;
    }

    html += closeOpenList(listType);
    listType = null;
    html += `<p>${formatInline(line)}</p>`;
  }

  html += closeOpenList(listType);
  return html;
}

function isDraftSection(heading) {
  return /(email|message|sms|whatsapp)/i.test(heading);
}

function getSectionIcon(heading) {
  const text = String(heading || "").toLowerCase();

  if (text.includes("summary") || text.includes("likely")) return "▣";
  if (text.includes("right") || text.includes("sanction") || text.includes("remed")) return "⚖";
  if (text.includes("preserve") || text.includes("evidence")) return "▤";
  if (text.includes("next") || text.includes("outline")) return "↳";
  if (text.includes("contact") || text.includes("help")) return "☎";
  if (text.includes("map")) return "⌖";
  if (text.includes("question")) return "?";
  if (text.includes("email")) return "✉";
  if (text.includes("message") || text.includes("sms") || text.includes("whatsapp")) return "●";
  return "▪";
}

function getSectionClass(heading) {
  const text = String(heading || "").toLowerCase();

  if (text.includes("contact") || text.includes("help")) return "is-contacts";
  if (text.includes("next") || text.includes("right now")) return "is-steps";
  if (text.includes("right") || text.includes("sanction") || text.includes("remed")) return "is-rights";
  return "";
}

function closeOpenList(type) {
  if (type === "ul") return "</ul>";
  if (type === "ol") return "</ol>";
  return "";
}

function formatInline(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(
      /\[([^\]]+)]\((https?:\/\/[^)\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    );
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
