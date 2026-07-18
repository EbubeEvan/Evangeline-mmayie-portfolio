'use client';

import { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';

type GalleryImage = string | StaticImageData;

export const ProjectGallery = ({ images, title }: { images: GalleryImage[]; title: string }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') setActiveIndex((index) => index === null ? null : (index - 1 + images.length) % images.length);
      if (event.key === 'ArrowRight') setActiveIndex((index) => index === null ? null : (index + 1) % images.length);
      if (event.key !== 'Tab') return;
      const controls = dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled])');
      if (!controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [isOpen, images.length]);

  if (!images.length) return null;

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={typeof image === 'string' ? image : image.src}
            type="button"
            onClick={(event) => {
              triggerRef.current = event.currentTarget;
              setActiveIndex(index);
            }}
            className="group relative aspect-[16/10] overflow-hidden border border-[var(--line)] bg-[#0a0d0c] text-left"
            aria-label={`Expand ${title} interface view ${index + 1}`}
          >
            <Image src={image} alt={`${title} interface view ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
            <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center bg-[#050706]/85 text-[#e9f2ed] backdrop-blur-md transition-colors group-hover:bg-[#9dffb4] group-hover:text-[#031008]">
              <Expand className="h-4 w-4" />
            </span>
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <dialog
          open
          ref={dialogRef}
          aria-label={`${title} image viewer`}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#020302]/95 p-4 md:p-10"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
        >
          <div className="relative h-[min(82vh,56rem)] w-full max-w-7xl">
            <Image src={images[activeIndex]} alt={`${title} expanded interface view ${activeIndex + 1}`} fill sizes="95vw" className="object-contain" priority />
          </div>

          <button ref={closeButtonRef} type="button" onClick={() => setActiveIndex(null)} className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-white/20 bg-black/50 text-white hover:bg-white hover:text-black md:right-8 md:top-8" aria-label="Close image viewer">
            <X className="h-5 w-5" />
          </button>

          {images.length > 1 ? (
            <>
              <button type="button" onClick={() => setActiveIndex((activeIndex - 1 + images.length) % images.length)} className="absolute bottom-5 left-4 flex h-11 w-11 items-center justify-center border border-white/20 bg-black/50 text-white hover:bg-white hover:text-black md:bottom-auto md:left-8 md:top-1/2 md:-translate-y-1/2" aria-label="Previous image">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button type="button" onClick={() => setActiveIndex((activeIndex + 1) % images.length)} className="absolute bottom-5 right-4 flex h-11 w-11 items-center justify-center border border-white/20 bg-black/50 text-white hover:bg-white hover:text-black md:bottom-auto md:right-8 md:top-1/2 md:-translate-y-1/2" aria-label="Next image">
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          ) : null}

          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-white/60">
            {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </p>
        </dialog>
      ) : null}
    </>
  );
};