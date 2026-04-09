import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Project card data enriched with homepage-specific fields           */
/* ------------------------------------------------------------------ */

interface HomeProject {
  slug: string;
  company: string;
  headline: string;
  description: string;
  tags: string[];
  accentBg: string;
  textColor: "light" | "dark";
}

const homeProjects: HomeProject[] = [
  {
    slug: "boldin-withdrawal-order",
    company: "Boldin",
    headline: "Boldin",
    description: "Designing Finanical Confidence in Retirement",
    tags: ["Fintech", "SaaS", "Product & Brand Design"],
    accentBg: "bg-surface-warm",
    textColor: "dark",
  },
  {
    slug: "blockfi",
    company: "BlockFi",
    headline: "BlockFi",
    description: "Simplifying Onboarding and Payments in Crypto",
    tags: ["Crypto", "App", "Product Design"],
    accentBg: "bg-blockfi-blue",
    textColor: "light",
  },
  {
    slug: "jetblue",
    company: "JetBlue",
    headline: "JetBlue",
    description: "Creating a seamless booking experience for millions of travelers",
    tags: ["Travel", "Web", "Product Design"],
    accentBg: "bg-blockfi-navy",
    textColor: "light",
  },
  {
    slug: "ubs",
    company: "UBS",
    headline: "UBS",
    description: "Wealth management for high net worth individuals",
    tags: ["Fintech", "App", "Product Design"],
    accentBg: "bg-[#e8cfc0]",
    textColor: "dark",
  },
  {
    slug: "kidventure-hub",
    company: "Kidventure Hub",
    headline: "Kid-venture Hub",
    description:
      "Vibe-coding Helping parents quickly find kid-friendly places across NYC",
    tags: ["Parenting", "Web App", "Product Design"],
    accentBg: "bg-kidventure-green",
    textColor: "dark",
  },
];

/* ------------------------------------------------------------------ */
/*  Home page                                                          */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div>
      {/* ========== HERO ========== */}
      <HeroSection />

      {/* ========== PROJECTS ========== */}
      <ProjectsSection />

      {/* ========== SERVICES / PHILOSOPHY ========== */}
      <ServicesSection />

      {/* ========== CONTACT CTA ========== */}
      <ContactCTA />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-24">
      {/* Content wrapper */}
      <div className="mx-auto w-full max-w-(--max-width-content) px-(--spacing-gutter)">
        {/* Top info row */}
        <div className="mb-auto flex gap-12 pb-60 pl-(--spacing-sidebar) pt-[40vh]">
          {/* Location */}
          <div>
            <p className="font-(family-name:--font-display) text-body-sm font-medium uppercase tracking-wide">
              New York
            </p>
            <p className="font-(family-name:--font-display) text-body-sm font-medium uppercase tracking-wide">
              Sydney
            </p>
          </div>
          {/* Bio */}
          <p className="max-w-[480px] text-body text-foreground-muted">
            I&apos;m a New York–based Staff Product Designer originally from
            Sydney, with over a decade of experience across apps, web, consumer,
            and SaaS, weaving AI into my process to move faster and design
            smarter.
          </p>
        </div>

        {/* Hero headline */}
        <div className="flex items-center justify-center">
          <h1 className="text-center font-(family-name:--font-display) text-display-sm font-medium uppercase leading-tight tracking-tight md:text-display-md lg:text-display-lg">
            I turn messy{" "}
            <span className="inline-block h-[0.6em] w-[0.8em] rounded-sm bg-foreground-muted/20" />{" "}
            problems into simple,
            <br />
            delightful{" "}
            <span className="inline-block h-[0.6em] w-[0.8em] rounded-sm bg-foreground-muted/20" />
            , and
            <br />
            useful{" "}
            <span className="inline-block h-[0.6em] w-[0.8em] rounded-sm bg-foreground-muted/20" />{" "}
            designs.
          </h1>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Projects Section                                                   */
/* ------------------------------------------------------------------ */

function ProjectsSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="pl-(--spacing-sidebar)">
          {/* Project cards */}
          <div className="flex flex-col gap-10">
            {homeProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}

            {/* Explore All Projects card */}
            <ExploreAllCard />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Project Card                                                       */
/* ------------------------------------------------------------------ */

function ProjectCard({ project }: { project: HomeProject }) {
  const isDark = project.textColor === "dark";

  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div
        className={`${project.accentBg} overflow-hidden rounded-2xl ${isDark ? "text-background" : "text-foreground"}`}
      >
        <div className="grid grid-cols-2 gap-0">
          {/* Left side — info */}
          <div className="flex flex-col justify-between p-12">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full border px-4 py-2 text-body-xs font-medium uppercase tracking-wide ${
                    isDark
                      ? "border-background/30"
                      : "border-foreground/30"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title + description */}
            <div className="mt-auto">
              <h3 className="font-(family-name:--font-display) text-heading font-medium uppercase">
                {project.headline}
              </h3>
              <p
                className={`mt-2 text-body-lg ${isDark ? "text-background/70" : "text-foreground/70"}`}
              >
                {project.description}
              </p>

              {/* See Project link */}
              <div className="mt-8">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-body-sm font-medium uppercase tracking-wide ${
                    isDark
                      ? "bg-background text-foreground"
                      : "bg-foreground text-background"
                  }`}
                >
                  See Project
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className="inline-block"
                  >
                    <path
                      d="M1 9L9 1M9 1H2M9 1V8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Right side — image placeholder */}
          <div className="relative min-h-[500px]">
            <div
              className={`absolute inset-0 ${isDark ? "bg-background/5" : "bg-foreground/5"}`}
            />
            {/* Placeholder for project image — replaced in Phase 3 */}
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Explore All Projects Card                                          */
/* ------------------------------------------------------------------ */

function ExploreAllCard() {
  return (
    <Link href="/work" className="group block">
      <div className="overflow-hidden rounded-2xl bg-background text-foreground ring-1 ring-white/10">
        <div className="grid grid-cols-2 gap-0">
          {/* Left side */}
          <div className="flex flex-col justify-between p-12">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {["Product Design", "Design Systems", "Branding and social"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-foreground/30 px-4 py-2 text-body-xs font-medium uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            {/* Title */}
            <div className="mt-auto">
              <h3 className="font-(family-name:--font-display) text-heading font-medium uppercase leading-tight">
                Explore all
                <br />
                projects
              </h3>

              {/* Lets go link */}
              <div className="mt-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-body-sm font-medium uppercase tracking-wide text-background">
                  Lets go
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    className="inline-block"
                  >
                    <circle cx="4" cy="4" r="3" fill="currentColor" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Right side — abstract visual placeholder */}
          <div className="relative min-h-[500px] bg-background">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Glowing orb placeholder — replaced in Phase 3 */}
              <div className="h-64 w-64 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 opacity-80 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Services / Philosophy Section                                      */
/* ------------------------------------------------------------------ */

function ServicesSection() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="mx-auto max-w-[1200px]">
          {/* Title + subtitle */}
          <div className="mb-40 pl-20">
            <h2 className="font-(family-name:--font-display) text-display-md font-medium uppercase leading-tight text-[#0032eb]">
              staff-level
              <br />
              product designer
            </h2>
            <p className="mt-4 max-w-[450px] text-body-md text-foreground-muted">
              Currenty shaping financial experiences at M1 Finance
            </p>
          </div>

          {/* About / description block */}
          <div className="mb-32 flex justify-end">
            <div className="max-w-[430px]">
              <p className="text-body text-foreground-muted">
                I design user-centered systems that scale — blending strategy,
                research, and visual design to solve complex problems with
                clarity. My work focuses on translating business goals into
                meaningful product experiences that feel effortless for users and
                valuable for organizations.
              </p>
              <p className="mt-5 text-body text-foreground-muted">
                From high-fidelity prototyping to shaping design systems and
                AI-driven tools, I lead initiatives that bring alignment across
                teams and deliver impact at scale.
              </p>
            </div>
          </div>

          {/* Brands I've partnered with — logo strip */}
          <div className="mb-32">
            <p className="mb-6 pl-20 text-body-sm font-medium uppercase tracking-wide text-[#0032eb]">
              Brands i&apos;ve partnered with
            </p>
            <div className="flex items-center gap-12 pl-20 opacity-40">
              {/* Placeholder brand logos — replaced in Phase 3 */}
              {[
                "M1",
                "UBS",
                "JetBlue",
                "BlockFi",
                "Inspire",
                "Boldin",
              ].map((brand) => (
                <span
                  key={brand}
                  className="font-(family-name:--font-display) text-body-lg font-medium uppercase tracking-wide text-foreground-muted"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Design Philosophy section label */}
          <div className="mb-6 pl-20">
            <p className="text-body-sm font-medium uppercase tracking-wider text-foreground-muted">
              Design Philosophy and values <span className="ml-1">&#x21B4;</span>
            </p>
          </div>

          {/* Philosophy statement */}
          <div className="mb-20 flex justify-end">
            <div className="max-w-[430px]">
              <p className="text-body text-foreground-muted">
                Design should be timeless, functional, and human. I believe in
                creating work that not only solves problems but feels inevitable
                once it exists. Good design evolves, adapts, and delights.
              </p>
              <p className="mt-5 text-body text-foreground-muted">
                I think in systems, work collaboratively, and strive for
                simplicity without losing depth. Every project is a chance to
                connect form with purpose, logic with emotion, and leave things
                better than when I found them.
              </p>
            </div>
          </div>

          {/* Driven by clarity and intent label */}
          <div className="mb-6 pl-20">
            <p className="text-body-sm font-medium uppercase tracking-wider text-foreground-muted">
              Driven by clarity and intent{" "}
              <span className="ml-1">&#x21B4;</span>
            </p>
          </div>

          {/* Three-column philosophy values */}
          <div className="mb-20 grid grid-cols-3 gap-8 pl-20">
            <div>
              <h4 className="mb-3 text-body font-semibold text-foreground">
                Design + UX
              </h4>
              <p className="text-body-sm leading-relaxed text-foreground-muted">
                Rooted in visual clarity and user empathy. I craft intuitive,
                accessible experiences that balance beauty and purpose.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-body font-semibold text-foreground">
                Leader + Collaborator
              </h4>
              <p className="text-body-sm leading-relaxed text-foreground-muted">
                I mentor, align, and empower teams to move fast with focus.
                Strong partnerships drive meaningful outcomes.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-body font-semibold text-foreground">
                Iterative Process
              </h4>
              <p className="text-body-sm leading-relaxed text-foreground-muted">
                Design, test, refine, repeat. Every cycle brings sharper
                insights and stronger products.
              </p>
            </div>
          </div>

          {/* Values list */}
          <div className="mb-20 pl-20">
            <div className="flex flex-col gap-1">
              {[
                "Form over function",
                "Future proof design",
                "Design should delight",
                "Design is iterative",
              ].map((value) => (
                <h5
                  key={value}
                  className="font-(family-name:--font-display) text-display-sm font-medium uppercase leading-tight text-foreground/20"
                >
                  {value}
                </h5>
              ))}
            </div>
          </div>

          {/* Craft with purpose */}
          <div className="pl-20">
            <h5 className="font-(family-name:--font-display) text-heading font-medium uppercase text-foreground/20">
              Craft with purpose
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact CTA                                                        */
/* ------------------------------------------------------------------ */

function ContactCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="pl-(--spacing-sidebar)">
          {/* Label */}
          <p className="mb-4 text-body-sm font-medium uppercase tracking-wider text-foreground-muted">
            Contact <span className="ml-1">&#x21B4;</span>
          </p>

          {/* Large CTA headline */}
          <Link href="/contact" className="group block">
            <h2 className="font-(family-name:--font-display) text-display-lg font-medium uppercase leading-none tracking-tight transition-colors group-hover:text-accent-yellow">
              Let&apos;s collab.
            </h2>
          </Link>
        </div>
      </div>
    </section>
  );
}
