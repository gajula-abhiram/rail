import React, { useState } from 'react'
import './TimetablePlatform.css'

const TimetablePlatform = ({ timeSimulation }) => {
  // Sample station data with platforms
  const stations = [
    { id: 'SC', name: 'Secunderabad Jn', platforms: 10 },
    { id: 'HYB', name: 'Hyderabad Deccan', platforms: 6 },
    { id: 'BMT', name: 'Begumpet', platforms: 3 },
    { id: 'LPI', name: 'Lingampalli', platforms: 3 },
    { id: 'VKB', name: 'Vikarabad Jn', platforms: 5 },
    { id: 'SKP', name: 'Shankarpalli', platforms: 2 },
    { id: 'ZB', name: 'Zahirabad', platforms: 2 },
    { id: 'WADI', name: 'Wadi Jn', platforms: 6 },
    { id: 'KZJ', name: 'Kazipet Jn', platforms: 6 }
  ]

  // Sample timetable data
  const timetableData = [
    { 
      trainId: '12951', 
      trainName: 'Long-Distance Express', 
      station: 'SC', 
      platform: 'P4', 
      scheduledArrival: '08:30', 
      actualArrival: '08:42', 
      status: 'late',
      departure: '08:45'
    },
    { 
      trainId: '17031', 
      trainName: 'Express Service', 
      station: 'SC', 
      platform: 'P2', 
      scheduledArrival: '08:45', 
      actualArrival: '08:45', 
      status: 'on-time',
      departure: '08:50'
    },
    { 
      trainId: 'MMTS01', 
      trainName: 'MMTS Local', 
      station: 'SC', 
      platform: 'P8', 
      scheduledArrival: '08:35', 
      actualArrival: '08:33', 
      status: 'approaching',
      departure: '08:38'
    },
    { 
      trainId: '12951', 
      trainName: 'Long-Distance Express', 
      station: 'HYB', 
      platform: 'P3', 
      scheduledArrival: '08:55', 
      actualArrival: '09:07', 
      status: 'late',
      departure: '09:10'
    },
    { 
      trainId: '17031', 
      trainName: 'Express Service', 
      station: 'HYB', 
      platform: 'P1', 
      scheduledArrival: '09:10', 
      actualArrival: '09:10', 
      status: 'on-time',
      departure: '09:15'
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

  // Group timetable data by station
  const groupedData = stations.map(station => {
    const stationTrains = timetableData.filter(train => train.station === station.id)
    return {
      ...station,
      trains: stationTrains
    }
  })

  return (
    <div className="card timetable-platform">
      <h2 className="section-title">Timetable + Platform Occupancy</h2>
      <div className="timetable-container">
        <div className="platform-occupancy-header">
          <div className="station-header">Station</div>
          <div className="platforms-header">Platforms</div>
          <div className="trains-header">Trains</div>
        </div>
        
        {groupedData.map(station => (
          <div key={station.id} className="station-row">
            <div className="station-info">
              <div className="station-name">{station.name}</div>
              <div className="station-id">{station.id}</div>
              <div className="platform-count">{station.platforms} platforms</div>
            </div>
            
            <div className="platforms-visualization">
              {[...Array(station.platforms)].map((_, i) => {
                const platformId = `P${i+1}`
                const trainOnPlatform = station.trains.find(train => train.platform === platformId)
                
                return (
                  <div 
                    key={platformId} 
                    className={`platform-cell ${trainOnPlatform ? getStatusClass(trainOnPlatform.status) : ''}`}
                  >
                    {platformId}
                    {trainOnPlatform && (
                      <div className="train-on-platform">
                        <div className="train-id">{trainOnPlatform.trainId}</div>
                        <div className="train-time">{trainOnPlatform.actualArrival}</div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            
            <div className="station-trains">
              {station.trains.map(train => (
                <div key={`${train.trainId}-${train.station}`} className="train-entry">
                  <div className="train-basic-info">
                    <span className="train-id">{train.trainId}</span>
                    <span className="train-name">{train.trainName}</span>
                  </div>
                  <div className="train-details">
                    <span className={`status-badge ${getStatusClass(train.status)}`}>
                      {train.status}
                    </span>
                    <span className="platform-info">Platform {train.platform}</span>
                    <span className="arrival-time">
                      Arr: {train.actualArrival} 
                      {train.status !== 'on-time' && ` (${train.status === 'late' ? '+' : ''}${train.status === 'late' ? parseInt(train.actualArrival.split(':')[1]) - parseInt(train.scheduledArrival.split(':')[1]) : '0'} min)`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimetablePlatform