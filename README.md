# Malaysia PDPA Readiness Check

A free, self-contained interactive assessment tool for Malaysian SMEs to evaluate their compliance with the PDPA (Amendment) Act 2024 — specifically the mandatory DPO appointment and 72-hour breach notification obligations that took effect **1 June 2025**.

**Live demo:** https://altoh5.github.io/pdpa-readiness-check/

Built by [Straits Interactive](https://straitsinteractive.com) — data protection and AI governance training across ASEAN.

---

## What It Does

A 7-question, 3-minute browser-based assessment covering:

| Section | Questions |
|---------|-----------|
| Do the new rules apply? | Data volume, sensitive data handling |
| DPO Readiness | DPO appointment & PDPD registration, public contact |
| Breach Response | Detection capability, documented plan, 72-hour process |

**Scoring:** Max 11 points → three risk tiers:
- **High Risk** (0–35%) — critical gaps, immediate action required
- **Partial Compliance** (36–65%) — foundation exists, specific gaps to close
- **Good Baseline** (66–100%) — strong posture, periodic review recommended

All logic runs in the browser. No data is sent to any server.

---

## Quick Start

### Option A: Open directly (zero setup)

```bash
git clone https://github.com/Altoh5/pdpa-readiness-check.git
open pdpa-readiness-check/index.html
```

That's it — the entire tool is a single HTML file.

### Option B: Serve with Bun

```bash
git clone https://github.com/Altoh5/pdpa-readiness-check.git
cd pdpa-readiness-check
bun run start
# Visit http://localhost:3000
```

Requires [Bun](https://bun.sh). Set `PORT=8080` (or any port) via environment variable.

---

## Deploy

Because it's a single static file, you can host it anywhere:

| Platform | How |
|----------|-----|
| **GitHub Pages** | Enable Pages on your fork → auto-deploys from `main` |
| **Vercel** | Connect the repo, no config needed |
| **Netlify** | Drag-and-drop the `index.html` or connect via Git |
| **nginx / VPS** | Copy `index.html` to your web root, or run `bun run start` |

---

## Customisation

Everything is in `index.html` — no build step required.

**Change the CTA email:**
Search for `alvin@straitsinteractive.com` and replace with your address.

**Change branding:**
Update the `.header` logo text and the footer company name.

**Adjust scoring thresholds:**
In the `<script>` block, find:
```js
if (pct <= 35) tier = 'high';
else if (pct <= 65) tier = 'partial';
```
Change the numbers to recalibrate risk tiers.

**Add or remove questions:**
Duplicate a `question-block` div, give it a new name (`q8`, etc.), and update `maxScore` and the scoring arrays accordingly.

**Change colours:**
Edit the CSS variables at the top:
```css
:root {
  --primary: #1a3a5c;  /* navy header/text */
  --accent:  #e8501a;  /* orange highlights */
}
```

---

## PDPA Context

The PDPA (Amendment) Act 2024 introduced two major obligations effective **1 June 2025**:

1. **Mandatory DPO** — Required if your organisation processes data of 20,000+ individuals. DPO must be registered with PDPD within 21 days of appointment and their contact published on your website.

2. **72-hour breach notification** — When aware of a significant breach, notify the PDPD Commissioner within 72 hours. Notify affected individuals within 7 days if harm is likely.

Enforcement is modelled on Singapore's PDPC framework. Non-compliance can result in fines up to **RM 500,000**.

> This tool provides an indicative self-assessment only. It is not legal advice and does not substitute for a formal PDPA audit or qualified DPO review.

---

## Licence

MIT — free to use, fork, and adapt. Attribution appreciated but not required.

---

## About Straits Interactive

[Straits Interactive](https://straitsinteractive.com) delivers data protection and AI governance training, consulting, and certification across ASEAN. We operate the [DPEX Network](https://dpexnetwork.org), a practitioner community for DPOs and compliance professionals.

For PDPA consultation or DPO training: **alvin@straitsinteractive.com**
