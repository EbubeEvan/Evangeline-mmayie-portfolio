'use client';

import { SKILLS } from '@/lib/skills';

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Evangeline Mmayie',
  jobTitle: 'Software Engineer',
  url: 'https://evangeline-mmayie.vercel.app',
  sameAs: [
    'https://github.com/EbubeEvan',
    'https://www.linkedin.com/in/evangeline-mmayie/',
  ],
  knowsAbout: SKILLS.map((skill) => skill.name),
};

const profilePage = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Evangeline Mmayie',
    jobTitle: 'Software Engineer',
    url: 'https://evangeline-mmayie.vercel.app',
    sameAs: [
      'https://github.com/EbubeEvan',
      'https://www.linkedin.com/in/evangeline-mmayie/',
    ],
    knowsAbout: SKILLS.map((skill) => skill.name),
  },
};

export const JsonLd = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePage) }}
    />
  </>
);
