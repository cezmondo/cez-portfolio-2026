export default function Footer({ transparent = false }: { transparent?: boolean }) {
  return (
    <footer className={`relative w-full overflow-hidden ${transparent ? "" : "bg-[#0032eb]"} text-white`}>
      {/* CEZ. wordmark */}
      <div className="px-(--spacing-gutter) pt-16">
        <img
          src="/images/profile/cez-wordmark.svg"
          alt="CEZ."
          className="w-full h-auto"
          style={{ filter: transparent ? undefined : "brightness(0) invert(1)" }}
        />
      </div>

      {/* Links row */}
      <div className="flex items-center gap-6 px-(--spacing-gutter) py-8">
        <a
          href="https://linkedin.com/in/cesarcorpus"
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
          href="https://instagram.com/cezcorpus"
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
    </footer>
  );
}
