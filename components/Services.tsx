'use client';

import React from 'react';
import { SERVICES } from '@/lib/constants';
import { ServiceCard } from './ServiceCard';

export const Services = () => {
  return (
    <section id="services" className="scroll-mt-20 bg-[#050706] py-24 md:py-36">
      <div className="section-shell">
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="system-label mb-5">Capability matrix</p>
            <h2 className="text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.88] text-[#e9f2ed]">Built to ship.</h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-[#929e97] lg:justify-self-end md:text-lg">Focused engineering engagements for products that need to perform, scale, and feel unmistakably considered.</p>
        </div>

        <div className="border-b border-[var(--line)]">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
