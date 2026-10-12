# siren-farm.com

The Siren website. Static site, built with [Astro](https://astro.build) and
Tailwind CSS v4.

## Commands

pnpm only. There is no `package-lock.json`, and installing with npm produces a
tree that does not match the lockfile.

```sh
pnpm install     # install dependencies
pnpm dev         # local dev server at http://localhost:4321
pnpm build       # production build into ./dist
pnpm preview     # serve the production build locally
```

## Where things live

```
src/
  data/facts.ts  figures and legal details used across the site
  assets/        images, plus assets/partners/ for partner logos
  components/    page sections and shared UI
  layouts/       Layout.astro: head, metadata, structured data
  pages/         one file per route
  styles/        global.css, design tokens
public/          served as-is, including og-cover.png and robots.txt
```

**Facts live in `src/data/facts.ts`.** Any figure that appears in more than one
place is read from there, so it is changed once. Do not hard-code it into a
component.

## Deployment

Merging to `main` builds the site and publishes it to GitHub Pages at
https://siren-farm.com. A merge is a publish; there is no separate deploy step.
The custom domain is set in the repository settings, so there is no `CNAME`
file.

## Editing copy

Page copy lives in the component that renders it, usually as an array at the
top of the `.astro` file. Several components carry comments recording wording
that must not change without checking, for example how the INFARMED cultivation
licence is described. Read those comments before editing the copy around them.
