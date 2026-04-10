import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: "Boldin — Brand & Social — Cez Corpus",
  description:
    "Evolving the Boldin brand identity and driving paid social campaigns.",
};

/* ------------------------------------------------------------------ */
/*  Section data                                                       */
/* ------------------------------------------------------------------ */

const navSections = [
  { id: "introduction", label: "01.  Introduction" },
  { id: "rebrand", label: "02.  Rebrand and manifesto" },
  { id: "brand-system", label: "03.  Brand system and assets" },
  { id: "illustration", label: "04.  Illustration and AI" },
  { id: "paid-social", label: "05.  Paid social" },
];

const brandSystemItems = [
  {
    title: "Logo & Mark",
    description:
      "A refined wordmark and symbol that balances confidence with approachability.",
  },
  {
    title: "Typography",
    description:
      "ES Klarheit Grotesk as the primary typeface, paired with functional weights for hierarchy and readability.",
  },
  {
    title: "Color",
    description:
      "A warm, bold palette anchored by deep teal, vibrant orange, and natural greens.",
  },
  {
    title: "Patterns & Iconography",
    description:
      "Custom patterns and a functional icon set that reinforce the brand across UI and marketing.",
  },
  {
    title: "Voice & Tone",
    description:
      "Confident, clear, and encouraging — speaking to users as a trusted guide, not a financial institution.",
  },
];

const nextProjects = [
  {
    slug: "boldin-withdrawal-order",
    label: "Boldin",
    bg: "bg-boldin-teal",
  },
  {
    slug: "boldin-design-system",
    label: "Boldin",
    bg: "bg-boldin-green",
  },
  {
    slug: "blockfi",
    label: "BlockFi",
    bg: "bg-blockfi-blue",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function BoldinBrandSocial() {
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
              <MetaEntry label="Squad" value="Marketing" />
              <MetaEntry
                label="Team"
                value={`Marketing director,\ngrowth marketing manager,\nhead of design`}
              />
            </div>

            {/* Related case studies */}
            <div className="mt-10">
              <p className="text-body-xs font-semibold uppercase tracking-wide text-boldin-orange">
                Related case studies
              </p>
              <div className="mt-2 flex gap-4">
                <Link
                  href="/work/boldin-design-system"
                  className="text-body-sm text-foreground transition-colors hover:text-foreground-muted"
                >
                  Design system &rarr;
                </Link>
                <Link
                  href="/work/boldin-withdrawal-order"
                  className="text-body-sm text-foreground transition-colors hover:text-foreground-muted"
                >
                  Withdrawal order feature &rarr;
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
                  Evolving the Boldin brand
                </h2>
              </div>

              {/* ===== 01. Introduction ===== */}
              <div className="mb-12" id="introduction">
                <p className="mb-2 text-body-sm uppercase tracking-wider text-foreground-muted">
                  01
                </p>
                <p className="mb-8 text-body-lg font-medium text-foreground">
                  Introduction
                </p>
                <div className="max-w-[740px]">
                  <p className="text-body text-foreground-muted">
                    In 2024, NewRetirement took a bold step forward rebranding to
                    Boldin, a name and identity that better reflected the
                    company&apos;s mission: helping people live their financial
                    lives with confidence.
                  </p>
                  <p className="mt-5 text-body text-foreground-muted">
                    As part of the design team, I helped shape the rebrand
                    rollout, brand system, and marketing expressions that would
                    unify product, marketing, and enterprise experiences under
                    one cohesive vision.
                  </p>
                </div>
              </div>

              {/* Legacy vs New logo placeholders */}
              <div className="mb-20 grid grid-cols-2 gap-6">
                <div className="flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-2xl bg-foreground-muted/10">
                  <p className="mb-2 text-body-sm uppercase tracking-wider text-foreground-muted">
                    Legacy logo
                  </p>
                  {/* Placeholder for legacy logo -- replaced in Phase 3 */}
                </div>
                <div className="flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-2xl bg-foreground-muted/10">
                  <p className="mb-2 text-body-sm uppercase tracking-wider text-foreground-muted">
                    New logo
                  </p>
                  {/* Placeholder for new logo -- replaced in Phase 3 */}
                </div>
              </div>

              {/* ===== 02. Rebrand and manifesto ===== */}
              <div className="mb-12" id="rebrand">
                <p className="mb-2 text-body-sm uppercase tracking-wider text-foreground-muted">
                  02
                </p>
                <p className="mb-8 text-body-lg font-medium text-foreground">
                  Rebrand and manifesto
                </p>
                <div className="max-w-[740px]">
                  <p className="text-body text-foreground-muted">
                    The rebrand wasn&apos;t just a new name &mdash; it was a
                    philosophical shift.
                  </p>
                  <p className="mt-5 text-body text-foreground-muted">
                    The original name tied the company to one stage of life.
                    Boldin was created to represent a lifelong journey of
                    financial confidence, empowering people to be bold in every
                    decision they make.
                  </p>
                </div>
              </div>

              {/* Typography showcase */}
              <div className="mb-8 overflow-hidden rounded-2xl bg-foreground/5 p-10">
                <p className="mb-4 text-body-sm uppercase tracking-wider text-foreground-muted">
                  Primary typeface
                </p>
                <p className="font-(family-name:--font-display) text-display-md font-medium uppercase leading-tight tracking-tight text-foreground">
                  ES Klarheit
                  <br />
                  Grotesk
                </p>
                <p className="mt-6 font-(family-name:--font-display) text-body-lg font-medium uppercase tracking-wide text-foreground-muted">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p className="mt-2 font-(family-name:--font-display) text-body-lg font-medium tracking-wide text-foreground-muted">
                  abcdefghijklmnopqrstuvwxyz
                </p>
                <p className="mt-2 font-(family-name:--font-display) text-body-lg font-medium tracking-wide text-foreground-muted">
                  0123456789
                </p>
              </div>

              {/* Image placeholder */}
              <div className="mb-20 aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <div className="h-full w-full bg-foreground-muted/10" />
              </div>

              {/* ===== 03. Brand system and assets ===== */}
              <div className="mb-12" id="brand-system">
                <p className="mb-2 text-body-sm uppercase tracking-wider text-foreground-muted">
                  03
                </p>
                <p className="mb-8 text-body-lg font-medium text-foreground">
                  Brand system and assets
                </p>
                <p className="mb-10 max-w-[740px] text-body text-foreground-muted">
                  Our team built a comprehensive brand system to ensure
                  consistency across every touchpoint &mdash; from advisor tools
                  and dashboards to enterprise partner sites.
                </p>

                {/* Brand system items */}
                <div className="mb-12 flex flex-col gap-6">
                  {brandSystemItems.map((item) => (
                    <div
                      key={item.title}
                      className="flex max-w-[740px] gap-8 border-t border-foreground/10 pt-6"
                    >
                      <p className="w-[200px] shrink-0 text-body font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="text-body text-foreground-muted">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image placeholders -- brand assets grid */}
              <div className="mb-8 grid grid-cols-2 gap-6">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <div className="h-full w-full bg-foreground-muted/10" />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <div className="h-full w-full bg-foreground-muted/10" />
                </div>
              </div>
              <div className="mb-20 grid grid-cols-2 gap-6">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <div className="h-full w-full bg-foreground-muted/10" />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <div className="h-full w-full bg-foreground-muted/10" />
                </div>
              </div>

              {/* ===== 04. Illustration and AI ===== */}
              <div className="mb-12" id="illustration">
                <p className="mb-2 text-body-sm uppercase tracking-wider text-foreground-muted">
                  04
                </p>
                <p className="mb-8 text-body-lg font-medium text-foreground">
                  Illustration and AI
                </p>
                <div className="max-w-[740px]">
                  <p className="text-body text-foreground-muted">
                    To humanize complex financial topics, we established a new
                    illustration style &mdash; warm, aspirational, and grounded
                    in real life.
                  </p>
                  <p className="mt-5 text-body text-foreground-muted">
                    We combined hand-crafted illustrations with AI-assisted
                    concepting to produce a style that fit our new aesthetic,
                    accelerating creative exploration while maintaining brand
                    authenticity.
                  </p>
                  <p className="mt-5 text-body text-foreground-muted">
                    Each illustration was built around narrative themes like
                    Confidence, not confusion.
                  </p>
                </div>
              </div>

              {/* Image placeholders -- illustration grid */}
              <div className="mb-8 grid grid-cols-2 gap-6">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <div className="h-full w-full bg-foreground-muted/10" />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <div className="h-full w-full bg-foreground-muted/10" />
                </div>
              </div>
              <div className="mb-20 grid grid-cols-2 gap-6">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <div className="h-full w-full bg-foreground-muted/10" />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <div className="h-full w-full bg-foreground-muted/10" />
                </div>
              </div>

              {/* ===== 05. Paid social ===== */}
              <div className="mb-12" id="paid-social">
                <p className="mb-2 text-body-sm uppercase tracking-wider text-foreground-muted">
                  05
                </p>
                <p className="mb-8 text-body-lg font-medium text-foreground">
                  Paid social
                </p>
              </div>

              {/* Image placeholders -- social campaign grid */}
              <div className="mb-8 grid grid-cols-3 gap-6">
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <div className="h-full w-full bg-foreground-muted/10" />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <div className="h-full w-full bg-foreground-muted/10" />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <div className="h-full w-full bg-foreground-muted/10" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <div className="h-full w-full bg-foreground-muted/10" />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <div className="h-full w-full bg-foreground-muted/10" />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <div className="h-full w-full bg-foreground-muted/10" />
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
