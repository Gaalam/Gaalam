### Hi, I'm Giw Aalam 👋

Contracts, IT, Data, AI — I build tools that turn scattered vendor/contract paperwork into something a compliance team can actually act on before a deadline hits, not after.

**Currently building:** [**Vendor Data Management**](https://github.com/Gaalam/Vendor-Data-Management) — a vendor/contract/license management platform for SMEs, built to replace the Excel-sheet-and-tribal-knowledge approach most companies still run on.

![Dashboard screenshot](https://raw.githubusercontent.com/Gaalam/Gaalam/main/screenshot-dashboard.png)

What makes it more than another CRUD app:
- An **AI-augmented contract-expiry pipeline** — Gemini drafts a management-ready risk analysis and negotiation plan grounded in the vendor's actual documented state, then a **second, fully deterministic Java validation pass** checks the AI's own output (date arithmetic, contract-end collisions, missing compliance references) before anything reaches a human inbox.
- Built-in **DSGVO / EU AI Act / ISO 42001** compliance scoring derived from real stored data, not a checkbox questionnaire nobody keeps current.
- 500+ unit tests on the business logic, deliberately structured so the core checks (compliance scoring, risk validators) run without a database or mocking framework.

Tech: Java 21 · Swing/FlatLaf · JPA/EclipseLink · Google Gemini · JUnit 5 · Maven

---

📫 Reach me via [GitHub](https://github.com/Gaalam) · ⭐ the [project repo](https://github.com/Gaalam/Vendor-Data-Management) if you want to follow along
