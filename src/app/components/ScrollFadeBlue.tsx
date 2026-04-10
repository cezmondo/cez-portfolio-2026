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

const BlueTriggerContext = createContext<(node: HTMLDivElement | null) => void>(
  () => {}
);

export function BlueTrigger() {
  const setNode = useContext(BlueTriggerContext);
  return <div ref={setNode} className="pointer-events-none h-0" />;
}

export default function ScrollFadeBlue({
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
    ["rgba(255,255,255,0)", "#0032eb"]
  );

  const color = useTransform(
    scrollYProgress,
    [0, 1],
    ["#0f0e0e", "#ffffff"]
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.35) {
      setTheme("dark");
    }
  });

  return (
    <BlueTriggerContext.Provider value={triggerCallbackRef}>
      <motion.div ref={containerRef} style={{ backgroundColor, color }}>
        {children}
      </motion.div>
    </BlueTriggerContext.Provider>
  );
}
