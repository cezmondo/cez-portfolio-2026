"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import NavHeader from "@/components/ui/nav-header";
import CezLogo from "@/components/ui/cez-logo";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

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
      <div className="mx-auto flex max-w-(--max-width-content) flex-col items-center px-(--spacing-gutter) pt-6 pb-4">
        <Link href="/" className="text-foreground">
          <CezLogo className="w-[160px] h-auto" />
        </Link>
        <nav className="mt-3">
          <NavHeader />
        </nav>
      </div>
    </motion.header>
  );
}
