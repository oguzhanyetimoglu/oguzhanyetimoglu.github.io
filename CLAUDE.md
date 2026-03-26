# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Oğuzhan Yetimoğlu, built with React + Vite + Tailwind CSS, deployed to GitHub Pages at `https://oguzhanyetimoglu.github.io`.

## Common Commands

```bash
# Install dependencies
npm install

# Local development with HMR
npm run dev

# Production build (outputs to dist/)
npm run build

# Preview production build locally
npm run preview

# Lint
npm run lint
```

## Architecture

This is a **single-page app** — no routing, all sections render on one page in `App.jsx`.

### Key Directories

- `src/components/` — One file per section: `Hero`, `About`, `Projects`, `CV`, `Publications`, `Navbar`, `Footer`. Also `index.js` re-exports all.
- `src/data/index.js` — **Single source of truth for all content.** All profile info, skills, work experience, projects, and publications live here as exported JS objects. To update content, edit only this file.
- `src/assets/` — Static assets (hero image, etc.)
- `assets/img/` — Project/public images
- `public/` — Static files served at root (e.g. resume PDF)

### Data Flow

Components import directly from `src/data/index.js`. There is no CMS, API, or build-time data fetching — it's all static JS imports.

### Styling

Tailwind CSS with custom fonts configured in `tailwind.config.js`:
- `font-sans` → Inter
- `font-mono` → JetBrains Mono

Dark theme: background is `#030712` (near-black). Animations use `framer-motion`.

### Deployment

The site builds to `dist/` via `npm run build`. GitHub Actions or manual deployment pushes this to GitHub Pages. The `vite.config.js` sets `base: "/"`.
