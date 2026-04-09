import type { Metadata } from "next";

export const metadata: Metadata = { title: "Archive — Cez Corpus" };

export default function Archive() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="font-(family-name:--font-display) text-display-lg font-medium">
        Archive
      </h1>
    </div>
  );
}
