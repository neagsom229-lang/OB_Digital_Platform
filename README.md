# DigitalOB Hub

DigitalOB Hub is a responsive learning and operations platform for organizational behavior in distributed, hybrid, and AI-enabled workplaces.

> Screenshot placeholder: add desktop and mobile captures in `docs/images/`.

## Features

- **12-lesson curriculum** with summaries, key takeaways, difficulty, estimated reading time, and searchable topic tags.
- **Digital OB lexicon** with client-side search and category filters.
- **Team charter generator** for working agreements and Markdown export.
- **Team health audit** with a reflective six-dimension assessment and visual results.
- **Research and frameworks** covering the five pillars, leadership playbook, comparisons, and academic sources.
- **Light and dark themes** that follow the system preference by default and remember a manual selection.
- Responsive layouts, accessible keyboard states, reduced-motion support, route-level loading, and a not-found page.

## Tech stack

- React 19 and React Router
- Vite 5
- Tailwind CSS 4
- Recharts for the audit visualization
- Framer Motion and Lucide React

## Requirements

- Node.js 20 or newer
- npm

## Setup

```bash
git clone https://github.com/neagsom229-lang/OB_Digital_Platform.git
cd OB_Digital_Platform
npm install
npm run dev
```

Vite prints the local URL when the development server is ready.

## Scripts

```bash
npm run dev          # Start the local development server
npm run build        # Create the production build in dist/
npm run preview      # Preview the production build
npm run lint         # Run ESLint
npm run format       # Format application source, config, and documentation
npm run format:check # Check formatting without changing files
```

## Project structure

```text
src/
  components/
    audit/       Team health assessment and charts
    charter/     Working agreement builder
    curriculum/  Lesson discovery and reader
    home/        Overview, pillars, and playbook
    layout/      Header, navigation, page shell, and route states
    lexicon/     Searchable term library
    ui/          Shared interface components
  context/       Theme and toast providers
  data/          Curriculum, lexicon, assessment, and reference content
  hooks/         Browser interaction helpers
  utils/         Scoring, downloads, and document generation
```

Curriculum content lives in `src/data/curriculum.js`. Its JSDoc schema documents the lesson fields used by the curriculum cards and reader.

## Screenshots

Add current desktop and mobile screenshots in `docs/images/` and replace the placeholder above.

## Deployment

Run `npm run build` and deploy the generated `dist/` directory to a static host. Configure the host to serve `index.html` for application routes so direct links continue to work.

## Content note

The audit is a reflective team discussion tool, not a clinical or psychometrically validated instrument. Lesson summaries are educational material and do not replace reading the cited original research.
