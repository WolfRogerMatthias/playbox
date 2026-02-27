---
title: Building This Site
date: 2026-02-27
tags: [react, dev]
excerpt: A quick rundown of how this personal site was built and the tech choices behind it.
---

A quick rundown of how this personal site was built and why I made the choices I did.

## Stack

- **React 19** — component model, hooks, and the latest concurrent features
- **MUI v7** — for consistent, accessible UI components
- **React Router v7** — client-side routing with nested layouts
- **GitHub Pages** — free, fast, and easy to deploy to

## Why static?

For a personal site there's no need for a server. Static files on GitHub Pages load instantly and cost nothing. Blog posts live as plain Markdown files — no database, no CMS.

## Deployment

```bash
npm run deploy
```

That's it. `gh-pages` builds and pushes to the `gh-pages` branch automatically.
