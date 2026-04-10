import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../../components/Footer";

export const metadata: Metadata = { title: "Kidventure Hub — Cez Corpus" };

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const sections = [
  { id: "problem", label: "02.  The problem" },
  { id: "vision", label: "03.  Vision" },
  { id: "exploration", label: "04.  Exploration process" },
  { id: "system", label: "05.  System thinking" },
  { id: "brand", label: "06.  Brand identity" },
  { id: "outcome", label: "07.  Outcome and reflection" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function KidventureHub() {
  return (
    <div>
      <HeroSection />
      <ContentSection />
      <NextSection />
      <Footer transparent />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                                */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="pt-[140px]">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          <div className="w-(--spacing-sidebar) shrink-0" />
          <div className="flex-1">
            <div className="aspect-[1704/864] w-full overflow-hidden rounded-3xl bg-kidventure-green/20" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Info                                                                */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  Content                                                             */
/* ------------------------------------------------------------------ */

function ContentSection() {
  return (
    <section className="pt-16 md:pt-24">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          <div className="w-(--spacing-sidebar) shrink-0" />

          <div className="flex flex-1 gap-14">
            {/* Sidebar nav */}
            <nav className="sticky top-10 h-fit w-[307px] shrink-0">
              <p className="mb-2 text-body-sm font-semibold uppercase tracking-wide text-white/40">
                on this page
              </p>
              <ul className="flex flex-col gap-2">
                {sections.map((s) => (
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
            </nav>

            {/* Main content */}
            <div className="flex-1">
              {/* Page info */}
              <div className="mb-16 pb-16">
                <div className="mb-10 flex flex-wrap gap-x-16 gap-y-4">
                  <div>
                    <p className="mb-1 text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground/40">Role</p>
                    <p className="text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground">Founder</p>
                  </div>
                  <div>
                    <p className="mb-1 text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground/40">Team</p>
                    <p className="text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground">Sole designer and builder</p>
                  </div>
                </div>
                <h1 className="font-(family-name:--font-display) text-display-lg font-medium uppercase leading-none tracking-tight">
                  Kidventure Hub
                </h1>
                <p className="mt-4 max-w-[720px] text-body-lg text-white/50">
                  An evergreen guide for families, designed and vibe-coded to reimagine how parents find, filter, and enjoy city adventures with their kids.
                </p>
                <div className="mt-6 flex gap-3">
                  {["Loveable.dev", "Supabase", "Figma tokens"].map((tech) => (
                    <span key={tech} className="rounded-full border border-kidventure-green/30 px-4 py-2 text-body-sm font-medium text-kidventure-green">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 02. The problem */}
              <div id="problem" className="mt-[120px] scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  02. The problem
                </h2>
                <p className="mt-8 max-w-[800px] text-body text-white/50">
                  Parenting guides and listicles constantly go out of date,
                  while blog posts drown you in sponsored lists and
                  half-working links. Parents need something evergreen &mdash;
                  a curated, trustworthy, and visually clear directory of
                  kid-friendly spots that&apos;s inspiring, not overwhelming.
                </p>
                {/* Image placeholder */}
                <div className="mt-12 aspect-[16/9] w-full rounded-2xl bg-kidventure-green/10" />
              </div>

              {/* 03. Vision */}
              <div id="vision" className="mt-[120px] scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  03. Vision
                </h2>
                <div className="mt-8 flex gap-4">
                  {["design clarity", "curation", "delight"].map((word) => (
                    <span
                      key={word}
                      className="rounded-full bg-kidventure-green/10 px-5 py-2 text-body-sm font-medium text-kidventure-green"
                    >
                      {word}
                    </span>
                  ))}
                </div>
                <p className="mt-6 max-w-[800px] text-body text-white/50">
                  Like a modern kids&apos; museum &mdash; alive, with timeless
                  listings and minimal upkeep.
                </p>
                {/* Image placeholder */}
                <div className="mt-12 aspect-[16/9] w-full rounded-2xl bg-kidventure-green/10" />
              </div>

              {/* 04. Exploration process */}
              <div id="exploration" className="mt-[120px] scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  04. Exploration process
                </h2>
                <p className="mt-8 max-w-[800px] text-body text-white/50">
                  The process started with mood, rhythm, and color &mdash;
                  following the feeling first. Proving that intuition can be
                  the entry point to precision, blending artistry and
                  engineering.
                </p>
                {/* Image placeholders for moodboards */}
                <div className="mt-12 grid grid-cols-2 gap-6">
                  <div className="aspect-[4/3] rounded-2xl bg-kidventure-green/10" />
                  <div className="aspect-[4/3] rounded-2xl bg-kidventure-peach/10" />
                </div>
              </div>

              {/* 05. System thinking */}
              <div id="system" className="mt-[120px] scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  05. System thinking
                </h2>
                <p className="mt-8 max-w-[800px] text-body text-white/50">
                  Behind the expressive UI, I built a light but extensible
                  system:
                </p>
                <ul className="mt-4 max-w-[800px] space-y-2 text-body text-white/50">
                  <li>&bull; Supabase for backend</li>
                  <li>&bull; Amenity filters</li>
                  <li>&bull; Figma tokens</li>
                  <li>&bull; Componentized listing cards</li>
                </ul>
                <p className="mt-6 max-w-[800px] text-body text-white/50">
                  The result: a playground-finder that feels effortless on the
                  surface but scalable underneath.
                </p>
                {/* Image placeholder */}
                <div className="mt-12 aspect-[16/9] w-full rounded-2xl bg-kidventure-green/10" />
              </div>

              {/* 06. Brand identity */}
              <div id="brand" className="mt-[120px] scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  06. Brand identity
                </h2>
                <p className="mt-1 text-body-sm text-white/40">
                  Neo-Brutalism
                </p>
                <p className="mt-8 max-w-[800px] text-body text-white/50">
                  Neo-Brutalism aesthetic conveying confidence, discovery, and
                  belonging.
                </p>
                {/* Image placeholders for brand colors, typography, UI components */}
                <div className="mt-12 grid grid-cols-2 gap-6">
                  <div className="aspect-[4/3] rounded-2xl bg-kidventure-green/10" />
                  <div className="aspect-[4/3] rounded-2xl bg-kidventure-peach/10" />
                </div>
                <div className="mt-6 aspect-[16/9] w-full rounded-2xl bg-kidventure-green/10" />
              </div>

              {/* 07. Outcome and reflection */}
              <div id="outcome" className="mt-[120px] scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  07. Outcome and reflection
                </h2>
                <p className="mt-8 max-w-[800px] text-body text-white/50">
                  The MVP prototype now includes:
                </p>
                <div className="mt-8 grid grid-cols-3 gap-6">
                  {[
                    {
                      stat: "100+",
                      label:
                        "curated spots across Brooklyn and Manhattan",
                    },
                    {
                      stat: "Quick-scan",
                      label:
                        "cards showing essentials (bathrooms, playground type, nearby food)",
                    },
                    {
                      stat: "Mobile-first",
                      label: "responsive design",
                    },
                  ].map((item) => (
                    <div
                      key={item.stat}
                      className="rounded-2xl bg-kidventure-green/10 p-8"
                    >
                      <p className="font-(family-name:--font-display) text-display-sm font-medium uppercase leading-none tracking-tight text-kidventure-green">
                        {item.stat}
                      </p>
                      <p className="mt-3 text-body-sm text-white/60">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-10 max-w-[800px] text-body font-medium text-white/70">
                  AI + design workflow &mdash; following instinct to reveal
                  structure.
                </p>
                {/* Image placeholder */}
                <div className="mt-12 aspect-[16/9] w-full rounded-2xl bg-kidventure-green/10" />
              </div>

              <div className="h-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Next Project                                                        */
/* ------------------------------------------------------------------ */

function NextSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          <div className="w-(--spacing-sidebar) shrink-0" />
          <div className="flex-1">
            <p className="mb-6 text-body-sm font-semibold uppercase tracking-wide text-white/40">
              More work
            </p>
            <div className="grid grid-cols-3 gap-6">
              <Link
                href="/work/boldin-withdrawal-order"
                className="group block overflow-hidden rounded-2xl bg-boldin-teal p-8 text-foreground transition-opacity hover:opacity-90"
              >
                <p className="font-(family-name:--font-display) text-display-sm font-medium uppercase leading-none tracking-tight">
                  NEXT
                </p>
                <p className="mt-3 text-body-sm font-medium uppercase tracking-wide">
                  Boldin
                </p>
              </Link>
              <Link
                href="/work/boldin-design-system"
                className="group block overflow-hidden rounded-2xl bg-boldin-green p-8 text-background transition-opacity hover:opacity-90"
              >
                <p className="font-(family-name:--font-display) text-display-sm font-medium uppercase leading-none tracking-tight">
                  NEXT
                </p>
                <p className="mt-3 text-body-sm font-medium uppercase tracking-wide">
                  Boldin
                </p>
              </Link>
              <Link
                href="/work/blockfi"
                className="group block overflow-hidden rounded-2xl bg-blockfi-blue p-8 text-foreground transition-opacity hover:opacity-90"
              >
                <p className="font-(family-name:--font-display) text-display-sm font-medium uppercase leading-none tracking-tight">
                  NEXT
                </p>
                <p className="mt-3 text-body-sm font-medium uppercase tracking-wide">
                  BlockFi
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
