# Use&Keep - Development Guide

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

The site will be generated in the `dist/` folder, ready to deploy to Render.

## Project Structure

```
src/
├── content/
│   └── posts/          # Markdown articles
├── layouts/
│   ├── Base.astro      # Main layout
│   ├── Post.astro      # Article layout
│   └── Category.astro  # Category page layout
└── pages/
    ├── index.astro     # Homepage
    ├── casa.astro      # Category: Casa
    ├── trabajo.astro   # Category: Trabajo
    ├── creatividad.astro # Category: Creatividad
    ├── mascotas.astro  # Category: Mascotas
    ├── familia.astro   # Category: Familia
    └── [slug].astro    # Dynamic post pages
```

## Adding New Articles

Create a new `.md` file in `src/content/posts/`:

```markdown
---
title: Your article title
description: Short description
category: Casa | Trabajo | Creatividad | Mascotas | Familia | Especiales
pubDate: 2024-02-01
featured: true
---

Your content here...
```

## Deployment to Render

1. Push your changes to GitHub
2. Connect your repository to Render
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Render will auto-deploy on push

## Styling

- CSS is in each component using Astro's scoped styles
- Global styles are defined in `src/layouts/Base.astro`
- No external CSS framework (pure CSS Grid/Flexbox)

## Content Guidelines

- Keep article intros human and personal
- Use 5-7 products per article
- Include mini-guide and practical tips
- Close with a human touch
- Never link directly to Amazon from category/index pages
