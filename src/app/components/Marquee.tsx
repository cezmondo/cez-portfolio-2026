"use client";

import { motion } from "framer-motion";

export default function Marquee({
  items,
  duration = 20,
  className = "",
}: {
  items: string[];
  duration?: number;
  className?: string;
}) {
  const separator = " — ";
  const text = items.join(separator) + separator;

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className={`inline-block ${className}`}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>
    </div>
  );
}
