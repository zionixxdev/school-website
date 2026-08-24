# Ridhima World School — Official Website

A modern, responsive, multi-page website for **Ridhima World School, Mainpuri** — a CBSE-affiliated co-educational school established in 2022.

## Overview

This repository contains the complete static website for Ridhima World School, built with semantic HTML5, a custom CSS design system, and vanilla JavaScript. No frameworks, no build step — just clean, fast, accessible web pages.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Landing page with hero, quick info, about preview, principal's message, stats, programs, facilities, news, events, gallery, testimonials, and CTA |
| About | `about.html` | School story, vision/mission/values, principal's message, stats, and milestones timeline |
| Academics | `academics.html` | Academic programs (Primary to Senior Secondary), subjects, teaching methodology, and academic calendar |
| Admissions | `admissions.html` | Admission process, required documents, enquiry form, and fee structure |
| Faculty | `faculty.html` | Faculty directory with department filters |
| Facilities | `facilities.html` | Campus facilities grid and safety measures |
| Gallery | `gallery.html` | Filterable photo gallery with lightbox |
| Events | `events.html` | Upcoming and past events |
| Notice Board | `notices.html` | Searchable and filterable notices |
| Achievements | `achievements.html` | Awards, stats, and year-wise highlights timeline |
| Contact | `contact.html` | Contact form, info, map, and FAQ accordion |
| Portal | `portal.html` | Student/Parent/Staff login tabs (demo) |

## Project Structure

```
school-website/
├── index.html
├── about.html
├── academics.html
├── admissions.html
├── faculty.html
├── facilities.html
├── gallery.html
├── events.html
├── notices.html
├── achievements.html
├── contact.html
├── portal.html
├── sitemap.xml
├── robots.txt
├── .gitignore
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── favicon.svg
├── images/
└── .github/
    └── workflows/
        └── deploy.yml
```

## Design System

- **Color Palette:** Navy (`#0a1f44`), Blue (`#1e40af`), Gold (`#d4af37`), White
- **Typography:** Poppins (headings), Inter (body) — loaded from Google Fonts
- **Responsive Breakpoints:** 480px, 768px, 1024px
- **CSS Variables:** All colors, spacing, radius, and shadows defined as CSS custom properties for easy theming

## Features

- **Responsive Design** — Mobile-first, works seamlessly across all devices
- **Accessible** — Skip links, ARIA labels, semantic HTML, keyboard navigation
- **Mobile Menu** — Hamburger toggle with smooth animations
- **Scroll Animations** — IntersectionObserver-powered fade-in, slide-in, and scale-in effects
- **Animated Counters** — Stats count up when scrolled into view
- **Gallery** — Category filtering with lightbox viewer (keyboard accessible)
- **Testimonials Slider** — Auto-playing with manual navigation and dots
- **Faculty Filters** — Filter by department
- **Notice Board** — Live search and category filtering
- **FAQ Accordion** — Smooth expand/collapse
- **Portal Tabs** — Student/Parent/Staff login panels
- **Forms** — Demo submission with success feedback
- **Scroll-to-Top** — Appears on scroll
- **Active Nav** — Highlights current page
- **SEO** — Meta tags, Open Graph, JSON-LD structured data, sitemap, robots.txt

## Deployment

The site is configured for **GitHub Pages** deployment via GitHub Actions (`.github/workflows/deploy.yml`). Pushing to the `main` branch triggers automatic deployment.

### Local Development

No build step required. Simply open `index.html` in a browser, or serve locally:

```bash
# Using Python
python -m http.server 8000

# Using Node
npx serve
```

Then visit `http://localhost:8000`.

## Browser Support

- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Graceful degradation for older browsers

## Tech Stack

- HTML5 (semantic)
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (ES6+, no dependencies)
- Google Fonts (Inter, Poppins)

## License

© 2026 Ridhima World School, Mainpuri. All rights reserved.
