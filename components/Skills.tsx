'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import vines from '@/assets/images/vines.jpeg';
import { SKILLS } from '@/lib/constants';
import { ParallaxSection } from './ParallaxSection';

const VINES_POS: Array<{ name: string; x: number; y: number }> = [
  { name: 'HTML', x: 10, y: 24 },
  { name: 'CSS', x: 7, y: 34 },
  { name: 'Javascript', x: 16, y: 33 },
  { name: 'TypeScript', x: 26, y: 23 },
  { name: 'React', x: 38, y: 48 },
  { name: 'React Native', x: 17, y: 79 },
  { name: 'Next.js', x: 58, y: 20 },
  { name: 'Tailwind', x: 73, y: 38 },
  { name: 'Framer Motion', x: 32, y: 63 },
  { name: 'GSAP', x: 22, y: 50 },
  { name: 'Node.js', x: 57, y: 38 },
  { name: 'Express', x: 67, y: 32 },
  { name: 'Tanstack Start', x: 74, y: 14 },
  { name: 'GraphQL', x: 47, y: 62 },
  { name: 'PostgreSQL', x: 87, y: 24 },
  { name: 'MongoDB', x: 88, y: 42 },
  { name: 'Drizzle', x: 70, y: 70 },
  { name: 'Firebase', x: 43, y: 72 },
  { name: 'Supabase', x: 60, y: 84 },
  { name: 'LangChain', x: 70, y: 92 },
  { name: 'LlamaIndex', x: 89, y: 52 },
  { name: 'AI SDK', x: 70, y: 62 },
];

const VINES_SKILLS = SKILLS.map((s, i) => ({
  ...s,
  ...(VINES_POS[i] ?? { x: 50, y: 50 }),
  name: s.name,
}));

export const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-20 overflow-hidden bg-[#b45309] py-24 md:py-36">
      <ParallaxSection className="section-shell">
        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="system-label system-label--on-orange mb-5 !text-[#faf4ee] [&::before]:!bg-[#faf4ee] [&::before]:!shadow-[0_0_0.7rem_rgba(250,244,238,0.6)]">Craft & Stack</p>
            <h2 className="text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.02em] text-[#faf4ee]">Tools, at harvest.</h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-[#faf4ee]/85 lg:justify-self-end md:text-lg">A clear, curated stack for resilient interfaces, real-time products, and refined delivery.</p>
        </div>

        {/* Desktop vines infinity - full bleed, no crop */}
        <div className="relative hidden w-full overflow-hidden rounded-[32px] border border-[#faf4ee]/20 bg-[#faf4ee] p-2 md:block">
          <div className="relative aspect-[1408/768] w-full overflow-hidden rounded-[24px]">
            <Image src={vines} alt="" fill priority sizes="100vw" className="object-contain object-center" />
            {VINES_SKILLS.slice(0, SKILLS.length).map((skill, i) => (
              <motion.div
                key={`${skill.name}-${i}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
                initial={{ opacity: 0, scale: 0.7, y: 8 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ delay: i * 0.08, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.08, y: -4, zIndex: 20, transition: { type: 'spring', stiffness: 400, damping: 12 } }}
                whileTap={{ scale: 0.96 }}
              >
              <span className="cursor-pointer whitespace-nowrap rounded-full border-2 border-[#7a4a2b]/45 bg-[#faf4ee] px-5 py-2.5 font-serif text-sm font-bold tracking-[0.02em] text-[#3e1a0a] shadow-[0_4px_14px_rgba(62,26,10,0.18)] transition-colors hover:border-[#b45309] hover:text-[#b45309] md:text-[1.05rem]">
                {skill.name}
              </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile static grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12% 0px' }}
              transition={{ delay: index * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.04, y: -2, transition: { type: 'spring', stiffness: 400, damping: 12 } }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer rounded-[16px] border border-[#faf4ee]/15 bg-[#faf4ee]/10 p-4 backdrop-blur-sm"
            >
              <span className="font-mono text-[0.55rem] text-[#faf4ee]/70">{String(index + 1).padStart(2, '0')}</span>
              <p className="mt-3 text-sm font-medium text-[#faf4ee]">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </ParallaxSection>
    </section>
  );
};
