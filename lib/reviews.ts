import { Review } from './types';
import thomas from '@/assets/reviewers/thomas.png'
import marina from '@/assets/reviewers/marina.png'
import gar from '@/assets/reviewers/gar.png'
import joseph from '@/assets/reviewers/joseph.png'

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Thomas Hansen',
    role: 'CEO',
    company: 'AINIRO',
    content: 'I worked with Evangeline for some 4 months to create our new AI Expert System at the end of 2025, beginning of 2026. The system was highly complex, complex architectural requirements, and complex workflows. Evangeline upgraded our system 100% autonomously, a job I thought nobody would actually manage to pull through may I add, and she delivered on time, on budget, 10x above what I had expected.',
    avatar: thomas
  },
  {
    id: '2',
    name: 'Marina Shkaleta',
    role: 'Project Owner',
    company: 'Laferla Digital OÜ',
    content: 'I worked with Evangeline on several web projects for our insurance platform, including the website and web app. She handled frontend work while understanding the underlying business logic, showing strong adaptability to the insurance domain. She’s communicative, open to feedback, and collaborative, and she also contributed to testing and identifying issues, improving overall product quality.',
    avatar: marina
  },
  {
    id: '3',
    name: 'Gar (Michael) Manji',
    role: 'Lead Software Engineer',
    company: 'Elenii Shepherd',
    content: 'I really enjoyed collaborating with Evangeline at Laferla Insurance Agency, where I worked as a Backend Developer. She’s an exceptional Frontend and Mobile Engineer with a strong eye for design and user experience. She consistently delivered clean, responsive, intuitive interfaces and significantly improved product quality. A reliable collaborator and valuable asset, she brings strength as both a frontend and fullstack engineer.',
    avatar: gar
  },
  {
    id: '4',
    name: 'Joseph Omidiora',
    role: 'CEO',
    company: 'Weyz Mobility',
    content: "I had the opportunity to work with Evangeline at Weyz Mobility, and I couldn't recommend her more highly. She built the Weyz apps from the ground up and set a solid foundation for the company's mobile app team. She's a true master of her craft. The quality and care in her work is obvious. But what really makes Evangeline stand out is who she is as a person. She brings energy and humour to everything she does, she's a fantastic team player, and she makes the people around her better. Working with her was a genuine pleasure. Any team would be lucky to have her. Highly recommended!",
    avatar: joseph
  },
];
