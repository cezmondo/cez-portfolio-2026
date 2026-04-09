import CezLogo from "@/components/ui/cez-logo";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#0032eb] text-white">
      <div className="relative">
        <div className="w-full text-white">
          <CezLogo className="w-full h-auto" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 flex items-center gap-6 px-(--spacing-gutter) pb-6">
        <a
          href="https://linkedin.com/in/cesarcorpus"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-body-xs font-semibold uppercase tracking-wide"
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
          className="inline-flex items-center gap-1 text-body-xs font-semibold uppercase tracking-wide"
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
