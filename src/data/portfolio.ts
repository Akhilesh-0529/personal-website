import { Project, Skill, Experience, Education, SocialLink } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Intelligent Educational QA System',
    description:
      'Designed NLP pipeline with preprocessing, tokenization, and TF-IDF vectorization. Applied cosine similarity for semantic search and answer retrieval. Integrated knowledge graph to enhance contextual understanding. Improved answer relevance by 35% through feature engineering.',
    image: '',
    category: ['AI', 'NLP'],
    tech: ['Python', 'NLP', 'Knowledge Graphs', 'scikit-learn', 'NLTK', 'spaCy', 'MySQL'],
    github: 'https://github.com/Akhilesh-0529',
    live: '',
    featured: true,
  },
  {
    id: '2',
    title: 'Student Performance Prediction',
    description:
      'Performed data preprocessing and exploratory data analysis. Conducted feature engineering and correlation analysis. Implemented ML models for prediction and evaluation. Improved prediction accuracy by 25% through optimization.',
    image: '',
    category: ['Machine Learning', 'Data Science'],
    tech: ['Python', 'scikit-learn', 'pandas', 'NumPy', 'matplotlib'],
    github: 'https://github.com/Akhilesh-0529',
    live: '',
    featured: true,
  },
];

export const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'Programming', icon: 'Code2' },
  { name: 'Java', level: 75, category: 'Programming', icon: 'Code2' },
  { name: 'C++', level: 70, category: 'Programming', icon: 'Code2' },
  { name: 'PyTorch', level: 85, category: 'ML/DL', icon: 'Brain' },
  { name: 'TensorFlow', level: 80, category: 'ML/DL', icon: 'Brain' },
  { name: 'scikit-learn', level: 85, category: 'ML/DL', icon: 'Brain' },
  { name: 'pandas', level: 85, category: 'ML/DL', icon: 'Brain' },
  { name: 'NumPy', level: 85, category: 'ML/DL', icon: 'Brain' },
  { name: 'NLTK', level: 80, category: 'NLP', icon: 'Brain' },
  { name: 'spaCy', level: 75, category: 'NLP', icon: 'Brain' },
  { name: 'MySQL', level: 80, category: 'Databases', icon: 'Database' },
  { name: 'MongoDB', level: 75, category: 'Databases', icon: 'Database' },
];

export const experience: Experience[] = [
  {
    id: '1',
    company: 'VISWAM.AI',
    position: 'AI Intern',
    startDate: 'Jun 2025',
    endDate: 'Jul 2025',
    description:
      'Completed intensive AI internship focused on real-world applications. Developed ML-based solutions addressing Global South challenges. Gained hands-on experience in model development and evaluation. Mentors: Meta, Swecha Telangana, IIIT Hyderabad',
    isCurrent: false,
  },
];

export const education: Education[] = [
  {
    id: '1',
    school: 'Matrusri Engineering College, Hyderabad',
    degree: 'B.Tech',
    field: 'Computer Science and Engineering',
    startDate: '2023',
    endDate: 'Present',
    description: 'CGPA: 8.05',
  },
  {
    id: '2',
    school: 'TS State Board of Intermediate Education',
    degree: 'Senior Secondary (Intermediate)',
    field: '',
    startDate: '',
    endDate: '2023',
    description: 'Percentage: 89%',
  },
  {
    id: '3',
    school: 'Central Board of Secondary Education',
    degree: 'Secondary School',
    field: '',
    startDate: '',
    endDate: '2021',
    description: 'Percentage: 71%',
  },
];

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/Akhilesh-0529', icon: 'Github' },
  { platform: 'Email', url: 'mailto:akhileshyerram2006@gmail.com', icon: 'Mail' },
];

export const siteConfig = {
  name: 'Akhilesh Yerram',
  title: 'AI & Machine Learning Engineer',
  description:
    'B.Tech Student in Computer Science and Engineering at Matrusri Engineering College. Specialized in Machine Learning, NLP, and Data Analysis. Passionate about building intelligent systems to solve real-world problems using Python, PyTorch, and TensorFlow.',
  avatarUrl: '/avatar.png',
  resumeUrl: '/resume.pdf',
  location: 'Hyderabad, India',
};
