"use client";

import { Link } from "next-view-transitions";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import NavHeader from "@/components/ui/nav-header";
import CezLogo from "@/components/ui/cez-logo";
import { useHeaderTheme } from "./HeaderThemeContext";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const { theme } = useHeaderTheme();
  const isLight = theme === "light";

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="mx-auto flex max-w-(--max-width-content) flex-col items-center px-(--spacing-gutter) pt-8 pb-6">
        <Link
          href="/"
          className={`transition-colors duration-300 ${isLight ? "text-black" : "text-foreground"}`}
        >
          <CezLogo className="w-[180px] h-auto" />
        </Link>
        <nav className="mt-4">
          <NavHeader isLight={isLight} />
        </nav>
      </div>
    </motion.header>
  );
}
