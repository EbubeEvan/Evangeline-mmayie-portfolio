'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Service } from '@/lib/types';

export const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group grid gap-8 border-t border-[var(--line)] py-8 md:grid-cols-[5rem_1fr_1.2fr_auto] md:items-start md:py-10"
    >
      <span className="font-mono text-xs text-[#9dffb4]">{service.number}</span>

      <h3 className="whitespace-pre-line text-2xl font-medium leading-tight text-[#e9f2ed] md:text-3xl">
        {service.title}
      </h3>

      <ul className="grid gap-3 sm:grid-cols-2">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm text-[#87928c]">
            <span className="h-px w-3 bg-[#4d5752]" />
            {item}
          </li>
        ))}
      </ul>

      <a
        href={`mailto:ebubemmayie@gmail.com?subject=Project Inquiry - ${service.title.replace('\n', ' ')}`}
        className="inline-flex h-11 w-11 items-center justify-center border border-[var(--line-strong)] text-[#e9f2ed] transition-colors hover:border-[#9dffb4] hover:bg-[#9dffb4] hover:text-[#031008]"
        aria-label={`Discuss ${service.title.replace('\n', ' ')}`}
      >
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
};
