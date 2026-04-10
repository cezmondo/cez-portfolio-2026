import CezLogo from "@/components/ui/cez-logo";

export default function Footer({ transparent = false }: { transparent?: boolean }) {
  return (
    <footer className={`relative w-full overflow-hidden ${transparent ? "text-white" : "bg-[#0032eb] text-white"}`}>
      {/* Large logo — capped so it doesn't swallow the page */}
      <div className="flex items-end justify-center pt-16 px-(--spacing-gutter)">
        <CezLogo className="w-full max-w-[900px] h-auto opacity-90" />
      </div>

      {/* Links row — in normal flow, never overlaps logo */}
      <div className="flex items-center gap-6 px-(--spacing-gutter) py-6">
        <a
          href="https://linkedin.com/in/cesarcorpus"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-body-xs font-semibold uppercase tracking-wide opacity-60 hover:opacity-100 transition-opacity"
        >
          LinkedIn
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="inline-block">
            <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a
          href="https://instagram.com/caborpus"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-body-xs font-semibold uppercase tracking-wide opacity-60 hover:opacity-100 transition-opacity"
        >
          Instagram
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="inline-block">
            <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
