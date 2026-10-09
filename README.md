# harichandanp.github.io

Personal site and blog, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Writing a post

Add a Markdown file to `src/content/blog/`:

```md
---
title: 'Post title'
description: 'One-line summary for listings and RSS'
pubDate: '2026-10-08'
---

Body in Markdown.
```

Push to `main` and the GitHub Actions workflow builds and deploys the site.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321/
npm run build    # output in dist/
```

## Custom domain

1. Add `public/CNAME` containing the domain (e.g. `example.com`).
2. In `.github/workflows/deploy.yml`, set `SITE: https://example.com`.
3. Point DNS at GitHub Pages and set the domain under repo Settings → Pages.
