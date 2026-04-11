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
      whileHover={{ scale: 1.2, zIndex: 20 }}
      className="absolute cursor-pointer group -translate-x-1/2 -translate-y-1/2"
      style={{ 
        left: `${skill.x}%`, 
        top: `${skill.y}%`,
      }}
    >
      <div className="relative">
        <div 
          className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-sm font-medium text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-all whitespace-nowrap"
          style={{ fontSize: `${0.8 + skill.size * 0.2}rem` }}
        >
          {skill.name}
        </div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
      </div>
    </motion.div>
  );
};
