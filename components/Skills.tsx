'use client';

import { motion } from 'motion/react';
import { SKILLS } from '@/lib/constants';
import { SkillNode } from './SkillNode';

export const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-20 overflow-hidden bg-[#050706] py-24 md:py-36">
      <div className="section-shell">
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="system-label mb-5">Systems map</p>
            <h2 className="text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.88] text-[#e9f2ed]">Tools in orbit.</h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-[#929e97] lg:justify-self-end md:text-lg">A working stack for resilient interfaces, real-time products, and production-grade delivery.</p>
        </div>

        <div className="relative hidden h-[620px] w-full border border-[var(--line)] bg-[#080b09] md:block">
          <div className="command-grid absolute inset-0 opacity-30" aria-hidden="true" />
          <motion.div
            className="absolute inset-x-0 top-0 z-10 h-px bg-[#9dffb4]/60 shadow-[0_0_20px_#9dffb4]"
            animate={{ y: [0, 618, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            aria-hidden="true"
          />
          <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
            {SKILLS.map((skill, i) => 
              SKILLS.slice(i + 1).map((skill2, j) => (
                <motion.line
                  key={`${i}-${j}`}
                  x1={`${skill.x}%`}
                  y1={`${skill.y}%`}
                  x2={`${skill2.x}%`}
                  y2={`${skill2.y}%`}
                  stroke="currentColor"
                  className="text-[#9dffb4]"
                  strokeWidth="0.5"
                  initial={{ opacity: 0.04 }}
                  animate={{ 
                    opacity: [0.04, 0.16, 0.04],
                  }}
                  transition={{
                    duration: 3 + ((i + j) % 3),
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))
            )}
          </svg>

          {SKILLS.map((skill, i) => (
            <SkillNode key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        <div className="grid grid-cols-2 border-l border-t border-[var(--line)] md:hidden">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12% 0px' }}
              transition={{ delay: index * 0.055, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="border-b border-r border-[var(--line)] p-4"
            >
              <span className="font-mono text-[0.55rem] text-[#647069]">{String(index + 1).padStart(2, '0')}</span>
              <p className="mt-4 text-sm text-[#c8d2cc]">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
