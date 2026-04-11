'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Copy, Check } from 'lucide-react';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "ebubemmayie@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Let&apos;s build<br />
            <span className="text-zinc-600">something precise.</span>
          </h2>
          
          <p className="text-xl text-zinc-400 mb-12 max-w-lg mx-auto">
            Currently open to collaborate. Working worldwide.
          </p>

          {/* Availability Indicator */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-zinc-400">Available for work</span>
          </div>

          {/* Email CTA */}
          <div className="flex flex-col items-center gap-6">
            <a 
              href={`mailto:${email}?subject=Project Inquiry`}
              className="group relative text-xl sm:text-3xl md:text-5xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-violet-500 hover:to-cyan-400 transition-all duration-300 break-all"
            >
              {email}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>

            <div className="flex items-center gap-4">
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
              
              <a 
                href={`mailto:${email}`}
                className="md:hidden flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-sm">
          <p>© 2026 Evangeline Mmayie. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/EbubeEvan" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/evangeline-mmayie/" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <a 
          href={`mailto:${email}`}
          className="w-full py-4 bg-white text-black rounded-full font-semibold flex items-center justify-center gap-2 shadow-2xl"
        >
          <Mail className="w-5 h-5" />
          Start a Project
        </a>
      </div>
    </section>
  );
};
