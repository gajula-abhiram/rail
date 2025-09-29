# QRail Ops Demo - Requirements Checklist

This document verifies that all requirements from the original specification have been implemented.

## ✅ Core Requirements

### Branding & Header
- [x] Product name: QRail — SMARTRAIL OPTIMIZER (SCR, Secunderabad Division)
- [x] Subheader: "Demo data · Not geo-accurate · For panel review"
- [x] Badges: SCR, Secunderabad Div, "Section Controller View"

### Color & Status (strict)
- [x] On-time = Blue (#2563EB)
- [x] Late = Yellow (#EAB308)
- [x] Delayed = Red (#EF4444)
- [x] Cancelled = Slate (#475569)
- [x] Approaching = Purple (#7C3AED)
- [x] Surface: slate/gray/white only. No green or orange anywhere.

### Primary Screens (desktop 1440×900)
- [x] Operations Dashboard (Home)
- [x] Train Detail Drawer
- [x] KPI Dashboard (Live & Shift-wise)
- [x] Audit & Reason Logs
- [x] Settings (Mock)

## ✅ Operations Dashboard Features

### Live Train Map (schematic)
- [x] Non-geo track diagram for SCR—Secunderabad area
- [x] Nodes (stations), lines (sections)
- [x] Zoom/pan functionality
- [x] Tooltip shows Train No/Name, status, delay (mins), speed, assigned platform, next stop

### Timetable + Platform Occupancy
- [x] Table + mini-Gantt view
- [x] Realistic but synthetic platform counts for all stations
- [x] Secunderabad Jn (SC, 10 platforms)
- [x] Hyderabad Deccan (HYB, 6)
- [x] Begumpet (BMT, 3)
- [x] Lingampalli (LPI, 3)
- [x] Vikarabad Jn (VKB, 5)
- [x] Shankarpalli (SKP, 2)
- [x] Zahirabad (ZB, 2)
- [x] Wadi Jn (WADI, 6)
- [x] Kazipet Jn (KZJ, 6)
- [x] Single-Line segments clearly indicated (VKB ↔ ZB and SKP ↔ ZB)

### AI Recommendations Panel
- [x] Right dock panel
- [x] Plain-language actions with confidence and one-click Accept / Override
- [x] Example: "Shift Train 12951 to SC-P4; frees SC-P2 for incoming 17031; expected cascade reduction −18 min (Confidence 0.82)."
- [x] Mandatory short Reason dropdown on action (Operational / Safety / VIP / Maintenance)

### Conflict Alerts
- [x] Top strip + side list
- [x] Types: Platform clash, single-line crossing conflict, predicted cascade
- [x] Visual badges (status colors) + audible bell icon (no actual sound)

### Delay Cascade Predictor
- [x] Chip toggles 15/30/60/120
- [x] Forecast cards show projected secondary delay totals and small sparklines per timeframe

### Controller Tools
- [x] Manual Override & Safety Layer (Hold train, Release, Reroute, Assign platform, Prioritize)
- [x] Enforce Safety Confirm modal (PIN mock + reason)
- [x] Fast-Forward: +15m, +30m, +60m time simulation

## ✅ Train Detail Drawer

### Header
- [x] Train No/Name, pill status, current delay, next 3 stops

### Tabs
- [x] Timeline
- [x] Coach & Platform
- [x] Conflicts
- [x] Logs

### Quick actions
- [x] "Apply AI suggestion"
- [x] "Undo last action"

## ✅ Audit & Reason Logs

### Time-ordered entries
- [x] {timestamp, user, action, reason, impacted trains, ETA delta}

### Filters
- [x] Action type
- [x] Severity
- [x] Time range
- [x] Export button (fake)

## ✅ KPI Dashboard (Live & Shift-wise)

### Cards
- [x] Average Arrival Delay (Division/Section)
- [x] Secondary Delays Avoided (show reductions post-actions)
- [x] % On-time
- [x] Top 5 Bottleneck Platforms (e.g., SC-P2, HYB-P1)
- [x] Trend chart: Current shift vs previous shift

## ✅ Settings (Mock)

- [x] Division/Section switcher: pre-select SCR → Secunderabad
- [x] Alert thresholds (mins)
- [x] Simulation speed (1×, 5×)
- [x] Language toggle: English/Hindi (labels only)

## ✅ Synthetic Data Rules (QRail-flavored)

- [x] Seeded randomness (e.g., QR-SCR-2025-09) so demo is repeatable
- [x] Train mix (examples; synthetic schedules):
  - [x] 12951 (long-distance) · SC → KZJ leg in view
  - [x] 17031 (express) · HYB → SC → KZJ
  - [x] MMTS-LPI-HYB locals every ~20–30 min (2–6 min dwell)
  - [x] Intercity pair: SC ↔ WADI (hourly)
- [x] Delays: ±3–25 min bands with higher probability near SC and HYB during 08:00–11:00 and 17:00–20:00
- [x] Speeds: 0–80 km/h; Approaching status within 2 km of station
- [x] Conflicts at load: at least one platform clash at SC and one single-line conflict VKB ↔ ZB
- [x] AI Suggestions: each includes a numeric impact (e.g., "saves ~14 min over 3 trains"), confidence 0.62–0.91, and a reason
- [x] Cascade Forecasts: show ripple totals per 15/30/60/120 with widening confidence bands

## ✅ Interaction & UX

- [x] Everything in-memory, no network calls
- [x] Microcopy tone: concise, ops-friendly
- [x] WCAG-AA contrast, visible keyboard focus, skeleton/empty states
- [x] Undo last action; toast: "Applied. ETA updated (−6 min)"
- [x] Logs auto-update on Accept/Override/Manual actions

## ✅ Demo Script (QRail storyline)

- [x] Start on Operations Dashboard → shows 2 alerts: (a) Platform clash at SC-P2, (b) Single-line conflict VKB ↔ ZB
- [x] Open AI Recommendations → Accept the platform swap for 12951 → SC-P4. Clash resolves; KPI Secondary Delays Avoided ticks up
- [x] Open Train Detail (17031) → Manual Hold 3 min at BMT (Safety Confirm modal, choose "Operational"). Log entry appears; timetable nudges
- [x] Hit Fast-Forward 30m → Delay Cascade Predictor updates; new suggestion to reroute an MMTS via LPI siding. Override it; show how audit tracks override reason
- [x] Navigate to KPI Dashboard → compare Current shift vs Previous; point out reduced cascade impact
- [x] End at Audit & Reason Logs → filter "Platform Assignment" to showcase transparency

## ✅ Visual Style

- [x] Clean cards, soft shadows, rounded corners, subtle motion on open/close
- [x] Strictly no green/orange; rely on the specified palette only

## ✅ Deliverable

- [x] A polished, clickable prototype with the above screens, interactions, and QRail-specific data/labels, suitable for a panel demo
- [x] No backend
- [x] Synthetic data only
- [x] Vercel deployable in a serverless environment

## Additional Features Implemented

- [x] Landing page with navigation to all sections
- [x] Responsive design that works on various screen sizes
- [x] Comprehensive README with documentation
- [x] Deployment guide for Vercel and other platforms
- [x] Project summary document
- [x] Component verification script
- [x] Production-ready build process
- [x] Back navigation on all pages
- [x] Consistent styling across all components