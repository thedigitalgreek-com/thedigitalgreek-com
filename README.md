# thedigitalgreek.com

Astro + Tailwind CSS. Builds to static files in `dist/` for GitHub Pages.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
```

## Add a project

1. Create a folder `src/content/projects/<slug>/`. The folder name becomes the URL `/<slug>`.
2. Put the screenshots in it (desktop at 1440×900 or larger, mobile at 390×844).
3. Add `index.md`:

```md
---
title: Project name
order: 1                 # position in the list, 1 = top
type: Online shop
year: "2025"
description: One or two sentences.
client: Client name
role: Design, development
url: https://example.com
shots:
  - { src: ./desktop.jpg, alt: "Homepage on desktop" }
  - { src: ./mobile.jpg, alt: "Homepage on mobile", device: mobile }
---
```

Set `placeholder: true` to list a project without giving it a page.

## Where things live

- Colours, dot pattern, type sizes: `src/styles/global.css` (top of file)
- About text: `src/components/About.astro`
- Contact links and toolkit: `src/data/site.ts`
- Old Drupal URL redirects: `astro.config.mjs`
