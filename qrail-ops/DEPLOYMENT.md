# Deployment Guide for QRail Ops Demo

## Vercel Deployment

This application is configured for easy deployment on Vercel. Follow these steps to deploy:

### Prerequisites
1. A GitHub account
2. A Vercel account (free tier available)

### Deployment Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit for QRail Ops Demo"
   git branch -M main
   git remote add origin https://github.com/your-username/qrail-ops-demo.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in or create an account
   - Click "New Project"
   - Import your GitHub repository
   - Configure project settings:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`

3. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your application
   - Your application will be available at a vercel.app subdomain

### Configuration Files

This project includes the necessary configuration files for Vercel deployment:

- `vercel.json`: Configures routing for SPA
- `vite.config.js`: Build configuration
- `package.json`: Contains build and deployment scripts

### Environment Variables

No environment variables are required for this demo application since it uses synthetic data only.

### Custom Domain (Optional)

To use a custom domain:
1. In your Vercel project dashboard, go to Settings > Domains
2. Add your custom domain
3. Follow the DNS configuration instructions provided by Vercel

### Troubleshooting

Common deployment issues and solutions:

1. **Build failures**
   - Ensure all dependencies are in package.json
   - Check that the build command is correct (`npm run build`)

2. **Routing issues**
   - The vercel.json file handles SPA routing
   - All routes are redirected to index.html

3. **Performance optimization**
   - The application is already optimized with code splitting
   - Images and assets are minimized

### Local Development vs Production

The application works identically in both development and production environments:
- Development: `npm run dev` (http://localhost:5174)
- Production: `npm run build` + `npm run preview`

No code changes are required between environments.

## Alternative Deployment Options

While Vercel is recommended, this application can be deployed to any static hosting service:

### Netlify
1. Connect your GitHub repository
2. Set build command to `npm run build`
3. Set publish directory to `dist`

### GitHub Pages
1. Install the gh-pages package: `npm install gh-pages --save-dev`
2. Add deployment scripts to package.json
3. Run `npm run deploy`

### AWS S3 + CloudFront
1. Build the application: `npm run build`
2. Upload the contents of the `dist` folder to an S3 bucket
3. Configure CloudFront to serve the S3 bucket
4. Set up proper routing for SPA (all routes to index.html)