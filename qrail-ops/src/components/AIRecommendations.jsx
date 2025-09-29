import React, { useState } from 'react'
import './AIRecommendations.css'

const AIRecommendations = () => {
  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      text: "Shift Train 12951 to SC-P4; frees SC-P2 for incoming 17031; expected cascade reduction −18 min (Confidence 0.82)",
      impact: "-18 min",
      confidence: 0.82,
      accepted: false,
      overridden: false
    },
    {
      id: 2,
      text: "Reroute MMTS01 via LPI siding to avoid conflict with 17031; saves ~12 min over 2 trains (Confidence 0.75)",
      impact: "~12 min",
      confidence: 0.75,
      accepted: false,
      overridden: false
    },
    {
      id: 3,
      text: "Hold 17031 at BMT for 3 min to deconflict SC-P2 arrival; improves punctuality (Confidence 0.68)",
      impact: "0 min",
      confidence: 0.68,
      accepted: false,
      overridden: false
    }
  ])

  const [showReasonModal, setShowReasonModal] = useState(false)
  const [selectedRecommendation, setSelectedRecommendation] = useState(null)
  const [reason, setReason] = useState('')

  const handleAccept = (id) => {
    setRecommendations(recommendations.map(rec => 
      rec.id === id ? {...rec, accepted: true} : rec
    ))
  }

  const handleOverride = (id) => {
    const recommendation = recommendations.find(rec => rec.id === id)
    setSelectedRecommendation(recommendation)
    setShowReasonModal(true)
  }

  const handleReasonSubmit = () => {
    if (selectedRecommendation && reason) {
      setRecommendations(recommendations.map(rec => 
        rec.id === selectedRecommendation.id ? {...rec, overridden: true} : rec
      ))
      setShowReasonModal(false)
      setSelectedRecommendation(null)
      setReason('')
    }
  }

  const confidenceToColor = (confidence) => {
    if (confidence >= 0.8) return '#2563EB' // Blue
    if (confidence >= 0.6) return '#EAB308' // Yellow
    return '#EF4444' // Red
  }

  return (
    <div className="card ai-recommendations">
      <h2 className="section-title">AI Recommendations</h2>
      
      <div className="recommendations-list">
        {recommendations.map(rec => (
          <div key={rec.id} className="recommendation-item">
            <div className="recommendation-content">
              <p>{rec.text}</p>
              <div className="recommendation-meta">
                <span className="impact">Impact: {rec.impact}</span>
                <span 
                  className="confidence" 
                  style={{color: confidenceToColor(rec.confidence)}}
                >
                  Confidence: {rec.confidence.toFixed(2)}
                </span>
              </div>
            </div>
            
            {!rec.accepted && !rec.overridden && (
              <div className="recommendation-actions">
                <button 
                  className="accept-btn"
                  onClick={() => handleAccept(rec.id)}
                >
                  Accept
                </button>
                <button 
                  className="override-btn"
                  onClick={() => handleOverride(rec.id)}
                >
                  Override
                </button>
              </div>
            )}
            
            {rec.accepted && (
              <div className="recommendation-status accepted">
                Accepted
              </div>
            )}
            
            {rec.overridden && (
              <div className="recommendation-status overridden">
                Overridden
              </div>
            )}
          </div>
        ))}
      </div>
      
      {showReasonModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Override Recommendation</h3>
            <p>{selectedRecommendation?.text}</p>
            
            <div className="form-group">
              <label htmlFor="reason">Reason for override:</label>
              <select 
                id="reason" 
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              >
                <option value="">Select a reason</option>
                <option value="operational">Operational</option>
                <option value="safety">Safety</option>
                <option value="vip">VIP</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>
            
            <div className="modal-actions">
              <button 
                className="cancel-btn"
                onClick={() => setShowReasonModal(false)}
              >
                Cancel
              </button>
              <button 
                className="submit-btn"
                onClick={handleReasonSubmit}
                disabled={!reason}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AIRecommendations