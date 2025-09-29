import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="landing-page">
      <div className="header">
        <div className="branding">
          <div className="logo">QRail — <span className="logo-highlight">SMARTRAIL OPTIMIZER</span> (SCR, Secunderabad Division)</div>
        </div>
        <div className="badges-container">
          <span className="badge">SCR</span>
          <span className="badge">Secunderabad Div</span>
          <span className="badge">Demo</span>
        </div>
      </div>

      <div className="card welcome-card">
        <h1>Welcome to QRail Ops Demo</h1>
        <p className="welcome-description">
          This is a high-fidelity prototype of a railway operations dashboard for the Secunderabad Division of SCR.
          Explore the various features designed for railway controllers to optimize operations.
        </p>
        
        <div className="navigation-grid">
          <div className="nav-card" onClick={() => navigate('/operations')}>
            <h2>Operations Dashboard</h2>
            <p>Main control panel with live train map, timetable, and AI recommendations</p>
            <div className="nav-icon">🚂</div>
          </div>
          
          <div className="nav-card" onClick={() => navigate('/kpi-dashboard')}>
            <h2>KPI Dashboard</h2>
            <p>Key performance indicators and trend analysis</p>
            <div className="nav-icon">📊</div>
          </div>
          
          <div className="nav-card" onClick={() => navigate('/audit-logs')}>
            <h2>Audit Logs</h2>
            <p>Time-ordered entries with filtering and export capabilities</p>
            <div className="nav-icon">📝</div>
          </div>
          
          <div className="nav-card" onClick={() => navigate('/settings')}>
            <h2>Settings</h2>
            <p>Configure division, section, alerts, and simulation parameters</p>
            <div className="nav-icon">⚙️</div>
          </div>
        </div>
        
        <div className="demo-instructions">
          <h3>Demo Script</h3>
          <ol>
            <li>Start on Operations Dashboard → shows 2 alerts: (a) Platform clash at SC-P2, (b) Single-line conflict VKB ↔ ZB</li>
            <li>Open AI Recommendations → Accept the platform swap for 12951 → SC-P4. Clash resolves; KPI Secondary Delays Avoided ticks up</li>
            <li>Open Train Detail (17031) → Manual Hold 3 min at BMT (Safety Confirm modal, choose "Operational"). Log entry appears; timetable nudges</li>
            <li>Hit Fast-Forward 30m → Delay Cascade Predictor updates; new suggestion to reroute an MMTS via LPI siding. Override it; show how audit tracks override reason</li>
            <li>Navigate to KPI Dashboard → compare Current shift vs Previous; point out reduced cascade impact</li>
            <li>End at Audit & Reason Logs → filter "Platform Assignment" to showcase transparency</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default LandingPage