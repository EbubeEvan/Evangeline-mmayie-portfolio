'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/lib/types';

export const ProjectCard = ({ project, index, active = false }: { project: Project; index: number; active?: boolean }) => {
  return (
    <Link href={`/work/${project.id}`} className="group block py-14 md:py-24">
      <motion.article animate={{ opacity: active ? 1 : 0.46 }} transition={{ duration: 0.35 }}>
        {project.images?.[0] ? (
          <div className="relative mb-8 aspect-[16/9] overflow-hidden border border-[var(--line)] lg:hidden">
            <Image src={project.images[0]} alt={`${project.title} interface`} fill sizes="100vw" className="object-contain" />
          </div>
        ) : null}

        <div className="flex items-center justify-between border-t border-[var(--line)] pt-4 font-mono text-[0.65rem] uppercase tracking-[0.14em]">
          <span style={{ color: project.accent }}>Mission / {String(index + 1).padStart(2, '0')}</span>
          <span className="text-[#6f7a74]">{Array.isArray(project.category) ? project.category.join(' + ') : project.category}</span>
        </div>

        <h3 className="mt-7 text-balance text-[clamp(2.2rem,5vw,4.8rem)] font-medium leading-[0.95] text-[#e9f2ed] transition-colors group-hover:text-white">
          {project.title}
        </h3>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#929e97] md:text-lg">{project.description}</p>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-2 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[#647069]">System outcome</p>
            <p className="max-w-md font-mono text-xs leading-relaxed" style={{ color: project.accent }}>{project.metrics}</p>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#e9f2ed]">
            Open case study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </span>
        </div>
      </motion.article>
    </Link>
  );
};
