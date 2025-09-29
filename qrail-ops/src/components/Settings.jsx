import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Settings.css'

const Settings = () => {
  const navigate = useNavigate()
  const [settings, setSettings] = useState({
    division: 'SCR',
    section: 'Secunderabad',
    alertThreshold: 5,
    simulationSpeed: 1,
    language: 'English'
  })

  const handleSettingChange = (settingName, value) => {
    setSettings({
      ...settings,
      [settingName]: value
    })
  }

  const handleSave = () => {
    alert('Settings saved successfully!')
  }

  return (
    <div className="settings">
      <div className="header">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
        <div className="branding">
          <div className="logo">QRail — <span className="logo-highlight">SMARTRAIL OPTIMIZER</span> (SCR, Secunderabad Division)</div>
        </div>
        <div className="subheader">Settings</div>
        <div className="badges-container">
          <span className="badge">SCR</span>
          <span className="badge">Secunderabad Div</span>
        </div>
      </div>

      <div className="card settings-form">
        <div className="form-group">
          <label htmlFor="division">Division/Section:</label>
          <select 
            id="division" 
            value={settings.division}
            onChange={(e) => handleSettingChange('division', e.target.value)}
          >
            <option value="SCR">SCR (Secunderabad)</option>
            <option value="MCR">MCR (Mirzapur)</option>
            <option value="WCR">WCR (West Central)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="section">Section:</label>
          <select 
            id="section" 
            value={settings.section}
            onChange={(e) => handleSettingChange('section', e.target.value)}
          >
            <option value="Secunderabad">Secunderabad</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Vikarabad">Vikarabad</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="alertThreshold">Alert Threshold (minutes):</label>
          <input 
            type="number" 
            id="alertThreshold" 
            value={settings.alertThreshold}
            onChange={(e) => handleSettingChange('alertThreshold', parseInt(e.target.value))}
            min="1"
            max="60"
          />
        </div>

        <div className="form-group">
          <label htmlFor="simulationSpeed">Simulation Speed:</label>
          <select 
            id="simulationSpeed" 
            value={settings.simulationSpeed}
            onChange={(e) => handleSettingChange('simulationSpeed', parseInt(e.target.value))}
          >
            <option value={1}>1× (Real-time)</option>
            <option value={5}>5× (Fast)</option>
            <option value={10}>10× (Very Fast)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="language">Language:</label>
          <select 
            id="language" 
            value={settings.language}
            onChange={(e) => handleSettingChange('language', e.target.value)}
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>

        <button className="save-btn" onClick={handleSave}>
          Save Settings
        </button>
      </div>
    </div>
  )
}

export default Settings