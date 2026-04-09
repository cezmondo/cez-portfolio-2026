import type { Metadata } from "next";

export const metadata: Metadata = { title: "Kidventure Hub — Cez Corpus" };

export default function KidventureHub() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="font-(family-name:--font-display) text-display-lg font-medium">
        Kidventure Hub
      </h1>
    </div>
  );
}
