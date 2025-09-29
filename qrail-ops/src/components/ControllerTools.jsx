import React from 'react'
import './ControllerTools.css'

const ControllerTools = ({ timeSimulation, setTimeSimulation }) => {
  const handleFastForward = (minutes) => {
    setTimeSimulation(timeSimulation + minutes)
  }

  const handleManualAction = (action) => {
    // In a real app, this would trigger the appropriate action
    console.log(`Manual action triggered: ${action}`)
    // Show a toast notification
    alert(`Action applied: ${action}`)
  }

  return (
    <div className="controller-tools">
      <div className="tools-header">
        <h2>Controller Tools</h2>
      </div>
      
      <div className="tools-container">
        <div className="tool-group">
          <h3>Manual Override & Safety Layer</h3>
          <div className="tool-buttons">
            <button 
              className="tool-btn"
              onClick={() => handleManualAction('Hold Train')}
            >
              Hold Train
            </button>
            <button 
              className="tool-btn"
              onClick={() => handleManualAction('Release Train')}
            >
              Release Train
            </button>
            <button 
              className="tool-btn"
              onClick={() => handleManualAction('Reroute')}
            >
              Reroute
            </button>
            <button 
              className="tool-btn"
              onClick={() => handleManualAction('Assign Platform')}
            >
              Assign Platform
            </button>
            <button 
              className="tool-btn"
              onClick={() => handleManualAction('Prioritize')}
            >
              Prioritize
            </button>
          </div>
        </div>
        
        <div className="tool-group">
          <h3>Fast-Forward Simulation</h3>
          <div className="tool-buttons">
            <button 
              className="tool-btn"
              onClick={() => handleFastForward(15)}
            >
              +15m
            </button>
            <button 
              className="tool-btn"
              onClick={() => handleFastForward(30)}
            >
              +30m
            </button>
            <button 
              className="tool-btn"
              onClick={() => handleFastForward(60)}
            >
              +60m
            </button>
          </div>
        </div>
        
        <div className="simulation-info">
          <div className="simulation-time">
            Simulation Time: +{timeSimulation} minutes
          </div>
        </div>
      </div>
    </div>
  )
}

export default ControllerTools