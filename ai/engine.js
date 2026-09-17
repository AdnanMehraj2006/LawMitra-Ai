import {
  greetings,
  thanksReplies,
  byeReplies
} from "./greetings.js";

import { LEGAL_CASES, getCasesByCategory } from "./cases.js";
import { detectIntent } from "./intents.js";
import {
  buildLibrarySuggestions,
  buildSuggestions,
  formatCaseLibrary,
  formatCaseResponse,
  formatNearbyHelpResponse,
  responses
} from "./responses.js";
import { getRecentMessages, saveMessage } from "./memory.js";
import { jurisdictionNote } from "./jurisdiction.js";
import { recordCoverageGap } from "./coverage.js";

const CASE_LIBRARY_TERMS = [
  "case",
  "cases",
  "sanction",
  "sanctions",
  "penalty",
  "penalties",
  "punishment",
  "remedy",
  "remedies",
  "legal options"
];

const FOCUS_PATTERNS = [
  ["sanctions", /(sanction|penalt|punish|fine|jail|imprison|remed)/i],
  ["evidence", /(evidence|proof|document|record|screenshot|what.*keep|what.*need)/i],
  ["draft", /(draft|write|format|complaint|notice|application|letter|email|message|whatsapp|sms)/i],
  ["help", /(nearby|nearest|contact|helpline|phone|map|location|where.*go|legal aid|police station|cyber cell|help centre|help center)/i]
];

function randomItem(arr) {

  return arr[
    Math.floor(Math.random() * arr.length)
  ];
}

export function generateAIResponse(message) {

  const cleanedMessage = String(message || "").trim();

  if (!cleanedMessage) {
    return {
      text: responses.general,
      suggestions: buildSuggestions()
    };
  }

  saveMessage("user", cleanedMessage);

  const classification = detectIntent(cleanedMessage);

  logClassification(classification);

  const response = buildResponse(cleanedMessage, classification);
  const localizedResponse = classification.responseType === "legal"
    ? { ...response, text: `${response.text}${jurisdictionNote()}` }
    : response;

  if (!isUrgentSafetyMessage(cleanedMessage)) recordCoverageGap(classification);

  saveMessage("assistant", localizedResponse.text);

  return localizedResponse;
}

function buildResponse(message, classification) {

  const intent = classification.intent || "general";

  if (classification.responseType === "greeting") {
    return {
      text: randomItem(greetings),
      suggestions: [
        "I lost money in an online scam",
        "My landlord is not returning my deposit",
        "Draft a complaint for my issue",
        "Show nearby legal help"
      ]
    };
  }

  if (classification.responseType === "thanks") {
    return {
      text: randomItem(thanksReplies),
      suggestions: buildSuggestions()
    };
  }

  if (classification.responseType === "bye") {
    return {
      text: randomItem(byeReplies),
      suggestions: []
    };
  }

  if (isUrgentSafetyMessage(message)) {
    return {
      text: responses.emergency,
      suggestions: [
        "I need immediate safety help",
        "How do I preserve evidence safely?",
        "Find legal aid near me"
      ]
    };
  }

  const clarification = buildClarificationResponse(message, classification);

  if (clarification) {
    return clarification;
  }

  if (classification.responseType === "fallback") {
    const catalogMatches = findBestCases(message, "general");
    if (catalogMatches.length > 0) {
      const [topCase, ...relatedCases] = catalogMatches;
      return {
        text: formatCaseResponse(topCase, { message, relatedCases: relatedCases.slice(0, 2) }),
        suggestions: buildSuggestions(topCase)
      };
    }

    if (isBroadLibraryRequest(message)) {
      return {
        text: formatCaseLibrary(LEGAL_CASES),
        suggestions: buildLibrarySuggestions()
      };
    }

    if (detectFocus(message) === "help") {
      return {
        text: formatNearbyHelpResponse(),
        suggestions: [
          "Show legal aid map",
          "Show cyber crime contact",
          "Draft an email for my issue"
        ]
      };
    }

    return {
      text: responses.lowConfidence || responses.general,
      suggestions: [
        "I lost money in an online scam",
        "My employer has not paid my salary",
        "My landlord is forcing me to leave",
        "A seller is refusing my refund"
      ]
    };
  }

  if (isBroadLibraryRequest(message)) {
    const categoryCases = intent !== "general"
      ? getCasesByCategory(intent)
      : LEGAL_CASES;

    return {
      text: formatCaseLibrary(categoryCases),
      suggestions: intent !== "general" && categoryCases.length
        ? buildSuggestions(categoryCases[0])
        : buildLibrarySuggestions()
    };
  }

  const focus = detectFocus(message);
  const directMatches = findBestCases(message, intent);
  const matches = directMatches.length > 0
    ? directMatches
    : findBestCases(buildContext(message), intent);

  if (isLibraryRequest(message) && matches.length === 0) {
    return {
      text: formatCaseLibrary(),
      suggestions: buildLibrarySuggestions()
    };
  }

  if (focus === "help" && matches.length === 0) {
    return {
      text: formatNearbyHelpResponse(),
      suggestions: [
        "Show legal aid map",
        "Show cyber crime contact",
        "Draft an email for my issue"
      ]
    };
  }

  if (isLibraryRequest(message) && intent !== "general" && focus === "full") {
    const categoryCases = getCasesByCategory(intent);

    return {
      text: formatCaseLibrary(categoryCases),
      suggestions: categoryCases.length
        ? buildSuggestions(categoryCases[0])
        : buildLibrarySuggestions()
    };
  }

  if (matches.length > 0) {
    const [topCase, ...relatedCases] = matches;

    return {
      text: formatCaseResponse(topCase, {
        focus,
        relatedCases: relatedCases.slice(0, 2),
        message
      }),
      suggestions: buildSuggestions(topCase)
    };
  }

  return {
    text: responses.general,
    suggestions: buildSuggestions()
  };
}

function buildClarificationResponse(message, classification) {

  const currentText = normalize(message);
  const conversationText = normalize(buildContext(message));
  const hasCyberContext = /\b(scam|fraud|cheated|cheating|cyber)\b/.test(conversationText);

  if (classification.intent === "cyber_fraud" || hasCyberContext) {
    return buildCyberClarification(currentText, conversationText);
  }

  return null;
}

function buildCyberClarification(currentText, conversationText) {

  const hasSpecificDetail = /\b(upi|otp|pin|password|bank|card|transaction|deducted|transfer|phishing|link|website|remote access|anydesk|teamviewer|hacked|instagram|facebook|telegram|whatsapp|blackmail|sextortion|photo|investment|job offer|loan app)\b/.test(conversationText);

  if (hasSpecificDetail) return null;

  const isMoneyFollowUp = /\b(money|payment|cash|amount|rupee|rs|loss)\b/.test(currentText);

  if (isMoneyFollowUp) {
    return {
      text: `I can help with a money-related scam. What happened to the money?\n\n- Was it sent through UPI, bank transfer, card, wallet, or cash?\n- Did you share an OTP, PIN, password, or screen access?\n- When did it happen, and do you have the transaction ID or screenshots?\n\nIf money was deducted or transferred, contact your bank immediately and call **1930** in India as soon as possible.`,
      suggestions: [
        "Money was deducted from my bank account",
        "I sent money by UPI to a scammer",
        "I shared an OTP or PIN",
        "I clicked a link and entered my bank details"
      ]
    };
  }

  return {
    text: `I’m sorry this happened. To guide you correctly, what type of scam was it?\n\nTell me what happened in one or two lines, or choose the closest option below.`,
    suggestions: [
      "Money was deducted or I sent money by UPI/bank transfer",
      "I shared an OTP, PIN, password, or screen access",
      "I clicked a suspicious link or fake website",
      "My WhatsApp, Instagram, or other account was hacked",
      "Someone is blackmailing or threatening to share photos"
    ]
  };
}

function logClassification(classification) {

  console.info("[LawMitra AI classification]", {
    normalizedInput: classification.normalizedText,
    detectedIntent: classification.intent,
    confidenceScore: classification.confidence,
    selectedResponseType: classification.responseType,
    matchedKeywords: classification.matchedKeywords,
    ambiguous: Boolean(classification.ambiguous)
  });
}

function buildContext(message) {

  const recentUserMessages = getRecentMessages({
    role: "user",
    limit: 4
  })
    .map((entry) => entry.content)
    .join(" ");

  return `${recentUserMessages} ${message}`.trim();
}

function findBestCases(message, intent) {

  const text = normalize(message);

  return LEGAL_CASES
    .map((legalCase) => ({
      legalCase,
      score: scoreCase(legalCase, text, intent)
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((result) => result.legalCase);
}

function scoreCase(legalCase, text, intent) {

  let score = legalCase.category === intent ? 4 : 0;

  const titleTokens = legalCase.title
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length > 3);

  for (const token of titleTokens) {
    if (text.includes(token)) score += 1;
  }

  for (const keyword of legalCase.keywords) {
    if (text.includes(normalize(keyword))) score += 3;
  }

  if (text.includes(legalCase.id.replace(/-/g, " "))) {
    score += 8;
  }

  return score;
}

function detectFocus(message) {

  for (const [focus, pattern] of FOCUS_PATTERNS) {
    if (pattern.test(message)) return focus;
  }

  return "full";
}

function isLibraryRequest(message) {

  const text = normalize(message);

  return CASE_LIBRARY_TERMS.some((term) => text.includes(term));
}

function isBroadLibraryRequest(message) {

  const text = normalize(message);

  return (
    text.includes("case library") ||
    text.includes("legal cases with sanctions") ||
    /(show|list|all|multiple)\b.*\b(case|cases|sanction|sanctions|penalty|penalties|remedy|remedies)\b/.test(text)
  );
}

function isUrgentSafetyMessage(message) {

  return /(danger|unsafe|attack|assault|threat|violence|blackmail|stalking|suicide|self harm)/i
    .test(message);
}

function normalize(value) {

  return String(value || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}
