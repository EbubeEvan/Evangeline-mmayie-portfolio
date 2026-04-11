'use client';

import React from 'react';
import { motion } from 'motion/react';
import { User, Code, Zap, Globe } from 'lucide-react';

export const About = () => {
  const stats = [
    { label: 'Years Experience', value: '4+', icon: Zap },
    { label: 'Projects Delivered', value: '20+', icon: Globe },
    { label: 'Happy Clients', value: '15+', icon: User },
    { label: 'Lines of Code', value: '100k+', icon: Code },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-[#050505] relative overflow-hidden scroll-mt-24">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-mono text-violet-500 tracking-widest uppercase mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Crafting digital experiences with <span className="text-zinc-500 italic">precision</span> and <span className="text-zinc-500 italic">purpose</span>.
            </h3>
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
              <p>
                I am a Software Engineer specialized in building high-performance web and mobile applications. 
                My approach combines technical rigor with a deep understanding of user experience, 
                ensuring that every line of code serves a business goal.
              </p>
              <p>
                Whether it&apos;s a complex enterprise dashboard or a fluid mobile interface, 
                I focus on scalability, performance, and maintainability. I believe that 
                great software is not just about how it looks, but how it feels and performs 
                under pressure.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors group"
              >
                <stat.icon className="w-6 h-6 text-violet-500 mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
