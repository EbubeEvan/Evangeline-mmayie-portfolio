import { Project } from './types';

import aiMain from '@/assets/projects/ai-expert-system/main.png';
import aiDiagram from '@/assets/projects/ai-expert-system/diagram.png';
import aiToolCall from '@/assets/projects/ai-expert-system/tool-call.png';

import beautyMain from '@/assets/projects/beauty-care-ai/main.png';
import beautyChatDark from '@/assets/projects/beauty-care-ai/chat-dark.png';
import beautyChatLight from '@/assets/projects/beauty-care-ai/chat-light.png';

import laferlaSiteMain from '@/assets/projects/laferla-website/main.png';
import laferlaSiteAbout from '@/assets/projects/laferla-website/about.png';
import laferlaSiteTravel from '@/assets/projects/laferla-website/travel.png';

import laferlaMobileMain from '@/assets/projects/laferla-mobile-app/main.png';
import laferlaMobileHand from '@/assets/projects/laferla-mobile-app/hand-held.png';
import laferlaMobilePowerful from '@/assets/projects/laferla-mobile-app/powerful-app.png';

import laferlaWebMain from '@/assets/projects/laferla-web-app/main.png';
import laferlaWebBuy from '@/assets/projects/laferla-web-app/buy-insurance.png';
import laferlaWebProfile from '@/assets/projects/laferla-web-app/profile.png';

import lyfterBanner from '@/assets/projects/lyfter/lyfter_advertisement_banner.png';
import lyfterDetails from '@/assets/projects/lyfter/ride-details.jpg';
import lyfterSelect from '@/assets/projects/lyfter/ride-select.jpg';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'BeautyCare AI',
    category: ['Web', 'AI'],
    description:
      'Generic beauty advice ignores your skin, your tone, your needs. BeautyCare AI delivers personalised consultations through text, images, and voice — like having a beauty specialist available 24/7.',
    tech: ['Next.js', 'Gemini', 'TypeScript', 'Tailwind CSS', 'Web Speech API'],
    metrics: 'Multimodal AI • Audio + Visual consultations',
    color: 'from-rose-500 to-pink-500',
    accent: '#ff8ba7',
    featured: true,
    gitUrl: 'https://github.com/EbubeEvan/Beauty-Care-AI',
    previewUrl: 'https://beauty-care-ai.vercel.app/',
    challenge:
      'Moving beyond generic AI responses to deliver beauty advice that accounts for individual skin tone, type, and concerns — while supporting both visual analysis and voice-based interaction.',
    solution:
      'Integrated a multimodal AI pipeline that analyses user-submitted images and text inputs alongside audio input via speech-to-text, enabling hands-free consultations and generating contextual, personalised product and routine recommendations.',
    outcome:
      'Delivered an AI beauty consultant that responds to what it sees and hears — giving personalised advice through text or voice that generic chatbots cannot replicate.',
    fullDescription:
      'BeautyCare AI is a multimodal beauty consultation tool powered by AI. It analyses images, text, and voice input to understand a user\'s unique skin profile and deliver tailored advice through text or voice output — available on demand.',
    images: [beautyMain, beautyChatDark, beautyChatLight],
  },
  {
    id: '2',
    title: 'Laferla Website',
    category: ['Web'],
    description:
      "Malta's leading insurance provider needed a web presence that matched their scale. Built and optimised for performance and SEO, the site drives organic acquisition and serves as the primary touchpoint for new customers.",
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO'],
    metrics: 'Core Web Vitals • SEO optimised',
    color: 'from-blue-500 to-cyan-500',
    accent: '#6dd9e7',
    featured: true,
    previewUrl: 'https://laferla.com.mt/',
    gitUrl: '',
    challenge:
      "Translating a market-leading brand into a high-performance web presence that could rank competitively and convert organic traffic at scale.",
    solution:
      'Built with Next.js for server-side rendering and fine-tuned for Core Web Vitals, with a structured content architecture designed for strong search indexing.',
    outcome:
      'Delivered an SEO-optimised site that serves as the primary digital acquisition channel for Malta\'s leading insurance provider.',
    fullDescription:
      'Laferla Insurance is Malta\'s most recognised insurance brand. This project delivered a performant, SEO-driven web presence designed to convert organic traffic and scale with the business.',
    images: [laferlaSiteMain, laferlaSiteAbout, laferlaSiteTravel],
  },
  {
    id: '3',
    title: 'Laferla Insurance Mobile App',
    category: ['Mobile'],
    description:
      "Managing insurance shouldn't require a trip to the office. This app lets Laferla customers purchase policies, track claims, and manage their coverage entirely from their phone.",
    tech: ['React Native', 'TypeScript', 'REST APIs', 'Push Notifications'],
    metrics: 'Cross-platform • Policy & claims management',
    color: 'from-sky-500 to-blue-600',
    accent: '#75a7ff',
    previewUrl: 'https://play.google.com/store/apps/details?id=com.laferla.laferla',
    gitUrl: '',
    challenge:
      'Bringing complex insurance workflows — policy purchase, claims tracking, document management — into a mobile experience that felt simple and trustworthy.',
    solution:
      'Designed a streamlined mobile UX that broke multi-step insurance flows into clear, guided steps, with real-time status updates via push notifications.',
    outcome:
      'Customers can now manage their entire insurance lifecycle from their phone, reducing branch visits and support overhead.',
    fullDescription:
      'The Laferla mobile app puts full insurance management in customers\' hands — from purchasing new policies to tracking open claims — available on both iOS and Android.',
    images: [laferlaMobileMain, laferlaMobileHand, laferlaMobilePowerful],
  },
  {
    id: '4',
    title: 'Laferla Insurance Web App',
    category: ['Web'],
    description:
      'A self-service portal that removes the middleman — giving Laferla customers full control over their policies, renewals, and claims without needing to call or visit a branch.',
    tech: ['React', 'TypeScript', 'REST APIs', 'Auth'],
    metrics: 'Self-service • Reduced support load',
    color: 'from-teal-500 to-cyan-500',
    accent: '#55e6c1',
    previewUrl: 'https://app.laferla.com.mt/',
    gitUrl: '',
    challenge:
      'Reducing dependency on branch staff and phone support by making core insurance operations fully self-serviceable online.',
    solution:
      'Built a secure, role-based customer portal with intuitive flows for policy management, renewals, and claims — accessible without agent involvement.',
    outcome:
      'Customers gained 24/7 self-service access to their insurance accounts, cutting inbound support contacts and freeing up agent capacity.',
    fullDescription:
      'The Laferla web app is a full-featured self-service portal for existing customers. It handles the complete purchase and post-purchase lifecycle — renewals, claims, and policy updates — without requiring branch or phone interactions.',
    images: [laferlaWebMain, laferlaWebBuy, laferlaWebProfile],
  },
  {
    id: '5',
    title: 'Lyfter',
    category: ['Mobile'],
    description:
      'Booking a ride should be instant and transparent. Lyfter connects passengers with drivers in real-time, with live route tracking and upfront distance calculations built in.',
    tech: ['React Native', 'Expo', 'Maps API', 'Real-time'],
    metrics: 'Live tracking • Real-time matching',
    color: 'from-amber-500 to-orange-500',
    accent: '#ffbd59',
    gitUrl: 'https://github.com/EbubeEvan/Lyfter',
    previewUrl: 'https://expo.dev/artifacts/eas/wPs2Hmyg6gRfuqbrDCME3E.apk',
    challenge:
      'Implementing real-time driver-passenger matching with live map tracking on a cross-platform mobile stack without sacrificing performance.',
    solution:
      'Used WebSocket-based location syncing and integrated a maps SDK for live route rendering, with upfront fare estimation calculated from distance data.',
    outcome:
      'A fully functional ride-hailing prototype with real-time tracking, instant booking, and transparent distance-based pricing.',
    fullDescription:
      'Lyfter is a ride-hailing mobile app built with React Native and Expo. It supports real-time driver matching, live GPS route tracking, and upfront distance-based fare calculations.',
    images: [lyfterBanner, lyfterDetails, lyfterSelect],
  },
  {
    id: '6',
    title: 'AI Expert System',
    category: ['Web', 'AI'],
    description:
      'Most AI chatbots can only talk. The AI Expert System is an autonomous agent that acts — completing dev tasks like setting up GitHub repos, writing code, and deploying full-stack projects through a real-time multimodal chat interface.',
    tech: ['React', 'Node.js', 'OpenAI', 'WebSockets'],
    metrics: 'Autonomous • Real-time multimodal',
    color: 'from-violet-500 to-indigo-500',
    accent: '#a99cff',
    featured: true,
    previewUrl: 'https://playground.hyperlambda.dev/',
    gitUrl: '',
    challenge:
      'Building an agent that could autonomously execute multi-step dev workflows — not just respond — while keeping the interface responsive during long-running tasks.',
    solution:
      'Designed an event-driven pipeline with real-time WebSocket feedback, allowing the agent to stream progress updates and intermediate outputs back to the user as each step completed.',
    outcome:
      'Delivered a working autonomous dev agent capable of scaffolding, writing, and deploying full-stack projects end-to-end through a single chat interface.',
    fullDescription:
      'The AI Expert System goes beyond conversational AI — it is an autonomous agent that executes real development tasks. Users interact through a multimodal chat interface while the agent handles everything from repository setup to deployment.',
    images: [aiMain, aiDiagram, aiToolCall],
  },
];
