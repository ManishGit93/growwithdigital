# Studio - Modern Agency Website

A modern, minimal, multi-page agency website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, minimal design inspired by builtbybuffalo.com
- 📱 Fully responsive (mobile → desktop)
- ⚡ Built with Next.js 16 (App Router)
- 🎭 Smooth animations with Framer Motion
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📄 SEO optimized with metadata API
- ♿ Accessible components and semantic HTML

## Pages

- **Home** (`/`) - Hero section, stats, featured work, testimonials, and CTA
- **Work** (`/work`) - Project listing with category filters
- **Work Detail** (`/work/[slug]`) - Individual project case studies
- **About** (`/about`) - Studio story, services, team, and values
- **Feed** (`/feed`) - Studio journal/blog posts
- **Feed Detail** (`/feed/[slug]`) - Individual blog post pages
- **Jobs** (`/jobs`) - Career opportunities
- **Contact** (`/contact`) - Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd growwithdigital
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx            # Home page
│   ├── work/               # Work pages
│   ├── about/              # About page
│   ├── feed/               # Feed/blog pages
│   ├── jobs/               # Jobs page
│   └── contact/            # Contact page
├── components/             # React components
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Home page sections
│   ├── ui/                 # Reusable UI components
│   ├── work/               # Work-related components
│   ├── jobs/               # Job-related components
│   └── feed/               # Feed-related components
├── data/                   # TypeScript data files
│   ├── types.ts            # TypeScript interfaces
│   ├── projects.ts         # Project data
│   ├── testimonials.ts    # Testimonial data
│   ├── jobs.ts             # Job listings
│   ├── feed.ts             # Blog posts
│   └── stats.ts            # Statistics data
└── public/                 # Static assets
```

## Customization

### Adding Projects

Edit `data/projects.ts` to add or modify projects. Each project includes:
- Title, summary, description
- Services/tags
- Cover image URL
- Case study sections

### Adding Blog Posts

Edit `data/feed.ts` to add new blog posts. Each post includes:
- Title, date, excerpt
- Full content

### Modifying Content

All content is stored in the `data/` directory. Simply edit the TypeScript files to update:
- Projects
- Testimonials
- Jobs
- Blog posts
- Statistics

### Styling

The project uses Tailwind CSS. Customize colors, spacing, and other design tokens in:
- `app/globals.css` - Global styles and CSS variables
- Component files - Tailwind utility classes

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React 19** - UI library

## License

This project is open source and available for use.

## Notes

- All images use placeholder URLs from Unsplash. Replace with your own images.
- Contact form is client-side only (no backend). Connect to your email service for production.
- Email links use placeholder addresses. Update with your actual contact information.
