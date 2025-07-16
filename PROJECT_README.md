# 🧬 shujuan-zhao.github.io - Project Maintainer Guide

> **Internal documentation for repository maintainers and contributors**  
> Last updated: January 2025

## 📋 Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Architecture](#architecture)
- [Development Workflow](#development-workflow)
- [Content Management](#content-management)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Performance Optimization](#performance-optimization)
- [Security Considerations](#security-considerations)
- [Maintenance Schedule](#maintenance-schedule)
- [Emergency Procedures](#emergency-procedures)

---

## 🎯 Overview

This repository hosts Dr. Shujuan Zhao's academic portfolio website, built with Jekyll and deployed via GitHub Pages. The site serves as a professional presence showcasing research in molecular genetics and genomics.

### Key Metrics
- **Technology**: Jekyll 4.x + GitHub Pages
- **Theme**: Contrast (customized)
- **Deploy Time**: ~2-3 minutes
- **Build Time**: ~10-15 seconds locally
- **Dependencies**: Ruby 2.7+, Bundler 2.x
- **Primary Branch**: `master` (production)
- **Analytics**: Google Analytics (if configured)

### Repository Structure
```
shujuan-zhao.github.io/
├── _config.yml          # ⚙️ Main configuration
├── _posts/              # 📝 Blog posts (YYYY-MM-DD-title.md)
├── _layouts/            # 🎨 Page templates
├── _includes/           # 🧩 Reusable components
├── _sass/               # 💅 Stylesheets (Sass)
├── assets/              # 📦 Static assets (CSS, JS, fonts)
│   ├── css/             # Compiled stylesheets
│   ├── fonts/           # Web fonts (PTSans)
│   ├── fontawesome/     # Icon library
│   └── katex/           # Math rendering
├── images/              # 🖼️ Image assets
├── docs/                # 📂 Documentation & archives
│   ├── cv_backup.md     # CV backup
│   ├── example-posts/   # Example Jekyll posts
│   ├── google_result.md # Research profile
│   └── progress.md      # Development log
├── _pages/              # 📄 Static pages (future use)
├── about.md             # 👤 About page
├── cv.md                # 📄 Curriculum vitae
├── publications.md      # 📚 Publications list
├── blog.md              # 📰 Main blog page
├── blog-*.md            # 📑 Blog category pages
├── contact.md           # 📧 Contact page
├── index.md             # 🏠 Homepage
├── 404.html             # ❌ Error page
├── archive.html         # 📚 Blog archive
├── .editorconfig        # ✏️ Editor configuration
├── .gitignore           # 🚫 Git ignore rules
├── .ruby-version        # 💎 Ruby version
├── CLAUDE.md            # 🤖 AI assistant context
├── CONTRIBUTING.md      # 🤝 Contribution guide
├── Gemfile              # 💎 Ruby dependencies
├── humans.txt           # 👥 Credits
├── LICENSE              # ⚖️ License file
├── PROJECT_README.md    # 📖 This file
├── README.md            # 📄 Public readme
├── robots.txt           # 🤖 Search engine rules
└── sitemap.xml          # 🗺️ XML sitemap
```

---

## 🚀 Quick Start

### Prerequisites
```bash
# Check Ruby version (2.7+ required)
ruby -v

# Check Bundler
gem install bundler
```

### Local Development Setup
```bash
# Clone repository
git clone https://github.com/shujuan-zhao/shujuan-zhao.github.io.git
cd shujuan-zhao.github.io

# Install dependencies
bundle install

# Start local server
bundle exec jekyll serve --livereload

# View at http://localhost:4000
```

### Quick Commands
| Task | Command |
|------|---------|
| Build site | `bundle exec jekyll build` |
| Serve locally | `bundle exec jekyll serve` |
| Clean build | `bundle exec jekyll clean` |
| Update gems | `bundle update` |
| Check links | `bundle exec htmlproofer ./_site` |

---

## 🏗️ Architecture

### Technology Stack
```
┌─────────────────┐
│   GitHub Pages  │ ← Deployment Platform
├─────────────────┤
│     Jekyll      │ ← Static Site Generator
├─────────────────┤
│  Contrast Theme │ ← UI Framework
├─────────────────┤
│ HTML/Sass/Liquid│ ← Core Technologies
└─────────────────┘
```

### Data Flow
```mermaid
graph LR
    A[Markdown Files] --> B[Jekyll Build]
    B --> C[Static HTML]
    C --> D[GitHub Pages]
    D --> E[CloudFlare CDN]
    E --> F[Visitors]
```

### Key Components

#### 1. Navigation System
- **Primary**: Home → About → CV → Publications → Blog → Contact
- **Blog Sub-nav**: All Posts → Research → Reading Notes → Other
- **Social Footer**: Email, Google Scholar, ResearchGate, ORCID, GitHub, Twitter, LinkedIn

#### 2. Content Types
- **Static Pages**: Home, About, CV, Contact
- **Dynamic Content**: Blog posts with categories
- **External Links**: Publications, social profiles

#### 3. Styling Architecture
- Base theme: Contrast
- Custom overrides in `_sass/`
- Responsive breakpoints: 768px, 1024px
- Dark mode support built-in

---

## 🔄 Development Workflow

### Branch Strategy
```
master (production)
  ├── feature/new-content
  ├── fix/bug-description
  └── update/dependency-name
```

### Content Development Process

#### 1. Adding a New Blog Post
```bash
# Create post with proper naming
touch _posts/YYYY-MM-DD-post-title.md

# Add front matter
---
title: "Your Post Title"
layout: post
categories: [research|reading|other]
author: Shujuan Zhao
mathjax: true  # if using equations
---

# Test locally
bundle exec jekyll serve
```

#### 2. Adding a New Page
```bash
# Create page
touch new-page.md

# Add to navigation in _config.yml
navigation:
  - {file: "new-page.md", title: "New Page"}
```

#### 3. Updating Publications
1. Edit `publications.md`
2. Follow existing format
3. Update citation counts
4. Add DOI links when available

### Code Style Guide
- **Markdown**: Use reference-style links for readability
- **YAML**: 2-space indentation
- **HTML**: Semantic markup, accessibility-first
- **File names**: Lowercase with hyphens

---

## 📝 Content Management

### Blog Post Categories
| Category | Purpose | Example Topics |
|----------|---------|----------------|
| `research` | Scientific updates | Papers, findings, methods |
| `reading` | Literature reviews | Book/paper discussions |
| `other` | General content | Thoughts, announcements |

### SEO Optimization
```yaml
# In post front matter
title: "Descriptive Title with Keywords"
description: "150-160 character meta description"
keywords: "genetics, VOGM, research"
image: "/images/post-preview.jpg"  # for social sharing
```

### Image Guidelines
- **Format**: WebP preferred, PNG/JPG fallback
- **Size**: Max 1MB, optimize with `imageoptim`
- **Naming**: `descriptive-name-YYYY-MM.ext`
- **Alt text**: Always required for accessibility

### Content Calendar
- **Research posts**: After major publications
- **Reading notes**: Monthly book/paper review
- **Updates**: Quarterly research progress

---

## 🚢 Deployment

### Automatic Deployment
Pushing to `master` triggers automatic GitHub Pages build.

```bash
# Standard deployment
git add .
git commit -m "feat: add new publication"
git push origin master

# Monitor deployment
# Visit: https://github.com/shujuan-zhao/shujuan-zhao.github.io/actions
```

### Manual Build Testing
```bash
# Test production build locally
JEKYLL_ENV=production bundle exec jekyll build
cd _site && python -m http.server 8000
```

### Pre-deployment Checklist
- [ ] Run local build without errors
- [ ] Check all internal links work
- [ ] Validate HTML with W3C validator
- [ ] Test responsive design
- [ ] Verify images are optimized
- [ ] Update `last_modified` dates

---

## 🔧 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and rebuild
bundle exec jekyll clean
rm -rf .jekyll-cache
bundle install
bundle exec jekyll build --verbose
```

#### Dependency Conflicts
```bash
# Reset Gemfile.lock
rm Gemfile.lock
bundle install
```

#### Page Not Updating
1. Check GitHub Pages build status
2. Clear browser cache
3. Wait 10 minutes (CDN propagation)
4. Check `_config.yml` for errors

### Debug Mode
```yaml
# In _config.yml
debug: true
verbose: true
```

---

## ⚡ Performance Optimization

### Current Performance Metrics
- **Lighthouse Score**: Target 90+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s

### Optimization Strategies

#### 1. Asset Optimization
```bash
# Compress images
find images/ -name "*.jpg" -exec jpegoptim {} \;
find images/ -name "*.png" -exec optipng {} \;
```

#### 2. Critical CSS
```html
<!-- In _includes/head.html -->
<style>
  /* Inline critical CSS here */
</style>
<link rel="preload" href="/assets/css/style.css" as="style">
```

#### 3. Lazy Loading
```html
<!-- For images below fold -->
<img loading="lazy" src="image.jpg" alt="Description">
```

### Monitoring
- Google PageSpeed Insights
- WebPageTest.org
- Chrome DevTools Lighthouse

---

## 🔒 Security Considerations

### Dependency Management
```bash
# Regular security updates
bundle audit check
bundle audit update

# Check for outdated gems
bundle outdated
```

### Content Security
- No API keys in repository
- Use environment variables for sensitive data
- Enable Dependabot alerts
- Regular dependency updates

### HTTPS Configuration
- Enforced by GitHub Pages
- Check SSL certificate validity
- Monitor for mixed content warnings

---

## 📅 Maintenance Schedule

### Daily
- Monitor site availability
- Check for security alerts

### Weekly
- Review analytics (if configured)
- Update publication metrics
- Check for broken links

### Monthly
- Update dependencies
- Full site backup
- Performance audit
- Content review

### Quarterly
- Major dependency updates
- Theme updates
- SEO audit
- Accessibility check

---

## 🚨 Emergency Procedures

### Site Down
1. Check GitHub Status: https://www.githubstatus.com/
2. Verify DNS settings
3. Check repository settings
4. Contact GitHub Support if needed

### Rollback Procedure
```bash
# Find last working commit
git log --oneline

# Revert to specific commit
git revert <commit-hash>
git push origin master
```

### Emergency Contacts
- GitHub Pages Support: https://support.github.com/
- Domain Registrar: [Your registrar]
- CDN Support: [If using custom CDN]

---

## 📚 Additional Resources

### Documentation
- [Jekyll Docs](https://jekyllrb.com/docs/)
- [GitHub Pages Docs](https://docs.github.com/pages)
- [Liquid Template Docs](https://shopify.github.io/liquid/)

### Tools
- [Jekyll SEO Tag](https://github.com/jekyll/jekyll-seo-tag)
- [Jekyll Sitemap](https://github.com/jekyll/jekyll-sitemap)
- [HTML Proofer](https://github.com/gjtorikian/html-proofer)

### Community
- Jekyll Talk Forum
- GitHub Pages Community
- Stack Overflow: [jekyll] tag

---

## 🎯 Future Enhancements

### Planned Features
- [ ] Publication PDF hosting
- [ ] Research project galleries
- [ ] Newsletter integration
- [ ] Multi-language support
- [ ] Advanced search functionality
- [ ] Citation export tools

### Technical Debt
- [ ] Migrate to Jekyll 4.3+
- [ ] Implement service worker
- [ ] Add structured data (JSON-LD)
- [ ] Optimize font loading
- [ ] Implement image CDN

---

## 📝 Version History

| Version | Date | Changes |
|---------|------|---------|
| 2.0.0 | 2025-01 | Major redesign with categories |
| 1.0.0 | 2024-03 | Initial Jekyll setup |

---

## 🤝 Contributing

While this is a personal website, bug reports and suggestions are welcome:

1. Check existing issues
2. Open new issue with clear description
3. Include steps to reproduce (for bugs)
4. Suggest solution if possible

---

## 📄 License

This project's code is available under MIT License. Content (posts, CV, etc.) remains copyright of Shujuan Zhao.

---

*Generated with ❤️ for maintainers who care about quality*