"use client";

import React from "react";
import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card";
import { galleryImages } from "@/app/data";

export default function DragWall() {
  const items = galleryImages.slice(0, 7).map((img, i) => ({
    title: img.alt,
    image: img.src,
    className: positions[i],
  }));

  return (
    <DraggableCardContainer className="relative flex min-h-[70vh] w-full items-center justify-center overflow-clip rounded-2xl border border-gold/10 bg-pp-bg/60 py-12">
      <p className="pointer-events-none absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 px-6 text-center text-xl font-bold uppercase tracking-wide text-gold/60 md:text-2xl">
        Shuffle the wall — drag a moment around the lounge
      </p>
      {items.map((item) => (
        <DraggableCardBody key={item.title} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-56 w-56 rounded-md object-cover"
          />
          <h3 className="mt-3 text-center text-sm font-semibold uppercase tracking-wide text-gold">
            Pocket Play Cafe
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}

const positions = [
  "absolute top-10 left-[12%] rotate-[-5deg]",
  "absolute top-40 left-[22%] rotate-[-7deg]",
  "absolute top-6 left-[40%] rotate-[8deg]",
  "absolute top-36 left-[55%] rotate-[10deg]",
  "absolute top-20 right-[30%] rotate-[2deg]",
  "absolute top-24 left-[46%] rotate-[-7deg]",
  "absolute top-8 left-[28%] rotate-[4deg]",
];
