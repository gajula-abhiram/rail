import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AuditLogs.css'

const AuditLogs = () => {
  const navigate = useNavigate()
  const [filters, setFilters] = useState({
    actionType: 'all',
    severity: 'all',
    timeRange: '24h'
  })

  // Sample audit log data
  const logData = [
    {
      timestamp: '2025-09-29 08:30:15',
      user: 'Controller',
      action: 'Apply AI suggestion',
      reason: 'Operational',
      impacted: ['17031', '12951'],
      etaDelta: '-6 min',
      severity: 'medium'
    },
    {
      timestamp: '2025-09-29 08:25:42',
      user: 'System',
      action: 'Detect platform conflict',
      reason: 'N/A',
      impacted: ['17031', '12951'],
      etaDelta: '+0 min',
      severity: 'high'
    },
    {
      timestamp: '2025-09-29 08:20:10',
      user: 'Controller',
      action: 'Manual Hold',
      reason: 'Safety',
      impacted: ['MMTS01'],
      etaDelta: '+3 min',
      severity: 'medium'
    },
    {
      timestamp: '2025-09-29 08:15:33',
      user: 'System',
      action: 'Delay prediction',
      reason: 'N/A',
      impacted: ['12951'],
      etaDelta: '+12 min',
      severity: 'low'
    },
    {
      timestamp: '2025-09-29 08:10:22',
      user: 'Controller',
      action: 'Platform assignment',
      reason: 'Operational',
      impacted: ['17031'],
      etaDelta: '-2 min',
      severity: 'low'
    }
  ]

  const handleFilterChange = (filterName, value) => {
    setFilters({
      ...filters,
      [filterName]: value
    })
  }

  const handleExport = () => {
    alert('Export functionality would be implemented in a real application')
  }

  const getSeverityClass = (severity) => {
    switch(severity) {
      case 'high': return 'severity-high';
      case 'medium': return 'severity-medium';
      case 'low': return 'severity-low';
      default: return '';
    }
  }

  // Filter logs based on selected filters
  const filteredLogs = logData.filter(log => {
    if (filters.actionType !== 'all' && log.action.toLowerCase().indexOf(filters.actionType) === -1) {
      return false
    }
    if (filters.severity !== 'all' && log.severity !== filters.severity) {
      return false
    }
    return true
  })

  return (
    <div className="audit-logs">
      <div className="header">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
        <div className="branding">
          <div className="logo">QRail — <span className="logo-highlight">SMARTRAIL OPTIMIZER</span> (SCR, Secunderabad Division)</div>
        </div>
        <div className="subheader">Audit & Reason Logs</div>
        <div className="badges-container">
          <span className="badge">SCR</span>
          <span className="badge">Secunderabad Div</span>
        </div>
      </div>

      <div className="card logs-filters">
        <div className="filter-group">
          <label htmlFor="actionType">Action Type:</label>
          <select 
            id="actionType" 
            value={filters.actionType}
            onChange={(e) => handleFilterChange('actionType', e.target.value)}
          >
            <option value="all">All Actions</option>
            <option value="apply">Apply AI suggestion</option>
            <option value="detect">Detect conflict</option>
            <option value="hold">Manual Hold</option>
            <option value="assignment">Platform assignment</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="severity">Severity:</label>
          <select 
            id="severity" 
            value={filters.severity}
            onChange={(e) => handleFilterChange('severity', e.target.value)}
          >
            <option value="all">All Severities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="timeRange">Time Range:</label>
          <select 
            id="timeRange" 
            value={filters.timeRange}
            onChange={(e) => handleFilterChange('timeRange', e.target.value)}
          >
            <option value="1h">Last 1 hour</option>
            <option value="6h">Last 6 hours</option>
            <option value="24h">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
          </select>
        </div>

        <button className="export-btn" onClick={handleExport}>
          Export
        </button>
      </div>

      <div className="card logs-table">
        <div className="table-header">
          <div className="header-timestamp">Timestamp</div>
          <div className="header-user">User</div>
          <div className="header-action">Action</div>
          <div className="header-reason">Reason</div>
          <div className="header-impacted">Impacted Trains</div>
          <div className="header-eta">ETA Δ</div>
          <div className="header-severity">Severity</div>
        </div>

        <div className="table-body">
          {filteredLogs.map((log, index) => (
            <div key={index} className="table-row">
              <div className="row-timestamp">{log.timestamp}</div>
              <div className="row-user">{log.user}</div>
              <div className="row-action">{log.action}</div>
              <div className="row-reason">{log.reason}</div>
              <div className="row-impacted">{log.impacted.join(', ')}</div>
              <div className="row-eta">{log.etaDelta}</div>
              <div className={`row-severity ${getSeverityClass(log.severity)}`}>
                {log.severity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AuditLogs