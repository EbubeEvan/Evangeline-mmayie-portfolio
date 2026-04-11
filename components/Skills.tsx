'use client';

import { motion } from 'motion/react';
import { SKILLS } from '@/lib/constants';
import { SkillNode } from './SkillNode';

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Constellation</h2>
          <p className="text-zinc-400">The tools I use to build business solutions.</p>
        </div>

        <div className="relative h-[600px] w-full max-w-4xl mx-auto">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {SKILLS.map((skill, i) => 
              SKILLS.slice(i + 1).map((skill2, j) => (
                <motion.line
                  key={`${i}-${j}`}
                  x1={`${skill.x}%`}
                  y1={`${skill.y}%`}
                  x2={`${skill2.x}%`}
                  y2={`${skill2.y}%`}
                  stroke="currentColor"
                  className="text-violet-500"
                  strokeWidth="0.5"
                  initial={{ opacity: 0.1 }}
                  animate={{ 
                    opacity: [0.1, 0.4, 0.1],
                    strokeWidth: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
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
      </div>
    </section>
  );
};
