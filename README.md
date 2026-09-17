# XP2BIT — GitHub Pages Website

This repository contains the static XP2BIT landing page and a dashboard shell. It is separate from the Python bot and FastAPI backend.

## No fake statistics

The dashboard does not contain hard-coded coins, members, claims, servers, or scheduled events. Until `api-config.js` points to a reachable backend and authentication is implemented, it shows `API not connected`, empty states, and disabled controls.

## Publish on GitHub Pages

1. Create a GitHub repository, for example `XP2BIT-site`.
2. Upload the **contents** of this folder to the repository root. `index.html` must be in the root.
3. Open **Settings → Pages**.
4. Select **GitHub Actions** as the source, or select branch `main` and folder `/ (root)`.
5. Push to the `main` branch or run the Pages workflow.
6. Open the URL shown by GitHub, usually `https://YOUR_USERNAME.github.io/XP2BIT-site/`.

## Connect the real backend

Edit `api-config.js` before publishing:

```javascript
window.XP2BIT_API_URL = "https://api.example.com";
```

GitHub Pages can serve only static files. It cannot run Python, FastAPI, a Discord bot, a scheduler, or a database. The backend must run on the user's computer during development or on a public HTTPS server for a live site.

The dashboard must receive its server list and statistics from authenticated API responses. Never put the Discord bot token or OAuth client secret in this repository.
