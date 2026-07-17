"use client";

import { useScroll, useTransform, motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Pinterest-style auto layout: a CSS multi-column flow where each image
// keeps its NATIVE aspect ratio (no cropping, no forced ratio). Three
// columns drift at slightly diferent speeds on scroll (parallax), and each
// photo fades+lifts in the first time it enters the viewport (stagger).
export const MasonryGallery = ({
  images,
  onSelect,
}: {
  images: string[];
  onSelect?: (index: number) => void;
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });

  // Three columns drift at slightly diferent speeds.
  const yFirst = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const ySecond = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const yThird = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Distribute images round-robin into 3 columns (stable, balanced).
  const columns: string[][] = [[], [], []];
  images.forEach((src, i) => columns[i % 3].push(src));

  const colY = [yFirst, ySecond, yThird];

  return (
    <div ref={gridRef} className="w-full">
      <div className="columns-2 md:columns-3 gap-4 sm:gap-5 [column-fill:_balance] max-w-6xl mx-auto px-2">
        {columns.map((col, colIdx) => (
          <motion.div
            key={colIdx}
            style={reduce ? undefined : { y: colY[colIdx] }}
            className="flex flex-col gap-4 sm:gap-5 mb-4 sm:mb-5 break-inside-avoid"
          >
            {col.map((src, idx) => {
              const realIndex = images.indexOf(src);
              return (
                <motion.div
                  key={src + colIdx + realIndex}
                  initial={reduce ? false : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: reduce ? 0 : (idx % 4) * 0.08,
                  }}
                  className="break-inside-avoid"
                >
                  <button
                    type="button"
                    onClick={onSelect ? () => onSelect(realIndex) : undefined}
                    className={cn(
                      "group relative block w-full overflow-hidden rounded-md border border-gold/12 bg-pp-card",
                      "hover:border-gold/40 hover:gold-glow transition-all duration-300",
                      onSelect && "cursor-pointer"
                    )}
                  >
                    {/* No fixed aspect ratio — image sizes itself to native shape */}
                    <Image
                      src={src}
                      alt={`Pocket Play Cafe — photo ${realIndex + 1}`}
                      width={800}
                      height={800}
                      loading="lazy"
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500 ease-lux"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pp-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
