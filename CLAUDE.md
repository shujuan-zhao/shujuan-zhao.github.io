# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GitHub Pages personal website/blog for Dr. Shujuan Zhao, built using Jekyll static site generator. The site showcases academic research in molecular genetics and genomics, with a focus on rare genetic diseases.

## Jekyll Development Commands

### Local Development
```bash
# Install dependencies
bundle install

# Serve site locally with live reload
bundle exec jekyll serve --livereload

# Build site without serving
bundle exec jekyll build

# Clean build artifacts
bundle exec jekyll clean
```

### Testing & Preview
```bash
# Preview drafts
bundle exec jekyll serve --drafts

# Build for production (sets JEKYLL_ENV=production)
JEKYLL_ENV=production bundle exec jekyll build
```

## Site Architecture

### Content Structure
- `_posts/` - Blog posts in YYYY-MM-DD-title.md format
- `_layouts/` - Jekyll layout templates (default, page, post)
- `_includes/` - Reusable HTML components (sidebar, menu, meta)
- `_sass/` - Sass stylesheets for site appearance
- `assets/` - Static assets (CSS, fonts, FontAwesome, KaTeX)
- `images/` - Image files for the site

### Key Configuration
- `_config.yml` - Main Jekyll configuration
  - Site metadata (title, author, description)
  - Navigation menu structure
  - Social media links
  - Jekyll plugins and theme settings

### Content Pages
- `index.md` - Home page with impactful research summary
- `about.md` - Detailed research interests and background
- `cv.md` - Comprehensive curriculum vitae
- `publications.md` - Curated list of publications with links
- `blog.html` - Blog listing page
- `contact.md` - Contact information

### Navigation Structure
The site features a clean navigation bar with tabs:
- **Home** - Landing page with research impact highlights
- **About** - Research philosophy and interests
- **CV** - Full academic curriculum vitae
- **Publications** - Organized list of papers with metrics
- **Blog** - Scientific blog posts
- **Contact** - Contact details

### Social Media Integration
Enhanced footer with academic profiles:
- Email
- Google Scholar
- ResearchGate
- ORCID
- GitHub
- Twitter
- LinkedIn

## Blog Structure

### Categories
The blog is organized into three categories:
- **Research** (`categories: research`) - Research updates, findings, and scientific discussions
- **Reading** (`categories: reading`) - Book reviews, paper discussions, and literature notes
- **Other** (`categories: other`) - General thoughts and miscellaneous topics

### Category Pages
- `/blog/` - All posts with category navigation
- `/blog/research/` - Research-focused posts
- `/blog/reading/` - Reading notes and reviews
- `/blog/other/` - Other posts

### Jekyll Post Format

Blog posts in `_posts/` should follow this format:
```markdown
---
layout: post
title: "Post Title"
author: Shujuan Zhao
date: YYYY-MM-DD
categories: [research|reading|other]  # Choose one category
mathjax: true  # Optional, for mathematical equations
---

Post content here...
```

## Theme Features

The site uses the Contrast Jekyll theme with:
- Dark mode support
- MathJax/KaTeX for mathematical equations
- Syntax highlighting for code blocks
- Responsive design
- RSS feed generation via jekyll-feed plugin

## Recent Updates (2025-01)

### New Pages Added
- `about.md` - Professional bio with research focus
- `publications.md` - Dedicated publications page
- `blog-research.md` - Research blog category page
- `blog-reading.md` - Reading notes category page
- `blog-other.md` - Other posts category page

### Enhanced Features
- Improved navigation with About tab
- Expanded social media links (added Google Scholar, ResearchGate, ORCID, LinkedIn)
- Redesigned homepage with impact-focused content
- Better organization of research interests
- Blog categorization system with sub-navigation
- Category badges on blog posts
- Example posts for research and reading categories

### Repository Organization
- Created `docs/` directory for documentation and archives
- Added meta files: `.editorconfig`, `.ruby-version`, `CONTRIBUTING.md`
- Enhanced `.gitignore` with comprehensive exclusions
- Added `robots.txt` and `sitemap.xml` for SEO
- Improved configuration with Jekyll Compose defaults

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the repository. The site URL is: https://shujuan-zhao.github.io/

## Development Notes

### Ruby Dependencies
The site uses Ruby gems specified in the Gemfile. Use bundler to manage dependencies rather than installing gems globally.

### Asset Pipeline
- CSS is processed through Jekyll's Sass compiler
- Mathematical equations can be rendered using KaTeX
- FontAwesome icons are available for use

### Branch Strategy
- `master` - Main branch for production site
- `recover-github-edits` - Current working branch