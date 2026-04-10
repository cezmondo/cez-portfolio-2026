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

const nextProjects = [
  {
    slug: "boldin-brand-social",
    label: "Boldin",
    bg: "bg-boldin-orange",
  },
  {
    slug: "blockfi",
    label: "BlockFi",
    bg: "bg-blockfi-blue",
  },
  {
    slug: "jetblue",
    label: "JetBlue",
    bg: "bg-jetblue-blue",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function BoldinDesignSystem() {
  return (
    <div>
      <HeroSection />
      <ContentSection />

      {/* ========== NEXT PROJECTS ========== */}
      <NextProjectsSection />
      <Footer transparent />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative pt-[140px]">
      <div className="mx-auto w-full max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          {/* Left sidebar spacer */}
          <div className="w-(--spacing-sidebar) shrink-0" />

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
          <div className="w-(--spacing-sidebar) shrink-0" />

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
              <div className="mb-16 pb-16">
                <div className="mb-10 flex flex-wrap gap-x-16 gap-y-4">
                  <MetaEntry label="Role" value="Design Lead" />
                  <MetaEntry label="Squad" value="Design System" />
                  <MetaEntry label="Team" value="Engineering (FE), QA" />
                </div>
                <h1 className="mb-6 font-(family-name:--font-body) text-[40px] font-semibold leading-[1.2] tracking-[-0.8px] text-foreground">
                  Boldin
                </h1>
                <p className="max-w-[700px] text-[18px] leading-[1.4] text-foreground/50">
                  Boldin is a retirement and financial planning platform that
                  empowers users to make smarter decisions about their savings,
                  investments, and income strategies.
                </p>
              </div>

              {/* ===== 01. The system ===== */}
              <div className="pb-28" id="the-system">
                <p className="mb-6 text-[28px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground">
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
              </div>

              {/* Image placeholders -- typography specimen */}
              <div className="mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <div className="h-full w-full bg-foreground-muted/10" />
              </div>

              {/* Image placeholder -- component library */}
              <div className="mb-20 aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <div className="h-full w-full bg-foreground-muted/10" />
              </div>

              {/* ===== 02. Enterprise solutions ===== */}
              <div className="pb-28" id="enterprise-solutions">
                <p className="mb-6 text-[28px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground">
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
                </div>
              </div>

              {/* Image placeholders -- partner brand examples */}
              <div className="mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <div className="h-full w-full bg-foreground-muted/10" />
              </div>
              <div className="mb-20 aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <div className="h-full w-full bg-foreground-muted/10" />
              </div>

              {/* ===== 03. Documentation ===== */}
              <div className="pb-28" id="documentation">
                <p className="mb-6 text-[28px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground">
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
              </div>

              {/* Image placeholders -- Storybook/docs screenshots */}
              <div className="mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <div className="h-full w-full bg-foreground-muted/10" />
              </div>
              <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <div className="h-full w-full bg-foreground-muted/10" />
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

function NextProjectsSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          {/* Left sidebar spacer */}
          <div className="w-(--spacing-sidebar) shrink-0" />

          <div className="flex-1">
            <p className="mb-8 text-body-sm uppercase tracking-wider text-foreground-muted">
              Next
            </p>

            <div className="grid grid-cols-3 gap-6">
              {nextProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group block"
                >
                  <div
                    className={`${project.bg} flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-2xl p-8 transition-opacity group-hover:opacity-90`}
                  >
                    <p className="font-(family-name:--font-display) text-display-md font-medium uppercase leading-none tracking-tight text-foreground/20">
                      NEXT
                    </p>
                    <div>
                      <span className="inline-block rounded-full bg-foreground/10 px-4 py-1.5 text-body-sm font-medium uppercase tracking-wide text-foreground">
                        {project.label}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
