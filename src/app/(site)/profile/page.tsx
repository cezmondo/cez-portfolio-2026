import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "next-view-transitions";

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
    label: "Years designing products",
    description:
      "From 0→1 launches to scaled SaaS platforms, consumer apps, and brand experiences.",
  },
  {
    value: "2",
    label: "Continents designed across",
    description:
      "Sydney → New York. A global design perspective rooted in craft, culture, and clarity.",
  },
];

const statsRight: StatEntry[] = [
  {
    value: "32k",
    label: "Users supported",
    description: "Through enterprise integrations (Nationwide x Boldin).",
  },
  {
    value: "89+",
    label: "Projects",
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
      <HeroSection />
      <NumbersSection />
      <BottomSection />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                        */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative -mt-20">
      {/* Background image — natural size, bleeds under fixed header */}
      <div className="absolute left-0 right-0 top-0">
        <img
          src="/images/profile/hero.jpg"
          alt=""
          className="w-full"
          fetchPriority="high"
        />
        {/* Dark fade at top — keeps logo/nav readable */}
        <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-background/80 to-transparent" />
        {/* Dark fade at bottom — blends into page */}
        <div className="absolute bottom-0 left-0 h-[480px] w-full bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          {/* Sidebar spacer */}
          <div className="hidden w-(--spacing-sidebar) shrink-0 md:block" />

          <div className="flex-1">
            {/* Spacer — pushes text below the image */}
            <div className="h-[240px] md:h-[480px]" />

            {/* Profile label */}
            <div className="mb-8 md:mb-12">
              <p className="font-(family-name:--font-body) text-body-lg font-medium text-white">
                Profile <span className="ml-1">&#x21B4;</span>
              </p>
            </div>

            {/* Hero headline */}
            <h1 className="max-w-[1060px] font-(family-name:--font-display) text-display-sm font-medium uppercase leading-none tracking-tight md:text-display-md lg:text-display-lg">
              Blending AI, Product Design, and Visual Craft to Shape
              What&apos;s Next
            </h1>

            {/* Bio */}
            <p className="mt-8 max-w-[682px] font-(family-name:--font-body) text-body-lg text-foreground-muted md:mt-12">
              G&apos;day I&apos;m Cez, an experience designer with a background
              in visual design and a passion for solving complex problems.
            </p>

            <div className="h-24 md:h-40" />
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
    <section className="relative">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          <div className="hidden w-(--spacing-sidebar) shrink-0 md:block" />

          <div className="flex-1">
            {/* Breathing room above content — intentional design gap */}
            <div className="hidden h-[360px] md:block" />

            {/* Mobile: stack vertically. Desktop: 3-column grid */}
            <div className="flex flex-col gap-16 md:grid md:grid-cols-[1fr_280px_280px] md:gap-x-12">
              {/* Titles column */}
              <div>
                <p className="mb-4 font-(family-name:--font-body) text-body-sm font-medium uppercase tracking-wider text-foreground-muted md:mb-6">
                  Numbers <span className="ml-1">&#x21B4;</span>
                </p>
                <h3 className="font-(family-name:--font-display) text-display-sm font-medium uppercase leading-none tracking-tight">
                  <span className="block">Fresh but</span>
                  <span className="block">Experienced</span>
                </h3>
              </div>

              {/* Stats column left */}
              <div className="flex flex-col gap-16 md:gap-[120px]">
                {statsLeft.map((stat) => (
                  <StatCard key={stat.value} stat={stat} />
                ))}
              </div>

              {/* Stats column right */}
              <div className="flex flex-col gap-16 md:gap-[120px]">
                {statsRight.map((stat) => (
                  <StatCard key={stat.value} stat={stat} />
                ))}
              </div>
            </div>

            <div className="h-24 md:h-40" />
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
      <p className="font-(family-name:--font-display) text-[72px] font-medium leading-none tracking-tight md:text-[120px]">
        {stat.value}
      </p>
      <div className="mt-3 inline-block md:mt-4">
        <span className="inline-block rounded-full border border-foreground/20 px-3.5 py-1.5 font-(family-name:--font-body) text-body-sm font-medium uppercase tracking-wide">
          {stat.label}
        </span>
      </div>
      <p className="mt-4 font-(family-name:--font-body) text-body text-foreground-muted md:mt-6">
        {stat.description}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Bottom — CEZ. wordmark + links                                     */
/* ------------------------------------------------------------------ */

function BottomSection() {
  return (
    <section className="relative pb-0 pt-16 md:pt-40">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          <div className="hidden w-(--spacing-sidebar) shrink-0 md:block" />

          <div className="flex-1">
            {/* CEZ. wordmark */}
            <div className="relative w-full overflow-hidden">
              <Image
                src="/images/profile/cez-wordmark.svg"
                alt="CEZ."
                width={1704}
                height={603}
                className="w-full h-auto"
              />
            </div>

            {/* Links row */}
            <div className="mt-8 flex items-center gap-6 md:mt-12">
              <Link
                href="https://www.linkedin.com/in/cesarcorpus"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 font-(family-name:--font-body) text-body-sm font-medium uppercase tracking-wide text-foreground-muted transition-colors hover:text-foreground"
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
                className="group inline-flex items-center gap-1.5 font-(family-name:--font-body) text-body-sm font-medium uppercase tracking-wide text-foreground-muted transition-colors hover:text-foreground"
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

    </section>
  );
}
