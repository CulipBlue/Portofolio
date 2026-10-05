# Ridho Hafiz - Portfolio

A modern, responsive portfolio for Ridho Hafiz, a software developer specializing in .NET, Go, enterprise systems, and performance optimization. The site is served by a small Express application and is ready to deploy on Railway.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## Deploy to Railway

1. Push this repository to GitHub.
2. Create a Railway project and choose **Deploy from GitHub repo**.
3. Select this repository. Railway will use `railway.toml` and run `npm start` automatically.
4. Generate a public domain from the service settings.

The health check is available at `/health`.

## Structure

- `public/` - public website files
- `assets/Resume-Ridho-Hafiz.pdf` - downloadable resume
- `server.js` - Express server
- `railway.toml` - Railway deployment settings
