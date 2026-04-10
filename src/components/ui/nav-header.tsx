"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Select Work", href: "/#projects" },
  { label: "Profile", href: "/profile" },
  { label: "Archive", href: "/archive" },
  { label: "Say G'day", href: "/contact" },
];

function NavHeader({ isLight = false }: { isLight?: boolean }) {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  const pathname = usePathname();

  return (
    <ul
      className={`relative mx-auto flex w-fit rounded-full border p-1 backdrop-blur-md transition-colors duration-300 ${
        isLight
          ? "border-black/10 bg-black/5"
          : "border-foreground/10 bg-foreground/5"
      }`}
      onMouseLeave={() => {
        setPosition((pv) => ({ ...pv, opacity: 0 }));
        setHoveredHref(null);
      }}
    >
      {navItems.map((item) => (
        <Tab
          key={item.href}
          href={item.href}
          isActive={
            item.href === "/#projects"
              ? pathname === "/" || pathname.startsWith("/work")
              : pathname.startsWith(item.href)
          }
          isHovered={hoveredHref === item.href}
          isLight={isLight}
          setPosition={setPosition}
          setHoveredHref={setHoveredHref}
        >
          {item.label}
        </Tab>
      ))}

      <Cursor position={position} isLight={isLight} />
    </ul>
  );
}

const Tab = ({
  children,
  href,
  isActive,
  isHovered,
  isLight,
  setPosition,
  setHoveredHref,
}: {
  children: React.ReactNode;
  href: string;
  isActive: boolean;
  isHovered: boolean;
  isLight: boolean;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
  setHoveredHref: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
        setHoveredHref(href);
      }}
      className={`relative z-10 block rounded-full transition-colors duration-300 ${
        isActive
          ? isLight
            ? "bg-black/15 ring-1 ring-black/20 backdrop-blur-sm"
            : "bg-white/15 ring-1 ring-white/20 backdrop-blur-sm"
          : ""
      }`}
    >
      <Link
        href={href}
        className={`block cursor-pointer px-3 py-1.5 text-body-xs font-medium uppercase tracking-wide transition-colors duration-150 md:px-5 md:py-3 ${
          isHovered
            ? isLight
              ? "text-white"
              : "text-black"
            : isLight
              ? "text-black"
              : "text-foreground"
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({
  position,
  isLight,
}: {
  position: { left: number; width: number; opacity: number };
  isLight: boolean;
}) => {
  return (
    <motion.li
      animate={position}
      transition={{ type: "spring", stiffness: 500, damping: 35 }}
      className={`absolute top-1 bottom-1 z-0 rounded-full transition-colors duration-300 ${
        isLight ? "bg-black" : "bg-foreground"
      }`}
    />
  );
};

export default NavHeader;
