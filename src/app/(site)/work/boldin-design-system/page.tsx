import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: "Boldin — Design System — Cez Corpus",
  description:
    "Building a scalable design system for Boldin's retirement planning platform.",
};

/* ------------------------------------------------------------------ */
/*  Section data                                                       */
/* ------------------------------------------------------------------ */

const navSections = [
  { id: "the-system", label: "01.  The system" },
  { id: "enterprise-solutions", label: "02.  Enterprise solutions" },
  { id: "documentation", label: "03.  Documentation" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function BoldinDesignSystem() {
  return (
    <div>
      <HeroSection />
      <ContentSection />

      <NextMarquee />
      <Footer transparent />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative pt-[80px] md:pt-[140px]">
      <div className="mx-auto w-full max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          {/* Left sidebar spacer */}
          <div className="hidden w-(--spacing-sidebar) shrink-0 md:block" />

          <div className="flex-1">
            <div className="overflow-hidden rounded-[24px] bg-[#0d3f4a]">
              <img
                src="/images/boldin-wo/hero-header.png"
                alt="Boldin Design System"
                className="w-full block"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Meta Entry                                                         */
/* ------------------------------------------------------------------ */

function MetaEntry({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground/40">
        {label}
      </p>
      <p className="whitespace-pre-line text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground">
        {value}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Content Section (Sidebar + Sections)                               */
/* ------------------------------------------------------------------ */

function ContentSection() {
  return (
    <section className="relative pt-16 pb-24 md:pt-24">
      <div className="mx-auto w-full max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          {/* Left sidebar spacer */}
          <div className="hidden w-(--spacing-sidebar) shrink-0 md:block" />

          {/* Content area with sticky sidebar nav */}
          <div className="flex flex-1 gap-14">
            {/* Sticky sidebar nav */}
            <nav className="sticky top-10 hidden h-fit w-[307px] shrink-0 md:block">
              <p className="mb-2 text-body-sm font-semibold uppercase tracking-wide text-white/40">
                on this page
              </p>
              <ul className="flex flex-col gap-2">
                {navSections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-[14px] leading-[16.8px] text-foreground transition-colors hover:text-white/60"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <p className="mb-3 text-body-sm font-semibold uppercase tracking-wide text-[#ff6a00]">
                  Related case studies
                </p>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="/work/boldin-withdrawal-order" className="flex items-center gap-1 text-[14px] leading-[16.8px] text-foreground transition-colors hover:text-white/60">
                      Withdrawal order <span aria-hidden>→</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/work/boldin-brand-social" className="flex items-center gap-1 text-[14px] leading-[16.8px] text-foreground transition-colors hover:text-white/60">
                      Brand and social <span aria-hidden>→</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Main content sections */}
            <div className="flex-1">
              {/* Page info */}
              <div className="mb-4 pb-4">
                <div className="mb-10 flex flex-wrap gap-x-16 gap-y-4">
                  <MetaEntry label="Role" value="Design Lead" />
                  <MetaEntry label="Squad" value="Design System" />
                  <MetaEntry label="Team" value="Engineering (FE), QA" />
                </div>
                <h1 className="font-(family-name:--font-body) text-[28px] font-semibold leading-[1.2] tracking-[-0.8px] text-foreground md:text-[40px]">
                  The design system
                </h1>
              </div>

              {/* ===== 01. The system ===== */}
              <div className="pb-16 md:pb-28" id="the-system">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  01. The system
                </p>
                <div className="max-w-[740px]">
                  <p className="text-[18px] leading-[1.4] text-foreground/50">
                    To support scale and consistency, I helped shape our design
                    system starting with typography, components, tokens, and
                    interaction patterns.
                  </p>
                  <p className="mt-5 text-[18px] leading-[1.4] text-foreground/50">
                    We built this system to be clear and modern but also flexible
                    enough to serve enterprise partners with their own brand
                    needs.
                  </p>
                </div>

                <div className="mt-8 overflow-hidden rounded-2xl">
                  <img
                    src="/images/boldin-ds/design-system-overview.svg"
                    alt="Boldin design system overview"
                    className="w-full"
                  />
                </div>
              </div>


              {/* ===== 02. Enterprise solutions ===== */}
              <div className="pb-16 md:pb-28" id="enterprise-solutions">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  02. Enterprise Solutions
                </p>
                <div className="max-w-[740px]">
                  <p className="text-[18px] leading-[1.4] text-foreground/50">
                    One of the most exciting challenges was designing for
                    enterprise scale, creating a white-label system that flexes
                    across brands while retaining Boldin&apos;s DNA.
                  </p>
                  <p className="mt-5 text-[18px] leading-[1.4] text-foreground/50">
                    The platform now adapts seamlessly for partners like Mercer,
                    RTX, and American Fidelity, preserving each brand&apos;s
                    visual identity while maintaining a unified experience.
                  </p>
                  <p className="mt-5 text-[18px] leading-[1.4] text-foreground/50">
                    These weren&apos;t just visual reskins. For example, the
                    Nationwide integration replaced their legacy MIRP platform
                    with Boldin&apos;s infrastructure, redesigned onboarding from
                    the ground up, introduced custom tools like the Financial
                    Blueprint Summary, and now supports 32,000+ plan users.
                  </p>
                  <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="overflow-hidden rounded-2xl">
                      <img
                        src="/images/boldin-ds/enterprise-1.svg"
                        alt="Boldin enterprise design system — partner brand example"
                        className="w-full"
                      />
                    </div>
                    <div className="overflow-hidden rounded-2xl">
                      <img
                        src="/images/boldin-ds/enterprise-2.svg"
                        alt="Boldin enterprise design system — white-label layout"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== 03. Documentation ===== */}
              <div className="pb-16 md:pb-28" id="documentation">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  03. Documentation
                </p>
                <div className="max-w-[740px]">
                  <p className="text-[18px] leading-[1.4] text-foreground/50">
                    We established a strong foundation of semantic tokens,
                    scalable components, and consistent patterns across both B2B
                    and B2C products. With live documentation through Storybook
                    and clear usage guidelines.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-4">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="/images/boldin-ds/documentation-1.svg"
                      alt="Boldin design system documentation"
                      className="w-full"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="/images/boldin-ds/documentation-2.svg"
                      alt="Boldin design system documentation"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Next Projects Section                                              */
/* ------------------------------------------------------------------ */

function NextMarquee() {
  const items = Array.from({ length: 6 });
  return (
    <Link href="/work/blockfi" className="block">
      <section className="relative overflow-hidden bg-[#0d0d0d] py-12 cursor-pointer transition-opacity hover:opacity-90">
        <div
          className="flex items-center gap-8 whitespace-nowrap"
          style={{ animation: "marquee-ltr 30s linear infinite" }}
        >
          {items.map((_, i) => <MarqueeItem key={i} />)}
          {items.map((_, i) => <MarqueeItem key={`dup-${i}`} />)}
        </div>
      </section>
    </Link>
  );
}

function MarqueeItem() {
  return (
    <>
      <img
        src="/images/boldin-wo/blockfi-icon.png"
        alt="BlockFi"
        className="h-[80px] w-[80px] flex-shrink-0 rounded-2xl"
      />
      <span className="flex-shrink-0 font-(family-name:--font-display) text-[80px] font-medium uppercase leading-none tracking-tight text-foreground md:text-[120px]">
        NEXT
      </span>
    </>
  );
}
