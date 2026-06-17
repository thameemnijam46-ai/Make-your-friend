# PWA Deployment Guide

## Make Your Friend - Install as App

This guide will help you deploy **Make Your Friend** as an installable Progressive Web App (PWA).

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A web hosting service (Vercel, Netlify, or similar)

## Local Installation Steps

### 1. Clone and Setup
```bash
git clone https://github.com/thameemnijam46-ai/Make-your-friend.git
cd Make-your-friend
npm install
```

### 2. Run Locally
```bash
npm run web
```
The app will be available at `http://localhost:19006` (or another available port)

### 3. Install as App

#### On Desktop (Chrome, Edge, Brave):
1. Open the app in your browser
2. Click the **Install** button in the address bar (or menu icon → "Install app")
3. Choose where to install and click **Install**

#### On Mobile (iOS):
1. Open the app in Safari
2. Tap **Share** → **Add to Home Screen**
3. Name the app and tap **Add**

#### On Mobile (Android):
1. Open the app in Chrome
2. Tap **Menu** (three dots) → **Install app** or **Add to Home Screen**
3. Confirm the installation

## Deploying to Production

### Option 1: Deploy to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Add PWA configuration"
git push origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click **New Project**
   - Select this repository
   - Click **Deploy**

3. **Set Build Command:**
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Option 2: Deploy to Netlify

1. **Push to GitHub** (as above)

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click **New site from Git**
   - Connect your GitHub account
   - Select this repository
   - Set build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click **Deploy**

### Option 3: Manual Deployment

1. **Build the web version:**
```bash
npm run build
```

2. **Upload the `dist` folder** to your web hosting service

3. **Configure your server** to serve `index.html` for all routes (required for SPA routing)

## PWA Features Enabled

✅ **Installable** - Install as standalone app on any device
✅ **Offline Support** - Service Worker caches assets
✅ **App Icon** - Custom app icon on home screen
✅ **Splash Screen** - Custom splash screen on launch
✅ **Shortcuts** - App shortcuts for quick actions
✅ **Web App Manifest** - Complete PWA manifest configured

## Testing Installation

After deployment:

1. Open your app URL in a browser
2. You should see an **Install** prompt (or find it in the menu)
3. Click Install
4. The app will be added to your device

### Desktop Testing
- Chrome DevTools → Application → Manifest to verify PWA setup
- Service Worker tab to check offline caching

### Mobile Testing
- Test on iOS Safari and Android Chrome
- Verify app launches in standalone mode
- Test offline functionality

## File Structure for Web

```
public/
├── index.html          # HTML entry point with meta tags
├── manifest.json       # PWA manifest
├── sw.js              # Service Worker for offline support
└── icons/             # App icons (add your icons here)
```

## Adding App Icons

1. Create icons in these sizes:
   - 192x192 (standard icon)
   - 512x512 (splash screen)
   - 16x16, 32x32 (favicon)

2. Save them in `public/icons/` directory

3. Update icon paths in:
   - `public/manifest.json`
   - `public/index.html`

## Environment Configuration

Create `.env` file:
```
REACT_APP_API_URL=your_api_endpoint_here
REACT_APP_APP_NAME=Make Your Friend
```

## Troubleshooting

### App won't install
- Ensure Service Worker is properly registered
- Check browser console for errors
- Verify HTTPS is enabled (required for PWA)

### Offline features not working
- Check Service Worker registration in DevTools
- Verify manifest.json is accessible
- Check browser cache storage quota

### Build errors
- Delete `node_modules` and run `npm install` again
- Clear npm cache: `npm cache clean --force`
- Check Node.js version: `node --version` (should be v16+)

## Support

For issues or questions, open an issue on [GitHub](https://github.com/thameemnijam46-ai/Make-your-friend/issues)

## Next Steps

1. Add your app icons to `public/icons/`
2. Customize the manifest in `public/manifest.json`
3. Deploy to your preferred hosting service
4. Share your app with friends!

Happy friend-making! 🎉
