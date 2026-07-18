"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/app/data";

// Pinterest-style masonry via pure CSS multi-column flow. Each image keeps
// its NATIVE aspect ratio (no cropping, no equal heights), columns fill
// top-to-bottom then wrap, and column-count is responsive:
//   2 cols (mobile) → 3 (tablet) → 4 (desktop) → 5 → 6.
// Photos fade+lift in on first view; clicking opens the lightbox.
export const MasonryGallery = ({
  images,
  onSelect,
}: {
  images: GalleryImage[];
  onSelect?: (index: number) => void;
}) => {
  const reduce = useReducedMotion();

  return (
    <div className="masonry-container max-w-[1600px] mx-auto">
      {images.map((img, i) => (
        <motion.div
          key={img.id}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -6% 0px" }}
          transition={{
            duration: 0.45,
            ease: [0.25, 0.1, 0.25, 1],
            delay: reduce ? 0 : (i % 4) * 0.05,
          }}
          className="masonry-item"
        >
          <button
            type="button"
            onClick={onSelect ? () => onSelect(i) : undefined}
            aria-label={img.alt}
            className={cn(
              "group relative block w-full overflow-hidden rounded-2xl bg-pp-card",
              "masonry-card transition-[transform,box-shadow] duration-[250ms] ease-out",
              onSelect && "cursor-pointer"
            )}
          >
            {/* Native aspect ratio preserved: width 100%, height auto */}
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={800}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1440px) 25vw, (max-width: 1920px) 20vw, 16vw"
              className="masonry-img block w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-[250ms] ease-out"
            />
          </button>
        </motion.div>
      ))}
    </div>
  );
};
