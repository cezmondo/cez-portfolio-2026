import type { Metadata } from "next";
import { Link } from "next-view-transitions";
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
      <NextMarquee />
      <Footer transparent />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                                */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="pt-[80px] md:pt-[140px]">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          <div className="hidden w-(--spacing-sidebar) shrink-0 md:block" />
          <div className="flex-1">
            <div className="aspect-[1704/864] w-full overflow-hidden rounded-3xl">
                <img
                  src="/images/kidventure/hero-header.webp"
                  alt="Kidventure Hub"
                  className="h-full w-full object-cover"
                />
              </div>
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
          <div className="hidden w-(--spacing-sidebar) shrink-0 md:block" />

          <div className="flex flex-1 gap-14">
            {/* Sidebar nav */}
            <nav className="sticky top-10 hidden h-fit w-[307px] shrink-0 md:block">
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
                <h1 className="mb-6 font-(family-name:--font-body) text-[28px] font-semibold leading-[1.2] tracking-[-0.8px] text-foreground md:text-[40px]">
                  Kidventure Hub
                </h1>
                <p className="max-w-[700px] text-[18px] leading-[1.4] text-foreground/50">
                  An evergreen guide for families, designed and vibe-coded to reimagine how parents find, filter, and enjoy city adventures with their kids.
                </p>
                <h2 className="mt-8 font-(family-name:--font-body) text-[32px] font-medium leading-[1.2] tracking-[-0.8px] text-foreground md:text-[40px]">
                  A personal exploration in vibe-coded design
                </h2>
                <p className="mt-4 text-[28px] font-normal leading-[33.6px] tracking-[-0.56px] text-foreground">
                  01 . Overview &amp; intent
                </p>
                <p className="mt-6 max-w-[800px] text-[18px] leading-[25.2px] tracking-[-0.18px] text-foreground/50">
                  KidVenture Hub NYC began as a side experiment — part playground guide, part design sandbox. I wanted to build something that solved a real problem in my daily life as a Brooklyn parent, while letting me experiment freely with emerging design-to-dev workflows like{" "}
                  <strong className="font-bold text-foreground/50">Loveable.dev</strong>,{" "}
                  <strong className="font-bold text-foreground/50">Supabase</strong>, and{" "}
                  <strong className="font-bold text-foreground/50">Figma tokens</strong>.
                </p>
                {/* Overview — two-card row */}
                <div className="mt-8 flex flex-col gap-[10px] md:flex-row">
                  {/* Left: logo card */}
                  <div
                    className="flex flex-1 items-center justify-center rounded-2xl p-8"
                    style={{ backgroundColor: "#fbf7f0" }}
                  >
                    <img
                      src="/images/kidventure/overview-logo.svg"
                      alt="Kidventure Hub logo"
                      className="max-w-[280px] shrink-0"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  {/* Right: photo */}
                  <div className="flex-1 overflow-hidden rounded-2xl">
                    <img
                      src="/images/kidventure/overview-photo.jpg"
                      alt="Kidventure Hub overview"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 02. The problem */}
              <div id="problem" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  02. The problem
                </p>
                <p className="mt-8 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                  Parenting guides and listicles constantly go out of date,
                  while blog posts drown you in sponsored lists and
                  half-working links. Parents need something evergreen &mdash;
                  a curated, trustworthy, and visually clear directory of
                  kid-friendly spots that&apos;s inspiring, not overwhelming.
                </p>
                <div className="mt-12 overflow-hidden rounded-2xl">
                  <img
                    src="/images/kidventure/problem-photo.jpg"
                    alt="Brooklyn stroll club"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              {/* 03. Vision */}
              <div id="vision" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  03. Vision
                </p>
                <p className="mt-8 max-w-[800px] text-[18px] leading-[25.2px] tracking-[-0.18px] text-foreground/50">
                  Create a digital companion for NYC parents that blends design clarity, curation, and delight.
                </p>
                <p className="mt-6 max-w-[800px] text-[18px] leading-[25.2px] tracking-[-0.18px] text-foreground/50">
                  A web app that feels like a modern kids&apos; museum — tactile, bold, and beautifully organized. Not another feed — but a space that feels alive, with timeless listings and minimal upkeep.
                </p>
                <div className="mt-12 overflow-hidden rounded-2xl">
                  <img
                    src="/images/kidventure/vision-prd.webp"
                    alt="Kidventure Hub PRD"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              {/* 04. Exploration process */}
              <div id="exploration" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  04. Exploration process
                </p>
                <p className="mt-8 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                  The process started with mood, rhythm, and color &mdash;
                  following the feeling first. Proving that intuition can be
                  the entry point to precision, blending artistry and
                  engineering.
                </p>
                <div className="mt-12 overflow-hidden rounded-3xl">
                  <video
                    src="/images/kidventure/exploration.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full"
                  />
                </div>
              </div>

              {/* 05. System thinking */}
              <div id="system" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  05. System thinking
                </p>
                <p className="mt-8 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                  Behind the expressive UI, I built a light but extensible
                  system:
                </p>
                <ul className="mt-4 max-w-[800px] space-y-2 text-[18px] leading-[1.4] text-foreground/50">
                  <li>&bull; Supabase for backend</li>
                  <li>&bull; Amenity filters</li>
                  <li>&bull; Figma tokens</li>
                  <li>&bull; Componentized listing cards</li>
                </ul>
                <p className="mt-6 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                  The result: a playground-finder that feels effortless on the
                  surface but scalable underneath.
                </p>
                <div className="mt-12 overflow-hidden rounded-2xl">
                  <img
                    src="/images/kidventure/system-supabase.webp"
                    alt="Supabase dashboard"
                    className="w-full object-cover"
                  />
                </div>
                <div className="mt-6 overflow-hidden rounded-2xl">
                  <img
                    src="/images/kidventure/system-cms.webp"
                    alt="Activity CMS"
                    className="w-full object-cover"
                  />
                </div>
                <div className="mt-6 overflow-hidden rounded-2xl">
                  <img
                    src="/images/kidventure/system-cms-edit.webp"
                    alt="Activity CMS edit modal"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              {/* 06. Brand identity */}
              <div id="brand" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  06. Brand identity
                </p>
                <p className="mb-4 text-[18px] leading-[1.4] text-foreground/50">
                  Neo-Brutalism
                </p>
                <p className="mt-8 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                  Neo-Brutalism aesthetic conveying confidence, discovery, and
                  belonging.
                </p>
                <div className="mt-12 overflow-hidden rounded-2xl">
                  <img
                    src="/images/kidventure/brand-identity.avif"
                    alt="Kidventure Hub brand identity"
                    className="w-full object-cover"
                  />
                </div>
                <div className="mt-6 overflow-hidden rounded-2xl">
                  <img
                    src="/images/kidventure/brand-identity-2.avif"
                    alt="Kidventure Hub brand identity"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              {/* 07. Outcome and reflection */}
              <div id="outcome" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  07. Outcome and reflection
                </p>
                <p className="mt-8 text-[18px] leading-[25.2px] tracking-[-0.18px] text-foreground/50">
                  The MVP prototype now includes:
                </p>
                <ul className="mt-5 space-y-0 text-[18px] leading-[25.2px] tracking-[-0.18px] text-foreground/50">
                  <li className="flex gap-3"><span>·</span><span>100+ curated spots across Brooklyn and Manhattan</span></li>
                  <li className="flex gap-3"><span>·</span><span>Quick-scan cards showing essentials (bathrooms, playground type, nearby food)</span></li>
                  <li className="flex gap-3"><span>·</span><span>Mobile-first responsive design</span></li>
                </ul>
                <p className="mt-8 max-w-[800px] text-[18px] leading-[25.2px] tracking-[-0.18px] text-foreground/50">
                  While not yet public, the app has become a living testbed for my{" "}
                  <strong className="font-bold text-foreground/50">AI + design workflow</strong>{" "}
                  — blending intuitive visual design with real data systems. KidVenture Hub NYC reminded me why I love design — the intersection of creativity, clarity, and real-world usefulness. It taught me that &ldquo;vibe coding&rdquo; isn&apos;t about chaos — it&apos;s about{" "}
                  <strong className="font-bold text-foreground/50">following instinct to reveal structure.</strong>
                </p>
                <div className="mt-12 overflow-hidden rounded-2xl">
                  <img
                    src="/images/kidventure/outcome.avif"
                    alt="Kidventure Hub outcome"
                    className="w-full object-cover"
                  />
                </div>
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

function NextMarquee() {
  const items = Array.from({ length: 6 });
  return (
    <Link href="/work/boldin-design-system" className="block group">
      <section className="relative overflow-hidden bg-[#0d0d0d] py-12 cursor-pointer transition-opacity hover:opacity-90">
        <div
          className="flex items-center gap-8 whitespace-nowrap w-max animate-marquee-ltr"
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
      <div className="flex-shrink-0 flex flex-col items-center gap-2">
        <img src="/images/boldin-next-logo.webp" alt="Boldin" className="h-[80px] w-[80px] rounded-2xl object-cover" />
        <span className="text-[13px] font-medium text-white opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap">
          Boldin Design System →
        </span>
      </div>
      <span className="flex-shrink-0 font-(family-name:--font-display) text-[80px] font-medium uppercase leading-none tracking-tight text-foreground md:text-[120px]">
        NEXT
      </span>
    </>
  );
}
