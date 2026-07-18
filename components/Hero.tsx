'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const CommandScene = dynamic(
  () => import('./CommandScene').then((module) => module.CommandScene),
  { ssr: false },
);

export const Hero = () => {
  const pathname = usePathname();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-[#050706]">
      <CommandScene />
      <div className="command-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050706_0%,rgba(5,7,6,0.92)_35%,rgba(5,7,6,0.22)_72%,#050706_100%)]" aria-hidden="true" />

      <div className="section-shell relative z-10 flex min-h-[100svh] flex-col justify-between pb-8 pt-28 md:pb-10 md:pt-36">
        <div className="grid flex-1 items-center lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="system-label mb-8"
            >
              Systems online · Remote worldwide
            </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-[#8a9690] md:text-sm">
                Evangeline Mmayie / Software Engineer
              </p>
              <h1 className="text-balance max-w-4xl text-[clamp(3.25rem,8.4vw,8.25rem)] font-semibold leading-[0.84] text-[#e9f2ed]">
                Engineering digital systems that move.
            </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-[#a2ada7] md:text-xl">
                I build high-performance web, mobile, and AI products where rigorous engineering meets expressive interaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link 
              href="/#work"
              onClick={(e) => handleLinkClick(e as any, '/#work')}
                className="group inline-flex min-h-12 items-center gap-3 bg-[#9dffb4] px-5 text-sm font-semibold text-[#031008] transition-colors hover:bg-white"
            >
                Enter selected work
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Link>
            <Link 
                href="/#contact"
                onClick={(e) => handleLinkClick(e as any, '/#contact')}
                className="group inline-flex min-h-12 items-center gap-3 border border-[var(--line-strong)] px-5 text-sm font-semibold text-[#e9f2ed] transition-colors hover:border-[#9dffb4] hover:text-[#9dffb4]"
            >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-2 gap-4 border-t border-[var(--line)] pt-5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-[#6f7a74] md:grid-cols-4 md:text-xs"
        >
          <span>Interface / 01</span>
          <span className="hidden md:block">Build / 2026.07</span>
          <span className="md:text-center">Scroll to navigate</span>
          <span className="text-right text-[#9dffb4]">Signal stable</span>
        </motion.div>
      </div>
    </section>
  );
};
