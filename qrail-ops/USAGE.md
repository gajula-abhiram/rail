# QRail Ops Demo - Usage Guide

## Getting Started

1. **Access the Application**
   - Open your browser and navigate to http://localhost:5175 (when running locally)
   - Or visit the deployed URL if hosted on Vercel

2. **Landing Page**
   - The application starts on a landing page that provides an overview
   - Navigate to different sections using the cards on the landing page

## Navigating the Application

### Operations Dashboard
This is the main control panel for railway operations:

1. **Live Train Map**
   - View all trains and their current positions
   - See station connections and single-line segments
   - Click on trains to view details

2. **Timetable & Platform Occupancy**
   - See scheduled vs actual arrival times
   - View platform assignments for all trains
   - Identify potential conflicts

3. **AI Recommendations**
   - Review AI-generated suggestions for conflict resolution
   - Accept recommendations with one click
   - Override recommendations with reason codes

4. **Conflict Alerts**
   - View active conflicts at the top of the dashboard
   - See platform clashes and single-line conflicts

5. **Delay Cascade Predictor**
   - Switch between 15/30/60/120 minute views
   - See projected delay propagation

6. **Controller Tools**
   - Use manual override functions
   - Fast-forward time to simulate future scenarios

### Train Detail Drawer
Access detailed information about specific trains:

1. Click on any train in the Live Train Map or Timetable
2. View train status, delay information, and next stops
3. Switch between Timeline, Coach & Platform, Conflicts, and Logs tabs
4. Use quick actions to apply AI suggestions or undo last actions

### KPI Dashboard
Monitor key performance indicators:

1. View average arrival delays
2. See secondary delays avoided through interventions
3. Monitor on-time performance percentages
4. Identify bottleneck platforms
5. Compare current shift performance with previous shifts

### Audit & Reason Logs
Review all actions taken in the system:

1. Filter by action type, severity, or time range
2. Export logs for compliance purposes
3. Review detailed information about each action

### Settings
Configure application preferences:

1. Switch between divisions/sections
2. Adjust alert thresholds
3. Change simulation speed
4. Toggle between English and Hindi

## Demo Script Walkthrough

Follow these steps to demonstrate all features:

1. **Start on Operations Dashboard**
   - Show the two active alerts: Platform clash at SC-P2 and Single-line conflict VKB ↔ ZB

2. **Resolve Platform Clash**
   - Open AI Recommendations panel
   - Accept the platform swap for Train 12951 to SC-P4
   - Show how the clash resolves and KPI "Secondary Delays Avoided" updates

3. **Manual Override**
   - Open Train Detail for Train 17031
   - Use Manual Hold for 3 minutes at BMT
   - Complete Safety Confirm modal with "Operational" reason
   - Show how log entry appears and timetable updates

4. **Time Simulation**
   - Hit Fast-Forward 30 minutes
   - Show how Delay Cascade Predictor updates
   - Demonstrate new suggestion to reroute an MMTS via LPI siding
   - Override the suggestion and show how audit tracks the override reason

5. **KPI Analysis**
   - Navigate to KPI Dashboard
   - Compare Current shift vs Previous shift
   - Point out reduced cascade impact

6. **Audit Transparency**
   - End at Audit & Reason Logs
   - Filter by "Platform Assignment" to showcase transparency

## Keyboard Navigation

The application supports keyboard navigation:
- Use Tab to move between interactive elements
- Enter to activate buttons and links
- Arrow keys to navigate within lists and menus

## Browser Support

The application works best in modern browsers:
- Chrome (latest version)
- Firefox (latest version)
- Safari (latest version)
- Edge (latest version)

## Troubleshooting

### Common Issues

1. **Page not loading**
   - Ensure the development server is running (`npm run dev`)
   - Check that you're using the correct URL

2. **Features not working**
   - Hard refresh the browser (Ctrl+F5 or Cmd+Shift+R)
   - Clear browser cache

3. **Performance issues**
   - Close other applications to free up system resources
   - Ensure you're using a modern browser

### Getting Help

If you encounter issues not covered in this guide:
1. Check the browser console for error messages (F12)
2. Verify all installation steps were completed
3. Ensure Node.js and npm are properly installed