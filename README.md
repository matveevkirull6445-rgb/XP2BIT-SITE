# XP2BIT — GitHub Pages Website

This repository contains the static XP2BIT landing page and dashboard frontend. It is separate from the Python bot and FastAPI backend.

## Publish on GitHub Pages

1. Create a GitHub repository, for example `XP2BIT-site`.
2. Upload the **contents** of this folder to the repository root. `index.html` must be in the root.
3. Open **Settings → Pages**.
4. Select **GitHub Actions** as the source.
5. Push to the `main` branch or run the `Deploy static site to GitHub Pages` workflow from the Actions tab.
6. Open the URL shown by GitHub, usually `https://YOUR_USERNAME.github.io/XP2BIT-site/`.

## Backend connection

GitHub Pages can serve only static files. It cannot run Python, FastAPI, a Discord bot, a scheduler, or a database. The XP2BIT backend must run separately on a computer or public server:

```text
GitHub Pages frontend → HTTPS FastAPI backend → database
                                      ↘ Discord bot
```

For local development, the backend runs at `http://127.0.0.1:8000` using `start_api.bat` from the bot archive. A public GitHub Pages website cannot call a user's local `127.0.0.1`; deploy the backend on a public HTTPS domain before enabling live dashboard operations.

The dashboard currently includes a working UI preview and safe placeholder notifications. Replace the placeholder API configuration with the public API URL, then add server-side Discord OAuth2 and permission checks before exposing admin mutations.
