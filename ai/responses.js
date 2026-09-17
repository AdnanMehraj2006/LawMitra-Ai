import { LEGAL_CASES } from "./cases.js";
import {
  createMapSearchUrl,
  getHelpContactsForCase,
  getMapOptionsForCase,
  getOfficialSourcesForCase
} from "./help.js";

export const responses = {
  general: `I’d like to understand your issue better.
Can you explain what happened in a little more detail?

Helpful details:
- who is involved
- dates, amount, place, and platform if any
- whether you have documents, chats, payment proof, or witnesses

This is general legal information and not a substitute for a lawyer's advice.`,

  lowConfidence: `I’m not fully sure what issue you’re facing yet.
Could you explain your situation in a little more detail?

For example, tell me:
- what happened
- who is involved
- whether money, documents, threats, rent, salary, police, or a product/service is involved`,

  emergency: `If someone is in immediate danger, call **112** or go to the nearest police station first.

After safety is handled, share:
- what happened
- where and when it happened
- who is involved
- what proof you have
- whether police gave an acknowledgement`
};

export function formatCaseResponse(legalCase, options = {}) {

  const {
    relatedCases = [],
    focus = "full",
    message = ""
  } = options;

  if (focus === "sanctions") {
    return `${buildLeadIn(legalCase, message)}

**Possible sanctions or remedies for ${legalCase.title}**

${formatList(legalCase.sanctions)}

These outcomes depend on jurisdiction, evidence, timelines, and the exact facts. I can also help you build an evidence checklist or complaint outline.`;
  }

  if (focus === "evidence") {
    return `${buildLeadIn(legalCase, message)}

**Evidence checklist for ${legalCase.title}**

${formatList(legalCase.evidence)}

**Preserve this now**
${formatList(legalCase.immediateActions.slice(0, 3))}

Keep originals safe and share copies when possible.`;
  }

  if (focus === "draft") {
    return `${buildLeadIn(legalCase, message)}

**Complaint outline**

1. Your name, contact details, and relationship to the matter.
2. Opposite party details: name, phone, address, company, platform, or account ID.
3. Timeline: dates, times, amounts, locations, and exact events.
4. Evidence list: attach copies of the most important records.
5. Relief requested: refund, protection, FIR, salary release, repair, compensation, injunction, or another clear action.
6. Declaration: state that the facts are true to your knowledge.

**Strong evidence to attach**
${formatList(legalCase.evidence)}

**Who to contact**
${formatHelpContacts(legalCase)}

**Live map searches**
${formatMapLinks(legalCase)}

**Official sources to verify**
${formatOfficialSources(legalCase)}

**Ready-to-send email**
${buildEmailDraft(legalCase)}

**Short message draft**
${buildShortMessageDraft(legalCase)}

This is a drafting aid. Have a lawyer or legal aid clinic review it before filing if the matter is serious.`;
  }

  if (focus === "help") {
    return `${buildLeadIn(legalCase, message)}

**Who to contact for ${legalCase.title}**

${formatHelpContacts(legalCase)}

**Live map searches**
${formatMapLinks(legalCase)}

**Official sources to verify**
${formatOfficialSources(legalCase)}

If someone is in immediate danger, call 112 first. For local offices, open a map search and call the listed place before visiting.`;
  }

  const relatedText = relatedCases.length
    ? `\n\n**Also check**\n${formatList(relatedCases.map((item) => item.title))}`
    : "";

  return `${buildLeadIn(legalCase, message)}

**Problem Summary**
${legalCase.title}

${legalCase.summary}

**Your rights and remedies**
${formatList(legalCase.sanctions)}

**Evidence to preserve**
${formatList(legalCase.evidence)}

**What to do right now**
${formatList(legalCase.immediateActions)}

**Where this can escalate**
${formatList(legalCase.escalation)}

**Who to contact**
${formatHelpContacts(legalCase)}

**Live map searches**
${formatMapLinks(legalCase)}

**Official sources to verify**
${formatOfficialSources(legalCase)}

**Ready-to-send email**
${buildEmailDraft(legalCase)}

**Short message draft**
${buildShortMessageDraft(legalCase)}

**Questions to narrow this**
${formatList(legalCase.questions)}${relatedText}

This is general legal information and not a substitute for advice from a qualified lawyer.`;
}

export function formatNearbyHelpResponse(legalCase) {

  const heading = legalCase
    ? `Who to contact for ${legalCase.title}`
    : "Who to contact";

  return `**${heading}**

${formatHelpContacts(legalCase)}

**Live map searches**
${formatMapLinks(legalCase)}

For urgent safety, call 112 before using online maps. For non-urgent legal aid, call 15100 or open the legal-aid map search.`;
}

export function formatCaseLibrary(cases = LEGAL_CASES) {

  const visibleCases = cases.length ? cases : LEGAL_CASES;

  const summaries = visibleCases
    .map((legalCase, index) => {
      const sanctions = legalCase.sanctions
        .slice(0, 2)
        .map((sanction) => sanction.replace(/\.$/, ""))
        .join("; ");

      return `- **${index + 1}. ${legalCase.title}:** ${sanctions}.`;
    })
    .join("\n");

  return `**Legal case library with sanctions**

${summaries}

Ask about any case by name, or describe your facts and I will match the closest case.`;
}

export function buildSuggestions(legalCase) {

  if (!legalCase) {
    return [
      "Show me legal cases with sanctions",
      "I lost money in an online scam",
      "My employer is not paying salary"
    ];
  }

  return [
    `What sanctions apply in ${legalCase.title}?`,
    `What evidence do I need for ${legalCase.title}?`,
    `Draft an email and message for ${legalCase.title}`,
    `Show nearby help and map for ${legalCase.title}`
  ];
}

export function buildLibrarySuggestions() {

  return [
    "Cyber fraud sanctions",
    "Cheque bounce sanctions",
    "Landlord deposit dispute",
    "Domestic violence remedies"
  ];
}

export function generateDynamicResponse(intent, message) {

  const legalCase = findDynamicCase(intent, message);

  if (legalCase) {
    return formatCaseResponse(legalCase, {
      message,
      relatedCases: LEGAL_CASES
        .filter((item) => item.category === legalCase.category && item.id !== legalCase.id)
        .slice(0, 2)
    });
  }

  if (intent === "greeting") {
    return `Hi there 😊
What do you need help with?

You can:
- describe your issue
- upload a suspicious screenshot
- ask about scams
- generate complaint drafts`;
  }

  if (intent === "thanks") {
    return random([
      "You're welcome.",
      "Happy to help.",
      "Glad I could help."
    ]);
  }

  if (intent === "bye") {
    return random([
      "Take care.",
      "Goodbye, and stay safe.",
      "See you soon."
    ]);
  }

  return responses.general;
}

function formatList(items) {

  return items.map((item) => `- ${item}`).join("\n");
}

function formatHelpContacts(legalCase) {

  return getHelpContactsForCase(legalCase)
    .map((contact) => {
      const secondary = contact.secondaryPhone
        ? ` / ${contact.secondaryPhone}`
        : "";
      const whatsapp = contact.whatsapp
        ? `; WhatsApp/SMS: ${contact.whatsapp}`
        : "";
      const email = contact.email
        ? `; email: ${contact.email}`
        : "";

      return `- **${contact.shortName}:** Call ${contact.phone}${secondary}${whatsapp}${email}. ${contact.availability}. [Official site](${contact.website})`;
    })
    .join("\n");
}

function formatMapLinks(legalCase) {

  return getMapOptionsForCase(legalCase)
    .map((option) => `- [${option.label}](${createMapSearchUrl(option.query)})`)
    .join("\n");
}

function formatOfficialSources(legalCase) {
  return getOfficialSourcesForCase(legalCase)
    .map((source) => `- [${source.label}](${source.url})`)
    .join("\n");
}

function buildEmailDraft(legalCase) {

  const recipient = getDraftRecipient(legalCase);
  const relief = getReliefLine(legalCase);

  return `To: ${recipient}
Subject: Request for assistance regarding ${legalCase.title}

Dear Sir/Madam,

I am [your full name], residing at [address]. I request your assistance regarding ${legalCase.title.toLowerCase()}.

Matter summary:
1. Date and time: [add date and time].
2. Place/platform: [add location, website, app, bank, office, or institution].
3. Opposite party details: [name, phone, address, account ID, company, or platform].
4. What happened: [write the facts in chronological order].
5. Loss or harm caused: [amount, injury, threat, delay, document withheld, or other harm].

Evidence attached:
${formatList(legalCase.evidence.slice(0, 4).map((item) => `[attach] ${item}`))}

Relief requested:
- ${relief}
- Please acknowledge this complaint and share the complaint/reference number.
- Please guide me on the next formal step and any additional documents required.

Regards,
[your full name]
[phone number]
[email address]`;
}

function buildShortMessageDraft(legalCase) {

  return `Hello, I need help with ${legalCase.title.toLowerCase()}. Date/time: [add]. Place/platform: [add]. Opposite party: [name/phone/company/account]. Main issue: [one-line facts]. Evidence available: [screenshots/documents/payment proof/witnesses]. Action needed: ${getReliefLine(legalCase)} Please guide me and share an acknowledgement/reference number. My contact: [name, phone].`;
}

function getDraftRecipient(legalCase) {

  const recipients = {
    accident: "[Police station / insurer / Motor Accident Claims Tribunal]",
    banking: "[Bank nodal officer / RBI ombudsman]",
    cheque: "[Opposite party / lawyer for legal notice]",
    civic: "[Municipal authority / housing society / police station]",
    consumer: "[Seller grievance officer / National Consumer Helpline / consumer commission]",
    contract: "[Opposite party / mediator / lawyer]",
    criminal: "[Station House Officer / investigating officer / court]",
    cyber_fraud: "[Cyber Crime Cell / bank fraud desk / platform grievance officer]",
    disability: "[Institution grievance officer / disability-rights authority / legal aid]",
    defamation: "[Opposite party / platform grievance officer / lawyer]",
    elections: "[Electoral registration officer / election authority / police if threats are involved]",
    environment: "[Municipal authority / State Pollution Control Board]",
    housing: "[Builder grievance officer / RERA authority / consumer commission]",
    insurance: "[Insurer grievance officer / insurance ombudsman]",
    immigration: "[FRRO/FRO / official immigration authority / qualified immigration lawyer]",
    insolvency: "[Lender authorised officer / insolvency professional / qualified lawyer]",
    intellectual_property: "[Platform IP team / opposite party / lawyer]",
    landlord: "[Landlord / rent authority / police station if threats are involved]",
    medical: "[Hospital grievance officer / medical superintendent / consumer commission]",
    passport: "[Regional Passport Office / police verification unit]",
    police: "[Station House Officer / senior police officer]",
    privacy: "[Platform grievance officer / cyber police]",
    property: "[Opposite party / revenue authority / civil court lawyer]",
    public_records: "[Public Information Officer / First Appellate Authority]",
    public_service: "[Department grievance officer / appellate authority]",
    relationship: "[Protection officer / family court / legal aid]",
    rights: "[Police station / district administration / legal aid]",
    senior: "[Maintenance tribunal / district administration / police]",
    student: "[Principal / registrar / grievance cell]",
    tax: "[Tax officer / appeal authority / tax professional]",
    traffic: "[Traffic police helpdesk / virtual court / transport department]",
    workplace: "[HR grievance officer / labour department / Internal Committee]"
  };

  return recipients[legalCase.category] || "[Relevant authority / grievance officer]";
}

function getReliefLine(legalCase) {

  const reliefs = {
    accident: "medical help, police action, insurance processing, and compensation guidance",
    banking: "stop harassment, correct records, reverse wrongful charges, and resolve the complaint",
    cheque: "payment of the cheque amount with applicable interest/costs",
    civic: "inspection, written action, and removal or restraint of the nuisance",
    consumer: "refund, replacement, repair, compensation, or service correction",
    contract: "payment/recovery, performance of obligations, or a written settlement timeline",
    criminal: "lawful investigation, protection of rights, bail/summons guidance, and written acknowledgement",
    cyber_fraud: "freeze the transaction trail, register the cyber complaint, and preserve platform records",
    disability: "accessible service or reasonable accommodation and a written decision",
    defamation: "takedown, apology/retraction, and restraint from repeating false allegations",
    elections: "correction of electoral records, investigation of the complaint, and safety support where needed",
    environment: "inspection, stoppage of pollution, cleanup, and written compliance action",
    housing: "possession/refund, interest for delay, defect rectification, or RERA action",
    insurance: "reconsideration and payment of the valid claim with reasons in writing",
    immigration: "written clarification, lawful review, or timely processing of the application",
    insolvency: "a lawful response to the claim, time to present records, and appropriate resolution guidance",
    intellectual_property: "takedown, cease-and-desist, and protection of my intellectual property",
    landlord: "return of deposit, repair compliance, peaceful possession, or protection from illegal eviction",
    medical: "release of records, billing review, treatment explanation, and compensation where justified",
    passport: "time-bound processing, correction, reconsideration, or written reasons for objection",
    police: "registration of complaint/FIR, protection, investigation, and written acknowledgement",
    privacy: "takedown, account/data protection, investigation, and prevention of further misuse",
    property: "protection of possession/title, injunction, document correction, or investigation of fraud",
    public_records: "release of the requested records or a lawful written reason for refusal",
    public_service: "time-bound processing or written reasons for delay/rejection",
    relationship: "protection, maintenance, residence/custody relief, or safe mediation where appropriate",
    rights: "protection, registration of complaint, victim support, and action against discrimination",
    senior: "protection, maintenance, restoration of property/possession, and welfare support",
    student: "refund, document release, exam access, harassment action, or written decision",
    tax: "rectification, opportunity to reply, stay/reconsideration, or appeal guidance",
    traffic: "correction/contest of challan, vehicle release, or written hearing",
    workplace: "payment of dues, safe workplace action, inquiry, or labour authority intervention"
  };

  return reliefs[legalCase.category] || "appropriate legal action and written acknowledgement";
}

function buildLeadIn(legalCase, message) {

  const text = String(message || "").toLowerCase();

  if (legalCase.category === "cyber_fraud") {
    if (/(money|deducted|upi|bank|transaction|otp)/.test(text)) {
      return random([
        "That looks time-sensitive because money or account access may be involved.",
        "Treat this as urgent. Fast reporting can improve the chances of freezing the transaction trail.",
        "This sounds like a cyber fraud issue where speed and evidence preservation both matter."
      ]);
    }

    if (/(link|password|login|instagram|facebook|telegram|hacked)/.test(text)) {
      return random([
        "This may involve account compromise, so secure the account first and preserve the trail.",
        "That pattern often appears in phishing or account takeover matters.",
        "You should treat the link or account activity carefully until it is verified."
      ]);
    }
  }

  if (legalCase.category === "landlord") {
    return random([
      "That sounds frustrating, and the paper trail will matter a lot here.",
      "This kind of landlord dispute usually turns on agreement terms, payment proof, and possession status.",
      "Let's frame it around the deposit, agreement, proof, and next escalation point."
    ]);
  }

  if (legalCase.category === "workplace") {
    return random([
      "This needs a clean employment timeline and proof of dues.",
      "Workplace claims get stronger when salary records, emails, and HR responses are organized.",
      "Let's separate what is unpaid, what was promised, and what documents support it."
    ]);
  }

  if (legalCase.urgency === "high") {
    return random([
      "This may need urgent attention, especially if safety, threats, or coercion are involved.",
      "First priority is safety and preserving proof. Then the legal route becomes clearer.",
      "This is serious enough to document carefully and escalate through the right channel."
    ]);
  }

  return random([
    "I can map this into the likely legal route and practical next steps.",
    "Here is the structured legal view based on what you shared.",
    "Let's break this into likely case type, sanctions or remedies, evidence, and escalation."
  ]);
}

function findDynamicCase(intent, message) {

  const text = String(message || "").toLowerCase();
  const candidates = LEGAL_CASES
    .map((legalCase) => {
      let score = legalCase.category === intent ? 4 : 0;

      for (const keyword of legalCase.keywords) {
        if (text.includes(keyword.toLowerCase())) {
          score += 2;
        }
      }

      return {
        legalCase,
        score
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return candidates[0]?.legalCase;
}

function random(items) {

  return items[Math.floor(Math.random() * items.length)];
}
