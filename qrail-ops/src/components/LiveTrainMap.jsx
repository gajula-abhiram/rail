import React, { useState } from 'react'
import './LiveTrainMap.css'

const LiveTrainMap = ({ onTrainSelect, timeSimulation }) => {
  // Sample stations data
  const stations = [
    { id: 'SC', name: 'Secunderabad Jn', x: 100, y: 300, platforms: 10 },
    { id: 'HYB', name: 'Hyderabad Deccan', x: 200, y: 250, platforms: 6 },
    { id: 'BMT', name: 'Begumpet', x: 300, y: 200, platforms: 3 },
    { id: 'LPI', name: 'Lingampalli', x: 400, y: 150, platforms: 3 },
    { id: 'VKB', name: 'Vikarabad Jn', x: 500, y: 250, platforms: 5 },
    { id: 'SKP', name: 'Shankarpalli', x: 600, y: 300, platforms: 2 },
    { id: 'ZB', name: 'Zahirabad', x: 700, y: 350, platforms: 2 },
    { id: 'WADI', name: 'Wadi Jn', x: 300, y: 400, platforms: 6 },
    { id: 'KZJ', name: 'Kazipet Jn', x: 500, y: 450, platforms: 6 }
  ]

  // Sample train data
  const trains = [
    { 
      id: '12951', 
      name: 'Long-Distance Express', 
      status: 'late', 
      delay: 12, 
      speed: 65, 
      currentStation: 'SC', 
      nextStop: 'HYB',
      position: { x: 120, y: 290 }
    },
    { 
      id: '17031', 
      name: 'Express Service', 
      status: 'on-time', 
      delay: 0, 
      speed: 75, 
      currentStation: 'HYB', 
      nextStop: 'SC',
      position: { x: 220, y: 240 }
    },
    { 
      id: 'MMTS01', 
      name: 'MMTS Local', 
      status: 'approaching', 
      delay: -2, 
      speed: 45, 
      currentStation: 'LPI', 
      nextStop: 'HYB',
      position: { x: 420, y: 140 }
    }
  ]

  // Sample connections
  const connections = [
    { from: 'SC', to: 'HYB' },
    { from: 'HYB', to: 'BMT' },
    { from: 'BMT', to: 'LPI' },
    { from: 'LPI', to: 'VKB' },
    { from: 'VKB', to: 'SKP' },
    { from: 'SKP', to: 'ZB' },
    { from: 'VKB', to: 'ZB' }, // Single line segment
    { from: 'SC', to: 'WADI' },
    { from: 'WADI', to: 'KZJ' },
    { from: 'SC', to: 'KZJ' }
  ]

  const getStatusClass = (status) => {
    switch(status) {
      case 'on-time': return 'status-on-time';
      case 'late': return 'status-late';
      case 'delayed': return 'status-delayed';
      case 'cancelled': return 'status-cancelled';
      case 'approaching': return 'status-approaching';
      default: return '';
    }
  }

  const handleTrainClick = (train) => {
    onTrainSelect(train)
  }

  return (
    <div className="card live-train-map">
      <h2 className="section-title">Live Train Map (Schematic)</h2>
      <div className="map-container">
        <svg width="100%" height="500" viewBox="0 0 800 500">
          {/* Render connections */}
          {connections.map((conn, index) => {
            const fromStation = stations.find(s => s.id === conn.from)
            const toStation = stations.find(s => s.id === conn.to)
            
            if (!fromStation || !toStation) return null
            
            // Check if this is a single-line segment
            const isSingleLine = (conn.from === 'VKB' && conn.to === 'ZB') || 
                               (conn.from === 'SKP' && conn.to === 'ZB')
            
            return (
              <g key={index}>
                <line
                  x1={fromStation.x}
                  y1={fromStation.y}
                  x2={toStation.x}
                  y2={toStation.y}
                  stroke={isSingleLine ? "#EF4444" : "#94a3b8"}
                  strokeWidth={isSingleLine ? 3 : 2}
                  strokeDasharray={isSingleLine ? "5,5" : "none"}
                />
                {isSingleLine && (
                  <circle
                    cx={(fromStation.x + toStation.x) / 2}
                    cy={(fromStation.y + toStation.y) / 2}
                    r="8"
                    fill="#EF4444"
                  />
                )}
              </g>
            )
          })}
          
          {/* Render stations */}
          {stations.map(station => (
            <g key={station.id}>
              <circle
                cx={station.x}
                cy={station.y}
                r="12"
                fill="#ffffff"
                stroke="#475569"
                strokeWidth="2"
              />
              <text
                x={station.x}
                y={station.y + 30}
                textAnchor="middle"
                fontSize="12"
                fill="#1e293b"
              >
                {station.id}
              </text>
            </g>
          ))}
          
          {/* Render trains */}
          {trains.map(train => (
            <g 
              key={train.id} 
              className={`train-marker ${getStatusClass(train.status)}`}
              onClick={() => handleTrainClick(train)}
            >
              <circle
                cx={train.position.x}
                cy={train.position.y}
                r="8"
                fill={
                  train.status === 'on-time' ? '#2563EB' :
                  train.status === 'late' ? '#EAB308' :
                  train.status === 'delayed' ? '#EF4444' :
                  train.status === 'cancelled' ? '#475569' :
                  train.status === 'approaching' ? '#7C3AED' : '#94a3b8'
                }
                stroke="#ffffff"
                strokeWidth="2"
                cursor="pointer"
              />
              <text
                x={train.position.x}
                y={train.position.y - 15}
                textAnchor="middle"
                fontSize="10"
                fill="#1e293b"
              >
                {train.id}
              </text>
            </g>
          ))}
        </svg>
        
        <div className="map-legend">
          <div className="legend-item">
            <div className="legend-color-box" style={{backgroundColor: '#2563EB'}}></div>
            <span>On-time</span>
          </div>
          <div className="legend-item">
            <div className="legend-color-box" style={{backgroundColor: '#EAB308'}}></div>
            <span>Late</span>
          </div>
          <div className="legend-item">
            <div className="legend-color-box" style={{backgroundColor: '#EF4444'}}></div>
            <span>Delayed</span>
          </div>
          <div className="legend-item">
            <div className="legend-color-box" style={{backgroundColor: '#475569'}}></div>
            <span>Cancelled</span>
          </div>
          <div className="legend-item">
            <div className="legend-color-box" style={{backgroundColor: '#7C3AED'}}></div>
            <span>Approaching</span>
          </div>
          <div className="legend-item">
            <div className="legend-color-box" style={{backgroundColor: '#EF4444', border: '2px dashed #EF4444'}}></div>
            <span>Single Line</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveTrainMap