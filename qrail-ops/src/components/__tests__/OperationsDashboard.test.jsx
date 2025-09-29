import React from 'react'
import { render, screen } from '@testing-library/react'
import OperationsDashboard from '../OperationsDashboard'

// Mock child components
jest.mock('../LiveTrainMap', () => () => <div data-testid="live-train-map">Live Train Map</div>)
jest.mock('../TimetablePlatform', () => () => <div data-testid="timetable-platform">Timetable Platform</div>)
jest.mock('../AIRecommendations', () => () => <div data-testid="ai-recommendations">AI Recommendations</div>)
jest.mock('../ConflictAlerts', () => () => <div data-testid="conflict-alerts">Conflict Alerts</div>)
jest.mock('../DelayCascadePredictor', () => () => <div data-testid="delay-cascade-predictor">Delay Cascade Predictor</div>)
jest.mock('../ControllerTools', () => () => <div data-testid="controller-tools">Controller Tools</div>)

describe('OperationsDashboard', () => {
  test('renders the dashboard components', () => {
    render(<OperationsDashboard />)
    
    // Check if the branding is rendered
    expect(screen.getByText('QRail — SMARTRAIL OPTIMIZER (SCR, Secunderabad Division)')).toBeInTheDocument()
    
    // Check if all child components are rendered
    expect(screen.getByTestId('live-train-map')).toBeInTheDocument()
    expect(screen.getByTestId('timetable-platform')).toBeInTheDocument()
    expect(screen.getByTestId('ai-recommendations')).toBeInTheDocument()
    expect(screen.getByTestId('conflict-alerts')).toBeInTheDocument()
    expect(screen.getByTestId('delay-cascade-predictor')).toBeInTheDocument()
    expect(screen.getByTestId('controller-tools')).toBeInTheDocument()
  })
})