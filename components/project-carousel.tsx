"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import type { ProjectImage } from "@/data/projects";

// Mismo estilo que el botón de tema: borde y sombra dura que se reduce al hover
const arrowButton =
  "absolute top-1/2 z-10 hidden size-10 -translate-y-1/2 place-items-center border-2 border-primary bg-card text-ink shadow-[4px_4px_0px_var(--color-primary)] transition-all duration-300 hover:shadow-[2px_2px_0px_var(--color-primary)] active:shadow-none md:grid";

export function ProjectCarousel({ images, href, sizes }: { images: ProjectImage[]; href: string; sizes: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = (index + images.length) % images.length;
    track.scrollTo({ left: next * track.clientWidth });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(active - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(active + 1);
    }
  };

  return (
    <div role="region" aria-roledescription="carrusel" aria-label="Capturas del proyecto" onKeyDown={handleKeyDown}>
      <div className="relative">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
        >
          {images.map((image, i) => (
            <Link
              key={image.src}
              href={href}
              aria-roledescription="diapositiva"
              aria-label={`${image.alt} (${i + 1} de ${images.length})`}
              className="relative aspect-video w-full shrink-0 snap-center bg-surface"
            >
              <Image src={image.src} alt={image.alt} fill sizes={sizes} className="object-contain" />
            </Link>
          ))}
        </div>
        {images.length > 1 && (
          <>
            <button type="button" onClick={() => goTo(active - 1)} aria-label="Imagen anterior" className={`${arrowButton} left-3`}>
              <ChevronLeft aria-hidden className="size-4" />
            </button>
            <button type="button" onClick={() => goTo(active + 1)} aria-label="Imagen siguiente" className={`${arrowButton} right-3`}>
              <ChevronRight aria-hidden className="size-4" />
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex justify-center gap-1 border-t-2 border-primary bg-card py-2">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ver imagen ${i + 1} de ${images.length}`}
              aria-current={i === active}
              className="p-1"
            >
              <span aria-hidden className={`block size-2 ${i === active ? "bg-accent" : "bg-primary"}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
