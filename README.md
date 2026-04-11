# Modern Portfolio Website

A beautiful, high-performance personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## 🎨 Design & Features

- **Modern UI/UX**: Clean, minimal design inspired by top developer portfolios
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Dark Mode**: Built-in dark/light mode toggle
- **Smooth Animations**: Powered by Framer Motion
- **Performance Optimized**: Fast loading with Next.js
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Accessible**: ARIA labels and semantic HTML elements

## 📋 Sections

1. **Hero Section**: Name, role, introduction, and call-to-action buttons
2. **About Me**: Personal introduction with key stats
3. **Skills**: Organized by category with progress indicators
4. **Projects**: Featured projects with filtering, descriptions, and links
5. **Experience & Education**: Timeline-based professional and educational background
6. **Contact**: Contact form and multiple ways to get in touch
7. **Navigation**: Sticky navbar with mobile menu and dark mode toggle
8. **Footer**: Social links and copyright information

## 🚀 Tech Stack

- **Frontend Framework**: [Next.js 16](https://nextjs.org/) - React-based framework
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Animation library
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Development**: [ESLint](https://eslint.org/) - Code linting

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone or download the project**
```bash
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🎯 Customization

### Personal Information
Edit `/src/data/portfolio.ts` to update:
- Your name, role, and bio
- Projects and their details
- Skills and expertise areas
- Experience and education
- Social media links

### Styling
- **Theme Colors**: Modify Tailwind classes throughout components
- **Fonts**: Update in `/src/app/layout.tsx`
- **Custom Styles**: Edit `/src/app/globals.css`

### Images
Replace placeholder images:
- Avatar: Update image URL in `siteConfig.avatarUrl`
- Project Images: Replace URLs in projects array
- About Section: Update image URL in `AboutSection.tsx`

### Contact Form
Update form handling in `/src/components/ContactSection.tsx`:
- Connect to email service (e.g., SendGrid, Nodemailer)
- Add form validation
- Implement success/error messages

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Navigation & Footer
│   ├── page.tsx            # Home page with all sections
│   ├── globals.css         # Global styles
│   └── favicon.ico
├── components/
│   ├── Navigation.tsx      # Sticky navbar
│   ├── HeroSection.tsx     # Hero section
│   ├── AboutSection.tsx    # About me section
│   ├── ProjectsSection.tsx # Projects showcase
│   ├── SkillsSection.tsx   # Skills with progress bars
│   ├── ExperienceSection.tsx # Timeline of experience & education
│   ├── ContactSection.tsx  # Contact form
│   └── Footer.tsx          # Footer with links
├── sections/               # Reserved for future section components
├── types/
│   └── index.ts           # TypeScript type definitions
├── data/
│   └── portfolio.ts       # Portfolio content and configuration
└── lib/
    └── cn.ts             # Utility functions
```

## 🎨 Color Scheme

The portfolio uses a modern gradient color scheme:
- **Primary**: Blue to Purple gradient
- **Secondary**: Purple to Pink
- **Background**: White (light) / Slate-950 (dark)
- **Accents**: Blue, Purple, Pink

## ⚡ Performance Optimizations

- Next.js Image Optimization
- Code Splitting & Dynamic Imports
- CSS-in-JS for minimal bundle size
- Lazy loading for animations
- Optimized fonts
- Production builds minified

## 🔍 SEO Features

- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter card integration
- Semantic HTML structure
- Structured data ready
- Mobile-friendly responsive design
- Fast page load times

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚢 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify
1. Push code to GitHub
2. Add site to [Netlify](https://netlify.com)
3. Auto-deploy on push

### Other Platforms
```bash
npm run build
npm run start
```

## 📚 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🛠 Future Enhancements

- [ ] Blog section with markdown support
- [ ] 3D elements using Three.js
- [ ] Analytics integration (Vercel Analytics)
- [ ] Contact form backend integration
- [ ] Admin dashboard
- [ ] Newsletter subscription
- [ ] Project filtering with animations
- [ ] Testimonials section
- [ ] Case studies with detailed pages

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and use this portfolio template for your own projects.

## 📞 Support

For issues or questions, please open an issue or contact the repository maintainer.

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**

