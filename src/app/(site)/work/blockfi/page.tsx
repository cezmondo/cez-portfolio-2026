import type { Metadata } from "next";

export const metadata: Metadata = { title: "BlockFi — Cez Corpus" };

export default function BlockFi() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="font-(family-name:--font-display) text-display-lg font-medium">
        BlockFi
      </h1>
    </div>
  );
}
