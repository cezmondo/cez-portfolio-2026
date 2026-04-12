"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

export default function AnimatedStatValue({ value }: { value: string }) {
  // Parse "10+" → { num: 10, suffix: "+" }
  // Parse "32k" → { num: 32, suffix: "k" }
  const match = value.match(/^(\d+)(.*)$/);
  const num = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, num, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setDisplay(Math.floor(v));
      },
    });
    return () => controls.stop();
  }, [inView, num]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}
