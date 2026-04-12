"use client";

import { useEffect } from "react";
import { useHeaderTheme } from "./HeaderThemeContext";

export default function SetHeaderTheme({ theme }: { theme: "light" | "dark" }) {
  const { setTheme } = useHeaderTheme();
  useEffect(() => {
    setTheme(theme);
    return () => setTheme("dark");
  }, [theme, setTheme]);
  return null;
}
