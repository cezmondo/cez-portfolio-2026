import type { Metadata } from "next";
import Link from "next/link";

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
      {/* ========== HERO ========== */}
      <HeroSection />

      {/* ========== INFO ========== */}
      <InfoSection />

      {/* ========== CONTENT ========== */}
      <ContentSection />

      {/* ========== NEXT PROJECTS ========== */}
      <NextProjectsSection />
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

          {/* Hero image placeholder */}
          <div className="flex-1">
            <div className="relative aspect-[1704/864] w-full overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-foreground-muted/10" />
              {/* Placeholder for hero image -- replaced in Phase 3 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Info Section                                                       */
/* ------------------------------------------------------------------ */

function InfoSection() {
  return (
    <section className="relative py-20">
      <div className="mx-auto w-full max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          {/* Left sidebar spacer */}
          <div className="w-(--spacing-sidebar) shrink-0" />

          {/* Main content */}
          <div className="flex-1">
            {/* Title */}
            <h1 className="font-(family-name:--font-display) text-display-lg font-medium uppercase leading-none tracking-tight">
              Boldin
            </h1>

            {/* Subtitle */}
            <p className="mt-0 max-w-[741px] text-body-lg text-foreground-muted">
              Boldin is a retirement and financial planning platform that
              empowers users to make smarter decisions about their savings,
              investments, and income strategies.
            </p>

            {/* Meta row */}
            <div className="mt-12 flex gap-16">
              <MetaEntry label="Role" value="Design Lead" />
              <MetaEntry label="Squad" value="Design System" />
              <MetaEntry label="Team" value="Engineering (FE), QA" />
            </div>

            {/* Related case studies */}
            <div className="mt-10">
              <p className="text-body-xs font-semibold uppercase tracking-wide text-boldin-green">
                Related case studies
              </p>
              <div className="mt-2 flex gap-4">
                <Link
                  href="/work/boldin-withdrawal-order"
                  className="text-body-sm text-foreground transition-colors hover:text-foreground-muted"
                >
                  Withdrawal order feature &rarr;
                </Link>
                <Link
                  href="/work/boldin-brand-social"
                  className="text-body-sm text-foreground transition-colors hover:text-foreground-muted"
                >
                  Brand and social &rarr;
                </Link>
              </div>
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
      <p className="text-body-xs font-semibold uppercase tracking-wide text-foreground-muted/40">
        {label}
      </p>
      <p className="mt-1 whitespace-pre-line text-body-xs font-semibold uppercase tracking-wide text-foreground">
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
    <section className="relative pb-24">
      <div className="mx-auto w-full max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          {/* Left sidebar spacer */}
          <div className="w-(--spacing-sidebar) shrink-0" />

          {/* Content area with sticky sidebar nav */}
          <div className="flex flex-1 gap-14">
            {/* Sticky sidebar nav */}
            <nav className="sticky top-[140px] h-fit w-[259px] shrink-0">
              <p className="text-body-xs font-semibold uppercase tracking-wide text-foreground-muted/40">
                on this page
              </p>
              <ul className="mt-2 flex flex-col gap-2">
                {navSections.map((s) => (
                  <li key={s.id}>
                    <span className="text-body-sm text-foreground">
                      {s.label}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Main content sections */}
            <div className="flex-1">
              {/* Section title heading */}
              <div className="mb-16">
                <h2 className="font-(family-name:--font-display) text-display-sm font-medium uppercase leading-tight tracking-tight text-foreground">
                  The design system
                </h2>
              </div>

              {/* ===== 01. The system ===== */}
              <div className="mb-12" id="the-system">
                <p className="mb-2 text-body-sm uppercase tracking-wider text-foreground-muted">
                  01
                </p>
                <p className="mb-8 text-body-lg font-medium text-foreground">
                  The system
                </p>
                <div className="max-w-[740px]">
                  <p className="text-body text-foreground-muted">
                    To support scale and consistency, I helped shape our design
                    system starting with typography, components, tokens, and
                    interaction patterns.
                  </p>
                  <p className="mt-5 text-body text-foreground-muted">
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
              <div className="mb-12" id="enterprise-solutions">
                <p className="mb-2 text-body-sm uppercase tracking-wider text-foreground-muted">
                  02
                </p>
                <p className="mb-8 text-body-lg font-medium text-foreground">
                  Enterprise Solutions
                </p>
                <div className="max-w-[740px]">
                  <p className="text-body text-foreground-muted">
                    One of the most exciting challenges was designing for
                    enterprise scale, creating a white-label system that flexes
                    across brands while retaining Boldin&apos;s DNA.
                  </p>
                  <p className="mt-5 text-body text-foreground-muted">
                    The platform now adapts seamlessly for partners like Mercer,
                    RTX, and American Fidelity, preserving each brand&apos;s
                    visual identity while maintaining a unified experience.
                  </p>
                  <p className="mt-5 text-body text-foreground-muted">
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
              <div className="mb-12" id="documentation">
                <p className="mb-2 text-body-sm uppercase tracking-wider text-foreground-muted">
                  03
                </p>
                <p className="mb-8 text-body-lg font-medium text-foreground">
                  Documentation
                </p>
                <div className="max-w-[740px]">
                  <p className="text-body text-foreground-muted">
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
