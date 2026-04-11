import { Project } from './types';

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
