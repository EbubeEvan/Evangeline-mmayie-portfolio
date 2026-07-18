'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { REVIEWS } from '@/lib/constants';

export const Reviews = () => {
  return (
    <section id="reviews" className="scroll-mt-20 border-y border-[var(--line)] bg-[#0a0d0c] py-24 md:py-36">
      <div className="section-shell">
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="system-label mb-5">Field reports</p>
            <h2 className="text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.88] text-[#e9f2ed]">Proof, recorded.</h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-[#929e97] lg:justify-self-end md:text-lg">Direct feedback from product leaders and engineers after complex systems reached production.</p>
        </div>

        <div className="border-b border-[var(--line)]">
          {REVIEWS.map((review, i) => {
            const avatarContent = review.avatar ? (
              <Image src={review.avatar} alt="" fill sizes="64px" className="object-cover" />
            ) : (
              review.name.charAt(0)
            );

            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="grid gap-8 border-t border-[var(--line)] py-10 lg:grid-cols-[10rem_1fr] lg:gap-16 lg:py-16"
              >
                <div className="flex items-center gap-4 lg:block">
                  <div className="relative h-14 w-14 overflow-hidden border border-[var(--line-strong)] bg-[#101412] text-[#8a9690] lg:h-16 lg:w-16">
                    {avatarContent}
                  </div>
                  <div className="lg:mt-5">
                    <h3 className="font-medium text-[#e9f2ed]">{review.name}</h3>
                    <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-[#6f7a74]">{review.role} / {review.company}</p>
                  </div>
                </div>

                <blockquote className="text-balance text-xl leading-relaxed text-[#c8d2cc] md:text-2xl lg:text-3xl lg:leading-[1.45]">
                  “{review.content}”
                </blockquote>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
