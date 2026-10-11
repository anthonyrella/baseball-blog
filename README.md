# Tales from the Ballpark

A personal blog about baseball: stories, reflections, articles, book news, and answers to reader questions.

Built with [Astro](https://astro.build) as a fully static site. Posts are Markdown files, and a browser-based editor ([Sveltia CMS](https://sveltiacms.app)) at `/admin` lets authors write without touching code.

## Features

- Posts organized by category, with RSS feed and sitemap
- Books page for published and upcoming titles
- Reader Q&A with a question form
- Editable About page
- Fast, accessible pages with no client-side framework

## Getting started

Requires Node 22 or newer.

```sh
npm install
npm run dev      # start a local server at http://localhost:4321
npm run build    # build the site into dist/
npm run preview  # preview the production build
npm run check    # type-check
npm run format   # format with Prettier
```

## Project structure

```
public/
  admin/            Editor (Sveltia CMS) and its configuration
  images/           Static images and editor uploads
src/
  content/          Markdown content: posts, books, questions, pages
  components/       Reusable UI components
  layouts/          Page layouts
  pages/            Routes
  styles/           Global styles and theme
  site.config.ts    Site name, navigation, and categories
```

## Writing content

Content lives in `src/content/` as Markdown with frontmatter, validated by the schemas in `src/content.config.ts`. You can edit these files directly, or use the editor at `/admin`.

To use the editor locally, run `npm run dev`, open `http://localhost:4321/admin/` in Chrome or Edge, and choose **Work with Local Repository**.

## Deployment

The build output in `dist/` is plain static files and can be hosted anywhere. This site is deployed on Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`

## License

All written content is © its author. All rights reserved.
