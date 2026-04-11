import { Service } from './types';

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
