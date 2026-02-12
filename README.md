# AnchorPointCompliance Legal Services

This is the source code for the AnchorPointCompliance website, built with Vite and Nunjucks templates.

## Development

### Local Development
```bash
npm install
npm run dev
```

The site will be available at http://localhost:3000

### Build for Production
```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Automatic Deployment (Recommended)

The site automatically deploys when you push to the `main` branch. The workflow is configured in `.github/workflows/deploy.yml`.

#### Setup Instructions:

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** > **Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**

2. **Push to Main Branch:**
   - Any push to the `main` branch will trigger an automatic deployment
   - The workflow will build the site and deploy it to GitHub Pages

3. **View Your Site:**
   - After deployment completes, your site will be available at:
   - `https://anchorpoint-legal.github.io/anchorpoint-legal/`
   - Or your custom domain if configured

### Configuration Notes

- **Base Path:** The site is configured for GitHub Pages project deployment at `/anchorpoint-legal/`
- **Custom Domain:** To use a custom domain, update the `base` path in `vite.config.js` to `/` and configure your domain in GitHub Pages settings
- **Branch:** The workflow deploys from the `main` branch only

### Manual Deployment (Alternative)

If you prefer to deploy manually from your local machine:

```bash
npm install
npm run deploy
```

This will build the site and push it to the `gh-pages` branch.

**Note:** Manual deployment requires the `gh-pages` package and appropriate Git permissions.

## Workflow Features

The GitHub Actions workflow includes:
- ✅ Automatic builds on push to main
- ✅ Node.js dependency caching for faster builds
- ✅ Proper permissions for GitHub Pages deployment
- ✅ Concurrency control to prevent deployment conflicts
- ✅ `.nojekyll` file for proper asset handling
- ✅ Manual workflow dispatch option