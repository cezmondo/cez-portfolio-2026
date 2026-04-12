"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProfileHero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Image drifts up at 40% of scroll speed — classic parallax
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  return (
    <section ref={sectionRef} className="relative -mt-20 overflow-hidden">
      {/* Parallax background image */}
      <motion.div className="absolute left-0 right-0 top-0" style={{ y }}>
        <img
          src="/images/profile/hero.jpg"
          alt=""
          className="w-full"
          fetchPriority="high"
        />
        {/* Dark fade at top — keeps logo/nav readable */}
        <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-background/80 to-transparent" />
        {/* Dark fade at bottom — blends into page */}
        <div className="absolute bottom-0 left-0 h-[480px] w-full bg-gradient-to-t from-background to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          {/* Sidebar spacer */}
          <div className="hidden w-(--spacing-sidebar) shrink-0 md:block" />

          <div className="flex-1">
            {/* Spacer — pushes text below the image */}
            <div className="h-[240px] md:h-[480px]" />

            {/* Profile label */}
            <div className="mb-8 md:mb-12">
              <p className="font-(family-name:--font-body) text-body-lg font-medium text-white">
                Profile <span className="ml-1">&#x21B4;</span>
              </p>
            </div>

            {/* Hero headline */}
            <h1 className="max-w-[1060px] font-(family-name:--font-display) text-display-sm font-medium uppercase leading-none tracking-tight md:text-display-md lg:text-display-lg">
              Blending AI, Product Design, and Visual Craft to Shape
              What&apos;s Next
            </h1>

            {/* Bio */}
            <p className="mt-8 max-w-[682px] font-(family-name:--font-body) text-body-lg text-foreground-muted md:mt-12">
              G&apos;day I&apos;m Cez, an experience designer with a background
              in visual design and a passion for solving complex problems.
            </p>

            <div className="h-24 md:h-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
