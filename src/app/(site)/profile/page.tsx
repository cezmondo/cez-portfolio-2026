import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Profile — Cez Corpus" };

/* ------------------------------------------------------------------ */
/*  Stat card data                                                      */
/* ------------------------------------------------------------------ */

interface StatEntry {
  value: string;
  label: string;
  description: string;
}

const statsLeft: StatEntry[] = [
  {
    value: "10+",
    label: "YEARS DESIGNING PRODUCTS",
    description:
      "From 0→1 launches to scaled SaaS platforms, consumer apps, and brand experiences.",
  },
  {
    value: "2",
    label: "CONTINENTS DESIGNED ACROSS",
    description:
      "Sydney → New York. A global design perspective rooted in craft, culture, and clarity.",
  },
];

const statsRight: StatEntry[] = [
  {
    value: "32k",
    label: "users supported",
    description:
      "Through enterprise integrations (Nationwide x Boldin).",
  },
  {
    value: "89+",
    label: "projects",
    description:
      "Spanning enterprise SaaS, travel, fintech, wellness, and consumer tech.",
  },
];

/* ------------------------------------------------------------------ */
/*  Profile page                                                        */
/* ------------------------------------------------------------------ */

export default function Profile() {
  return (
    <div>
      {/* ========== HERO ========== */}
      <HeroSection />

      {/* ========== NUMBERS / STATS ========== */}
      <NumbersSection />

      {/* ========== BOTTOM IMAGE + LINKS ========== */}
      <BottomSection />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                        */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative">
      {/* Background image area */}
      <div className="absolute inset-0 h-[1200px]">
        {/* Placeholder for hero background image — replaced in Phase 3 */}
        <div className="h-full w-full bg-foreground-muted/10" />
        {/* Gradient overlay at bottom of image */}
        <div className="absolute bottom-0 left-0 h-[480px] w-full bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          {/* Left sidebar spacer */}
          <div className="w-(--spacing-sidebar) shrink-0" />

          {/* Main content */}
          <div className="flex-1">
            {/* Top spacer — pushes content below the image */}
            <div className="h-[720px]" />

            {/* Profile label */}
            <div className="mb-12">
              <p className="text-body-sm font-medium uppercase tracking-wider text-foreground-muted">
                Profile <span className="ml-1">&#x21B4;</span>
              </p>
            </div>

            {/* Hero headline */}
            <h1 className="max-w-[1060px] font-(family-name:--font-display) text-display-md font-medium uppercase leading-tight tracking-tight lg:text-display-lg">
              Blending AI, Product Design, and Visual Craft to Shape
              What&apos;s Next
            </h1>

            {/* Bio paragraph */}
            <p className="mt-12 max-w-[682px] text-body-lg text-foreground-muted">
              G&apos;day I&apos;m Cez, an experience designer with a background
              in visual design and a passion for solving complex problems.
            </p>

            {/* Bottom padding to give the hero breathing room */}
            <div className="h-40" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Numbers / Stats Section                                             */
/* ------------------------------------------------------------------ */

function NumbersSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          {/* Left sidebar spacer */}
          <div className="w-(--spacing-sidebar) shrink-0" />

          {/* Main content area */}
          <div className="flex-1">
            {/* Top spacer */}
            <div className="h-[360px]" />

            {/* Three-column layout: Titles | Stats Left | Stats Right */}
            <div className="grid grid-cols-[1fr_280px_280px] gap-x-12">
              {/* Titles column */}
              <div>
                {/* Numbers label */}
                <p className="mb-6 text-body-sm font-medium uppercase tracking-wider text-foreground-muted">
                  Numbers <span className="ml-1">&#x21B4;</span>
                </p>

                {/* Section heading */}
                <h3 className="font-(family-name:--font-display) text-display-sm font-medium uppercase leading-tight tracking-tight">
                  <span className="block">Fresh</span>
                  <span className="block">
                    <span className="text-foreground-muted">but</span>
                  </span>
                  <span className="block">experienced</span>
                </h3>
              </div>

              {/* Stats column left */}
              <div className="flex flex-col gap-[120px]">
                {statsLeft.map((stat) => (
                  <StatCard key={stat.value} stat={stat} />
                ))}
              </div>

              {/* Stats column right */}
              <div className="flex flex-col gap-[120px]">
                {statsRight.map((stat) => (
                  <StatCard key={stat.value} stat={stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Stat Card                                                           */
/* ------------------------------------------------------------------ */

function StatCard({ stat }: { stat: StatEntry }) {
  return (
    <div>
      {/* Large number */}
      <p className="font-(family-name:--font-display) text-[120px] font-medium leading-none tracking-tight">
        {stat.value}
      </p>

      {/* Label pill */}
      <div className="mt-4 inline-block">
        <span className="inline-block rounded-full border border-foreground/20 px-3.5 py-1.5 text-body-sm font-medium uppercase tracking-wide">
          {stat.label}
        </span>
      </div>

      {/* Description */}
      <p className="mt-6 text-body text-foreground-muted">
        {stat.description}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Bottom Image + Links Section                                        */
/* ------------------------------------------------------------------ */

function BottomSection() {
  return (
    <section className="relative pb-24 pt-40">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          {/* Left sidebar spacer */}
          <div className="w-(--spacing-sidebar) shrink-0" />

          {/* Main content */}
          <div className="flex-1">
            {/* Large image area — masked / rounded */}
            <div className="relative h-[600px] w-full overflow-hidden rounded-2xl">
              {/* Placeholder for profile image — replaced in Phase 3 */}
              <div className="absolute inset-0 bg-foreground-muted/10" />
            </div>

            {/* Links row below image */}
            <div className="mt-12 flex items-center gap-6">
              <Link
                href="https://www.linkedin.com/in/cesarcorpus"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-body-sm font-medium uppercase tracking-wide text-foreground-muted transition-colors hover:text-foreground"
              >
                Linkedin
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  <path
                    d="M1 7L7 1M7 1H2M7 1V6"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <Link
                href="https://www.instagram.com/cezcorpus"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-body-sm font-medium uppercase tracking-wide text-foreground-muted transition-colors hover:text-foreground"
              >
                Instagram
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  <path
                    d="M1 7L7 1M7 1H2M7 1V6"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Pink accent bar at bottom */}
      <div className="mt-24 h-[75px] w-full bg-accent-yellow" />
    </section>
  );
}
