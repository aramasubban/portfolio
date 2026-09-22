# Akul Ramasubban — Engineering Portfolio: Planning Brief

Purpose: land full-time mechanical engineering roles. Multi-page static site, minimal/technical dark-mode aesthetic. Hand this file to Claude Code as the build spec.

---

## 1. Site Map

```
/index.html              → Home
/experience.html         → Experience timeline
/projects/
    battery-pack.html    → Case study 1
    orchard-robot.html   → Case study 2
    pushcart.html        → Case study 3
/assets/
    images/
    resume.pdf
/styles.css
/script.js
```

Shared header (name + nav: Home / Projects / Experience / Resume) and footer (email, LinkedIn, location) on every page.

---

## 2. Design Direction — "Minimal & Technical"

- **Palette:** near-black background (`#0a0a0a` / `#111`), off-white text (`#e8e8e8`), single accent color used sparingly for links/highlights (candidates: terminal green `#4ade80`, amber `#f59e0b`, or electric blue `#3b82f6` — blue or green fits EV/robotics content well).
- **Type:** monospace for labels, nav, section headers, and metadata (e.g. `JetBrains Mono`, `IBM Plex Mono`); clean sans for body copy (e.g. `Inter`, `Space Grotesk`). Google Fonts is fine.
- **Feel:** generous whitespace, thin 1px borders instead of shadows/cards, subtle grid layout, small monospace tags like `[MECH]` `[ROBOTICS]` `[PROTOTYPE]` on project cards, understated hover states (underline / color shift, not heavy animation).
- **Avoid:** gradients, stock-photo hero images, anything that looks like a generic template.

---

## 3. Tech Recommendation

Plain HTML/CSS/JS, no framework — fast, trivially deployable, easy for Claude Code to maintain across pages. Deploy on **GitHub Pages**. Keep header/footer consistent by hand (small site, only 5 pages) or via a tiny JS include if Claude Code prefers.

---

## 4. Page-by-Page Content

### Home (`index.html`)
- Hero: name, title ("Mechanical Engineering @ Purdue" or similar), one-line focus statement (e.g. manufacturing + robotics/hardware)
- Short about blurb (3–4 sentences — Presidential Scholar, current focus, what kind of engineer you are)
- 3 featured project cards (title, one-line summary, tags, link to detail page)
- Skills summary, grouped
- Footer: email, LinkedIn, resume PDF link

### Project detail template (use for all 3 case studies)
1. Title, one-line summary, role, timeframe, tools used
2. **Problem** — what was broken / needed
3. **Approach** — your process, key decisions, trade-offs
4. **Result** — quantified impact
5. Media gallery (photos, CAD renders, plots, diagrams)
6. Optional: reflection / what you'd do differently

**Case Study 1 — Battery Pack Design & Thermal System** (Purdue Electric Racing)
Strongest end-to-end engineering story: Simscape modeling → module redesign (30% energy density gain) → thermal interface/spacer system (10% performance gain) → Arduino-based cooling plate validation → 100% leak-free enclosure at tech inspection.
Gather: CAD renders, photos of the physical pack/enclosure, Simscape screenshot, test setup photo, before/after chart, competition photo.

**Case Study 2 — Autonomous Orchard Spraying Robot** (Purdue MARS Lab)
Robotic arm + sprayer end effector on a Unitree quadruped; DINO/SAM-based disease detection and segmentation; perception integrated with arm control to spray only infected regions.
Gather: robot/arm photos or video, system architecture diagram, sample segmentation output images, pipeline flow diagram. (Ongoing project — fine to present as in-progress.)

**Case Study 3 — The Pushcart Project** (personal, founder)
Best narrative arc: identified a real problem in Bangalore, designed and built a functional electric waste-cart for under $2,000, donated it into use, pushed adoption over ICE carts. No confidentiality issues — lean into this one.
Gather: early sketches/CAD, build process photos, final cart photos, cost breakdown, deployment story/photo.

### Experience (`experience.html`)
Condensed timeline: **Tesla, Ford, Tredence** — resume bullets + outcomes, text only, no proprietary diagrams or internal visuals (these are confidential employer projects — describe the work and impact, don't reproduce anything that looks pulled from their systems).

### Skills (section on Home or its own block)
- **Design & CAD:** SolidWorks, GD&T, DFM, FEA, 3DX
- **Manufacturing & Quality:** DFMEA, SPC, DOE, Six Sigma
- **Programming & Analysis:** Python, MATLAB, C, SQL
- **Robotics & Simulation:** ROS2, Simulink, Simscape

### Contact
Email, LinkedIn, resume PDF download, San Francisco, CA.

---

## 5. Build Order for Claude Code
1. Design system first: colors, type, nav/footer components — get one page looking right before replicating.
2. Home page skeleton with placeholder project cards.
3. One project template, fully styled — then copy for the other two case studies.
4. Experience and Skills.
5. Wire up navigation + resume download.
6. Deploy to GitHub Pages.

## 6. Content to Gather Before/While Building
- [ ] Resume as PDF (for download link)
- [ ] Photos/CAD/diagrams for each case study (see checklists above)
- [ ] One-line hero tagline
- [ ] Optional headshot for About
