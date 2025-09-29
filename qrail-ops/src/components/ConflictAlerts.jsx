import React from 'react'
import './ConflictAlerts.css'

const ConflictAlerts = () => {
  const alerts = [
    {
      id: 1,
      type: 'platform',
      title: 'Platform Clash',
      description: 'Trains 12951 and 17031 both scheduled for SC-P2',
      status: 'late',
      station: 'SC',
      platform: 'P2'
    },
    {
      id: 2,
      type: 'single-line',
      title: 'Single-line Conflict',
      description: 'Trains crossing at VKB-ZB single-line segment',
      status: 'delayed',
      segment: 'VKB-ZB'
    }
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

  const getTypeIcon = (type) => {
    switch(type) {
      case 'platform':
        return '🅿️'
      case 'single-line':
        return '🚧'
      default:
        return '⚠️'
    }
  }

  return (
    <div className="conflict-alerts">
      <div className="alerts-header">
        <h2>Conflict Alerts</h2>
        <div className="alerts-count">{alerts.length} active alerts</div>
      </div>
      
      <div className="alerts-list">
        {alerts.map(alert => (
          <div key={alert.id} className={`alert-item ${getStatusClass(alert.status)}`}>
            <div className="alert-icon">
              {getTypeIcon(alert.type)}
            </div>
            <div className="alert-content">
              <div className="alert-title">{alert.title}</div>
              <div className="alert-description">{alert.description}</div>
              <div className="alert-details">
                {alert.station && alert.platform && (
                  <span className="alert-location">{alert.station}-{alert.platform}</span>
                )}
                {alert.segment && (
                  <span className="alert-segment">{alert.segment}</span>
                )}
              </div>
            </div>
            <div className="alert-status">
              <span className={`status-badge ${getStatusClass(alert.status)}`}>
                {alert.status}
              </span>
            </div>
            <div className="alert-actions">
              <button className="bell-icon">🔔</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ConflictAlerts