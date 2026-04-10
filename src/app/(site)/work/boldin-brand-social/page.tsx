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

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function BoldinBrandSocial() {
  return (
    <div>
      <HeroSection />
      <ContentSection />

      {/* ========== NEXT PROJECTS ========== */}
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
                alt="Boldin Brand & Social"
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
                    <Link href="/work/boldin-design-system" className="flex items-center gap-1 text-[14px] leading-[16.8px] text-foreground transition-colors hover:text-white/60">
                      Design system <span aria-hidden>→</span>
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
                  <MetaEntry label="Squad" value="Marketing" />
                  <MetaEntry
                    label="Team"
                    value={`Marketing director,\ngrowth marketing manager,\nhead of design`}
                  />
                </div>
                <h1 className="font-(family-name:--font-body) text-[28px] font-semibold leading-[1.2] tracking-[-0.8px] text-foreground md:text-[40px]">
                  Evolving the Boldin brand
                </h1>
              </div>

              {/* ===== 01. Introduction ===== */}
              <div className="pb-16 md:pb-28" id="introduction">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  01. Introduction
                </p>
                <div className="max-w-[740px]">
                  <p className="text-[18px] leading-[1.4] text-foreground/50">
                    In 2024, NewRetirement took a bold step forward rebranding to
                    Boldin, a name and identity that better reflected the
                    company&apos;s mission: helping people live their financial
                    lives with confidence.
                  </p>
                  <p className="mt-5 text-[18px] leading-[1.4] text-foreground/50">
                    As part of the design team, I helped shape the rebrand
                    rollout, brand system, and marketing expressions that would
                    unify product, marketing, and enterprise experiences under
                    one cohesive vision.
                  </p>
                </div>

                <div className="mt-8 overflow-hidden rounded-2xl">
                  <img
                    src="/images/boldin-bs/introduction.svg"
                    alt="Boldin brand introduction"
                    className="w-full"
                  />
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl">
                  <img
                    src="/images/boldin-bs/rebrand-manifesto.svg"
                    alt="Boldin rebrand and manifesto"
                    className="w-full"
                  />
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl">
                  <img
                    src="/images/boldin-bs/rebrand-diagram.svg"
                    alt="Boldin rebrand diagram"
                    className="w-full"
                  />
                </div>
              </div>


              {/* ===== 02. Rebrand and manifesto ===== */}
              <div className="pb-16 md:pb-28" id="rebrand">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  02. Rebrand and manifesto
                </p>
                <div className="max-w-[740px]">
                  <p className="text-[18px] leading-[1.4] text-foreground/50">
                    The rebrand wasn&apos;t just a new name &mdash; it was a
                    philosophical shift.
                  </p>
                  <p className="mt-5 text-[18px] leading-[1.4] text-foreground/50">
                    The original name tied the company to one stage of life.
                    Boldin was created to represent a lifelong journey of
                    financial confidence, empowering people to be bold in every
                    decision they make.
                  </p>
                </div>

                <div className="mt-8 overflow-hidden rounded-2xl">
                  <img
                    src="/images/boldin-bs/manifesto-img.png"
                    alt="Boldin manifesto — people living boldly"
                    className="w-full"
                  />
                </div>
              </div>


              {/* ===== 03. Brand system and assets ===== */}
              <div className="pb-16 md:pb-28" id="brand-system">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  03. Brand system and assets
                </p>
                <p className="mb-10 max-w-[740px] text-[18px] leading-[1.4] text-foreground/50">
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
                      <p className="text-[18px] leading-[1.4] text-foreground/50">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/images/boldin-bs/brand-system-assets.png"
                    alt="Boldin brand system — typography, logo, icons, and patterns"
                    className="w-full"
                  />
                </div>
              </div>


              {/* ===== 04. Illustration and AI ===== */}
              <div className="pb-16 md:pb-28" id="illustration">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  04. Illustration and AI
                </p>
                <div className="max-w-[740px]">
                  <p className="text-[18px] leading-[1.4] text-foreground/50">
                    To humanize complex financial topics, we established a new
                    illustration style &mdash; warm, aspirational, and grounded
                    in real life.
                  </p>
                  <p className="mt-5 text-[18px] leading-[1.4] text-foreground/50">
                    We combined hand-crafted illustrations with AI-assisted
                    concepting to produce a style that fit our new aesthetic,
                    accelerating creative exploration while maintaining brand
                    authenticity.
                  </p>
                  <p className="mt-5 text-[18px] leading-[1.4] text-foreground/50">
                    Each illustration was built around narrative themes like
                    Confidence, not confusion.
                  </p>
                  <div className="mt-8 overflow-hidden rounded-2xl">
                    <img
                      src="/images/boldin-bs/illustration-ai.png"
                      alt="Boldin illustration style — warm, aspirational scenes"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* ===== 05. Paid social ===== */}
              <div className="pb-16 md:pb-28" id="paid-social">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  05. Paid social
                </p>
                <p className="max-w-[740px] text-[18px] leading-[1.4] text-foreground/50">
                  We extended the new identity across paid social, podcasts, and marketing campaigns translating brand principles into motion and storytelling. Campaigns centered on financial empowerment and trust, using bold color, expressive typography, and optimistic messaging to stand out in a traditionally sterile category. On platforms like Facebook, LinkedIn and Reddit, Boldin&apos;s social creative became a showcase of clarity, warmth, and confidence — turning complex financial ideas into approachable, human stories.
                </p>

                <div className="mt-8 overflow-hidden rounded-2xl">
                  <img
                    src="/images/boldin-bs/paid-social.png"
                    alt="Boldin paid social campaign creative"
                    className="w-full"
                  />
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
