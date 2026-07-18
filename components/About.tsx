'use client';

import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  const stats = [
    { label: 'Years in production', value: '4+' },
    { label: 'Projects delivered', value: '20+' },
    { label: 'Client partnerships', value: '15+' },
    { label: 'Primary platforms', value: 'Web / Mobile' },
  ];

  return (
    <section id="about" className="relative scroll-mt-20 border-y border-[var(--line)] bg-[#0a0d0c] py-24 md:py-36">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="system-label">Operating profile</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-balance text-[clamp(2.5rem,5vw,5.6rem)] font-medium leading-[0.96] text-[#e9f2ed]">
              Precision in the system. <span className="text-[#66716b]">Momentum in the experience.</span>
            </h2>
            <div className="mt-10 grid gap-6 text-base leading-relaxed text-[#929e97] md:grid-cols-2 md:text-lg">
              <p>I build high-performance web and mobile applications with a focus on scalability, maintainability, and business outcomes.</p>
              <p>From enterprise dashboards to fluid mobile products, I connect strong architecture with interfaces that feel deliberate under pressure.</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 border-l border-t border-[var(--line)] lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              className="min-h-36 border-b border-r border-[var(--line)] p-5 md:min-h-44 md:p-7"
              >
              <div className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[#647069]">Telemetry / 0{i + 1}</div>
              <div className="mt-8 text-2xl font-medium text-[#e9f2ed] md:text-3xl">{stat.value}</div>
              <div className="mt-2 text-xs text-[#7f8a84]">{stat.label}</div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
