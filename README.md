# siren-farm.com

The Siren website. Static site, built with [Astro](https://astro.build) and
Tailwind CSS v4.

## Requirements

Node 20 or newer and [pnpm](https://pnpm.io). This project is pnpm only; there
is no `package-lock.json`, and installing with npm will produce a tree that does
not match the lockfile.

## Commands

```sh
pnpm install     # install dependencies
pnpm dev         # local dev server at http://localhost:4321
pnpm build       # production build into ./dist
pnpm preview     # serve the production build locally
```

## Structure

```
src/
  assets/        images, plus assets/partners/ for partner logos
  components/    page sections and shared UI
  layouts/       Layout.astro: head, metadata, structured data
  pages/         one file per route
  styles/        global.css, design tokens
public/          files served as-is, including og-cover.png and robots.txt
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages at https://siren-farm.com. There is no manual
deploy step. The custom domain is configured in the repository settings, so the
repo contains no `CNAME` file.

## Editing copy

Page copy lives in the component that renders it, usually as an array at the top
of the `.astro` file. Several components carry comments recording wording that
must not be changed without checking first, for example how the INFARMED
cultivation licence is described. Read those comments before editing the copy
around them.
