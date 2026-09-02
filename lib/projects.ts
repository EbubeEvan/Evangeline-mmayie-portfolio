import { Project } from './types';

import aiMain from '@/assets/projects/ai-expert-system/main.png';
import aiDiagram from '@/assets/projects/ai-expert-system/diagram.png';
import aiToolCall from '@/assets/projects/ai-expert-system/tool-call.png';

import beautyMain from '@/assets/projects/beauty-care-ai/main.png';
import beautyChatDark from '@/assets/projects/beauty-care-ai/chat-dark.png';
import beautyChatLight from '@/assets/projects/beauty-care-ai/chat-light.png';

import voltxMain from '@/assets/projects/voltx/main.png';
import voltxDetails from '@/assets/projects/voltx/details.png';
import voltxProducts from '@/assets/projects/voltx/products.png';

import laferlaSiteMain from '@/assets/projects/laferla-website/main.png';
import laferlaSiteAbout from '@/assets/projects/laferla-website/about.png';
import laferlaSiteTravel from '@/assets/projects/laferla-website/travel.png';

import laferlaMobileMain from '@/assets/projects/laferla-mobile-app/main.png';
import laferlaMobileHand from '@/assets/projects/laferla-mobile-app/hand-held.png';
import laferlaMobilePowerful from '@/assets/projects/laferla-mobile-app/powerful-app.png';

import laferlaWebMain from '@/assets/projects/laferla-web-app/main.png';
import laferlaWebBuy from '@/assets/projects/laferla-web-app/buy-insurance.png';
import laferlaWebProfile from '@/assets/projects/laferla-web-app/profile.png';

import weyzRiderMain from '@/assets/projects/weyz-rider/main.png';
import weyzRiderHome from '@/assets/projects/weyz-rider/home.png';
import weyzRiderCard from '@/assets/projects/weyz-rider/card-payment.jpeg';

import weyzDriverMain from '@/assets/projects/weyz-driver/main.png';
import weyzDriverNav from '@/assets/projects/weyz-driver/navigation.jpeg';
import weyzDriverShift from '@/assets/projects/weyz-driver/shift-summary.jpeg';

export const PROJECTS: Project[] = [
  {
    id: '1',
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
    id: '2',
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
    id: '3',
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
    id: '4',
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
  {
    id: '5',
    title: 'Weyz Rider',
    category: ['Mobile'],
    description:
      "Campus transportation shouldn't require cash or queues. Weyz Rider lets students tap to board, pay cashlessly via QR or virtual card, and track their rides — making campus mobility fast and frictionless.",
    tech: ['React Native' , 'TypeScript' , 'Nestjs' , 'PostgreSQL' , 'Paystack' , 'KYC' , 'NFC' , 'QR' , 'Google Maps'],
    metrics: 'Cashless campus transit • Tap & go payments',
    color: 'from-blue-500 to-indigo-500',
    accent: '#3b82f6',
    previewUrl: 'https://play.google.com/store/apps/details?id=com.weyzmobility.riders&hl=en',
    gitUrl: '',
    challenge:
      'Building a cashless transit system that works seamlessly across campus — handling real-time payments, NFC taps, and QR scans without adding friction to the boarding experience.',
    solution:
      'Designed a lightweight mobile UX with multiple payment options (NFC, QR, virtual card) and a wallet system, enabling students to tap and go without delays.',
    outcome:
      'Delivered a campus mobility app that replaces cash-based transit with instant, contactless payments — reducing boarding time and eliminating fare handling.',
    fullDescription:
      "Weyz Rider is a campus transportation app that enables students to move around campus cashless. It supports tap-to-pay via NFC, QR code scanning, and virtual card payments, with a built-in wallet for managing balances and tracking ride history.",
    images: [weyzRiderMain, weyzRiderHome, weyzRiderCard],
  },
  {
    id: '6',
    title: 'Weyz Driver',
    category: ['Mobile'],
    description:
      "Managing shift data and passenger tracking shouldn't slow drivers down. Weyz Driver gives drivers real-time navigation, earnings tracking, and commuter management — all in one place.",
    tech: ['React Native' , 'TypeScript' , 'Nestjs' , 'PostgreSQL' , 'Paystack' , 'KYC' , 'NFC' , 'QR' , 'Google Maps'],
    metrics: 'Real-time navigation • Shift & earnings tracking',
    color: 'from-indigo-500 to-blue-600',
    accent: '#6366f1',
    previewUrl: 'https://play.google.com/store/apps/details?id=com.weyzmobility.driver&hl=en',
    gitUrl: '',
    challenge:
      'Equipping drivers with the tools they need to manage routes, track commuters, and monitor earnings — without juggling multiple apps or manual logs.',
    solution:
      'Built a driver companion app with integrated navigation, real-time commuter scanning (NFC/QR), and automatic shift and earnings summaries.',
    outcome:
      'Drivers can now manage their entire shift from one app — navigating routes, scanning commuters, and tracking daily earnings in real time.',
    fullDescription:
      "Weyz Driver is the companion app for Weyz campus transit drivers. It provides real-time route navigation, commuter scanning via NFC or QR, shift tracking, and earnings summaries — giving drivers everything they need in a single interface.",
    images: [weyzDriverMain, weyzDriverNav, weyzDriverShift],
  },
  {
    id: '7',
    title: 'Voltx',
    category: ['Web'],
    description:
      'Shopping for gadgets should feel as polished as the products themselves. Voltx is an online store built to make discovery, comparison, and checkout feel effortless from first click to final purchase.',
    tech: ['Tanstack Start', 'TypeScript', 'Tailwind CSS', 'E-commerce UI', 'Checkout Flow'],
    metrics: 'Commerce-ready • Product discovery',
    color: 'from-cyan-500 to-teal-500',
    accent: '#20d4aa',
    featured: true,
    previewUrl: 'https://voltx-tech.vercel.app/',
    challenge:
      'Creating a storefront that could showcase a broad range of gadgets while keeping product discovery, trust, and the purchase flow simple and fast.',
    solution:
      'Designed a clean e-commerce experience with structured browsing, clear category storytelling, and focused conversion paths that guide users from exploration to checkout without friction.',
    outcome:
      'Delivered a modern online gadget store that feels intuitive, premium, and built for conversion.',
    fullDescription:
      'Voltx is an online gadget store focused on making tech shopping feel clear and enjoyable. The experience combines strong visual merchandising with straightforward product discovery and streamlined checkout to help customers find and buy the right device with confidence.',
    images: [voltxMain, voltxDetails, voltxProducts],
  },
  {
    id: '8',
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
];
