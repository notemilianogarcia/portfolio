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
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   ├── blog/
│   │   ├── page.tsx              # Blog list
│   │   └── [slug]/page.tsx       # Blog post
│   ├── projects/
│   │   ├── page.tsx              # Projects grid
│   │   └── [slug]/page.tsx       # Project details
│   ├── publications/
│   │   ├── page.tsx              # Publications list
│   │   └── [slug]/page.tsx       # Publication details
│   └── about/page.tsx            # About page
│
├── components/                   # Reusable React components
│   ├── NavBar.tsx                # Navigation header
│   ├── Footer.tsx                # Footer
│   ├── ProjectCard.tsx           # Project card display (split click zones)
│   ├── SectionBand.tsx           # Section wrapper
│   ├── TagChip.tsx               # Tag/chip component with color variants
│   ├── ExpandableTags.tsx        # Expandable tag display with +N overflow
│   ├── PublicationCard.tsx       # Publication card with PDF link
│   ├── EmailContact.tsx          # Email with copy-to-clipboard button
│   ├── ThemeProvider.tsx         # Dark/light theme
│   ├── mdx/
│   │   └── MDXComponents.tsx     # Markdown element mappings
│   └── widgets/                  # Custom interactive components
│
├── content/                      # Content files (MDX)
│   ├── blog/                     # Blog posts
│   ├── projects/                 # Project case studies
│   └── publications/             # Publication links
│
├── data/                         # JSON data files
│   ├── skills.json
│   ├── experience.json
│   ├── education.json
│   └── awards.json
│
├── lib/                          # Utilities and helpers
│   ├── content.ts                # Content loader
│   └── utils.ts                  # Utility functions
│
├── public/                       # Static assets
│   ├── logos/
│   ├── resume.pdf                # Resume (download link)
│   └── illustration-home.svg
│
├── next.config.ts                # Next.js config
├── tailwind.config.mjs            # Tailwind config
├── tsconfig.json                 # TypeScript config
└── package.json                  # Dependencies
```

## Adding Content

### New Blog Post

Create a file in `content/blog/` with frontmatter and MDX:

```mdx
---
title: "Post Title"
summary: "Brief summary for the blog list"
date: "2026-01-22"
tags: ["tag1", "tag2"]
---

# Post Title

Your content in markdown...
```

### New Project

Create a file in `content/projects/` with frontmatter:

```mdx
---
title: "Project Name"
summary: "Concise one-sentence overview of the project."
date: "2026-01-22"
tags: ["Python", "RAG", "ML"]
featured: true
---

# Project Name

Detailed project description...
```

### New Publication

Create a file in `content/publications/` following the same pattern.

## Frontmatter Fields

### Blog Posts
- `title` — Post title
- `summary` — Short description
- `date` — ISO date (YYYY-MM-DD)
- `tags` — Array of tags

### Projects
- `title` — Project name
- `summary` — One-sentence project summary (replaces problem/approach/result)
- `date` — ISO date
- `tags` — Array of tags (ordered by recruiter importance)
- `featured` — Boolean (shows on homepage)

### Publications
- `title` — Publication title
- `authors` — Array of authors
- `date` — ISO date
- `url` — Link to paper/resource
- `summary` — Abstract/summary
- `tags` — Array of tags
- `featured` — Boolean (shows on homepage)

## Markdown Support

The site supports GitHub Flavored Markdown including:
- Tables
- Strikethrough
- Task lists
- Code blocks with syntax highlighting

Custom MDX components available:
- `<Callout type="info|warning|success">` — Highlighted callout boxes
- `<Figure src="/path" caption="..." alt="..." />` — Figures with captions
- `<Metric label="..." value="..." description="..." />` — Metric display

## Features

### Tags System
- **Color-grouped tags** — Tags are organized by type (ML, Backend, Frontend, Language, Database, Ops, Other)
- **Expandable tags** — Cards show 4 initial tags; additional tags display via "+N" button
- **Tag display** — All tags visible on detail pages (projects, blog, publications)
- **Recruiter-focused** — Tags ordered by importance, not implementation detail

### Interactive Elements
- **Split card interactions** — Top (title/summary) clickable to detail page; bottom (tags) non-interactive
- **Copy email button** — One-click email copy to clipboard on homepage
- **Hover states** — Consistent cursor styles and visual feedback



Edit `app/globals.css` to modify the color palette. The site supports dark and light modes.

### Navigation

Update `navLinks` in `components/NavBar.tsx` to add/remove navigation items.

### Data Files

Edit JSON files in `data/` to update:
- Skills and categories
- Work experience
- Education
- Awards

## Performance

- **Next.js 16 + Turbopack** for fast builds
- **App Router** for efficient code splitting
- **Static generation** for all content pages
- **Optimized images** with next/image
- **Minimal dependencies** to keep bundle size small

## Deployment

The site is optimized for deployment on:
- **Vercel** (recommended — native Next.js support)
- **Netlify**
- **GitHub Pages**
- Any Node.js hosting provider

## License

MIT License — feel free to use this as a template for your own portfolio.

## Contributing

This is a personal portfolio, but the code is open for reference and learning. Fork and adapt as needed!

---

Built with care to balance simplicity, performance, and beautiful design. Questions? Feel free to reach out.
