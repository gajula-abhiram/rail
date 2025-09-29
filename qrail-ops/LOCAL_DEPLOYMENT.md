# Local Deployment Guide

This guide will help you run the QRail-Ops application locally on your development machine.

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Running the Application Locally

1. **Install Dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start the Development Server**:
   ```bash
   npm run dev
   ```

3. **Access the Application**:
   Open your browser and navigate to: http://localhost:5173/

## Available Scripts

- `npm run dev` - Starts the development server with hot reloading
- `npm run build` - Builds the application for production
- `npm run preview` - Previews the production build locally
- `npm test` - Runs the test suite (configured to not fail build)

## Development Server Features

- **Hot Module Replacement**: Changes to your code will automatically refresh in the browser
- **Fast Refresh**: React components will update without losing their state
- **Error Overlay**: Compilation errors will appear in the browser

## Stopping the Server

To stop the development server, press `Ctrl + C` in the terminal where it's running.

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

This will start a local server to serve the production build.

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed:
   ```bash
   npm install
   ```

2. Clear the Vite cache if needed:
   ```bash
   rm -rf node_modules/.vite
   ```

3. Check for any error messages in the terminal output

## Project Structure

- `src/` - Source code for the application
- `src/components/` - React components
- `dist/` - Production build output (created after running build)
- `public/` - Static assets (if any)

The application uses React with Vite for fast development and building.