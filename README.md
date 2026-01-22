# Emiliano Garcia's Portfolio

A minimal, performance-first personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed to showcase projects, blog posts, and publications with a focus on clean design and fast load times.

**Live:** [emilianogarcia.com](https://emilianogarcia.com)

## Overview

This is a personal portfolio site that serves as a curated space to share projects, ideas, and research. The site emphasizes simplicity, maintainability, and developer experience through:

- **File-based content** using MDX for blog posts, projects, and publications
- **Zero-database architecture** — all content lives in version-controlled files
- **Modular components** for reusability and consistent design
- **Fast builds** powered by Next.js 16 with Turbopack
- **Type-safe** throughout with TypeScript

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Content:** MDX with `next-mdx-remote`
- **Frontmatter:** `gray-matter`
- **Markdown Parsing:** `remark-gfm`
- **UI Icons:** Lucide React
- **Dev Tools:** ESLint, TypeScript

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
cd code
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
portfolio/
├── code/                         # Next.js application
│   ├── app/                      # App Router
│   │   ├── blog/                 # Blog posts
│   │   ├── projects/             # Project case studies
│   │   ├── publications/         # Publications
│   │   └── page.tsx              # Homepage
│   ├── components/               # Reusable React components
│   ├── content/                  # MDX content files
│   ├── data/                     # JSON data
│   ├── lib/                      # Utilities
│   ├── public/                   # Static assets & resume.pdf
│   ├── next.config.ts
│   ├── tsconfig.json
│   └── package.json
└── README.md                     # This file
```

## Adding Content

### New Blog Post

Create a file in `code/content/blog/` with frontmatter:

```mdx
---
title: "Post Title"
summary: "Brief summary"
date: "2026-01-22"
tags: ["tag1", "tag2"]
---

# Post Title

Your content in markdown...
```

### New Project

Create a file in `code/content/projects/`:

```mdx
---
title: "Project Name"
problem: "What problem does it solve?"
approach: "How did you approach it?"
result: "What was the outcome?"
date: "2026-01-22"
tags: ["Python", "ML"]
featured: true
---

# Project Name

Detailed project description...
```

## Features

- **Dynamic content loading** — add blog posts/projects as MDX files
- **Dark/light theme toggle** — built-in theme support
- **Responsive design** — works on mobile, tablet, desktop
- **SEO optimized** — with next-seo configuration
- **Fast performance** — static generation, minimal dependencies
- **GitHub Flavored Markdown** — tables, code blocks, strikethrough

## Customization

Edit these files to customize:
- `code/app/globals.css` — Colors and theme
- `code/components/NavBar.tsx` — Navigation links
- `code/data/` — Skills, experience, education
- `code/content/` — Blog posts, projects, publications

## Deployment

The site is optimized for deployment on:
- **Vercel** (recommended — native Next.js support)
- **Netlify**
- **GitHub Pages**
- Any Node.js hosting provider

## License

MIT License — feel free to use this as a template for your own portfolio.

---

Built with care to balance simplicity, performance, and beautiful design.
