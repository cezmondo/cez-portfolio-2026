import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "next-view-transitions";
import ProfileHero from "../../components/ProfileHero";
import AnimatedStatValue from "../../components/AnimatedStatValue";

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
    value: "90+",
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
      <ProfileHero />
      <NumbersSection />
      <CareerSection />
      <StackSection />
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
            <div className="hidden h-[160px] md:block" />

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

              {/* Stats — 2-col grid so rows align across columns */}
              <div className="col-span-2 grid grid-cols-2 gap-x-12 gap-y-16 md:gap-y-20">
                {statsLeft[0] && <StatCard stat={statsLeft[0]} />}
                {statsRight[0] && <StatCard stat={statsRight[0]} />}
                {statsLeft[1] && <StatCard stat={statsLeft[1]} />}
                {statsRight[1] && <StatCard stat={statsRight[1]} />}
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
        <AnimatedStatValue value={stat.value} />
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
/*  Career Timeline                                                    */
/* ------------------------------------------------------------------ */

const career = [
  { years: "2026 — Now",  role: "Staff Product Designer",               company: "M1 Finance",           note: "Automated investing platform" },
  { years: "2023 — 2026", role: "Senior Product Designer",              company: "Boldin",               note: "SaaS financial planning" },
  { years: "2022 — 2023", role: "Senior Product Designer",              company: "BlockFi",              note: "Crypto fintech" },
  { years: "2021 — 2022", role: "Associate Creative Director, UX/UI",   company: "Y Media Labs",         note: "Digital product agency" },
  { years: "2018 — 2021", role: "Design Lead / Assoc. Design Director", company: "Big Spaceship",        note: "JetBlue.com redesign" },
  { years: "2016 — 2018", role: "Senior Art Director, UX/UI",           company: "Deloitte Digital",     note: "UBS, Aetna, fintech" },
  { years: "2015 — 2016", role: "Product Designer",                     company: "Beyond",               note: "Google, West Elm, Viacom" },
];

function CareerSection() {
  return (
    <section className="relative py-24 md:py-40">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          <div className="hidden w-(--spacing-sidebar) shrink-0 md:block" />
          <div className="flex-1">

            {/* Section label */}
            <p className="mb-12 font-(family-name:--font-body) text-body-sm font-medium uppercase tracking-wider text-foreground-muted md:mb-16">
              Career <span className="ml-1">&#x21B4;</span>
            </p>

            {/* Timeline rows */}
            <div className="flex flex-col">
              {career.map((item, i) => (
                <div
                  key={i}
                  className="group flex flex-col gap-1 border-t border-foreground/10 py-5 md:flex-row md:items-baseline md:gap-8 md:py-6"
                >
                  {/* Years */}
                  <span className="w-36 shrink-0 font-(family-name:--font-body) text-body-sm text-foreground-muted/50">
                    {item.years}
                  </span>

                  {/* Role */}
                  <span className="flex-1 font-(family-name:--font-body) text-body font-medium text-foreground">
                    {item.role}
                  </span>

                  {/* Company */}
                  <span className="font-(family-name:--font-body) text-body font-medium text-foreground md:w-48">
                    {item.company}
                  </span>

                  {/* Note */}
                  <span className="font-(family-name:--font-body) text-body-sm text-foreground-muted/50 md:w-48">
                    {item.note}
                  </span>
                </div>
              ))}
              {/* Final border */}
              <div className="border-t border-foreground/10" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Stack Section                                                      */
/* ------------------------------------------------------------------ */

const stackCategories = [
  {
    label: "Design",
    tools: [
      { name: "Figma",   icon: "figma" },
      { name: "Framer",  icon: "framer" },
      { name: "Rhino",   icon: null },
      { name: "Lottie",  icon: null },
    ],
  },
  {
    label: "AI",
    tools: [
      { name: "Claude",     icon: "anthropic" },
      { name: "Midjourney", icon: null },
      { name: "Runway",     icon: null },
      { name: "Higgsfield", icon: null },
      { name: "Loveable",   icon: null },
    ],
  },
  {
    label: "Dev",
    tools: [
      { name: "Cursor",   icon: "cursor" },
      { name: "GitHub",   icon: "github" },
    ],
  },
  {
    label: "Collab",
    tools: [
      { name: "Notion", icon: "notion" },
      { name: "Jira",        icon: "jira" },
      { name: "Asana",       icon: "asana" },
      { name: "Confluence",  icon: "confluence" },
      { name: "Slack",  icon: null },
      { name: "Loom",   icon: "loom" },
    ],
  },
];

function StackSection() {
  return (
    <section className="relative py-24 md:py-40">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          <div className="hidden w-(--spacing-sidebar) shrink-0 md:block" />
          <div className="flex-1">

            {/* Section label */}
            <p className="mb-12 font-(family-name:--font-body) text-body-sm font-medium uppercase tracking-wider text-foreground-muted md:mb-16">
              Design &amp; Dev Stack <span className="ml-1">&#x21B4;</span>
            </p>

            <div className="flex flex-col gap-10">
              {stackCategories.map((cat) => (
                <div key={cat.label} className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                  {/* Category label */}
                  <span className="w-24 shrink-0 pt-1 font-(family-name:--font-body) text-body-sm text-foreground-muted/50 uppercase tracking-wider">
                    {cat.label}
                  </span>

                  {/* Tool chips */}
                  <div className="flex flex-wrap gap-2">
                    {cat.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 font-(family-name:--font-body) text-body-sm font-medium text-foreground"
                      >
                        {tool.icon ? (
                          <img
                            src={`https://cdn.simpleicons.org/${tool.icon}/ffffff`}
                            alt=""
                            width={16}
                            height={16}
                            className="h-4 w-4 shrink-0"
                          />
                        ) : (
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-foreground/15 text-[9px] font-bold uppercase leading-none">
                            {tool.name[0]}
                          </span>
                        )}
                        {tool.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
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
