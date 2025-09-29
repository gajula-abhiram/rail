# QRail Ops Demo - Project Summary

## Project Overview

This is a high-fidelity prototype of a railway operations dashboard branded QRail, designed for the Secunderabad Division of SCR (South Central Railway). The application provides a comprehensive view of railway operations with real-time data visualization, conflict detection, and AI-powered recommendations.

## Key Features Implemented

### 1. Operations Dashboard (Home)
- **Live Train Map**: Interactive schematic map showing train positions, stations, and connections
- **Timetable + Platform Occupancy**: Detailed view of train schedules and platform assignments
- **AI Recommendations Panel**: Actionable suggestions with confidence ratings and one-click acceptance
- **Conflict Alerts**: Real-time notifications for platform clashes and single-line conflicts
- **Delay Cascade Predictor**: Forecasting tool showing potential delay propagation
- **Controller Tools**: Manual override capabilities and simulation controls

### 2. Train Detail Drawer
- Comprehensive train information with status indicators
- Timeline view of train movements
- Coach and platform assignments
- Conflict history and resolution tracking
- Audit logs with detailed action tracking

### 3. KPI Dashboard
- Key performance metrics (Avg Arrival Delay, Secondary Delays Avoided, % On-time)
- Bottleneck platform identification
- Trend analysis comparing current and previous shifts

### 4. Audit & Reason Logs
- Time-ordered action logs with filtering capabilities
- Export functionality for compliance and analysis
- Detailed reason tracking for all actions

### 5. Settings
- Division and section configuration
- Alert threshold customization
- Simulation speed control
- Language preferences

## Technical Implementation

### Technologies Used
- **React**: Frontend framework for building user interfaces
- **Vite**: Build tool for fast development and production builds
- **React Router**: Client-side routing for SPA navigation
- **Recharts**: Data visualization library for charts and graphs
- **CSS**: Custom styling with a consistent design system

### Color Scheme & Status Codes
- **On-time**: Blue (#2563EB)
- **Late**: Yellow (#EAB308)
- **Delayed**: Red (#EF4444)
- **Cancelled**: Slate (#475569)
- **Approaching**: Purple (#7C3AED)

### File Structure
```
src/
├── components/
│   ├── OperationsDashboard.jsx
│   ├── LiveTrainMap.jsx
│   ├── TimetablePlatform.jsx
│   ├── AIRecommendations.jsx
│   ├── ConflictAlerts.jsx
│   ├── DelayCascadePredictor.jsx
│   ├── ControllerTools.jsx
│   ├── TrainDetailDrawer.jsx
│   ├── KPIDashboard.jsx
│   ├── AuditLogs.jsx
│   ├── Settings.jsx
│   └── LandingPage.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Deployment

The application is configured for serverless deployment on Vercel:
1. Connect your GitHub repository to Vercel
2. Configure the build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## Development

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm run preview`: Preview production build locally

### Requirements
- Node.js >= 14.0.0
- npm >= 6.0.0

## Demo Script

The application includes a comprehensive demo script that showcases all key features:
1. Start on Operations Dashboard showing active alerts
2. Resolve conflicts using AI recommendations
3. Demonstrate manual override capabilities
4. Show delay cascade prediction and mitigation
5. Navigate to KPI dashboard for performance analysis
6. Review audit logs for transparency

## Compliance & Accessibility

- WCAG-AA contrast compliance
- Keyboard navigation support
- Responsive design for various screen sizes
- No backend dependencies - fully client-side application
- Synthetic data only - no real railway data used

## Future Enhancements

Potential areas for future development:
- Real-time data integration with railway systems
- Advanced machine learning for delay prediction
- Mobile-responsive design for field controllers
- Multi-language support beyond English/Hindi
- Integration with railway communication systems