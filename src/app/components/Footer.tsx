import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full pb-12 pt-24">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="mb-8">
          <span className="font-(family-name:--font-display) text-display-xl font-medium">
            CEZ.
          </span>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 pt-6">
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/cesarcorpus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-sm font-semibold uppercase"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/caborpus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-sm font-semibold uppercase"
            >
              Instagram
            </a>
          </div>
          <Link href="/contact" className="text-body-sm font-semibold uppercase">
            Say G&apos;day
          </Link>
        </div>
      </div>
    </footer>
  );
}
