# Portfolio Website - Copilot Instructions

## Project Overview
This is a modern, high-performance personal portfolio website built with Next.js, Tailwind CSS, Framer Motion, and Lucide Icons.

## Architecture

### Tech Stack
- **Frontend**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Development**: ESLint, TypeScript

### Directory Structure
```
src/
├── app/              # Next.js app router (routes, layouts, global styles)
├── components/       # Reusable React components
├── sections/         # Reserved for future major sections
├── types/            # TypeScript type definitions
├── data/             # Static content and configuration
└── lib/              # Utility functions
```

## Key Components

### Core Sections
- **Navigation**: Sticky navbar with dark mode toggle and mobile menu
- **HeroSection**: Landing area with CTA buttons and social links
- **AboutSection**: Personal introduction with statistics
- **ProjectsSection**: Filterable project showcase with modal details
- **SkillsSection**: Skills by category with animated progress bars
- **ExperienceSection**: Timeline of work experience and education
- **ContactSection**: Contact form and information
- **Footer**: Navigation links and social connections

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow React best practices with functional components
- Use `'use client'` directive for client components
- Implement proper prop typing with interfaces from `/src/types`

### Styling
- Use Tailwind CSS utility classes exclusively
- Implement responsive design with Tailwind breakpoints
- Use gradient and animation utilities for visual richness
- Maintain dark mode support with `dark:` prefix

### Data Management
- Keep content in `/src/data/portfolio.ts`
- Define types in `/src/types/index.ts`
- Use interfaces for type safety

### Animations
- Use Framer Motion for animations
- Implement `variants` for reusable animation patterns
- Use `whileInView` for scroll-triggered animations
- Maintain smooth 0.3-0.6s animation durations

## Common Customization Tasks

### Update Personal Information
Edit `/src/data/portfolio.ts`:
- `siteConfig`: Name, title, bio, avatar
- `projects`: Add/edit project entries
- `skills`: Update skill categories and levels
- `experience`: Add work history items
- `education`: Update educational background
- `socialLinks`: Add social media profiles

### Modify Styling
- **Colors**: Change gradient colors in components (blue, purple, pink)
- **Typography**: Update font sizes in component classes
- **Spacing**: Adjust padding/margin Tailwind values
- **Animations**: Modify duration and easing in Framer Motion variants

### Add New Sections
1. Create component in `/src/components/`
2. Export from `/src/components/` (if creating new)
3. Import in `/src/app/page.tsx`
4. Add to JSX in Home component
5. Add navigation link in Navigation component

### Deployment
- Vercel (recommended): Push to GitHub and import in Vercel dashboard
- Netlify: Connect GitHub repository for auto-deployment
- Other platforms: `npm run build` then `npm start`

## Performance Considerations

- Use Next.js Image optimization for images
- Implement lazy loading for sections with `whileInView`
- Code splitting happens automatically with Next.js
- Minify CSS and JavaScript in production builds

## SEO & Accessibility

- Meta tags defined in `/src/app/layout.tsx`
- Semantic HTML elements throughout components
- ARIA labels on interactive elements
- Proper color contrast for accessibility
- Mobile-responsive design for all screen sizes

## Common Issues & Solutions

### Animations Not Working
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check that `'use client'` directive is present in component
- Verify animation variants are correctly structured

### Styling Not Applied
- Clear Tailwind cache: `rm -rf .next`
- Ensure Tailwind classes are used correctly
- Check for typos in utility class names
- Verify dark mode classes use `dark:` prefix

### Build Errors
- Run `npm run lint` to check for TypeScript errors
- Verify all imports are correct
- Ensure no unused variables or dependencies

## Performance Benchmarks

Target metrics:
- Lighthouse Score: 90+
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

## Future Enhancement Ideas

1. **Blog Section**: Add markdown-based blog with dynamic routing
2. **3D Elements**: Integrate Three.js for interactive 3D models
3. **Analytics**: Add Vercel Analytics or Google Analytics
4. **Email Integration**: Connect contact form to SendGrid/Nodemailer
5. **Dynamic Data**: Connect to CMS like Contentful or Sanity
6. **Testimonials**: Add client testimonial carousel
7. **Case Studies**: Create detailed project case study pages
8. **Newsletter**: Implement email subscription feature

## Testing

Currently uses Next.js built-in development tools:
- `npm run dev`: Start development server with hot reload
- `npm run build`: Create production build
- `npm run lint`: Check code quality with ESLint

Future: Consider adding Jest for unit tests and Cypress for E2E tests.

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android Latest

## Version History

- v1.0.0: Initial release with all core sections and features
