'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { REVIEWS } from '@/lib/constants';
import { ParallaxSection } from './ParallaxSection';

const AUTOPLAY_MS = 9000;
const pad = (n: number) => String(n).padStart(2, '0');

export const Reviews = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const inView = useInView(stageRef, { amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const total = REVIEWS.length;

  const goTo = useCallback(
    (index: number, dir?: number) => {
      const next = (index + total) % total;
      setDirection(dir ?? (next > active ? 1 : -1));
      setActive(next);
    },
    [active, total],
  );
  const next = useCallback(() => goTo(active + 1, 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1, -1), [active, goTo]);

  const autoplay = !reduceMotion && inView && !paused;

  // On mobile the reviewer rail scrolls sideways — keep the active reviewer centred in view.
  // Scrolls only the rail itself (not the page), and is a no-op on desktop where the rail doesn't overflow.
  useEffect(() => {
    const rail = railRef.current;
    const chip = chipRefs.current[active];
    if (!rail || !chip || rail.scrollWidth <= rail.clientWidth) return;
    rail.scrollTo({
      left: chip.offsetLeft - (rail.clientWidth - chip.offsetWidth) / 2,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  }, [active, reduceMotion]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
  };

  const current = REVIEWS[active];

  return (
    <section id="reviews" className="scroll-mt-20 overflow-x-clip border-y border-[rgba(62,26,10,0.08)] bg-[#f7ede0] py-24 md:py-32">
      <ParallaxSection className="section-shell">
        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="system-label mb-5 !text-[#8d6b4f] [&::before]:!bg-[#b45309] [&::before]:!shadow-[0_0_0.7rem_rgba(180,83,9,0.38)]">Client Reflections</p>
            <h2 className="text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.02em] text-[#3e1a0a]">Proof, gathered.</h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-[#6d4a32] lg:justify-self-end md:text-lg">Direct feedback from product leaders and engineers after systems built for clarity reached production.</p>
        </div>

        <div
          ref={stageRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client reviews"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
          }}
          className="relative overflow-hidden rounded-[24px] border border-[rgba(62,26,10,0.08)] bg-[#faf4ee] focus-visible:outline-offset-4"
        >
          {/* Oversized decorative quote mark */}
          <span
            aria-hidden
            className="pointer-events-none absolute right-6 top-2 h-[0.6em] select-none overflow-hidden font-serif text-[9rem] leading-[0.85] text-[#b45309]/15 md:right-10 md:top-4 md:text-[14rem]"
          >
            &rdquo;
          </span>

          <div className="relative grid lg:grid-cols-[17rem_1fr]">
            {/* Reviewer rail */}
            <div ref={railRef} className="relative flex gap-2 overflow-x-auto border-b border-[rgba(62,26,10,0.08)] p-4 [scrollbar-width:none] md:p-6 lg:flex-col lg:overflow-visible lg:border-b-0 lg:border-r lg:p-8">
              {REVIEWS.map((review, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={review.id}
                    ref={(el) => {
                      chipRefs.current[i] = el;
                    }}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Show review from ${review.name}`}
                    aria-current={isActive}
                    className={`group relative flex shrink-0 items-center gap-3 rounded-full p-1.5 pr-4 text-left transition-colors lg:rounded-2xl lg:p-2.5 ${
                      isActive ? 'bg-[#3e1a0a] text-[#faf4ee]' : 'text-[#3e1a0a] hover:bg-[#3e1a0a]/[0.05]'
                    }`}
                  >
                    <span
                      className={`relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border text-sm font-semibold transition-all lg:h-11 lg:w-11 ${
                        isActive ? 'border-[#faf4ee]/30' : 'border-[rgba(62,26,10,0.08)] grayscale group-hover:grayscale-0'
                      }`}
                    >
                      {review.avatar ? (
                        <Image src={review.avatar} alt="" fill sizes="44px" className="object-cover" />
                      ) : (
                        review.name.charAt(0)
                      )}
                    </span>
                    <span className="min-w-0">
                      <span className="block whitespace-nowrap text-sm font-semibold leading-tight">{review.name.split(' ')[0]}</span>
                      <span
                        className={`hidden truncate font-mono text-[0.55rem] uppercase tracking-[0.1em] lg:block ${
                          isActive ? 'text-[#faf4ee]/60' : 'text-[#8d6b4f]'
                        }`}
                      >
                        {review.company}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Slides — stacked in one grid cell so height never jumps */}
            <div className="flex flex-col p-6 md:p-10 lg:p-12">
              <motion.div
                className="grid flex-1 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) next();
                  else if (info.offset.x > 60) prev();
                }}
              >
                {REVIEWS.map((review, i) => {
                  const isActive = i === active;
                  return (
                    <motion.figure
                      key={review.id}
                      aria-hidden={!isActive}
                      aria-roledescription="slide"
                      aria-label={`${i + 1} of ${total}`}
                      initial={false}
                      animate={
                        isActive
                          ? { opacity: 1, x: 0, filter: 'blur(0px)' }
                          : { opacity: 0, x: reduceMotion ? 0 : direction * -40, filter: 'blur(6px)' }
                      }
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className={`col-start-1 row-start-1 flex flex-col justify-between gap-8 ${isActive ? '' : 'pointer-events-none'}`}
                    >
                      <blockquote className="min-w-0 text-balance break-words text-lg leading-relaxed text-[#3e1a0a] md:text-xl lg:text-[1.45rem] lg:leading-[1.55]">
                        {review.content}
                      </blockquote>
                      <figcaption className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="h-px w-8 bg-[#b45309]" />
                        <span className="font-semibold text-[#3e1a0a]">{review.name}</span>
                        <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-[#8d6b4f]">
                          {review.role} / {review.company}
                        </span>
                      </figcaption>
                    </motion.figure>
                  );
                })}
              </motion.div>

              {/* Controls */}
              <div className="mt-10 flex items-center gap-4 border-t border-[rgba(62,26,10,0.08)] pt-6 md:gap-6">
                <span className="font-mono text-xs tabular-nums text-[#8d6b4f]">
                  <span className="text-[#3e1a0a]">{pad(active + 1)}</span> / {pad(total)}
                </span>

                <div className="flex flex-1 gap-1.5" aria-hidden>
                  {REVIEWS.map((review, i) => (
                    <span key={review.id} className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-[#3e1a0a]/10">
                      {i < active && <span className="absolute inset-0 bg-[#3e1a0a]/30" />}
                      {i === active && (
                        <span
                          key={active}
                          onAnimationEnd={next}
                          className="absolute inset-0 origin-left bg-[#b45309]"
                          style={
                            reduceMotion
                              ? undefined
                              : {
                                  animation: `review-progress ${AUTOPLAY_MS}ms linear forwards`,
                                  animationPlayState: autoplay ? 'running' : 'paused',
                                }
                          }
                        />
                      )}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous review"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(62,26,10,0.15)] text-[#3e1a0a] transition-colors hover:border-[#b45309] hover:bg-[#b45309] hover:text-[#faf4ee]"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next review"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#3e1a0a] text-[#faf4ee] transition-colors hover:bg-[#b45309]"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="sr-only" aria-live={autoplay ? 'off' : 'polite'}>
            Review {active + 1} of {total}, from {current.name}
          </p>
        </div>
      </ParallaxSection>
    </section>
  );
};
