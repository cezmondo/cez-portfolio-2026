import type { Metadata } from "next";

export const metadata: Metadata = { title: "Boldin — Design System — Cez Corpus" };

export default function BoldinDesignSystem() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="font-(family-name:--font-display) text-display-lg font-medium">
        Boldin — Design System
      </h1>
    </div>
  );
}
