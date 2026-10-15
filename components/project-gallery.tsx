"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { contentGap } from "@/components/ui";
import type { ProjectImage } from "@/data/projects";

// Mismo estilo que el botón de tema: borde y sombra dura que se reduce al hover
const iconButton =
  "grid size-10 place-items-center border-2 border-primary bg-card text-ink shadow-[4px_4px_0px_var(--color-primary)] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_var(--color-primary)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none";

const thumbSizes = "(min-width: 1152px) 352px, (min-width: 1024px) calc(33vw - 37px), (min-width: 640px) calc(50vw - 40px), calc(100vw - 48px)";

export function ProjectGallery({ images }: { images: ProjectImage[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState<number | null>(null);

  // showModal deja el resto de la página inerte, cierra con Esc y devuelve el foco a la miniatura
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (current !== null && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    }
  }, [current]);

  const close = () => dialogRef.current?.close();

  const step = (delta: number) =>
    setCurrent((index) => (index === null ? null : (index + delta + images.length) % images.length));

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "ArrowLeft") step(-1);
    else if (event.key === "ArrowRight") step(1);
  };

  // Clic en el fondo oscuro o en el espacio alrededor de la imagen
  const handleClick = (event: MouseEvent<HTMLDialogElement>) => {
    const target = event.target as HTMLElement;
    if (target === event.currentTarget || target.dataset.backdrop !== undefined) close();
  };

  const image = current !== null ? images[current] : null;

  return (
    <>
      <ul className={`${contentGap} grid gap-8 sm:grid-cols-2 lg:grid-cols-3`}>
        {images.map((img, i) => (
          <li key={img.src}>
            <figure>
              <button
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Ampliar imagen: ${img.alt}`}
                className="relative block aspect-video w-full border-2 border-primary bg-surface shadow-[6px_6px_0px_var(--color-primary)] transition-all duration-300 hover:shadow-[10px_10px_0px_var(--color-primary)] motion-safe:hover:-translate-y-1 motion-reduce:transition-none"
              >
                <Image src={img.src} alt="" fill sizes={thumbSizes} className="object-contain" />
              </button>
              {img.caption && <figcaption className="mt-4 text-sm leading-relaxed text-muted">{img.caption}</figcaption>}
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label="Imagen ampliada"
        onClose={() => {
          setCurrent(null);
          document.documentElement.style.overflow = "";
        }}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-black/85"
      >
        {image && (
          <div data-backdrop className="flex h-full flex-col items-center justify-center gap-4 p-4 sm:p-8">
            <div data-backdrop className="flex w-full max-w-6xl items-center justify-between">
              <span className="font-mono text-sm text-white">
                {current! + 1} / {images.length}
              </span>
              <button type="button" onClick={close} aria-label="Cerrar" autoFocus className={iconButton}>
                <X aria-hidden className="size-4" />
              </button>
            </div>
            <div data-backdrop className="relative w-full max-w-6xl flex-1">
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1152px) 1152px, 100vw" className="object-contain" />
            </div>
            {image.caption && <p className="text-center text-sm text-white/70">{image.caption}</p>}
            {images.length > 1 && (
              <div className="flex gap-4">
                <button type="button" onClick={() => step(-1)} aria-label="Imagen anterior" className={iconButton}>
                  <ChevronLeft aria-hidden className="size-4" />
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Imagen siguiente" className={iconButton}>
                  <ChevronRight aria-hidden className="size-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </dialog>
    </>
  );
}
