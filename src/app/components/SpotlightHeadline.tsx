"use client";

import { useRef, useState } from "react";

const headlineClass =
  "text-center font-(family-name:--font-display) text-display-sm font-medium uppercase leading-[1] tracking-tight md:text-display-md lg:text-display-lg";

function HeadlineContent() {
  return (
    <>
      I turn messy{" "}
      <img
        src="/images/home/inline-messy.gif"
        alt=""
        className="inline-block h-[0.6em] w-auto rounded-md object-cover align-middle"
      />{" "}
      problems into simple,
      <br />
      delightful{" "}
      <img
        src="/images/home/inline-delightful.gif"
        alt=""
        className="inline-block h-[0.6em] w-auto rounded-md object-cover align-middle"
      />
      , and
      <br />
      useful{" "}
      <img
        src="/images/home/inline-useful.gif"
        alt=""
        className="inline-block h-[0.6em] w-auto rounded-md object-cover align-middle"
      />{" "}
      designs.
    </>
  );
}

export default function SpotlightHeadline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  const spotlightMask = `radial-gradient(circle 220px at ${mouse.x}px ${mouse.y}px, black 0%, transparent 100%)`;

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {/* Dim base layer — always visible */}
      <h1 className={`${headlineClass} text-white/20`}>
        <HeadlineContent />
      </h1>

      {/* Bright spotlight layer — masked to cursor position */}
      <h1
        aria-hidden
        className={`${headlineClass} pointer-events-none absolute inset-0 text-white`}
        style={{
          opacity: active ? 1 : 0,
          transition: "opacity 0.4s ease",
          maskImage: spotlightMask,
          WebkitMaskImage: spotlightMask,
        }}
      >
        <HeadlineContent />
      </h1>
    </div>
  );
}
