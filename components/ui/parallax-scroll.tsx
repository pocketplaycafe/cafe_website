"use client";

import { useScroll, useTransform, motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScrollSecond = ({
  images,
  className,
  onSelect,
}: {
  images: string[];
  className?: string;
  onSelect?: (index: number) => void;
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: gridRef, // animate with the page scroll as this section enters/leaves
    offset: ["start end", "end start"],
  });

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -12]);

  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 12]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  const motionProps = reduce
    ? {}
    : undefined;

  return (
    <div
      ref={gridRef}
      className={cn("w-full", className)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-6 sm:gap-10 px-4 sm:px-10">
        <div className="grid gap-6 sm:gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={
                reduce
                  ? undefined
                  : {
                      y: translateYFirst,
                      x: translateXFirst,
                      rotateZ: rotateXFirst,
                    }
              }
              key={"grid-1" + idx}
              onClick={onSelect ? () => onSelect(idx) : undefined}
              className={onSelect ? "cursor-pointer" : undefined}
            >
              <Image
                src={el}
                className="w-full object-cover object-left-top rounded-md"
                height="400"
                width="400"
                alt="Pocket Play Cafe gallery"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-6 sm:gap-10">
          {secondPart.map((el, idx) => (
            <motion.div
              key={"grid-2" + idx}
              {...motionProps}
              onClick={onSelect ? () => onSelect(third + idx) : undefined}
              className={onSelect ? "cursor-pointer" : undefined}
            >
              <Image
                src={el}
                className="w-full object-cover object-left-top rounded-md"
                height="400"
                width="400"
                alt="Pocket Play Cafe gallery"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-6 sm:gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={
                reduce
                  ? undefined
                  : {
                      y: translateYThird,
                      x: translateXThird,
                      rotateZ: rotateXThird,
                    }
              }
              key={"grid-3" + idx}
              onClick={onSelect ? () => onSelect(2 * third + idx) : undefined}
              className={onSelect ? "cursor-pointer" : undefined}
            >
              <Image
                src={el}
                className="w-full object-cover object-left-top rounded-md"
                height="400"
                width="400"
                alt="Pocket Play Cafe gallery"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

