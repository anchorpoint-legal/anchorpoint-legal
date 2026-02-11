AnchorPointCompliance Legal Services
This is the source code for the AnchorPointCompliance website, built with Vite and Nunjucks templates.

## Getting the site online (GitHub Pages)
### 1. Set the right path
By default, the site is set up to live at the root (like `www.anchorpointcompliance.com`). 

If you're using a standard GitHub Pages project link (like `username.github.io/anchorpointcompliance/`), you'll need to:
1. Open up `vite.config.js`.
2. Change the `base` setting to match your repo name:
   ```javascript
   base: "/anchorpointcompliance/",
   ```

### 2. Turn on GitHub Actions
We've already set up a workflow (`.github/workflows/deploy.yml`) that handles the heavy lifting. It'll automatically push your changes live whenever you update the `main` branch.

To enable it:
1. Head over to your repo on GitHub.
2. Go to **Settings** > **Pages**.
3. Under **Build and deployment**, switch the **Source** to **GitHub Actions**.

### 3. Want to deploy manually?
If you'd rather do it from your own machine:
1. `npm install` (if you haven't already).
2. `npm run deploy`.