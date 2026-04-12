export default function Footer({ transparent = false, light = false }: { transparent?: boolean; light?: boolean }) {
  const bgClass = light ? "bg-white" : transparent ? "" : "bg-[#0032eb]";
  const textClass = light ? "text-black" : "text-white";
  const wordmarkFilter = light ? undefined : transparent ? undefined : "brightness(0) invert(1)";

  return (
    <footer className={`relative w-full overflow-hidden ${bgClass} ${textClass}`}>
      {/* CEZ. wordmark */}
      <div className="px-(--spacing-gutter) pt-16">
        <img
          src="/images/profile/cez-wordmark.svg"
          alt="CEZ."
          className="w-full h-auto"
          style={{ filter: wordmarkFilter }}
        />
      </div>

      {/* Links row */}
      <div className="flex items-center justify-between px-(--spacing-gutter) py-8">
        <div className="flex items-center gap-6">
        <a
          href="https://www.linkedin.com/in/cesar-corpus-b4905013/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 font-(family-name:--font-body) text-body-sm font-medium uppercase tracking-wide opacity-60 transition-opacity hover:opacity-100"
        >
          LinkedIn
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a
          href="https://github.com/cezmondo"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 font-(family-name:--font-body) text-body-sm font-medium uppercase tracking-wide opacity-60 transition-opacity hover:opacity-100"
        >
          GitHub
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/ccorpusjnr"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 font-(family-name:--font-body) text-body-sm font-medium uppercase tracking-wide opacity-60 transition-opacity hover:opacity-100"
        >
          Instagram
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        </div>
        <p className="text-[11px] font-medium uppercase tracking-wide opacity-40">
          &copy; Corpus. 2026
        </p>
      </div>
    </footer>
  );
}
