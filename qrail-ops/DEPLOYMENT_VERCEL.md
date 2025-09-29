# Vercel Deployment Guide

This project is configured to be easily deployed on Vercel. Follow these steps to deploy:

## Prerequisites
- A Vercel account (free at [vercel.com](https://vercel.com))
- This repository connected to your Vercel account

## Deployment Steps

1. **Connect to Vercel:**
   - Go to your Vercel dashboard
   - Click "New Project"
   - Import this repository

2. **Configure Project:**
   - Framework Preset: Vite
   - Root Directory: Leave as is (or specify if needed)
   - Build Command: `npm run build` (automatically detected)
   - Output Directory: `dist` (automatically detected)
   - Install Command: `npm install` (automatically detected)

3. **Environment Variables:**
   - No environment variables are required for this project as it's a frontend-only application

4. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically build and deploy your application

## Project Configuration Details

This project includes the following configurations for seamless Vercel deployment:

- `vercel.json`: Contains routing rewrites, security headers, and explicit build configuration
- `vite.config.js`: Configured with proper base path for client-side routing
- `package.json`: Includes all necessary build scripts and dependencies

## Custom Domain (Optional)

After deployment, you can add a custom domain through the Vercel dashboard:
1. Go to your project settings
2. Navigate to the "Domains" section
3. Add your custom domain
4. Follow the DNS configuration instructions

## Troubleshooting

If you encounter any issues during deployment:

1. Ensure all dependencies are correctly listed in `package.json`
2. Check that the build command runs successfully locally with `npm run build`
3. Verify the `vercel.json` configuration is correct

For additional help, refer to the [Vercel documentation](https://vercel.com/docs).

## Note About Tests

The project includes tests, but they are currently configured to not fail the build process. This ensures that deployment to Vercel will succeed even if tests have issues. To run tests locally, use `npm run test:ci`.