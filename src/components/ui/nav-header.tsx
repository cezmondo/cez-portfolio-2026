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
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Select Work", href: "/work" },
  { label: "Archive", href: "/archive" },
  { label: "Say G'day", href: "/contact" },
];

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  const pathname = usePathname();

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border border-foreground/10 bg-foreground/5 p-1 backdrop-blur-md"
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
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href)
          }
          isHovered={hoveredHref === item.href}
          setPosition={setPosition}
          setHoveredHref={setHoveredHref}
        >
          {item.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  href,
  isActive,
  isHovered,
  setPosition,
  setHoveredHref,
}: {
  children: React.ReactNode;
  href: string;
  isActive: boolean;
  isHovered: boolean;
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
      className="relative z-10 block"
    >
      <Link
        href={href}
        className={`block cursor-pointer px-3 py-1.5 text-body-xs font-medium uppercase tracking-wide transition-colors duration-150 md:px-5 md:py-3 ${
          isHovered
            ? "text-black"
            : isActive
              ? "text-[#F5FF4D]"
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
}: {
  position: { left: number; width: number; opacity: number };
}) => {
  return (
    <motion.li
      animate={position}
      transition={{ type: "spring", stiffness: 500, damping: 35 }}
      className="absolute top-1 bottom-1 z-0 rounded-full bg-foreground"
    />
  );
};

export default NavHeader;
