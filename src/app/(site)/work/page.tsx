import type { Metadata } from "next";

export const metadata: Metadata = { title: "Select Work — Cez Corpus" };

export default function Work() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="font-(family-name:--font-display) text-display-lg font-medium">
        Select Work
      </h1>
    </div>
  );
}
