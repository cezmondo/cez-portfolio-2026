"use client";

import { createContext, useContext, useState } from "react";

type HeaderTheme = "dark" | "light";

const HeaderThemeContext = createContext<{
  theme: HeaderTheme;
  setTheme: (t: HeaderTheme) => void;
}>({ theme: "dark", setTheme: () => {} });

export function HeaderThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<HeaderTheme>("dark");
  return (
    <HeaderThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </HeaderThemeContext.Provider>
  );
}

export function useHeaderTheme() {
  return useContext(HeaderThemeContext);
}
