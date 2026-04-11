'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { cn } from '@/lib/utils';
import { Project } from '@/lib/types';

export const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  return (
    <Link href={`/work/${project.id}`}>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        className={cn(
          "group relative flex flex-col bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-all duration-500 overflow-hidden cursor-pointer h-full"
        )}
      >
        {/* Device Frame Mockup */}
        <div className={cn(
          "relative bg-zinc-900/50 overflow-hidden h-48 md:h-56"
        )}>
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black" />
          
          {/* Simulated UI Content or Project Image */}
          <div className="absolute inset-4 bg-black rounded-lg overflow-hidden border border-zinc-800">
            <div className="relative h-full w-full">
              {project.images && project.images.length > 0 ? (
                <Image src={project.images[0] as any} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              ) : (
                // Fallback simulated UI if no image present (uses project color)
                <>
                  <div className={cn("h-full w-full bg-gradient-to-br opacity-20", project.color)} />
                  <div className="p-4 space-y-3 absolute inset-0">
                    <motion.div 
                      className="h-2 bg-zinc-800 rounded-full w-3/4"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div 
                      className="h-2 bg-zinc-800 rounded-full w-1/2"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    <div className="flex gap-2 mt-4">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          className={cn("w-20 h-20 rounded-lg bg-zinc-800/50", project.color.replace('from-', 'bg-').split(' ')[0])}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-6 py-3 bg-white text-black rounded-full font-medium">
              View Case Study
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-4 flex flex-col justify-between flex-grow">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-500">{Array.isArray(project.category) ? project.category.join(' • ') : project.category}</p>
            </div>
          </div>
          
          <p className="text-zinc-400 text-sm leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-xs px-2 py-1 bg-zinc-900 text-zinc-400 border border-zinc-800 rounded">
                {t}
              </span>
            ))}
          </div>
          
          <div className="pt-2 border-t border-zinc-900">
            <span className="text-xs font-mono text-emerald-400">{project.metrics}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
