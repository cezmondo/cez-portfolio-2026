"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  src: string;
  alt: string;
  sectionClassName: string;
  containerClassName: string;
  imgClassName: string;
}

export default function CaseStudyHero({
  src,
  alt,
  sectionClassName,
  containerClassName,
  imgClassName,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={sectionRef} className={sectionClassName}>
      <div className="mx-auto w-full max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          <div className="hidden w-(--spacing-sidebar) shrink-0 md:block" />
          <div className="flex-1">
            <div className={containerClassName}>
              <motion.img
                src={src}
                alt={alt}
                className={imgClassName}
                fetchPriority="high"
                style={{ y }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
