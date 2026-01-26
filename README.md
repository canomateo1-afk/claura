# Claura - AI Agency Website

A modern, responsive website for an AI consulting agency built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional aesthetic with warm organic colors
- **Responsive**: Fully responsive across all device sizes
- **Animated**: Smooth scroll-triggered animations using Framer Motion
- **Fast**: Optimized for performance with Next.js static generation
- **Accessible**: Built with accessibility in mind

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 4 with CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display + Inter (Google Fonts)

## Pages

- `/` - Homepage with all sections
- `/about` - About the company
- `/case-studies` - Client success stories
- `/book-a-call` - Contact form
- `/legal/*` - Legal pages (Privacy, Terms, Cookies, Accessibility)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── case-studies/      # Case studies page
│   ├── book-a-call/       # Contact page
│   └── legal/             # Legal pages
├── components/
│   ├── ui/                # Base UI components
│   ├── layout/            # Navigation & Footer
│   ├── sections/          # Homepage sections
│   └── animations/        # Animation components
├── lib/                   # Utility functions
├── design/                # Design system documentation
└── public/                # Static assets
```

## Design System

The design follows a comprehensive design system documented in `/design/design-system.json`. Key principles:

- **Color Palette**: Warm creams, charcoal, coral/orange gradients
- **Typography**: Playfair Display for headlines, Inter for body
- **Spacing**: Generous whitespace with consistent scale
- **Animations**: Subtle, smooth Framer Motion animations

## License

Private - All rights reserved
