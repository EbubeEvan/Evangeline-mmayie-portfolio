'use client';

import React from 'react';
import { SERVICES } from '@/lib/constants';
import { ServiceCard } from './ServiceCard';

export const Services = () => {
  return (
    <section id="services" className="py-32 px-6 bg-zinc-950/30 border-y border-zinc-900 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Services</h2>
          <p className="text-zinc-400 max-w-xl">Clear offerings for specific outcomes. No scope creep, no surprises—just precise execution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-900 border border-zinc-900">
          {SERVICES.map((service, i) => (
            <div key={service.id} className="bg-[#050505]">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
