# Lumière Jewels - E-Commerce Website

## Overview
This is a luxury jewelry e-commerce website built with React, TypeScript, and modern web technologies. The project was migrated from Lovable to Replit and configured for GitHub Pages deployment.

## Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: React Router DOM (wouter for future migrations)
- **State Management**: TanStack Query
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React

## Project Structure
```
src/
├── components/       # Reusable UI components
│   ├── ui/          # shadcn/ui components
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── ProductCard.tsx
├── pages/           # Page components
│   ├── Index.tsx    # Home page
│   ├── About.tsx
│   ├── Cart.tsx
│   ├── Category.tsx
│   ├── Contact.tsx
│   ├── Product.tsx
│   └── NotFound.tsx
├── data/            # Static data
│   └── products.ts
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── main.tsx         # App entry point
```

## Development

### Running Locally
The project runs on port 5000:
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Deployment

### GitHub Pages
This project is configured for automatic deployment to GitHub Pages:

1. **Automatic Deployment**: Push to `main` branch triggers GitHub Actions workflow
2. **Configuration**: See `.github/workflows/deploy.yml`
3. **Vite Config**: `base: '/'` set for root directory deployment

For detailed deployment instructions, see `DEPLOYMENT.md`.

## Recent Changes

### 2025-10-28: Migration & Deployment Setup
- Migrated from Lovable to Replit environment
- Installed all npm dependencies
- Configured Vite for port 5000 (Replit requirement)
- Added `base: '/'` for GitHub Pages deployment
- Created GitHub Actions workflow for automatic deployment
- Created deployment documentation

## User Preferences
- Language: Indonesian (Bahasa Indonesia)
- Deployment Target: GitHub Pages
- Base Path: Root directory (/)

## Project Status
✅ Development server running on port 5000
✅ All dependencies installed
✅ GitHub Actions workflow configured
✅ Ready for GitHub Pages deployment
