export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string[];
  tech: string[];
  github: string;
  live: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  isCurrent: boolean;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
