# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A React 18 + Vite single-page marketing site for **Quality Consulting**, an ISO certification consultancy in Gujarat, India. It is a static content site (no backend) — the only outbound integration is EmailJS from the enquiry form.

## Styling & animation stack

- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin. Theme tokens (brand/ink color scales, fonts, shadows) are defined in [src/index.css](src/index.css) inside `@theme { … }`. Component-level utility shortcuts live in `@layer components` (e.g. `.container-x`, `.btn-primary`, `.eyebrow`, `.float-field`, `.marquee`, `.rich`). There is no `tailwind.config.js` — v4 is CSS-first.
- **GSAP** + **ScrollTrigger** for animations. Registered once in [src/main.jsx](src/main.jsx); component effects use `gsap.context(... , rootRef)` and `ScrollTrigger` for reveal-on-scroll. The pattern is to add `.reveal-up` / `.reveal-stagger` classes and let the parent's effect animate descendants.
- **react-hook-form** drives the enquiry form ([src/components/form.jsx](src/components/form.jsx)) with `mode: "onTouched"` validation. The form still submits via EmailJS — `emailjs.sendForm(form.current, ...)` reads the underlying `<form ref>`, so each registered input must keep its `name`.
- The old per-component CSS files in `src/components/css/` are gone — everything is Tailwind utilities + the small set of helpers in [src/index.css](src/index.css).

## Commands

```bash
npm run dev      # Vite dev server with HMR
npm run build    # Production build to ./dist
npm run preview  # Preview the production build
npm run lint     # ESLint over the whole tree (flat config in eslint.config.js)
```

There is no test runner configured. There is no TypeScript — the project is plain `.jsx` despite `@types/react` being installed.

## Architecture

### Routing shell

[src/App.jsx](src/App.jsx) defines all routes inside a `BrowserRouter`. Every page is rendered as a child of `<Header />`, which itself renders `<Nav />`, `<Outlet />`, and `<Footer />` — so [src/components/header.jsx](src/components/header.jsx) is the persistent app shell, not just a nav bar. Adding a new page means adding a `<Route>` under the `<Route element={<Header />}>` parent so the shell stays mounted.

### The data-driven service-page pattern

The most important pattern in this codebase is how service detail pages work — three files coordinate and **all three must stay in sync** when adding or renaming a service:

1. [src/components/services-data.js](src/components/services-data.js) — the canonical `SERVICES` array (slug, title, category, subtitle, image). Both the services grid and the service detail page import this list.
2. [src/components/data.json](src/components/data.json) — top-level keys must match `SERVICES[i].slug` exactly. Each value is an array of content blocks.
3. [src/components/servicepage.jsx](src/components/servicepage.jsx) — reads `data[id]` via `useParams()` and renders each block via `<ContentBlock>` switching on `block.class`. Looks up service metadata (title/category/image) from `SERVICES` for the hero.

A content block has the shape `{ class, heading, para, list, image }`. The `class` field selects the renderer branch. Supported values: `h-para`, `h-para sub-head`, `para`, `h-list`, `h-list sub-list`, `simplelist`, `image-para`. An unknown `class` silently renders nothing. When `image` is set it must be a path under `/public` (served from site root, e.g. `/BRC.jpg`).

The renderer auto-builds a sticky table-of-contents sidebar from "main heading" blocks (`h-para`, `image-para`, `h-list` with a heading) — IDs are slugified from `heading` text. Image-para blocks alternate left/right per occurrence. If `useParams()` produces a slug not in `data.json`, the page renders a styled 404 panel ("Data not found" string is gone).

**Slug note:** the ISO 9001 service is keyed as `profile` (legacy), not `iso9001`. Other slugs are conventional (`iso14001`, `iso22000`, `iso45001`, etc.). The earlier typo slugs `is014001` / `is022000` were corrected.

### Assets — two locations, different rules

- **[public/](public/)** holds service thumbnails and content images referenced by **string paths** (e.g. `/BRC.jpg` in `data.json` and `services.jsx`). The [src/components/gallery.jsx](src/components/gallery.jsx) page also loops over `public/` files numerically (`${i+3}.jpg` through `21.jpg`), so renaming or reordering those numbered files will break the gallery.
- **[src/assets/](src/assets/)** holds images that are **imported** (bundled, hashed). The home page uses `import.meta.glob(..., { eager: true })` to discover slider and client logos at module load — drop a new file in `src/assets/slider/` and it appears in the marquee automatically (sorted by the leading number, `* - Copy.*` filenames are filtered out). Industry-card images in `src/assets/client/` are keyed by an explicit list in [home.jsx](src/components/home.jsx); add new keys there when adding industries.

### Forms / email

[src/components/form.jsx](src/components/form.jsx) uses **react-hook-form** for client-side validation, then calls `emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)`. Important: react-hook-form's `register("name")` is what wires inputs into both validation and the DOM `name` attribute that EmailJS reads — don't swap to a custom `<Controller>` setup without preserving `name`. Credentials live in the `EMAILJS` const at the top of the file. `resend` is listed in `package.json` but is not currently imported.

## Conventions worth knowing

- Components default-export a function named like the file (PascalCase function, lowercase filename).
- Use named React hook imports (`import { useEffect } from "react"`), not `React.useEffect` — the lint rule for unused `React` import will fire.
- Non-component constants must live outside `.jsx` files used as routes, or hot-reload warns. See `services-data.js` for the pattern.
- ESLint flat config in [eslint.config.js](eslint.config.js) disables `react/prop-types` (no PropTypes/TS in this project) and `react/jsx-no-target-blank`; keep `rel="noopener noreferrer"` manually on outbound links.
