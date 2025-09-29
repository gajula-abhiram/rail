import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import './DelayCascadePredictor.css'

const DelayCascadePredictor = () => {
  const [timeframe, setTimeframe] = useState(30) // 15, 30, 60, 120

  // Sample cascade data
  const cascadeData = {
    15: [
      { time: '0', delay: 0 },
      { time: '5', delay: 5 },
      { time: '10', delay: 12 },
      { time: '15', delay: 18 }
    ],
    30: [
      { time: '0', delay: 0 },
      { time: '5', delay: 5 },
      { time: '10', delay: 12 },
      { time: '15', delay: 18 },
      { time: '20', delay: 25 },
      { time: '25', delay: 32 },
      { time: '30', delay: 38 }
    ],
    60: [
      { time: '0', delay: 0 },
      { time: '10', delay: 5 },
      { time: '20', delay: 12 },
      { time: '30', delay: 18 },
      { time: '40', delay: 25 },
      { time: '50', delay: 32 },
      { time: '60', delay: 45 }
    ],
    120: [
      { time: '0', delay: 0 },
      { time: '20', delay: 5 },
      { time: '40', delay: 12 },
      { time: '60', delay: 18 },
      { time: '80', delay: 25 },
      { time: '100', delay: 32 },
      { time: '120', delay: 52 }
    ]
  }

  const timeframeOptions = [
    { value: 15, label: '15 min' },
    { value: 30, label: '30 min' },
    { value: 60, label: '60 min' },
    { value: 120, label: '120 min' }
  ]

  const currentData = cascadeData[timeframe]

  return (
    <div className="card delay-cascade-predictor">
      <div className="predictor-header">
        <h2 className="section-title">Delay Cascade Predictor</h2>
        <div className="timeframe-selector">
          {timeframeOptions.map(option => (
            <button
              key={option.value}
              className={`timeframe-btn ${timeframe === option.value ? 'active' : ''}`}
              onClick={() => setTimeframe(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="predictor-content">
        <div className="forecast-cards">
          <div className="forecast-card">
            <div className="card-title">Projected Secondary Delays</div>
            <div className="card-value">+{currentData[currentData.length - 1].delay} min</div>
            <div className="card-description">Total cascade impact</div>
          </div>
          
          <div className="forecast-card">
            <div className="card-title">Affected Trains</div>
            <div className="card-value">12</div>
            <div className="card-description">Trains in cascade path</div>
          </div>
          
          <div className="forecast-card">
            <div className="card-title">Confidence</div>
            <div className="card-value">82%</div>
            <div className="card-description">Prediction reliability</div>
          </div>
        </div>
        
        <div className="chart-container">
          <h3>Delay Propagation Forecast</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={currentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="time" 
                  label={{ value: 'Minutes', position: 'insideBottomRight', offset: -5 }} 
                />
                <YAxis 
                  label={{ value: 'Delay (min)', angle: -90, position: 'insideLeft' }} 
                />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="delay" 
                  stroke="#2563EB" 
                  strokeWidth={2}
                  dot={{ stroke: '#2563EB', strokeWidth: 2, r: 4 }} 
                  activeDot={{ r: 6 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DelayCascadePredictor