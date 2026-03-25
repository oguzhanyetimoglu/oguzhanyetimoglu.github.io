# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based academic portfolio website using the [al-folio](https://github.com/alshedivat/al-folio) theme, deployed to GitHub Pages at `https://oguzhanyetimoglu.github.io`.

## Common Commands

```bash
# Install dependencies
bundle install
npm install

# Build the site
bundle exec jekyll build

# Local development (serve with live reload)
bundle exec jekyll serve

# Format code
npx prettier --write .

# Check formatting without writing
npx prettier --check .

# Run pre-commit hooks on all files
pre-commit run --all-files
```

**Manual deployment** (builds and pushes to `gh-pages` branch):
```bash
./bin/deploy
```

## Architecture

### Content Collections

Content lives in these directories — each is a Jekyll collection:

- `_pages/` — Static pages (about, CV, projects, blog index, etc.)
- `_posts/` — Blog posts (filename format: `YYYY-MM-DD-title.md`)
- `_projects/` — Portfolio project cards
- `_news/` — Short news/announcement items
- `_books/` — Book collection
- `_bibliography/` — BibTeX files for publications (used by jekyll-scholar)

### Layouts and Templates

- `_layouts/` — Full page templates (post, page, home, distill, etc.)
- `_includes/` — Reusable Liquid partials, including `cv/`, `repository/`, and `resume/` subdirectories
- `_sass/` — SCSS stylesheets

### Data and Configuration

- `_config.yml` — Master config: site metadata, theme settings, plugin options, third-party CDN references with integrity hashes
- `_data/` — YAML data files (CV sections, repository lists)
- `assets/json/resume.json` — JSON Resume format, loaded by jekyll-get-json for the CV page

### Build Pipeline

Deployment (via `.github/workflows/deploy.yml`) runs:
1. `bundle exec jekyll build` with `JEKYLL_ENV=production`
2. `purgecss -c purgecss.config.js` to strip unused CSS

The site uses many Jekyll plugins (see `Gemfile`), notable ones:
- `jekyll-scholar` — Bibliography/publications from BibTeX
- `jekyll-imagemagick` — Responsive image generation
- `jekyll-minifier` / `jekyll-terser` — HTML/CSS/JS minification in production
- `jekyll-jupyter-notebook` — Renders `.ipynb` files as posts

### Front Matter Conventions

Pages/posts use YAML front matter. Key fields:
- `layout:` — matches a file in `_layouts/`
- `title:`, `description:` — displayed and used for SEO
- `nav: true` / `nav_order:` — controls navbar inclusion and order
- `tabs: true` — enables tabbed content
- `toc:` — enables table of contents sidebar

For projects: `img:`, `importance:`, `category:` control display in the projects grid.

For posts: `tags:`, `categories:` affect filtering and archive URLs.

## Code Formatting

Prettier is configured (`.prettierrc`) with:
- Print width: 150
- `@shopify/prettier-plugin-liquid` for `.liquid` / `.html` files

Pre-commit hooks (`.pre-commit-config.yaml`) check trailing whitespace, file endings, YAML validity, and large files. These run automatically on `git commit`.
