'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-[#050505]/90 backdrop-blur-md border-b border-zinc-900 py-4" : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link 
            href="/" 
            onClick={(e) => handleLinkClick(e as any, '/#hero')}
            className="text-xl font-bold text-white tracking-tight group"
          >
            EM<span className="text-violet-500 group-hover:text-cyan-400 transition-colors">.DEV</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {['About', 'Services', 'Work', 'Reviews', 'Skills', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={`/#${item.toLowerCase()}`} 
                onClick={(e) => handleLinkClick(e as any, `/#${item.toLowerCase()}`)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
            <a 
              href="mailto:ebubemmayie@gmail.com"
              className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors"
            >
              Get in Touch
            </a>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            className="fixed inset-0 z-40 bg-[#050505] pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-3xl font-bold text-white">
              {['About', 'Services', 'Work', 'Reviews', 'Skills', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={`/#${item.toLowerCase()}`} 
                  onClick={(e) => handleLinkClick(e as any, `/#${item.toLowerCase()}`)}
                  className="border-b border-zinc-900 pb-4"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
