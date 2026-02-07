# Copilot instructions for Use&Keep

## Project snapshot
- This repo currently contains only [README.md](README.md); it is the source of truth for product, content, and tech decisions.
- Follow the editorial positioning: "small, practical, everyday objects you keep using"; avoid shop/catalog framing.

## Architecture and content model (Astro + Content Collections)
- **Framework**: Astro with Content Collections for Markdown-first content management
- **Deployment**: Static site on Render (push triggers auto-build)
- **Content structure**:
  - `src/content/posts/` - Markdown articles with frontmatter (title, category, description, pubDate, featured)
  - `src/pages/` - Static pages (index, category pages, dynamic [slug].astro for articles)
  - `src/layouts/` - Base.astro, Post.astro, Category.astro
- **Build**: `npm run build` → `dist/` folder
- **Dev**: `npm run dev` → localhost:3000
- **URLs**: Clean slugs derived from filename (e.g., `cosas-pequenas-casa.md` → `/cosas-pequenas-casa/`)

## Editorial patterns (must match README)
- Tone: human, close, non-technical; avoid stiff SEO phrases.
- Article template is fixed: intro -> 5-7 item list -> mini guide -> human close.
- Product items: short human title, image, 2-3 real sentences, soft CTA; never link directly to Amazon from index/category lists.
- Category pages: short SEO intro, subcategories, list of articles (not products).

## Workflow and release
- Content workflow is Markdown-first: write, commit, push, Render auto-deploys.
- No database; keep logic simple and static.

## Naming and brand rules
- Brand name uses "Use&Keep" in copy; URLs/domains use `useandkeep`.
- Keep the claim and promise consistent with [README.md](README.md).

## Content Collection schema
Articles frontmatter template:
```yaml
---
title: Human-friendly title (not SEO-optimized)
description: 1-2 sentence hook
category: one of [Casa, Trabajo, Creatividad, Mascotas, Familia, Especiales]
pubDate: YYYY-MM-DD
featured: true/false  # shows on homepage if true
---
```

## Article structure (required pattern)
1. **Intro**: Human, personal hook (no stiff SEO language)
2. **Products**: 5–7 items, each with:
   - H2 heading (product name)
   - 2–3 sentences (real benefits, not marketing)
   - "Mejor para:" paragraph (target audience)
   - "[Ver en Amazon](#)" soft CTA
3. **Mini guide**: "Qué tener en cuenta" section (tips, mistakes, material notes)
4. **For/Not for**: Clear "Para quién sí / quién no" section
5. **Human close**: Final paragraph connecting back to the reader's life

## Category pages
- `src/pages/{categoria}.astro` template filters posts by category
- Shows title, description, list of articles (not direct product links)
- Live categories: casa.astro, trabajo.astro, creatividad.astro, mascotas.astro, familia.astro

## Styling approach
- No CSS framework; pure CSS Grid + Flexbox
- Scoped styles in each Astro component
- Global styles and resets in `Base.astro`
- Colors: #1a1a1a (dark), #666 (medium), #e5e5e5 (light), white backgrounds
