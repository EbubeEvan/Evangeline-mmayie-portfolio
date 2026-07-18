'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "ebubemmayie@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-[var(--line)] bg-[#0a0d0c] pt-24 md:pt-36">
      <div className="command-grid absolute inset-0 opacity-20" aria-hidden="true" />

      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pb-24 md:pb-36"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="system-label">Channel open</p>
            <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[#8a9690]">
              <span className="h-2 w-2 bg-[#9dffb4] shadow-[0_0_12px_#9dffb4]" aria-hidden="true" />
              <span>Available for selected work</span>
            </div>
          </div>

          <h2 className="mt-16 max-w-5xl text-balance text-[clamp(3.2rem,9vw,9rem)] font-medium leading-[0.84] text-[#e9f2ed]">
            Let&apos;s build what comes next.
          </h2>

          <p className="mt-10 max-w-xl text-base leading-relaxed text-[#929e97] md:text-xl">
            Web, mobile, or AI product. Send the context, the constraint, and the outcome you need.
          </p>

          <div className="mt-14 border-y border-[var(--line)] py-6 md:flex md:items-center md:justify-between md:gap-8">
            <a 
              href={`mailto:${email}?subject=Project Inquiry`}
              className="group flex min-w-0 items-center gap-3 text-[clamp(1.2rem,4vw,3.7rem)] font-medium text-[#e9f2ed] transition-colors hover:text-[#9dffb4]"
            >
              <span className="min-w-0 break-all">{email}</span>
              <ArrowUpRight className="h-[0.8em] w-[0.8em] shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="mt-5 inline-flex min-h-11 shrink-0 items-center gap-2 border border-[var(--line-strong)] px-4 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[#8a9690] transition-colors hover:border-[#9dffb4] hover:text-[#9dffb4] md:mt-0"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied' : 'Copy address'}
            </button>
            <span className="sr-only" aria-live="polite">{copied ? 'Email address copied to clipboard' : ''}</span>
          </div>
        </motion.div>

        <footer className="flex flex-col gap-5 border-t border-[var(--line)] py-7 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[#647069] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Evangeline Mmayie. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/EbubeEvan" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#9dffb4]">GitHub</a>
            <a href="https://www.linkedin.com/in/evangeline-mmayie/" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#9dffb4]">LinkedIn</a>
          </div>
        </footer>
      </div>
    </section>
  );
};
