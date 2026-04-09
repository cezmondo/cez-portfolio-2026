import type { Metadata } from "next";

export const metadata: Metadata = { title: "Profile — Cez Corpus" };

export default function Profile() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="font-(family-name:--font-display) text-display-lg font-medium">
        Profile
      </h1>
    </div>
  );
}
