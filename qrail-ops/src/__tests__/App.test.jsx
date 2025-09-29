import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'

// Mock all components to simplify the test
jest.mock('../components/LandingPage', () => () => <div>Landing Page</div>)
jest.mock('../components/OperationsDashboard', () => () => <div>Operations Dashboard</div>)
jest.mock('../components/TrainDetailDrawer', () => () => <div>Train Detail Drawer</div>)
jest.mock('../components/KPIDashboard', () => () => <div>KPI Dashboard</div>)
jest.mock('../components/AuditLogs', () => () => <div>Audit Logs</div>)
jest.mock('../components/Settings', () => () => <div>Settings</div>)

describe('App', () => {
  test('renders without crashing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    
    // The app should render without errors
    expect(screen).toBeTruthy()
  })
})