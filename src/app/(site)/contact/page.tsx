import type { Metadata } from "next";

export const metadata: Metadata = { title: "Say G'day — Cez Corpus" };

export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="font-(family-name:--font-display) text-display-lg font-medium">
        Say G&apos;day
      </h1>
    </div>
  );
}
