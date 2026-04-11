import { Project, Skill, Experience, Education, SocialLink } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform with real-time inventory management, secure payment processing, and advanced filtering capabilities.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
    category: ['Full Stack', 'Web'],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: '2',
    title: 'AI Chat Application',
    description:
      'Real-time chat application powered by AI, featuring message history, user authentication, and responsive design.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    category: ['Frontend', 'AI'],
    tech: ['React', 'OpenAI API', 'Socket.io', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Task Management System',
    description:
      'Collaborative task management tool with real-time updates, team collaboration features, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    category: ['Full Stack', 'Mobile'],
    tech: ['React', 'Node.js', 'MongoDB', 'Redux'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    id: '4',
    title: 'Analytics Dashboard',
    description:
      'Data visualization dashboard with interactive charts, real-time metrics, and customizable reports.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop',
    category: ['Frontend', 'Data'],
    tech: ['Next.js', 'Chart.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
];

export const skills: Skill[] = [
  { name: 'JavaScript', level: 95, category: 'Languages', icon: 'Code2' },
  { name: 'TypeScript', level: 90, category: 'Languages', icon: 'Code2' },
  { name: 'React', level: 95, category: 'Frontend', icon: 'Zap' },
  { name: 'Next.js', level: 90, category: 'Frontend', icon: 'Zap' },
  { name: 'Tailwind CSS', level: 95, category: 'Styling', icon: 'Palette' },
  { name: 'Node.js', level: 85, category: 'Backend', icon: 'Server' },
  { name: 'PostgreSQL', level: 85, category: 'Database', icon: 'Database' },
  { name: 'MongoDB', level: 80, category: 'Database', icon: 'Database' },
  { name: 'Git', level: 90, category: 'Tools', icon: 'GitBranch' },
  { name: 'Docker', level: 75, category: 'Tools', icon: 'Package' },
  { name: 'Framer Motion', level: 85, category: 'Animation', icon: 'Sparkles' },
  { name: 'REST APIs', level: 90, category: 'Backend', icon: 'Zap' },
];

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Tech Startup Co',
    position: 'Senior Frontend Engineer',
    startDate: 'Jan 2023',
    endDate: undefined,
    description:
      'Led front-end development of customer-facing applications, mentored junior developers, and optimized performance.',
    isCurrent: true,
  },
  {
    id: '2',
    company: 'Digital Agency',
    position: 'Full Stack Developer',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    description:
      'Developed and maintained multiple client projects, implemented responsive designs, and improved API performance.',
    isCurrent: false,
  },
  {
    id: '3',
    company: 'Web Development Freelance',
    position: 'Freelance Developer',
    startDate: 'Jan 2020',
    endDate: 'May 2021',
    description:
      'Created custom websites and web applications for startups and small businesses, handled client communication.',
    isCurrent: false,
  },
];

export const education: Education[] = [
  {
    id: '1',
    school: 'University of Technology',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startDate: '2016',
    endDate: '2020',
    description: 'Graduated with distinction. Specialized in software engineering and web technologies.',
  },
  {
    id: '2',
    school: 'Online Learning Platform',
    degree: 'Certificate',
    field: 'Full Stack Web Development',
    startDate: '2019',
    endDate: '2020',
    description: 'Advanced certification covering modern web development practices and tools.',
  },
];

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com', icon: 'Github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
  { platform: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
  { platform: 'Email', url: 'mailto:your.email@example.com', icon: 'Mail' },
];

export const siteConfig = {
  name: 'John Doe',
  title: 'Full Stack Developer & Creative Technologist',
  description:
    'Crafting beautiful, high-performance web experiences with modern technologies and best practices.',
  avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  resumeUrl: '/resume.pdf',
};
