# LawMitra AI

LawMitra AI is a responsive, browser-based Indian legal-guidance project. It helps users describe a common legal or civic issue in simple language, identifies the closest curated case type, and shows practical next steps, evidence to preserve, possible escalation routes, official verification links, and complaint drafts.

> LawMitra AI provides general legal information only. It is not a lawyer, does not create an advocate-client relationship, and must not be used as a substitute for professional legal advice or emergency services.

## Features

- **43 curated case patterns across 38 categories** for common Indian legal and civic questions.
- **Confidence-based case routing** that normalises input, recognises greetings, and asks for clarification instead of guessing when the match is weak or ambiguous.
- **Structured case guidance** with rights/remedies, evidence checklists, immediate actions, escalation options, contacts, map searches, and complaint drafts.
- **Urgent-safety escalation** for immediate danger, violence, assault, threats, stalking, blackmail, and self-harm indicators; the response prioritises calling **112**.
- **Official verification links** to appropriate sources such as India Code, NALSA, the National Cyber Crime Reporting Portal, RBI, MCA, Passport Seva, ECI, IP India, and Income Tax e-Filing.
- **Optional State/UT context** to remind users that local procedure, forms, and authorities may differ.
- **Mobile-ready interface** with a collapsible sidebar; the **All Cases** action reliably reveals and scrolls to the catalogue on phones.
- **Opt-in chat history** with browser-local persistence only after an affirmative consent choice.
- **Privacy-safe coverage-gap export** for reviewing unclassified-query patterns without keeping raw query text.
- **Development-only local catalogue import/export** for vetted JSON entries in the current browser.

## Coverage

The library is designed for frequent Indian legal and civic issues, including:

- Accident and compensation, banking, cheque/debt, consumer, contract, criminal procedure, cyber fraud, and defamation
- Family/relationship, landlord/tenant, property/inheritance, housing/RERA, workplace, student, medical, insurance, and senior-citizen matters
- Tax, traffic, passport, immigration, business compliance, insolvency, arbitration/mediation, utilities, telecom, and intellectual property
- RTI/public records, public services, civic/environmental issues, privacy/data misuse, rights/discrimination, disability rights, child welfare, elections, and government/service matters

This is broad common-issue coverage, not a guarantee to cover every law, court decision, fact pattern, or State/UT-specific procedure.

## Technology

| Area | Technology |
|---|---|
| Frontend | HTML5, CSS3, vanilla JavaScript ES modules |
| UI | Responsive custom CSS, browser-native controls, Google DM Sans font |
| Routing | Curated case data, keyword scoring, confidence checks, safe fallback |
| Local data | `sessionStorage`, `localStorage`, and cookies only when history is enabled |
| Tests | Node.js built-in assertion tests |
| Build | No package manager, framework, or build step required |

## Run locally

The app uses ES modules, so serve the project through HTTP rather than opening `index.html` directly.

```bash
python -m http.server 8080
```

Then open <http://localhost:8080>.

No npm installation or production build command is required.

## Testing

Run the focused test suite from the project root:

```bash
node tests/history.test.mjs
node tests/intents.test.mjs
node tests/platform-safety.test.mjs
```

Optional syntax checks:

```bash
node --check app.js
node --check ai/engine.js
node --check ai/intents.js
node --check ai/cases.js
```

## Privacy and history consent

Chat history is disabled by default.

- **Save My History (YES):** stores `chat_history_consent=yes` and a random UUID in persistent cookies. Conversation content is stored in `localStorage` under a UUID-based key, on that browser only.
- **Not Now (NO):** does not create a persistent NO preference or persistent browser ID. It only closes the dialog for the current page; the prompt returns after refresh or a later visit.
- **Stop saving history:** removes the consent and browser-ID cookies.
- **Delete all saved history:** deletes saved conversations for the current browser ID.

The State/UT setting is session-only. Coverage-gap export stores only routing signals such as confidence and matched keywords, never the raw user message.

## Official sources and safety

Responses include official verification links where applicable. Users should verify deadlines and procedures with the relevant authority, especially because local procedure can differ between States and Union Territories.

For immediate danger or violence, call **112**. For cyber financial fraud, use the National Cyber Crime Reporting Portal and act quickly; LawMitra AI should not delay emergency reporting.

## Content management

The **History & privacy** panel is highlighted in blue so it is clearly separate from chat suggestions. It contains the history controls, State/UT selector, coverage-gap export, and a local catalogue tool.

The catalogue tool is for development only:

- It imports/exports vetted JSON case entries in the current browser.
- It has no authentication, shared database, approval process, or audit trail.
- Do not treat it as a public production admin panel.

A production content workflow requires an authenticated backend, role-based access, legal/editor review, audit logs, source-review dates, versioned publishing, and a secure database.

## Project structure

```text
Law_mitra.AI/
├── index.html                  # Landing page, chat UI, and embedded CSS
├── app.js                      # UI events, chat flow, history/settings controls
├── ai/
│   ├── engine.js               # Response pipeline and safety routing
│   ├── intents.js              # Input normalisation and confidence scoring
│   ├── cases.js                # Curated case patterns and local catalogue support
│   ├── responses.js            # Structured guidance and complaint drafts
│   ├── help.js                 # Helplines, maps, and official sources
│   ├── history.js              # Consent and browser-local saved history
│   ├── jurisdiction.js         # Session-only State/UT setting
│   ├── coverage.js             # Privacy-safe coverage-gap export
│   └── memory.js               # Short-term conversation context
├── tests/                      # History, intent, and safety tests
├── docs/                       # Project documentation PDF and HTML source
├── LICENSE                     # MIT licence
└── README.md                   # Project guide
```

## Documentation

The detailed academic report is available at:

- [Project documentation PDF](docs/LawMitra-AI-Project-Documentation.pdf)
- [Project documentation HTML source](docs/LawMitra-AI-Project-Documentation.html)

## Limitations and next steps

This project is suitable for an academic submission, demonstration, or controlled prototype. Before public deployment, add an authenticated backend, lawyer/editor content review, State/UT-specific source management, security and privacy review, rate limiting, audit logs, and a regularly maintained legal-content process.

## Licence

This project is released under the [MIT License](LICENSE).
