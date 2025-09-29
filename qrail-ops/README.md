# QRail Ops Demo (SCR · Secunderabad Control)

A high-fidelity prototype of a railway operations dashboard branded QRail, designed for the Secunderabad Division of SCR (South Central Railway).

## Features

- **Operations Dashboard (Home)**
  - Live Train Map (schematic) with zoom/pan capabilities
  - Timetable + Platform Occupancy view
  - AI Recommendations Panel with one-click Accept/Override
  - Conflict Alerts (Platform clash, single-line crossing conflict, predicted cascade)
  - Delay Cascade Predictor with forecast cards
  - Controller Tools (Manual Override, Fast-Forward simulation)

- **Train Detail Drawer**
  - Train information with status and delay
  - Timeline, Coach & Platform, Conflicts, and Logs tabs
  - Quick actions for applying AI suggestions and undoing actions

- **KPI Dashboard**
  - Key performance indicators (Avg Arrival Delay, Secondary Delays Avoided, % On-time)
  - Top 5 Bottleneck Platforms visualization
  - Trend chart comparing current vs previous shift

- **Audit & Reason Logs**
  - Time-ordered entries with filtering capabilities
  - Export functionality

- **Settings**
  - Division/Section switcher
  - Alert thresholds configuration
  - Simulation speed control
  - Language toggle (English/Hindi)

## Color & Status Codes

- **On-time**: Blue (#2563EB)
- **Late**: Yellow (#EAB308)
- **Delayed**: Red (#EF4444)
- **Cancelled**: Slate (#475569)
- **Approaching**: Purple (#7C3AED)

## Synthetic Data Rules

- Seeded randomness for repeatable demos
- Train mix includes long-distance, express, MMTS locals, and intercity pairs
- Delays in ±3–25 min bands with higher probability during peak hours
- Speeds range from 0–80 km/h
- Conflicts pre-loaded for demonstration purposes

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:5174](http://localhost:5174) to view it in the browser.

The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run preview`

Preview the production build locally.

## Deployment

This project is configured for serverless deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

## Technologies Used

- React
- Vite
- React Router
- Recharts for data visualization
- CSS Modules for styling

## Project Structure

```
src/
  ├── components/        # React components
  ├── App.jsx           # Main app component
  ├── main.jsx          # Entry point
  └── index.css         # Global styles
```

## Demo Script

1. Start on Operations Dashboard showing 2 alerts (Platform clash at SC-P2, Single-line conflict VKB ↔ ZB)
2. Open AI Recommendations and accept the platform swap for 12951 → SC-P4
3. Observe clash resolution and KPI update
4. Open Train Detail (17031) and manually hold for 3 min at BMT
5. Hit Fast-Forward 30m and observe Delay Cascade Predictor update
6. Navigate to KPI Dashboard to compare shifts
7. End at Audit & Reason Logs to showcase transparency