import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Contact } from '@/components/Contact';
import { ProjectGallery } from '@/components/ProjectGallery';
import { PROJECTS } from '@/lib/constants';

type CaseStudyProps = Readonly<{
  params: Promise<{ id: string }>;
}>;

export const generateStaticParams = () => PROJECTS.map((project) => ({ id: project.id }));

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((entry) => entry.id === id);
  if (!project) return {};
  return {
    title: `${project.title} | Evangeline Mmayie`,
    description: project.fullDescription || project.description,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { id } = await params;
  const project = PROJECTS.find((entry) => entry.id === id);
  if (!project) notFound();

  const categories = Array.isArray(project.category) ? project.category : [project.category];
  const chapters = [
    { number: '01', label: 'Challenge', title: 'The constraint', content: project.challenge },
    { number: '02', label: 'System', title: 'The response', content: project.solution },
    { number: '03', label: 'Outcome', title: 'The result', content: project.outcome },
  ];

  return (
    <div className="min-h-screen bg-[#050706] text-[#e9f2ed]">
      <Navigation />

      <main>
        <section className="relative min-h-[100svh] overflow-hidden border-b border-[var(--line)]">
          {project.images?.[0] ? (
            <Image src={project.images[0]} alt={`${project.title} product interface`} fill priority sizes="100vw" className="object-cover" />
          ) : null}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,6,0.98)_0%,rgba(5,7,6,0.86)_42%,rgba(5,7,6,0.18)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050706] via-transparent to-[#050706]/50" />
          <div className="command-grid absolute inset-0 opacity-20" aria-hidden="true" />

          <div className="section-shell relative z-10 flex min-h-[100svh] flex-col justify-between pb-8 pt-28 md:pb-10 md:pt-36">
            <Link href="/#work" className="inline-flex w-fit items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[#9aa59f] transition-colors hover:text-[#9dffb4]">
              <ArrowLeft className="h-4 w-4" /> Back to archive
            </Link>

            <div className="max-w-5xl py-16">
              <div className="mb-7 flex flex-wrap items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.14em]" style={{ color: project.accent }}>
                <span>Case file / {project.id.padStart(2, '0')}</span>
                <span className="text-[#56615b]">•</span>
                <span>{categories.join(' + ')}</span>
              </div>
              <h1 className="text-balance text-[clamp(3.7rem,10vw,10rem)] font-medium leading-[0.82] text-white">{project.title}</h1>
              <p className="mt-9 max-w-2xl text-base leading-relaxed text-[#b0bbb5] md:text-xl">{project.fullDescription || project.description}</p>

              <div className="mt-10 flex flex-wrap gap-3">
                {project.previewUrl ? (
                  <a href={project.previewUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 px-5 text-sm font-semibold text-[#031008] transition-colors hover:bg-white" style={{ backgroundColor: project.accent }}>
                    View live <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
                {project.gitUrl ? (
                  <a href={project.gitUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 border border-white/25 px-5 text-sm font-semibold text-white transition-colors hover:border-white">
                    View source <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-white/15 pt-5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[#8e9993] md:grid-cols-4">
              <span>Archive / 2026</span>
              <span>{categories.join(' / ')}</span>
              <span className="hidden md:block">Status / Deployed</span>
              <span className="text-right" style={{ color: project.accent }}>Case active</span>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--line)] bg-[#0a0d0c] py-20 md:py-28">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="system-label">Mission telemetry</p>
            </div>
            <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
              <div className="bg-[#0a0d0c] p-6">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[#647069]">Outcome signal</p>
                <p className="mt-5 text-xl leading-snug" style={{ color: project.accent }}>{project.metrics}</p>
              </div>
              <div className="bg-[#0a0d0c] p-6">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[#647069]">Technology</p>
                <p className="mt-5 text-sm leading-relaxed text-[#b0bbb5]">{project.tech.join(' / ')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#050706] py-24 md:py-36">
          <div className="section-shell">
            {chapters.map((chapter) => (
              <article key={chapter.number} className="grid gap-8 border-t border-[var(--line)] py-12 lg:grid-cols-[0.45fr_0.75fr_1.3fr] lg:gap-16 lg:py-20">
                <span className="font-mono text-xs" style={{ color: project.accent }}>{chapter.number}</span>
                <div>
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[#647069]">{chapter.label}</p>
                  <h2 className="mt-4 text-3xl font-medium text-[#e9f2ed]">{chapter.title}</h2>
                </div>
                <p className="text-lg leading-relaxed text-[#929e97] md:text-xl">{chapter.content}</p>
              </article>
            ))}
          </div>
        </section>

        {project.images && project.images.length > 1 ? (
          <section className="border-y border-[var(--line)] bg-[#0a0d0c] py-24 md:py-32">
            <div className="section-shell">
              <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="system-label mb-5">Interface archive</p>
                  <h2 className="text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.9] text-[#e9f2ed]">System views.</h2>
                </div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[#647069]">Select to inspect</p>
              </div>
              <ProjectGallery images={project.images.slice(1)} title={project.title} />
            </div>
          </section>
        ) : null}

        <section className="bg-[#050706] py-24 md:py-32">
          <div className="section-shell flex flex-col items-start justify-between gap-10 border-y border-[var(--line)] py-12 md:flex-row md:items-center">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em]" style={{ color: project.accent }}>End of case file</p>
              <h2 className="mt-4 text-3xl font-medium text-[#e9f2ed] md:text-5xl">Explore the next system.</h2>
            </div>
            <Link href="/#work" className="inline-flex min-h-12 items-center gap-2 border border-[var(--line-strong)] px-5 text-sm font-semibold text-[#e9f2ed] transition-colors hover:border-[#9dffb4] hover:text-[#9dffb4]">
              Return to work <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Contact />
    </div>
  );
}