# Boutique International Website

Boutique International is a responsive garment export house website built with React, Vite, Tailwind CSS, Framer Motion, and React Router.

The site presents the company profile, product and manufacturing capabilities, quality and sustainability information, CSR initiatives, gallery, careers, and contact details.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- ESLint

## Pages

- `/` - Home
- `/products-manufacturing` - Products and manufacturing capabilities
- `/quality-sustainability` - Quality standards and sustainability
- `/csr` - CSR overview
- `/csr/:slug` - CSR initiative details
- `/gallery` - Gallery
- `/careers` - Careers
- `/contact` - Contact

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Project Structure

```text
src/
  components/
    layout/      Shared layout components such as Navbar and Footer
    sections/    Reusable page sections
    ui/          Shared UI components
  data/          Website content and structured data
  pages/         Route-level page components
  styles/        Global styling helpers
```

## Editing Website Content

Most visible website content is stored in `src/data`.

- Company details and navigation: `src/data/siteData.js`
- Home page hero and overview content: `src/data/heroData.js`
- Products and manufacturing content: `src/data/productsData.js`
- Manufacturing process data: `src/data/manufacturingData.js`
- Capabilities content: `src/data/capabilitiesData.js`
- CSR content: `src/data/csrData.js`
- Gallery content: `src/data/galleryData.js`

Page composition is handled in `src/pages`, while visual sections are built in `src/components/sections`.

## Notes

This is a frontend-only website. The contact form and social links should be connected to real services or production URLs before deployment.
