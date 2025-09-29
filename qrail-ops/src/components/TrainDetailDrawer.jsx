import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './TrainDetailDrawer.css'

const TrainDetailDrawer = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('timeline')

  // Sample train data
  const trainData = {
    id: '17031',
    name: 'Express Service',
    status: 'late',
    delay: 12,
    nextStops: ['SC', 'WADI', 'KZJ']
  }

  const timelineData = [
    {
      time: '08:00',
      station: 'HYB',
      event: 'Departure',
      status: 'on-time',
      platform: 'P1'
    },
    {
      time: '08:15',
      station: 'BMT',
      event: 'Arrival',
      status: 'on-time',
      platform: 'P2'
    },
    {
      time: '08:18',
      station: 'BMT',
      event: 'Departure',
      status: 'on-time',
      platform: 'P2'
    },
    {
      time: '08:30',
      station: 'LPI',
      event: 'Arrival',
      status: 'on-time',
      platform: 'P1'
    },
    {
      time: '08:33',
      station: 'LPI',
      event: 'Departure',
      status: 'on-time',
      platform: 'P1'
    }
  ]

  const coachPlatformData = [
    {
      coach: 'S1',
      class: 'First Class',
      platform: 'P1',
      status: 'on-time'
    },
    {
      coach: 'S2',
      class: 'First Class',
      platform: 'P1',
      status: 'on-time'
    },
    {
      coach: 'B1',
      class: 'Business Class',
      platform: 'P2',
      status: 'on-time'
    }
  ]

  const conflictsData = [
    {
      id: 1,
      type: 'platform',
      description: 'Platform clash with Train 12951 at SC-P2',
      status: 'resolved',
      time: '08:45'
    }
  ]

  const logsData = [
    {
      timestamp: '08:30:15',
      user: 'Controller',
      action: 'Apply AI suggestion',
      reason: 'Operational',
      impacted: ['17031', '12951'],
      etaDelta: '-6 min'
    },
    {
      timestamp: '08:25:42',
      user: 'System',
      action: 'Detect platform conflict',
      reason: 'N/A',
      impacted: ['17031', '12951'],
      etaDelta: '+0 min'
    }
  ]

  const getStatusClass = (status) => {
    switch(status) {
      case 'on-time': return 'status-on-time';
      case 'late': return 'status-late';
      case 'delayed': return 'status-delayed';
      case 'cancelled': return 'status-cancelled';
      case 'approaching': return 'status-approaching';
      case 'resolved': return 'status-on-time';
      default: return '';
    }
  }

  const handleApplyAISuggestion = () => {
    alert('AI suggestion applied')
  }

  const handleUndoLastAction = () => {
    alert('Last action undone')
  }

  return (
    <div className="train-detail-drawer">
      <div className="drawer-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <div className="train-header">
          <h1>{trainData.id} - {trainData.name}</h1>
          <div className="train-status">
            <span className={`status-badge ${getStatusClass(trainData.status)}`}>
              {trainData.status}
            </span>
            <span className="delay-info">
              {trainData.delay > 0 ? `+${trainData.delay} min` : `${trainData.delay} min`}
            </span>
          </div>
        </div>
        <div className="next-stops">
          Next stops: {trainData.nextStops.join(' → ')}
        </div>
      </div>

      <div className="drawer-actions">
        <button className="action-btn" onClick={handleApplyAISuggestion}>
          Apply AI suggestion
        </button>
        <button className="action-btn" onClick={handleUndoLastAction}>
          Undo last action
        </button>
      </div>

      <div className="tabs">
        <button 
          className={`tab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
          onClick={() => setActiveTab('timeline')}
        >
          Timeline
        </button>
        <button 
          className={`tab-btn ${activeTab === 'coach' ? 'active' : ''}`}
          onClick={() => setActiveTab('coach')}
        >
          Coach & Platform
        </button>
        <button 
          className={`tab-btn ${activeTab === 'conflicts' ? 'active' : ''}`}
          onClick={() => setActiveTab('conflicts')}
        >
          Conflicts
        </button>
        <button 
          className={`tab-btn ${activeTab === 'logs' ? 'active' : ''}`}
          onClick={() => setActiveTab('logs')}
        >
          Logs
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'timeline' && (
          <div className="timeline-tab">
            <h2>Train Timeline</h2>
            <div className="timeline-list">
              {timelineData.map((event, index) => (
                <div key={index} className="timeline-event">
                  <div className="event-time">{event.time}</div>
                  <div className="event-details">
                    <div className="event-station">{event.station}</div>
                    <div className="event-action">{event.event}</div>
                  </div>
                  <div className="event-platform">Platform {event.platform}</div>
                  <div className="event-status">
                    <span className={`status-badge ${getStatusClass(event.status)}`}>
                      {event.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'coach' && (
          <div className="coach-tab">
            <h2>Coach & Platform Assignment</h2>
            <div className="coach-list">
              {coachPlatformData.map((coach, index) => (
                <div key={index} className="coach-item">
                  <div className="coach-info">
                    <div className="coach-number">{coach.coach}</div>
                    <div className="coach-class">{coach.class}</div>
                  </div>
                  <div className="platform-info">Platform {coach.platform}</div>
                  <div className="coach-status">
                    <span className={`status-badge ${getStatusClass(coach.status)}`}>
                      {coach.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'conflicts' && (
          <div className="conflicts-tab">
            <h2>Conflict Resolution</h2>
            <div className="conflicts-list">
              {conflictsData.map(conflict => (
                <div key={conflict.id} className="conflict-item">
                  <div className="conflict-description">{conflict.description}</div>
                  <div className="conflict-time">{conflict.time}</div>
                  <div className="conflict-status">
                    <span className={`status-badge ${getStatusClass(conflict.status)}`}>
                      {conflict.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'logs' && (
          <div className="logs-tab">
            <h2>Audit & Reason Logs</h2>
            <div className="logs-list">
              {logsData.map((log, index) => (
                <div key={index} className="log-item">
                  <div className="log-timestamp">{log.timestamp}</div>
                  <div className="log-user">{log.user}</div>
                  <div className="log-action">{log.action}</div>
                  <div className="log-reason">{log.reason}</div>
                  <div className="log-impacted">
                    Impacted: {log.impacted.join(', ')}
                  </div>
                  <div className="log-eta">ETA Δ: {log.etaDelta}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TrainDetailDrawer