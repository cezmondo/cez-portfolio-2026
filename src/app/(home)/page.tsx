import Link from "next/link";
import ScrollFade, { ScrollTrigger } from "../components/ScrollFade";
import ScrollFadeBlue, { BlueTrigger } from "../components/ScrollFadeBlue";
import Footer from "../components/Footer";

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
  image?: string;
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
    image: "/images/boldin-wo/card-preview.png",
  },
  {
    slug: "blockfi",
    company: "BlockFi",
    headline: "BlockFi",
    description: "Simplifying Onboarding and Payments in Crypto",
    tags: ["Crypto", "App", "Product Design"],
    accentBg: "bg-blockfi-blue",
    textColor: "light",
    image: "/images/blockfi/card-preview.png",
  },
  {
    slug: "jetblue",
    company: "JetBlue",
    headline: "JetBlue",
    description: "Creating a seamless booking experience for millions of travelers",
    tags: ["Travel", "Web", "Product Design"],
    accentBg: "bg-blockfi-navy",
    textColor: "light",
    image: "/images/jetblue/card-preview.png",
  },
  {
    slug: "ubs",
    company: "UBS",
    headline: "UBS",
    description: "Wealth management for high net worth individuals",
    tags: ["Fintech", "App", "Product Design"],
    accentBg: "bg-[#e8cfc0]",
    textColor: "dark",
    image: "/images/ubs/card-preview.png",
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
    image: "/images/kidventure/card-preview.png",
  },
];

/* ------------------------------------------------------------------ */
/*  Home page                                                          */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <ScrollFade>
      {/* ========== HERO ========== */}
      <HeroSection />

      {/* ========== PROJECTS ========== */}
      <ProjectsSection />

      {/* ========== SERVICES / PHILOSOPHY → BLUE ========== */}
      <ScrollFadeBlue>
        <ServicesTopSection />
        <ServicesBottomSection />

        {/* ========== CONTACT CTA ========== */}
        <ContactCTA />
        <Footer transparent />
      </ScrollFadeBlue>
    </ScrollFade>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-48">
      {/* Content wrapper */}
      <div className="mx-auto w-full max-w-(--max-width-content) px-(--spacing-gutter)">
        {/* Hero headline */}
        <div className="flex items-center justify-center pt-[40vh]">
          <h1 className="text-center font-(family-name:--font-display) text-display-sm font-medium uppercase leading-[0.85] tracking-tight md:text-display-md lg:text-display-lg">
            I turn messy{" "}
            <img
              src="/images/home/inline-messy.gif"
              alt=""
              className="inline-block h-[0.6em] w-auto rounded-md object-cover align-middle"
            />{" "}
            problems into simple,
            <br />
            delightful{" "}
            <img
              src="/images/home/inline-delightful.gif"
              alt=""
              className="inline-block h-[0.6em] w-auto rounded-md object-cover align-middle"
            />
            , and
            <br />
            useful{" "}
            <img
              src="/images/home/inline-useful.gif"
              alt=""
              className="inline-block h-[0.6em] w-auto rounded-md object-cover align-middle"
            />{" "}
            designs.
          </h1>
        </div>

        {/* Info row below headline */}
        <div className="flex gap-12 pl-(--spacing-sidebar) pt-40">
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
          <p className="max-w-[480px] text-body opacity-50">
            I&apos;m a New York–based Staff Product Designer originally from
            Sydney, with over a decade of experience across apps, web, consumer,
            and SaaS, weaving AI into my process to move faster and design
            smarter.
          </p>
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
    <section className="relative pt-48 pb-24">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="mx-auto max-w-[1281px]">
          {/* Project cards */}
          {homeProjects.map((project, index) => (
            <div
              key={project.slug}
              className="sticky pb-10"
              style={{ top: `${40 + index * 20}px` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}

          {/* Explore All Projects card */}
          <div
            className="sticky pb-10"
            style={{ top: `${40 + homeProjects.length * 20}px` }}
          >
            <ScrollTrigger />
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
        className={`${project.accentBg} overflow-hidden rounded-3xl p-11 shadow-[0px_1px_10px_0px_rgba(15,14,14,0.15)] ${isDark ? "text-background" : "text-foreground"}`}
      >
        <div className="grid h-[700px] grid-cols-2 gap-0">
          {/* Left side — info */}
          <div className="flex flex-col justify-between pr-11">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full border px-4 py-1.5 text-body-xs font-semibold uppercase tracking-wide ${
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
            <div className="mt-auto pb-11">
              <h3 className="font-(family-name:--font-display) text-heading font-medium uppercase leading-none tracking-tight">
                {project.headline}
              </h3>
              <p
                className={`mt-2 text-body-md ${isDark ? "text-background/40" : "text-foreground/40"}`}
              >
                {project.description}
              </p>
            </div>

            {/* See Project link */}
            <div>
              <span
                className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-body-xs font-semibold uppercase tracking-wide ${
                  isDark
                    ? "bg-background text-foreground"
                    : "bg-foreground text-background"
                }`}
              >
                See Project
                <svg
                  width="8"
                  height="8"
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

          {/* Right side — image */}
          <div className="relative overflow-hidden rounded-lg">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.company} project preview`}
                className="absolute inset-0 h-full w-full object-cover object-left-top"
              />
            ) : (
              <div
                className={`absolute inset-0 ${isDark ? "bg-background/5" : "bg-foreground/5"}`}
              />
            )}
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

function ServicesTopSection() {
  return (
    <section className="relative pt-32 pb-16">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="mx-auto max-w-[1200px]">
          {/* Title + subtitle */}
          <div className="mb-40 pl-20">
            <h2 className="font-(family-name:--font-display) text-display-md font-medium uppercase leading-tight text-[#0032eb]">
              staff-level
              <br />
              product designer
            </h2>
            <p className="mt-4 max-w-[450px] text-body-md opacity-50">
              Currenty shaping financial experiences at M1 Finance
            </p>
          </div>

          {/* About / description block */}
          <div className="mb-32 flex justify-end">
            <div className="max-w-[430px]">
              <p className="text-body opacity-50">
                I design user-centered systems that scale — blending strategy,
                research, and visual design to solve complex problems with
                clarity. My work focuses on translating business goals into
                meaningful product experiences that feel effortless for users and
                valuable for organizations.
              </p>
              <p className="mt-5 text-body opacity-50">
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
                  className="font-(family-name:--font-display) text-body-lg font-medium uppercase tracking-wide opacity-50"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Design Philosophy section label */}
          <div className="mb-6 pl-20">
            <p className="text-body-sm font-medium uppercase tracking-wider opacity-50">
              Design Philosophy and values <span className="ml-1">&#x21B4;</span>
            </p>
          </div>

          {/* Values list */}
          <div className="mb-20 pl-20">
            <div className="flex flex-col gap-1">
              {[
                "Form over function",
                "Future proof design",
                "Design should delight",
                "Design is iterative",
                "Craft with purpose",
              ].map((value) => (
                <h5
                  key={value}
                  className="font-(family-name:--font-body) text-[56px] font-semibold leading-[1.1] tracking-tight opacity-20"
                >
                  {value}
                </h5>
              ))}
            </div>
          </div>

          {/* Philosophy statement */}
          <div className="mb-20 flex justify-end">
            <div className="max-w-[430px]">
              <p className="text-body opacity-50">
                Design should be timeless, functional, and human. I believe in
                creating work that not only solves problems but feels inevitable
                once it exists. Good design evolves, adapts, and delights.
              </p>
              <p className="mt-5 text-body opacity-50">
                I think in systems, work collaboratively, and strive for
                simplicity without losing depth. Every project is a chance to
                connect form with purpose, logic with emotion, and leave things
                better than when I found them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesBottomSection() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="mx-auto max-w-[1200px]">
          {/* Driven by clarity and intent label */}
          <BlueTrigger />
          <div className="mb-6 pl-20">
            <p className="text-body-sm font-medium uppercase tracking-wider opacity-50">
              Driven by clarity and intent{" "}
              <span className="ml-1">&#x21B4;</span>
            </p>
          </div>

          {/* Three-column philosophy values */}
          <div className="mb-20 grid grid-cols-3 gap-8 pl-20">
            <div>
              <h4 className="mb-3 text-body font-semibold">
                Design + UX
              </h4>
              <p className="text-body-sm leading-relaxed opacity-50">
                Rooted in visual clarity and user empathy. I craft intuitive,
                accessible experiences that balance beauty and purpose.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-body font-semibold">
                Leader + Collaborator
              </h4>
              <p className="text-body-sm leading-relaxed opacity-50">
                I mentor, align, and empower teams to move fast with focus.
                Strong partnerships drive meaningful outcomes.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-body font-semibold">
                Iterative Process
              </h4>
              <p className="text-body-sm leading-relaxed opacity-50">
                Design, test, refine, repeat. Every cycle brings sharper
                insights and stronger products.
              </p>
            </div>
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
          <p className="mb-4 text-body-sm font-medium uppercase tracking-wider opacity-50">
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
