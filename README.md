# LawMitra AI

LawMitra AI is a modern, browser‑based legal assistant that lets users browse a curated set of legal cases, get AI‑generated answers, and interact with a friendly chat interface. The UI follows a sleek dark‑theme design, is fully responsive, and works on desktop, tablet, and mobile devices.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Running Locally](#running-locally)
- [Project Structure](#project-structure)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **AI‑Powered Legal Q&A** – Powered by a lightweight JavaScript AI engine that selects the most relevant legal case and generates a response.
- **Broad Indian Legal Coverage** – The curated library includes 43 common case patterns across 38 categories, such as cybercrime, family, property, employment, consumer, banking, tax, immigration, business compliance, insolvency, utilities, disability rights, child welfare, elections, and service matters.
- **Safer Legal Guidance** – The app asks for an optional State/UT context, links to official verification sources, prioritises urgent-safety escalation, and leaves unclear issues on a clarification path.
- **Case Catalog** – A searchable grid of legal cases with categories, contacts, and helpful links.
- **Responsive Design** – Mobile‑first layout with a collapsible sidebar and smooth navigation.
- **Opt-in Conversation History** – Visitors can choose to save complete transcripts in their browser, then reopen or delete them later from History & privacy. Declining keeps chats unsaved and the choice is asked again after a page refresh.
- **External Nearby-Help Maps** – Google Maps opens in a separate tab only after the user grants location permission; no map is embedded in the app.
- **Message and History Controls** – User messages can be copied, and recent chats can be deleted with controls that adapt to mouse and touch devices.
- **Offline Ready** – All assets are static files; the app can be served from any static web server.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | HTML5, vanilla CSS (custom design system), JavaScript (ES6 modules) |
| **AI Logic** | Custom JavaScript modules (`ai/engine.js`, `ai/cases.js`, `ai/help.js`) |
| **State Management** | Session storage for temporary AI context; opt-in local browser storage for saved conversations |
| **UI / Visuals** | Native HTML, CSS, and JavaScript components |
| **Icons & Fonts** | Google Fonts (`DM Sans`) and native text icons |
| **Build / Serve** | Simple static server (e.g., `python -m http.server`) |

---

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/AdnanMehraj2006/LawMitraAI.git
   cd LawMitraAI
   ```
2. **Install dependencies** – No npm packages or build step are required.
3. **Run a local server** – Because the app loads assets via relative URLs, you need to serve it over HTTP:
   ```bash
   # Using Python
   python -m http.server 8080
   # Or any static server of your choice (e.g., serve, http-server)
   ```
4. Open your browser and navigate to `http://localhost:8080`.

---

## Running Locally

The repository contains a single HTML entry point (`index.html`) and a JavaScript bundle (`app.js`). The app works out‑of‑the‑box:

```bash
# From the project root
python -m http.server 8080
```

> **Tip:** For development, use the Chrome DevTools device toolbar to test mobile, tablet, and desktop breakpoints.

### Chat-history privacy

This standalone build has no server or database. After a visitor explicitly chooses **Save My History**, it stores only a consent flag and random UUID in cookies; conversation content is stored in that browser's local storage under the UUID-derived key. Choosing **Not Now** does not store a consent preference or browser ID: it closes the dialog only for the current page, and the prompt appears again after a refresh or future visit. For server-side retention, `HttpOnly` cookies, or access control across devices, add a backend/database before deploying.

### Legal-coverage scope

LawMitra AI is designed for common Indian legal and civic questions. It routes messages using a curated category and keyword library, then provides general information, evidence checklists, escalation options, and drafting support. It is not a substitute for a lawyer and does not guarantee coverage or legal accuracy for every fact pattern, state-specific procedure, or specialist area of law. Queries it cannot confidently classify remain on a safe clarification path rather than being assigned to an unrelated legal category.

### Content governance and expansion

- Select a State/UT from **History & privacy** to add a local-procedure reminder to legal responses. This browser-only setting is not shared with any server.
- Each case response includes official verification links. Check the relevant State/UT authority and the linked official source before relying on a procedure or deadline.
- Messages about immediate danger, violence, self-harm, assault, stalking, or threats are prioritised for emergency guidance rather than ordinary case matching.
- Unclassified messages create a local, privacy-preserving coverage-gap record containing only confidence and matched-category signals—not the user’s raw message. Use **Export coverage gaps** to review what should be added next.
- The development-only local catalogue editor can import and export vetted JSON entries in one browser. It has no authentication, review workflow, or shared database; do not expose it as a production content-management system. A production rollout needs an authenticated backend, role-based access, approval/audit records, legal review, and versioned publishing.

---

## Project Structure

```
LawMitraAI/
├─ index.html            # Main HTML page (home + chat UI)
├─ app.js                # Core UI logic and event handling
├─ ai/                   # AI‑related modules
│   ├─ engine.js         # Core response generation
│   ├─ cases.js          # Legal case data
│   ├─ help.js           # Help‑topic data
│   └─ memory.js         # Short-term AI conversation context
└─ README.md             # THIS FILE
```

---

## Development

- **Edit UI** – Modify `index.html` to change layout or colors; the application CSS is embedded in that file.
- **Add Cases** – Extend `ai/cases.js` with new legal case objects following the existing structure.
- **AI Improvements** – Update `ai/engine.js` to change the ranking or generation logic.
- **Testing** – Open the app in different browsers and use the device toolbar to verify responsiveness.

When you finish changes, simply refresh the page; no build step is required.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/awesome-feature`).
3. Make your changes and ensure the UI still works on all device sizes.
4. Open a pull request with a clear description of the changes.

---

## License

This project is licensed under the **MIT License** – see the `LICENSE` file for details.

---