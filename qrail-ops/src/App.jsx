import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import OperationsDashboard from './components/OperationsDashboard'
import TrainDetailDrawer from './components/TrainDetailDrawer'
import KPIDashboard from './components/KPIDashboard'
import AuditLogs from './components/AuditLogs'
import Settings from './components/Settings'
import LandingPage from './components/LandingPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/operations" element={<OperationsDashboard />} />
          <Route path="/train-detail" element={<TrainDetailDrawer />} />
          <Route path="/kpi-dashboard" element={<KPIDashboard />} />
          <Route path="/audit-logs" element={<AuditLogs />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App