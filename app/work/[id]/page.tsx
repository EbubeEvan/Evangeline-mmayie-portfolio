'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Eye, X } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';
import { Navigation } from '@/components/Navigation';
import { Contact } from '@/components/Contact';
import { cn } from '@/lib/utils';

export default function CaseStudyPage() {
  const params = useParams();
  const router = useRouter();
  const project = PROJECTS.find((p) => p.id === params.id);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const [overlayIndex, setOverlayIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalOpen(false);
        setOverlayIndex(null);
      }
    };

    if (modalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button 
            onClick={() => router.push('/')}
            className="text-violet-500 hover:underline"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-violet-500/30 font-sans">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.push('/#work')}
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Work
          </motion.button>

          {/* Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                  {(Array.isArray(project.category) ? project.category : [project.category]).map((c, idx, arr) => (
                    <React.Fragment key={c}>
                      <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-medium text-zinc-400">{c}</span>
                      {idx < arr.length - 1 && <span className="text-zinc-600">•</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                {project.title}
              </h1>
              <p className="text-xl text-zinc-400 leading-relaxed mb-8 max-w-xl">
                {project.fullDescription || project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-12">
                {project.tech.map((t) => (
                  <span key={t} className="px-4 py-2 bg-zinc-950 border border-zinc-900 rounded-lg text-sm text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="p-6 bg-zinc-950 border border-zinc-900 rounded-2xl inline-block">
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">Impact Metric</p>
                  <p className="text-2xl font-bold text-emerald-400">{project.metrics}</p>
                </div>

                <div className="flex items-center gap-3">
                  {project.previewUrl ? (
                    <a href={project.previewUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform">
                      View Live <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : null}

                  {project.gitUrl ? (
                    <a href={project.gitUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 rounded-full text-zinc-300 hover:border-zinc-700 transition-colors">
                      View Code <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video lg:aspect-video rounded-3xl overflow-hidden border border-zinc-900 bg-zinc-900"
            >
              {project.images && project.images.length > 0 ? (
                <div className="relative w-full h-full">
                  <Image src={project.images[0] as any} alt={project.title} fill sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover" />
                </div>
              ) : (
                <div className="absolute inset-0 bg-zinc-900/50 backdrop-blur-3xl">
                  <div className="absolute inset-12 bg-black rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden">
                    <div className={cn("h-full w-full bg-gradient-to-br opacity-30", project.color)} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-white/5 blur-3xl animate-pulse" />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Detailed Content Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
            {[
              { title: 'The Challenge', content: project.challenge, icon: '🎯' },
              { title: 'The Solution', content: project.solution, icon: '💡' },
              { title: 'The Outcome', content: project.outcome, icon: '🚀' }
            ].map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6"
              >
                <div className="text-4xl">{section.icon}</div>
                <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {section.content || 'Detailed case study content coming soon. We focused on delivering a high-performance, user-centric solution that met all business objectives.'}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Visual Showcase (additional images) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-12 mb-32"
          >
            {project.images && project.images.length > 1 ? (
              project.images.slice(1).map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-video h-36 md:h-44 lg:h-56 rounded-3xl overflow-hidden border border-zinc-900 bg-zinc-900 group cursor-pointer"
                >
                  <Image src={img} alt={`${project.title} ${idx + 2}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />

                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity ${overlayIndex === idx ? 'bg-black/40 opacity-100' : 'bg-black/0 opacity-0 group-hover:opacity-100 group-hover:bg-black/30'}`} onMouseEnter={() => setOverlayIndex(idx)} onMouseLeave={() => setOverlayIndex(null)}>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setModalSrc(img as any); setModalOpen(true); }}
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      aria-label={`View ${project.title} image ${idx + 2}`}
                    >
                      <Eye className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              // Fallback placeholders (keep two placeholders to match grid)
              [0,1].map((i) => (
                <div key={i} className="relative aspect-video h-36 md:h-44 lg:h-56 rounded-3xl overflow-hidden border border-zinc-900 bg-zinc-900 group">
                  <div className={cn("absolute inset-0 bg-gradient-to-tr opacity-10 group-hover:opacity-20 transition-opacity", project.color)} />
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-800 font-mono text-xs uppercase tracking-widest">
                    Interface Detail {i + 1}
                  </div>
                </div>
              ))
            )}
          </motion.div>

          {/* Image modal */}
          {modalOpen && modalSrc && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => { setModalOpen(false); setOverlayIndex(null); }}>
              <div className="relative max-w-[90vw] max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  onClick={() => { setModalOpen(false); setOverlayIndex(null); }}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/60"
                  aria-label="Close image viewer"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                <div className="w-full h-full flex items-center justify-center">
                  <Image src={modalSrc as any} alt="Expanded project image" width={1200} height={800} className="object-contain" style={{ maxHeight: '90vh', maxWidth: '90vw' }} />
                </div>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-20 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-[3rem] text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Interested in similar results?</h2>
            <button 
              onClick={() => router.push('/#contact')}
              className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto"
            >
              Start a Project <ArrowUpRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </main>

      <Contact />
    </div>
  );
}
