import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import './KPIDashboard.css'

const KPIDashboard = () => {
  const navigate = useNavigate()
  // Sample KPI data
  const kpiData = [
    { name: 'Avg Arrival Delay', value: 8.2, unit: 'min' },
    { name: 'Secondary Delays Avoided', value: 24, unit: 'min' },
    { name: '% On-time', value: 78, unit: '%' },
  ]

  const bottleneckData = [
    { platform: 'SC-P2', delays: 12 },
    { platform: 'HYB-P1', delays: 8 },
    { platform: 'SC-P4', delays: 6 },
    { platform: 'LPI-P2', delays: 5 },
    { platform: 'VKB-P3', delays: 4 },
  ]

  const trendData = [
    { time: '06:00', current: 5, previous: 8 },
    { time: '07:00', current: 12, previous: 15 },
    { time: '08:00', current: 18, previous: 22 },
    { time: '09:00', current: 15, previous: 18 },
    { time: '10:00', current: 10, previous: 12 },
    { time: '11:00', current: 6, previous: 8 },
  ]

  return (
    <div className="kpi-dashboard">
      <div className="header">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
        <div className="branding">
          <div className="logo">QRail — <span className="logo-highlight">SMARTRAIL OPTIMIZER</span> (SCR, Secunderabad Division)</div>
        </div>
        <div className="subheader">KPI Dashboard · Live & Shift-wise</div>
        <div className="badges-container">
          <span className="badge">SCR</span>
          <span className="badge">Secunderabad Div</span>
          <span className="badge">Current Shift</span>
        </div>
      </div>

      <div className="kpi-cards">
        {kpiData.map((kpi, index) => (
          <div key={index} className="card kpi-card">
            <div className="kpi-title">{kpi.name}</div>
            <div className="kpi-value">{kpi.value}<span className="kpi-unit">{kpi.unit}</span></div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h2>Top 5 Bottleneck Platforms</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={bottleneckData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="platform" />
                <YAxis label={{ value: 'Delays (min)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="delays" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h2>Delay Trend: Current vs Previous Shift</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis label={{ value: 'Avg Delay (min)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="current" stroke="#2563EB" name="Current Shift" strokeWidth={2} />
                <Line type="monotone" dataKey="previous" stroke="#94a3b8" name="Previous Shift" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KPIDashboard