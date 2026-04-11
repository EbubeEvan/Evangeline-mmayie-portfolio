'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { REVIEWS } from '@/lib/constants';

export const Reviews = () => {
  return (
    <section id="reviews" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Client Voices</h2>
          <p className="text-zinc-400 max-w-xl">Direct feedback from product leaders and founders I&apos;ve collaborated with.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => {
            const avatarContent = review.avatar ? (
              <Image src={review.avatar as any} alt={review.name} className="w-full h-full object-cover" />
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
                className="relative p-8 bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-all duration-300 group flex flex-col justify-between h-full"
              >
                <Quote className="absolute top-6 right-8 w-8 h-8 text-zinc-800 group-hover:text-violet-500/20 transition-colors" />

                <div className="relative z-10">
                  <p className="text-zinc-300 leading-relaxed mb-8 italic">&ldquo;{review.content}&rdquo;</p>
                </div>

                <div className="relative z-10 mt-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 overflow-hidden flex items-center justify-center text-zinc-500 font-bold">
                      {avatarContent}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{review.name}</h4>
                      <p className="text-xs text-zinc-500">{review.role} @ {review.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
