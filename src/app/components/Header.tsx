import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-(--max-width-content) items-center justify-between px-(--spacing-gutter) py-6">
        <Link
          href="/"
          className="font-(family-name:--font-display) text-body-sm font-semibold uppercase tracking-tight"
        >
          CEZ.
        </Link>
        <nav className="flex items-center gap-6">
          {/* Nav links populated in Phase 2 */}
        </nav>
      </div>
    </header>
  );
}
