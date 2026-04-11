import { Project, Service, Review } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Lumina Social',
    category: 'Mobile',
    year: '2024',
    description: 'Cross-platform social app with gesture-driven navigation and 60fps shared element transitions.',
    tech: ['React Native', 'Reanimated', 'TypeScript', 'Supabase'],
    metrics: '60fps • 4.9★ App Store',
    color: 'from-violet-500 to-fuchsia-500',
    featured: true,
    challenge: 'The primary challenge was maintaining a consistent 60fps performance while handling complex shared element transitions and heavy gesture interactions across both iOS and Android.',
    solution: 'We implemented a custom gesture handling system using Reanimated 3 and Gesture Handler, offloading all animation logic to the UI thread. We also optimized image loading with a custom caching layer.',
    outcome: 'The app launched to critical acclaim, maintaining a 4.9-star rating and handling over 100k daily active users without performance degradation.',
    fullDescription: 'Lumina Social is a next-generation social platform focused on high-fidelity interactions. Built from the ground up with performance in mind, it pushes the boundaries of what is possible with cross-platform mobile development.'
  },
  {
    id: '2',
    title: 'Aether Design System',
    category: 'Design System',
    year: '2024',
    description: 'Comprehensive component library powering 12 products across web and mobile platforms.',
    tech: ['React', 'Storybook', 'Figma API', 'Tailwind'],
    metrics: '200+ Components • 99% Coverage',
    color: 'from-cyan-500 to-blue-500',
    challenge: 'Scaling a design system across multiple product teams while ensuring strict visual consistency and developer autonomy.',
    solution: 'Created a multi-layered token system and a robust component library with automated visual regression testing. We also built a custom Figma plugin to sync design tokens directly to the codebase.',
    outcome: 'Developer velocity increased by 40%, and visual bugs related to inconsistent components were reduced by 95% across all 12 products.',
    fullDescription: 'Aether is more than just a component library; it is a shared language for design and engineering. It provides the foundation for all digital products at Aether Systems.'
  },
  {
    id: '3',
    title: 'Monolith Dashboard',
    category: 'Web',
    year: '2023',
    description: 'Real-time analytics interface with WebGL data visualizations and sub-100ms interactions.',
    tech: ['Next.js', 'Three.js', 'Framer Motion', 'PostgreSQL'],
    metrics: '100ms response • 99 Lighthouse',
    color: 'from-amber-500 to-orange-500',
    featured: true,
    challenge: 'Visualizing massive datasets in real-time without blocking the main thread or sacrificing visual quality.',
    solution: 'Utilized Three.js for hardware-accelerated rendering and Web Workers for data processing. Implemented a custom shader system for fluid, high-performance visualizations.',
    outcome: 'Achieved sub-100ms interaction latency even with datasets exceeding 1 million points, with a perfect 100 Lighthouse performance score.',
    fullDescription: 'Monolith is a high-performance analytics dashboard designed for enterprise-scale data. It combines cutting-edge WebGL technology with a refined user experience.'
  },
  {
    id: '4',
    title: 'Kinetic Typography',
    category: 'Experiment',
    year: '2023',
    description: 'Interactive typographic playground using variable fonts and scroll-driven animations.',
    tech: ['GSAP', 'Variable Fonts', 'Canvas API'],
    metrics: 'WebGL • 60fps',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: '5',
    title: 'Prism Wallet',
    category: 'Mobile',
    year: '2023',
    description: 'Crypto wallet with biometric auth and hardware-backed key management.',
    tech: ['React Native', 'Swift', 'Rust', 'Web3'],
    metrics: 'Bank-grade security • 50k users',
    color: 'from-rose-500 to-pink-500'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'frontend',
    number: '01',
    title: 'Frontend\nDevelopment',
    items: ['React / Next.js expertise', '60fps animation systems', 'Design system architecture', 'Performance optimization'],
    color: 'bg-violet-500'
  },
  {
    id: 'mobile',
    number: '02',
    title: 'Mobile\nDevelopment',
    items: ['React Native cross-platform', 'Native iOS & Android', 'Gesture & animation systems', 'App store deployment'],
    color: 'bg-cyan-500'
  },
  {
    id: 'fullstack',
    number: '03',
    title: 'Fullstack\nProduct Builds',
    items: ['End-to-end applications', 'Database & API design', 'Auth & payments', 'Real-time features'],
    color: 'bg-amber-500'
  },
  {
    id: 'consult',
    number: '04',
    title: 'UI Engineering\nConsultation',
    items: ['Code review & audit', 'Animation system design', 'Component library setup', 'Team training'],
    color: 'bg-rose-500'
  }
];

export const SKILLS = [
  { name: 'React', x: 20, y: 20, size: 1.2 },
  { name: 'TypeScript', x: 50, y: 10, size: 1.1 },
  { name: 'React Native', x: 80, y: 20, size: 1.0 },
  { name: 'Next.js', x: 30, y: 45, size: 1.0 },
  { name: 'Framer Motion', x: 70, y: 40, size: 0.9 },
  { name: 'Tailwind', x: 85, y: 50, size: 0.9 },
  { name: 'GSAP', x: 15, y: 65, size: 0.8 },
  { name: 'Node.js', x: 40, y: 70, size: 0.8 },
  { name: 'PostgreSQL', x: 75, y: 75, size: 0.7 },
  { name: 'MongoDB', x: 90, y: 85, size: 0.7 },
  { name: 'HTML', x: 10, y: 30, size: 0.6 },
  { name: 'CSS', x: 10, y: 50, size: 0.6 },
  { name: 'Javascript', x: 55, y: 30, size: 0.8 },
  { name: 'Github Copilot', x: 45, y: 45, size: 0.7 },
  { name: 'Firebase', x: 25, y: 85, size: 0.7 },
  { name: 'Supabase', x: 60, y: 90, size: 0.7 },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Product Director',
    company: 'Lumina Tech',
    content: 'Evangeline is a rare talent who understands both the technical constraints of mobile development and the nuances of high-end UI design. The Lumina Social app exceeded all our performance benchmarks.',
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'CTO',
    company: 'Aether Systems',
    content: 'The design system Evangeline built for us has transformed our workflow. Component consistency is up, and our developers are shipping features 40% faster. Truly world-class engineering.',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Founder',
    company: 'Prism Finance',
    content: 'Working with Evangeline was the best decision we made for our launch. The attention to detail in the micro-interactions and the codebase is exactly what we needed for a fintech product.',
  },
];
