'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = ['Work', 'About', 'Services', 'Reviews', 'Skills', 'Contact'];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto';
    }
  }, []);

  useEffect(() => {
    if (pathname !== '/') return;
    const sections = ['hero', ...NAV_ITEMS.map((item) => item.toLowerCase())]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.25, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          isScrolled || isMobileMenuOpen
            ? "border-[var(--line)] bg-[#050706]/88 py-3 backdrop-blur-xl"
            : "border-transparent bg-transparent py-5"
        )}
      >
        <div className="section-shell flex items-center justify-between">
          <Link 
            href="/" 
            onClick={(e) => handleLinkClick(e as any, '/#hero')}
            className="group flex items-center gap-3 text-sm font-semibold uppercase text-[#e9f2ed]"
          >
            <span className="flex h-8 w-8 items-center justify-center border border-[var(--line-strong)] font-mono text-[0.65rem] text-[#9dffb4] transition-colors group-hover:border-[#9dffb4]">EM</span>
            <span className="hidden sm:block">Evangeline Mmayie</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item} 
                href={`/#${item.toLowerCase()}`} 
                onClick={(e) => handleLinkClick(e as any, `/#${item.toLowerCase()}`)}
                className={cn(
                  "border border-transparent px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] transition-colors",
                  activeSection === item.toLowerCase()
                    ? "border-[var(--line)] text-[#9dffb4]"
                    : "text-[#7f8a84] hover:text-[#e9f2ed]",
                )}
              >
                {item}
              </Link>
            ))}
            <a 
              href="mailto:ebubemmayie@gmail.com"
              className="ml-3 inline-flex items-center gap-2 bg-[#e9f2ed] px-4 py-2 text-xs font-semibold text-[#050706] transition-colors hover:bg-[#9dffb4]"
            >
              Open channel <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </nav>

          <button 
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-[var(--line-strong)] text-[#e9f2ed] lg:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="mobile-navigation"
            className="fixed inset-0 z-40 bg-[#050706] px-4 pb-8 pt-24 lg:hidden"
          >
            <div className="command-grid absolute inset-0 opacity-20" aria-hidden="true" />
            <nav className="relative flex h-full flex-col" aria-label="Mobile navigation">
              <p className="system-label mb-8">Navigation matrix</p>
              {NAV_ITEMS.map((item, index) => (
                <Link 
                  key={item} 
                  href={`/#${item.toLowerCase()}`} 
                  onClick={(e) => handleLinkClick(e as any, `/#${item.toLowerCase()}`)}
                  className="group flex items-center justify-between border-t border-[var(--line)] py-4 text-[clamp(1.8rem,10vw,3.6rem)] font-medium leading-none text-[#e9f2ed]"
                >
                  {item}
                  <span className="font-mono text-xs text-[#66716b] transition-colors group-hover:text-[#9dffb4]">0{index + 1}</span>
                </Link>
              ))}
              <a href="mailto:ebubemmayie@gmail.com" className="mt-auto flex items-center justify-between border-t border-[var(--line)] pt-5 font-mono text-xs uppercase tracking-[0.12em] text-[#9dffb4]">
                Open project channel <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
