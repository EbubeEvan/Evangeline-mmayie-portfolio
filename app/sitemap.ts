import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://evangeline-mmayie.vercel.app';

  const projects = PROJECTS.map((project) => ({
    url: `${base}/work/${project.id}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      priority: 1,
    },
    ...projects,
  ];
}
