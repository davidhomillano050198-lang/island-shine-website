# Island Shine — Cleaning, Painting & Renovation Website

Marketing website for **Island Shine Cleaning Services & Renovation**, a Penang-based company offering building painting, renovation and professional cleaning across Penang, Butterworth and Kulim.

**Live site:** https://islandshine.com.my

Built as a freelance client project: a full redesign of the company's old static site into a fast, modern, mobile-first site that pushes visitors to request a quote on WhatsApp.

## Highlights

- **Static-first, very fast:** built with Astro, which ships almost no JavaScript by default. Pages are pre-rendered and served from Cloudflare Pages.
- **Interactive 3D hero:** a Three.js / `<model-viewer>` scene with a shader-based animated background, loaded only where it's needed.
- **Smooth scrolling and storytelling sections:** Lenis smooth scroll, plus a carousel, journey/story sections and a marquee.
- **Conversion-focused:** a floating WhatsApp button, prefilled click-to-chat links, a quote form and CTA bands on every page.
- **One source of truth for content:** services, testimonials and contact details live in typed data files (`src/data/*.ts`), so a content change doesn't mean editing components.
- **SEO ready:** sitemap generation, `robots.txt`, Open Graph image and a page per service.
- **Responsive design system:** Tailwind CSS v4 with brand tokens and self-hosted fonts (Fontsource).

## Tech stack

| Area | Tools |
|---|---|
| Framework | [Astro](https://astro.build) 7 |
| Styling | Tailwind CSS 4, custom brand tokens |
| 3D / motion | Three.js, `@google/model-viewer`, Lenis, GLSL shader background |
| Icons and fonts | astro-icon (Tabler), Fontsource |
| Language | TypeScript |
| Hosting | Cloudflare Pages, custom domain |

## Pages

Home · Services (8 service pages: building painting, renovation, post-renovation cleaning, carpet, contract, factory/industrial, high-rise, landscaping) · How We Work · Gallery · Reviews · About · Contact

## Project structure

```
src/
  components/   Reusable UI (Header, Footer, Hero3D, QuoteForm, WhatsAppButton, ...)
  data/         site.ts, services.ts, testimonials.ts (content lives here)
  layouts/      Base layout (SEO meta, fonts, scripts)
  lib/          Image helpers
  pages/        File-based routes, including /services/[service]
  styles/       Tailwind entry and brand tokens
public/         Static assets, 3D models, favicon, OG image
```

## Run locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Author

**David Homillano**, Full-Stack Developer (Java Spring Boot · React/Next.js · Astro · Supabase)
[LinkedIn](https://www.linkedin.com/in/david-homillano-818a21349/)
