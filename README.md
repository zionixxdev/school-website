# Ridhima World School — Official Website

A modern, responsive, and professional school website for **Ridhima World School**, Mainpuri, Uttar Pradesh, India. Built with pure HTML5, CSS3, and vanilla JavaScript — no frameworks, no build tools, no dependencies.

## School Information

| Detail | Value |
|--------|-------|
| **School Name** | Ridhima World School |
| **Location** | Mainpuri, Uttar Pradesh, India |
| **Board** | CBSE (Central Board of Secondary Education) |
| **Established** | 2022 |
| **Type** | Co-educational |
| **Classes** | Primary to Senior Secondary (I–XII) |

## Features

### Pages (13 total)
- **Home** — Hero section, quick info cards, about preview, principal's message, animated statistics, academic programs, facilities, latest news, events, gallery preview, testimonials, CTA
- **About** — School introduction, principal's message, vision & mission, core values, school history timeline
- **Academics** — Curriculum overview, class-wise programs (Primary, Middle, Secondary, Senior Secondary), teaching methodology, assessment system, co-curricular activities, academic calendar
- **Admissions** — Admission process, eligibility, required documents, important dates, fee structure, online application form (demo), FAQs
- **Faculty** — Faculty directory with department filters (Administration, Science, Maths, English, Social Science, Computer Science, Languages, Primary)
- **Facilities** — 16 facility cards (smart classrooms, labs, library, sports, auditorium, music, art, transport, medical, cafeteria, security, CCTV), student life section, school houses
- **Gallery** — Responsive photo gallery with category filtering and lightbox
- **Events** — Upcoming and past events with dates, times, and locations
- **Notices** — Searchable notice board with category filters (Academic, Examination, Admission, Holiday, General, Events)
- **Achievements** — Academic, sports, and cultural achievements with animated statistics
- **Contact** — Contact form (demo), Google Maps embed, office hours, emergency contact
- **Portal** — Student and Parent dashboard UI (demo) with attendance, timetable, homework, results, fees, notices, teacher communication

### Design & UX
- ✅ Modern Indian school aesthetic (navy/blue/gold/white palette)
- ✅ Fully responsive (mobile-first, tested at 320px, 375px, 768px, 1024px, 1440px)
- ✅ Sticky header with mobile hamburger menu
- ✅ Smooth scroll animations (Intersection Observer)
- ✅ Animated counter statistics
- ✅ Testimonial slider with auto-rotation
- ✅ Gallery lightbox with keyboard navigation
- ✅ Scroll-to-top button
- ✅ Hover effects and transitions
- ✅ Print-friendly styles

### Technical
- ✅ Pure HTML5, CSS3, vanilla JavaScript (no frameworks)
- ✅ Semantic HTML5 elements
- ✅ Accessibility: ARIA labels, skip links, keyboard navigation, focus states, alt text
- ✅ SEO: Meta descriptions, Open Graph, Twitter Cards, structured data (Schema.org), robots.txt, sitemap.xml
- ✅ Performance: Lazy-loaded images, minimal JS, efficient CSS, no external libraries (except Google Fonts)
- ✅ Favicon (SVG)
- ✅ GitHub Actions workflow for automatic deployment

## Project Structure

```
school-website/
├── index.html              # Homepage
├── about.html              # About page
├── academics.html          # Academics page
├── admissions.html         # Admissions page
├── faculty.html            # Faculty directory
├── facilities.html         # Facilities & student life
├── gallery.html            # Photo gallery
├── events.html             # Events page
├── notices.html            # Notice board
├── achievements.html       # Achievements page
├── contact.html            # Contact page
├── portal.html             # Student/Parent portal (demo)
├── css/
│   └── style.css           # All styles
├── js/
│   └── script.js           # All JavaScript
├── assets/
│   └── favicon.svg         # Favicon
├── images/                 # Image directory (add photos here)
├── robots.txt              # SEO robots file
├── sitemap.xml             # XML sitemap
├── .gitignore              # Git ignore rules
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages deployment workflow
└── README.md               # This file
```

## Deployment

### Option 1: GitHub Pages with GitHub Actions (Recommended)

1. **Create a new GitHub repository** named `school-website`
2. Push the code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Ridhima World School website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/school-website.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** in your repository
4. Under **Source**, select **GitHub Actions**
5. The deployment workflow (`.github/workflows/deploy.yml`) will automatically build and deploy your site
6. Your site will be available at: `https://YOUR_USERNAME.github.io/school-website/`

### Option 2: Manual GitHub Pages

1. Push the code to GitHub (as above)
2. Go to **Settings → Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select **main** branch and **/ (root)** folder
5. Click **Save**
6. Your site will be available at: `https://YOUR_USERNAME.github.io/school-website/`

### Option 3: Local Development

Simply open `index.html` in a browser, or use a local server:
```bash
# Python
python -m http.server 8000

# Node.js (if http-server is installed)
http-server
```
Then visit `http://localhost:8000`

## Customization Guide

### Replacing Placeholder Content

The following items use placeholder content and should be replaced with real information:

1. **Contact Details** — Replace phone numbers (`+91-XXXXX-XXXXX`), email addresses, and the physical address in all HTML files
2. **Principal Name** — Replace `[Principal Name]` in `index.html` and `about.html`
3. **Faculty Names** — Replace faculty names and details in `faculty.html`
4. **Images** — Replace SVG placeholder icons with actual school photographs in the `images/` folder
5. **Google Maps** — Update the map embed URL in `index.html` and `contact.html` with the school's exact location
6. **Social Media Links** — Update `href="#"` links in the footer and topbar with actual social media profiles
7. **Fee Structure** — Update fee amounts in `admissions.html` with actual fees
8. **Notice Content** — Replace sample notices in `notices.html` with real school notices
9. **Event Details** — Update event information in `events.html` with real events
10. **Testimonials** — Replace placeholder testimonials in `index.html` with real ones
11. **Statistics** — Update student/teacher/achievement counts to match current numbers
12. **Favicon** — Replace `assets/favicon.svg` with the school's actual logo
13. **Domain URL** — Update `sitemap.xml` and `robots.txt` with the actual domain once deployed

### Adding Real Images

1. Place image files in the `images/` folder
2. Replace the placeholder `<div class="placeholder-img">` or `<div class="facility-img">` elements with `<img>` tags:
   ```html
   <img src="images/campus.jpg" alt="School campus building" loading="lazy">
   ```
3. Use `loading="lazy"` for below-the-fold images

### Connecting the Application Form

The application form on the admissions page is currently a demo. To make it functional:
1. Set up a backend service (Node.js, PHP, Python, etc.)
2. Use a form service like Formspree, Formsubmit, or Google Forms
3. Or integrate with a school management system API

### Connecting the Portal

The student/parent portal is a frontend demo. To make it functional:
1. Build a backend with authentication (JWT, sessions)
2. Connect to a school management database
3. Implement API endpoints for attendance, results, fees, etc.
4. Add proper security measures

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (Chrome, Safari)

## Tech Stack

| Technology | Usage |
|-----------|-------|
| HTML5 | Structure & semantics |
| CSS3 | Styling, animations, responsive design |
| JavaScript (ES6+) | Interactivity |
| Google Fonts | Typography (Poppins, Inter) |
| GitHub Actions | CI/CD & deployment |
| SVG | Icons & favicon |

## License

© 2026 Ridhima World School, Mainpuri. All rights reserved.

This website source code is proprietary to Ridhima World School. Unauthorized copying or distribution is prohibited.

---

**Built with care for Ridhima World School, Mainpuri.**

*Nurturing Minds. Building Futures.*
