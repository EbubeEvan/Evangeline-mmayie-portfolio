'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Service } from '@/lib/types';

export const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-zinc-950 border border-zinc-900 hover:border-zinc-700 p-8 transition-all duration-500 cursor-pointer h-full"
    >
      <div className="flex justify-between items-start mb-8">
        <span className={cn("text-5xl font-bold opacity-20 group-hover:opacity-100 transition-opacity", service.color.replace('bg-', 'text-'))}>
          {service.number}
        </span>
        <motion.div
          animate={{ rotate: isHovered ? 45 : 0 }}
          className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors"
        >
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-black" />
        </motion.div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-6 whitespace-pre-line">
        {service.title}
      </h3>

      <ul className="space-y-3 mb-8">
        {service.items.map((item, i) => (
          <li key={i} className="text-sm text-zinc-400 flex items-center gap-2">
            <span className="w-1 h-1 bg-zinc-600 rounded-full" />
            {item}
          </li>
        ))}
      </ul>

      <div className="pt-6 border-t border-zinc-900 flex items-center justify-end mt-auto">
        <a 
          href={`mailto:ebubemmayie@gmail.com?subject=Project Inquiry - ${service.title.replace('\n', ' ')}`}
          className={cn(
            "text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1",
            service.color.replace('bg-', 'text-')
          )}
        >
          Discuss Project <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};
