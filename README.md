# Adventure Ocean Corporate Website - React Edition

## Overview

Modern, fully-responsive React website for **Adventure Ocean JSC** - a dual-ecosystem company specializing in Real Estate Development and High-Tech Innovation (Semiconductors & CNC Manufacturing).

## ✨ New Features

### 🌐 Bilingual Support
- **English & Vietnamese** language support
- Language switcher in header navigation
- Automatic language detection from browser settings
- Persistent language preference (localStorage)

### 🎨 Modern UI/UX
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Fade-ins, hover effects, and transitions
- **Interactive Elements**: Mobile menu, project filtering, form validation

### 🏗️ Modular Architecture
- Independent, reusable React components
- Consistent Header and Footer across all pages
- Clean separation of concerns
- Easy to maintain and extend

## 📦 Tech Stack

- **React 18.3** - Modern UI library
- **Vite 5.4** - Fast build tool and dev server
- **React Router 6** - Client-side routing
- **React i18next** - Internationalization
- **TailwindCSS 3.4** - Utility-first CSS framework
- **React Helmet Async** - SEO meta management

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

The optimized build will be in the `dist` directory.

## 📁 Project Structure

```
Website/
├── src/
│   ├── components/       # Reusable React components
│   │   ├── layout/      # Header, Footer, Layout
│   │   └── shared/      # Shared components
│   ├── contexts/        # React contexts (Theme)
│   ├── i18n/           # Internationalization
│   │   ├── config.js   # i18next configuration
│   │   └── locales/    # Translation files (en.json, vi.json)
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Blog.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── postcss.config.js   # PostCSS configuration
```

## 🌍 Pages

### Homepage (`/`)
- Hero section with company tagline
- Company story and vision
- Statistics showcase
- Service previews (4 pillars)
- Featured projects
- Testimonial quote
- Call-to-action sections

### About (`/about`)
- Chairman's vision message
- Leadership team profiles
- Company values and mission

### Services (`/services`)
- Resort Real Estate
- Commercial Real Estate
- Semiconductors manufacturing
- CNC Manufacturing
- Ecosystem synergy explanation

### Projects (`/projects`)
- Category filtering (All, Resort, Residential, Industrial)
- Project showcase with specifications
- Interactive project cards

### Blog (`/blog`)
- News and insights
- Article listings
- Category filters

### Contact (`/contact`)
- Contact form with validation
- Company information
- Office locations
- Business hours

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: "#1c448e",      // Deep Royal Blue
  secondary: "#ed1c24",    // Red Accent
  // ... other colors
}
```

### Content

All content is stored in translation files:
- `src/i18n/locales/en.json` - English content
- `src/i18n/locales/vi.json` - Vietnamese content

### Images

Current images are hosted externally. To use local images:
1. Place images in `public/images/`
2. Update image `src` attributes to `/images/your-image.jpg`

## 🌐 Languages

### Switching Languages

Click the language switcher in the header navigation (shows "EN" or "VI"). Your preference is automatically saved.

### Adding Translations

1. Add new keys to `src/i18n/locales/en.json`
2. Add corresponding translations to `src/i18n/locales/vi.json`
3. Use in components: `const { t } = useTranslation(); t('your.key')`

## 🌙 Dark Mode

Toggle dark mode using the sun/moon icon in the header. The theme preference is saved in localStorage.

To customize dark mode styles, use Tailwind's `dark:` prefix:
```jsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```

## 📱 Responsive Design

Breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are mobile-first and fully responsive.

## 🔍 SEO

SEO meta tags are managed with React Helmet Async. Customize in each page component:

```jsx
<Helmet>
  <title>Your Page Title</title>
  <meta name="description" content="Page description" />
</Helmet>
```

## 📦 Dependencies

### Core
- `react` ^18.3.1
- `react-dom` ^18.3.1
- `react-router-dom` ^6.22.0

### Features
- `react-i18next` ^14.0.5
- `i18next` ^23.8.2
- `i18next-browser-languagedetector` ^7.2.0
- `react-helmet-async` ^2.0.4

### Styling
- `tailwindcss` ^3.4.1
- `postcss` ^8.4.35
- `autoprefixer` ^10.4.17

### Build Tools
- `vite` ^5.4.10
- `@vitejs/plugin-react` ^4.3.3

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

### Other Platforms

1. Run `npm run build`
2. Upload the `dist` directory to your hosting provider
3. Configure your web server to serve `index.html` for all routes

## 🤝 Support

For questions or support, contact:
- **Email**: contact@adventure-ocean.com
- **Phone**: +84 28 1234 5678

## 📝 License

© 2024 Adventure Ocean JSC. All rights reserved.

---

**Built with ❤️ using React + Vite for Adventure Ocean JSC**
