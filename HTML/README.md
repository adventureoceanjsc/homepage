# Adventure Ocean Corporate Website

## Overview

Complete modular website for **Adventure Ocean JSC** - a dual-ecosystem company specializing in Real Estate Development and High-Tech Innovation (Semiconductors & CNC Manufacturing).

## Features

✅ **8 Complete Pages**:
- Homepage (index.html) - Company introduction with hero section, stats, services preview
- About (about.html) - Leadership team with interactive flip cards
- Services (services.html) - Detailed service descriptions with sidebar navigation
- Projects (projects.html) - Project showcase with category filtering
- Blog (blog.html) - News and insights with sidebar
- Contact (contact.html) - Contact form with information
- Detail pages for projects and blog posts

✅ **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes

✅ **Dark Mode**: Toggle between light and dark themes with localStorage persistence

✅ **Modern Tech Stack**:
- Tailwind CSS for styling
- Vanilla JavaScript for interactions
- Google Fonts (Playfair Display + Inter)
- Material Icons

✅ **Interactive Features**:
- Mobile hamburger menu
- Smooth scrolling
- Project category filtering
- Form validation
- Newsletter subscription
- Animation on scroll

## Project Structure

```
website/
├── index.html              # Homepage
├── about.html              # About/Leadership
├── services.html           # Service Pillars
├── projects.html           # Project Showcase
├── blog.html               # News & Insights
├── contact.html            # Contact Form
├── assets/
│   ├── css/
│   │   └── custom.css      # Custom styles & animations
│   ├── js/
│   │   ├── main.js         # Core functionality
│   │   ├── navigation.js   # Mobile menu & routing
│   │   ├── darkmode.js     # Theme switcher
│   │   └── projects.js     # Project filtering
│   └── images/
│       └── (image assets)
└── README.md              # This file
```

## Getting Started

### Option 1: Direct Browser Access
Simply open `index.html` in your web browser.

### Option 2: Local Server (Recommended)
For full functionality, serve the files through a local web server:

**Using Python:**
```bash
# Python 3
cd website
python -m http.server 8000
```

**Using Node.js (http-server):**
```bash
npm install -g http-server
cd website
http-server -p 8000
```

Then open: `http://localhost:8000`

### Option 3: Live Server (VS Code)
Install "Live Server" extension and right-click `index.html` → "Open with Live Server"

## Customization

### Colors
The color scheme is defined in the Tailwind config on each page:
- **Primary**: `#1c448e` (Deep Royal Blue)
- **Secondary**: `#ed1c24` (Red Accent)
- **Surface Light**: `#f3f4f6`
- **Surface Dark**: `#1e293b`

To change colors, edit the `tailwind.config` object in the `<script>` tag of each HTML file.

### Content
1. **Company Information**: Update contact details in the footer across all pages
2. **Projects**: Edit project cards in `projects.html`
3. **Services**: Modify service sections in `services.html`
4. **Team**: Update leadership profiles in `about.html`

### Images
- Current images are hosted externally (Googleusercontent)
- To use local images, place them in `assets/images/` and update image `src` attributes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Key Sections

### Homepage (index.html)
- Hero section with company tagline
- Company story
- Statistics showcase
- Service previews (4 pillars)
- Featured projects
- Testimonial quote
- CTA sections

### About (about.html)
- Chairman's vision message
- Leadership team with interactive flip cards
- Organizational hierarchy diagram

### Services (services.html)
- Resort Real Estate
- Commercial Real Estate
- Semiconductors
- CNC Manufacturing
- Ecosystem synergy explanation

### Projects (projects.html)
- Filterable project grid (All, Resort, Residential, Industrial)
- Project cards with key specifications
- Download brochure CTA

### Blog (blog.html)
- Article listings with thumbnails
- Category filters
- Search functionality
- Newsletter subscription sidebar
- Most read articles

### Contact (contact.html)
- Contact form with validation
- Company information cards
- Social media links
- Map placeholder

## JavaScript Modules

### main.js
- Smooth scrolling
- Form validation
- Notification system
- Lazy image loading

### navigation.js
- Mobile menu toggle
- Active page highlighting
- Scroll-based navbar effects

### darkmode.js
- Theme switching
- LocalStorage persistence
- Auto-inject dark mode toggle button

### projects.js
- Category-based project filtering
- Smooth filter transitions

## Performance Optimization

- Tailwind CSS loaded via CDN (consider building for production)
- Images loaded externally (optimize by hosting locally)
- Minimal JavaScript dependencies
- CSS animations use GPU acceleration

## Future Enhancements

- [ ] Add project and blog detail page templates
- [ ] Integrate with a CMS for easier content management
- [ ] Add contact form backend integration
- [ ] Implement actual Google Maps integration
- [ ] Add loading animations
- [ ] Create print stylesheets
- [ ] Add multilingual support (Vietnamese/English toggle)
- [ ] Implement service worker for offline functionality

## Support

For questions or support, contact:
- **Email**: contact@adventure-ocean.com
- **Phone**: +84 28 1234 5678

## License

© 2024 Adventure Ocean JSC. All rights reserved.

---

**Built with ❤️ for Adventure Ocean JSC**
