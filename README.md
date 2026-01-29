# Emiliano Garcia Ochoa — Portfolio

Personal portfolio website showcasing ML engineering work, publications, and blog posts. Built with Next.js 16 App Router, React 19, and a file-based MDX content system.

## Overview

A statically-generated portfolio site designed for fast load times and straightforward content management. Content is authored in MDX files with YAML frontmatter, rendered at build time via `next-mdx-remote`. The site includes sections for professional experience, projects, publications, and blog posts.

**Live:** [emilianogarcia.dev](https://emilianogarcia.dev)

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16.1.0 (App Router, Turbopack) |
| Runtime | React 19.2.3 with Server Components |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS 4 with CSS custom properties |
| Content | MDX via next-mdx-remote 5.0.0, gray-matter, remark-gfm |
| UI Primitives | Radix UI (accordion), Lucide React (icons) |
| Fonts | Sora (headings), Inter (body), JetBrains Mono (code) |

## Key Features

- **File-based content system**: MDX files in `content/` with gray-matter frontmatter parsing
- **Static generation**: All content pages pre-rendered at build time
- **IDE-inspired tag colors**: Tags categorized by type (ML, backend, language, database, frontend, ops) with consistent color coding
- **Expandable tag overflow**: Tags grouped by category with +N expansion for dense tag lists
- **Split card interactions**: Card titles link to detail pages; tag sections remain non-navigating for text selection
- **Dark/light theming**: CSS custom properties with `data-theme` attribute switching
- **Custom MDX components**: Callout boxes, figures with captions, metric cards
- **Copy-to-clipboard contact**: Email address with one-click copy functionality

## Project Structure

```
app/
├── layout.tsx              # Root layout with fonts, ThemeProvider, metadata
├── page.tsx                # Homepage: hero, skills, experience, projects
├── globals.css             # CSS custom properties, tag colors, utilities
├── about/page.tsx          # Experience, education, awards
├── blog/
│   ├── page.tsx            # Blog listing
│   └── [slug]/page.tsx     # Blog post detail
├── projects/
│   ├── page.tsx            # Project grid
│   └── [slug]/page.tsx     # Project detail
└── publications/
    ├── page.tsx            # Publication listing
    └── [slug]/page.tsx     # Publication detail

components/
├── NavBar.tsx              # Site navigation
├── Footer.tsx              # Site footer
├── SectionBand.tsx         # Reusable section wrapper with theme variants
├── ProjectCard.tsx         # Project card with split click zones
├── PublicationCard.tsx     # Publication card with abstract toggle
├── TagChip.tsx             # Tag pill with skill-type color variants
├── ExpandableTags.tsx      # Grouped tags with +N overflow expansion
├── EmailContact.tsx        # Email with copy-to-clipboard
├── ExperienceAccordion.tsx # Collapsible experience entries
├── ProjectGrid.tsx         # Responsive project card grid
├── PublicationList.tsx     # Publication card list
├── ThemeProvider.tsx       # Dark/light theme context
└── mdx/
    └── MDXComponents.tsx   # Custom MDX: Callout, Figure, Metric

content/
├── blog/                   # Blog posts (.mdx)
├── projects/               # Project write-ups (.mdx)
└── publications/           # Publication pages (.mdx)

data/
├── skills.json             # Skills with categories
├── experience.json         # Work experience entries
├── education.json          # Education history
└── awards.json             # Awards and recognition

lib/
├── content.ts              # MDX content loading utilities
└── utils.ts                # cn() classname helper
```

## Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
npm install
npm run dev
```

Development server runs at [http://localhost:3000](http://localhost:3000) with Turbopack.

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Content Workflow

### Adding a Project

Create `content/projects/your-project.mdx`:

```mdx
---
title: "Project Title"
summary: "One-line description for cards."
date: "2026-01-28"
tags: ["Python", "FastAPI", "ML Engineering"]
featured: true
---

# Project Title

Your MDX content here.
```

The project appears automatically on `/projects` and the homepage (if `featured: true`).

### Adding a Blog Post

Create `content/blog/your-post.mdx` with the same frontmatter structure. Posts are sorted by date descending on `/blog`.

### Frontmatter Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Display title |
| `summary` | string | One-line description for cards |
| `date` | string | ISO date (YYYY-MM-DD) |
| `tags` | string[] | Array of tags (ordered by importance) |
| `featured` | boolean | Show on homepage |

### Tag Color System

Tags are automatically colored based on keywords:

| Category | Color | Example Tags |
|----------|-------|--------------|
| ML | Orange (#FFB86C) | PyTorch, TensorFlow, RAG, Evaluation |
| Backend | Blue (#82AAFF) | FastAPI, Flask, Node.js, REST |
| Language | Green (#C3E88D) | Python, TypeScript, Rust, Go |
| Database | Coral (#F78C6C) | PostgreSQL, Redis, MongoDB, FAISS |
| Frontend | Purple (#BB80B3) | React, Next.js, Tailwind, CSS |
| Ops | Red (#FF5370) | Docker, Kubernetes, CI/CD, AWS |
| Other | Gray (#7F848E) | Uncategorized tags |

### Custom MDX Components

Available in any MDX file:

```mdx
<Callout type="info">Highlighted information box.</Callout>

<Figure src="/image.png" caption="Figure caption" alt="Alt text" />

<Metric label="Accuracy" value="94.2%" description="On test set" />
```

## Design Decisions

**File-based MDX**: No CMS, no database, no API calls. Content lives in the repository, versioned with git, rendered at build time.

**CSS custom properties over Tailwind themes**: Fine-grained control over color tokens across light/dark modes with a single `data-theme` attribute flip.

**Split card click zones**: Cards link to detail pages, but tags remain selectable text. Title/summary navigates; tag area does not.

**Tag color categorization**: Recruiters scan quickly. Color grouping surfaces relevant skills (ML orange, backend blue) without reading every tag.

## Deployment

The site is configured for static generation. Deploy to any static hosting:

- **Vercel**: Connect repository, automatic deploys
- **Netlify**: Build command `npm run build`, publish directory `.next`
- **GitHub Pages**: Requires `output: 'export'` in next.config.ts

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.