'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { REVIEWS } from '@/lib/constants';
import { ParallaxSection } from './ParallaxSection';

export const Reviews = () => {
  return (
    <section id="reviews" className="scroll-mt-20 border-y border-[rgba(62,26,10,0.08)] bg-[#f7ede0] py-24 md:py-36">
      <ParallaxSection className="section-shell">
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="system-label mb-5">Client Reflections</p>
            <h2 className="text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.02em] text-[#3e1a0a]">Proof, gathered.</h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-[#6d4a32] lg:justify-self-end md:text-lg">Direct feedback from product leaders and engineers after warm, considered systems reached production.</p>
        </div>

        <div className="rounded-[24px] border border-[rgba(62,26,10,0.08)] bg-[#faf4ee] p-6 md:p-8 lg:p-10">
          {REVIEWS.map((review, i) => {
            const avatarContent = review.avatar ? (
              <Image src={review.avatar} alt={review.name} fill sizes="80px" className="object-cover" />
            ) : (
              review.name.charAt(0)
            );

            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="grid gap-8 border-b border-[rgba(62,26,10,0.08)] py-10 last:border-b-0 lg:grid-cols-[10rem_1fr] lg:gap-16 lg:py-12"
              >
                <div className="flex items-center gap-4 lg:block">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[rgba(62,26,10,0.08)] bg-[#faf4ee] text-[#8d6b4f] lg:h-20 lg:w-20">
                    {avatarContent}
                  </div>
                  <div className="lg:mt-5">
                    <h3 className="font-semibold text-[#3e1a0a]">{review.name}</h3>
                    <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-[#8d6b4f]">{review.role} / {review.company}</p>
                  </div>
                </div>

                <blockquote className="text-balance text-xl leading-relaxed text-[#3e1a0a] md:text-2xl lg:text-[1.85rem] lg:leading-[1.45]">
                  “{review.content}”
                </blockquote>
              </motion.div>
            );
          })}
        </div>
      </ParallaxSection>
    </section>
  );
};
