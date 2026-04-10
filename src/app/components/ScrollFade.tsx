"use client";

import {
  createContext,
  useContext,
  useRef,
  useCallback,
  useState,
} from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useHeaderTheme } from "./HeaderThemeContext";

const TriggerContext = createContext<(node: HTMLDivElement | null) => void>(
  () => {}
);

export function ScrollTrigger() {
  const setNode = useContext(TriggerContext);
  return <div ref={setNode} className="pointer-events-none h-0" />;
}

export default function ScrollFade({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [triggerRef, setTriggerRef] = useState<HTMLDivElement | null>(null);
  const { setTheme } = useHeaderTheme();

  const triggerCallbackRef = useCallback((node: HTMLDivElement | null) => {
    setTriggerRef(node);
  }, []);

  const { scrollYProgress } = useScroll({
    target: triggerRef ? { current: triggerRef } : containerRef,
    offset: ["center center", "end start"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#0f0e0e", "#ffffff"]
  );

  const color = useTransform(
    scrollYProgress,
    [0, 1],
    ["#f7f7f7", "#0f0e0e"]
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.4) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  });

  return (
    <TriggerContext.Provider value={triggerCallbackRef}>
      <motion.div ref={containerRef} style={{ backgroundColor, color }}>
        {children}
      </motion.div>
    </TriggerContext.Provider>
  );
}
