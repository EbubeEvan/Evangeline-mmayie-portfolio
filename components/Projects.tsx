'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { ProjectCategory } from '@/lib/types';
import { PROJECTS } from '@/lib/constants';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const [filter, setFilter] = useState<string | 'All'>('All');
  const [isDesktop, setIsDesktop] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const filtered = useMemo(() => {
    if (filter === 'All') return PROJECTS;
    return PROJECTS.filter(p => {
      if (Array.isArray(p.category)) return p.category.includes(filter as ProjectCategory);
      return p.category === filter;
    });
  }, [filter]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    ["0%", filtered.length > 1 ? `-${(filtered.length - 1) * 25}%` : "0%"]
  );

  return (
    <section 
      id="work" 
      ref={targetRef} 
      className={cn(
        "bg-[#050505] scroll-mt-24",
        isDesktop ? "relative h-[400vh]" : "py-20 px-6"
      )}
    >
      {isDesktop ? (
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <div className="max-w-7xl mx-auto w-full px-6 mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-6xl font-bold text-white mb-4">Selected Work</h2>
              <p className="text-zinc-400 text-lg">Scroll to explore projects.</p>
            </div>
            
            <div className="flex gap-2">
              {['All', 'Web', 'Mobile', 'AI'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as any)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all border",
                    filter === cat 
                      ? "bg-white text-black border-white" 
                      : "bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-600"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <motion.div 
              style={{ x }} 
              className="flex gap-8 px-[10%]"
            >
              <AnimatePresence mode='popLayout'>
                {filtered.map((project, i) => (
                  <motion.div 
                    key={project.id} 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="w-[450px] flex-shrink-0"
                  >
                    <ProjectCard project={project} index={i} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="absolute bottom-12 left-[10%] right-[10%] h-px bg-zinc-900">
            <motion.div 
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-violet-500 origin-left"
            />
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Selected Work</h2>
            <p className="text-zinc-400 mb-8">Craft across platforms.</p>
            
            <div className="flex flex-wrap gap-2">
              {['All', 'Web', 'Mobile', 'AI'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as any)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-medium transition-all border",
                    filter === cat 
                      ? "bg-white text-black border-white" 
                      : "bg-transparent text-zinc-400 border-zinc-800"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <AnimatePresence mode='popLayout'>
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectCard project={project} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </section>
  );
};
