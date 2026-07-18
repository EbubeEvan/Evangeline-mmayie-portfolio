'use client';

import React from 'react';
import { motion } from 'motion/react';

interface Skill {
  name: string;
  x: number;
  y: number;
  size: number;
}

export const SkillNode = ({ skill, index }: { skill: Skill, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, type: "spring" }}
      whileHover={{ scale: 1.08, zIndex: 20 }}
      className="group absolute -translate-x-1/2 -translate-y-1/2"
      style={{ 
        left: `${skill.x}%`, 
        top: `${skill.y}%`,
      }}
    >
      <div className="relative">
        <div 
          className="whitespace-nowrap border border-[var(--line-strong)] bg-[#0a0d0c]/90 px-4 py-2 font-mono text-sm font-medium text-[#8a9690] transition-all group-hover:border-[#9dffb4] group-hover:text-[#9dffb4]"
          style={{ fontSize: `${0.8 + skill.size * 0.2}rem` }}
        >
          {skill.name}
        </div>
        <div className="absolute inset-0 -z-10 bg-[#9dffb4]/15 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
      </div>
    </motion.div>
  );
};
