import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LiveTrainMap from './LiveTrainMap'
import TimetablePlatform from './TimetablePlatform'
import AIRecommendations from './AIRecommendations'
import ConflictAlerts from './ConflictAlerts'
import DelayCascadePredictor from './DelayCascadePredictor'
import ControllerTools from './ControllerTools'

const OperationsDashboard = () => {
  const navigate = useNavigate()
  const [selectedTrain, setSelectedTrain] = useState(null)
  const [timeSimulation, setTimeSimulation] = useState(0)

  return (
    <div className="operations-dashboard">
      <div className="header">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
        <div className="branding">
          <div className="logo">QRail — <span className="logo-highlight">SMARTRAIL OPTIMIZER</span> (SCR, Secunderabad Division)</div>
        </div>
        <div className="subheader">Demo data · Not geo-accurate · For panel review</div>
        <div className="badges-container">
          <span className="badge">SCR</span>
          <span className="badge">Secunderabad Div</span>
          <span className="badge">Section Controller View</span>
        </div>
      </div>

      <ConflictAlerts />

      <div className="dashboard-grid">
        <div className="main-content">
          <LiveTrainMap 
            onTrainSelect={setSelectedTrain} 
            timeSimulation={timeSimulation}
          />
          
          <TimetablePlatform timeSimulation={timeSimulation} />
          
          <DelayCascadePredictor />
        </div>
        
        <div className="sidebar">
          <AIRecommendations />
        </div>
      </div>
      
      <ControllerTools 
        timeSimulation={timeSimulation} 
        setTimeSimulation={setTimeSimulation}
      />
    </div>
  )
}

export default OperationsDashboard