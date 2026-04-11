export type ProjectCategory = 'Web' | 'Mobile' | 'Design System' | 'Experiment';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  description: string;
  tech: string[];
  metrics: string;
  color: string;
  featured?: boolean;
  challenge?: string;
  solution?: string;
  outcome?: string;
  fullDescription?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  items: string[];
  price?: string;
  color: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}
