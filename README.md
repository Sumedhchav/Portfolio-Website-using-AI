# Portfolio Website using AI

A modern, responsive portfolio website built with **Next.js 16** and enhanced with AI-powered features. This project showcases professional work, services, and testimonials with smooth animations and interactive components.

## 🌟 Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Beautiful transitions powered by Framer Motion
- **Modern UI**: Built with Tailwind CSS for a clean, professional look
- **Interactive Components**: Engaging sections that capture visitor attention
- **Services Showcase**: Display your professional services and expertise
- **Project Showcase**: Highlight your best work and projects
- **Testimonials**: Build trust with client/user testimonials
- **About Me Section**: Personal introduction and professional background
- **Process Timeline**: Show your workflow and methodology
- **Dark Mode Ready**: Modern styling with accessibility in mind

## 📋 Sections Included

- **Hero**: Eye-catching landing section with call-to-action
- **Services**: Detailed list of services or expertise areas
- **About Me**: Personal and professional information
- **Process**: Step-by-step workflow or methodology
- **Testimonials**: Client or user feedback and reviews
- **Showcase**: Portfolio of projects and work samples
- **Footer**: Contact information and social links

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.2.2](https://nextjs.org) - React framework with SSR and static generation
- **Language**: TypeScript 5 - Type-safe JavaScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS framework
- **Animations**: [Framer Motion 12.38.0](https://www.framer.com/motion) - Production animation library
- **Icons**: [Lucide React 1.7.0](https://lucide.dev) - Beautiful, consistent SVG icons
- **UI Components**: 
  - [Sonner 2.0.7](https://sonner.emilkowal.ski) - Toast notifications
  - [clsx](https://github.com/lukeed/clsx) - Utility for constructing className strings
  - [tailwind-merge](https://github.com/dcastro/tailwind-merge) - Merge Tailwind CSS classes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sumedhchav/Portfolio-Website-using-AI.git
   cd Portfolio-Website-using-AI
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The page auto-updates as you edit files

## 📝 Customization

### Editing Content

- **Main page layout**: [src/app/page.tsx](src/app/page.tsx)
- **Components**: Edit files in [src/components/](src/components/) directory
  - `Hero.tsx` - Main landing section
  - `Services.tsx` - Services display
  - `AboutMe.tsx` - About section
  - `Process.tsx` - Process/workflow section
  - `Testimonials.tsx` - Client testimonials
  - `Showcase.tsx` - Project showcase
  - `Footer.tsx` - Footer with links
  - `Navbar.tsx` - Navigation bar
  - `ScrollyCanvas.tsx` - Animated canvas element

### Styling

- **Global styles**: [src/app/globals.css](src/app/globals.css)
- **Tailwind config**: [tailwind.config.js](./tailwind.config.mjs)
- **PostCSS config**: [postcss.config.mjs](./postcss.config.mjs)

### Images

Place your images in the [public/images/](public/images/) directory and reference them in your components.

## 🔨 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

### Start Production Server

```bash
npm start
```

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com), the creators of Next.js:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure your project
4. Your site will be live after deployment

For more deployment options, see [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)

## 📂 Project Structure

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── Hero.tsx            # Hero section
│       ├── Navbar.tsx          # Navigation
│       ├── Services.tsx        # Services section
│       ├── AboutMe.tsx         # About section
│       ├── Process.tsx         # Process section
│       ├── Testimonials.tsx    # Testimonials section
│       ├── Showcase.tsx        # Project showcase
│       ├── ScrollyCanvas.tsx   # Animated canvas
│       ├── Overlay.tsx         # Overlay component
│       └── Footer.tsx          # Footer
├── public/
│   ├── images/                 # Image assets
│   └── sequence/               # Sequence assets
├── next.config.ts             # Next.js configuration
├── tailwind.config.mjs         # Tailwind CSS config
├── tsconfig.json              # TypeScript configuration
├── eslint.config.mjs          # ESLint configuration
└── package.json               # Dependencies
```

## 🎨 Design & UX

- **Performance Optimized**: Leverages Next.js optimizations (image optimization, code splitting, lazy loading)
- **SEO Ready**: Built-in meta tags and semantic HTML
- **Accessibility**: Properly structured components with semantic HTML
- **Mobile First**: Responsive design that works on all screen sizes

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

This project is private and proprietary.

## 👤 Author

**Sumedh Chavan**

## 📞 Contact

For questions or feedback, please reach out via the contact information in the portfolio footer.

---

**Happy coding!** ✨
