import Link from "next/link";
import ScrollFade, { ScrollTrigger } from "../components/ScrollFade";
import ScrollFadeBlue, { BlueTrigger } from "../components/ScrollFadeBlue";
import Footer from "../components/Footer";
import LiveClock from "../components/LiveClock";

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
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-24 md:pb-48">
      {/* Content wrapper */}
      <div className="mx-auto w-full max-w-(--max-width-content) px-(--spacing-gutter)">
        {/* Hero headline */}
        <div className="flex flex-col items-center gap-6 pt-[40vh]">
          <LiveClock />
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
        <div className="flex flex-col gap-6 pt-16 md:flex-row md:items-baseline md:gap-12 md:pl-(--spacing-sidebar) md:pt-40">
          {/* Location */}
          <div>
            <p className="font-(family-name:--font-body) text-body-sm font-medium uppercase tracking-wide">
              New York
            </p>
            <p className="font-(family-name:--font-body) text-body-sm font-medium uppercase tracking-wide">
              Sydney
            </p>
          </div>
          {/* Bio */}
          <p className="max-w-[480px] text-body text-white">
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
    <section className="relative pt-24 pb-12 md:pt-48 md:pb-24">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="mx-auto w-full lg:max-w-[960px]">
          {/* Project cards */}
          {homeProjects.map((project, index) => (
            <div
              key={project.slug}
              className="sticky pb-4 md:pb-10"
              style={{ top: `${40 + index * 20}px` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}

          {/* Explore All Projects card */}
          <div
            className="sticky pb-4 md:pb-10"
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
        className={`${project.accentBg} overflow-hidden rounded-3xl p-6 shadow-[0px_1px_10px_0px_rgba(15,14,14,0.15)] md:p-11 ${isDark ? "text-background" : "text-foreground"}`}
      >
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:h-[clamp(380px,55vh,700px)]">
          {/* Left side — info */}
          <div className="flex flex-col justify-between md:pr-11">
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
            <div className="mt-6 pb-6 md:mt-auto md:pb-11">
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
          <div className="relative mt-6 h-52 overflow-hidden rounded-lg md:mt-0 md:h-auto">
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
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          {/* Left side */}
          <div className="flex flex-col justify-between p-6 md:p-12">
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
            <div className="mt-6 md:mt-auto">
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
          <div className="relative min-h-[200px] bg-background md:min-h-[500px]">
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
    <section className="relative pt-20 pb-16 md:pt-32">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="mx-auto max-w-[1200px]">
          {/* Title + subtitle */}
          <div className="mb-16 md:mb-40 md:pl-20">
            <h2 className="font-(family-name:--font-display) text-display-sm font-medium uppercase leading-tight text-[#0032eb] md:text-display-md">
              staff-level
              <br />
              product designer
            </h2>
            <p className="mt-4 max-w-[450px] text-body-md text-black">
              Currenty shaping financial experiences at M1 Finance
            </p>
          </div>

          {/* About / description block */}
          <div className="mb-16 flex md:mb-32 md:justify-end">
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

          {/* Brands I've partnered with — logo marquee */}
          <div className="mb-16 md:mb-32">
            <p className="mb-6 font-(family-name:--font-body) text-body-lg font-medium text-[#0032eb] md:pl-20">
              Brands i&apos;ve partnered with
            </p>
            <div
              className="overflow-hidden pl-6 md:pl-32"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 8%, black 88%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 8%, black 88%, transparent 100%)",
              }}
            >
              <div className="flex animate-marquee items-center gap-12 whitespace-nowrap">
                {[
                  { src: "/logos/Boldin.svg", alt: "Boldin" },
                  { src: "/logos/UBS.svg", alt: "UBS" },
                  { src: "/logos/JetBlue.svg", alt: "JetBlue" },
                  { src: "/logos/Blockfi 1.svg", alt: "BlockFi" },
                  { src: "/logos/Inspire.svg", alt: "Inspire" },
                  { src: "/logos/BOA.svg", alt: "Bank of America" },
                  { src: "/logos/Bose.svg", alt: "Bose" },
                  { src: "/logos/Novartis.svg", alt: "Novartis" },
                  { src: "/logos/Tiffanyco.svg", alt: "Tiffany & Co" },
                  { src: "/logos/aetna.svg", alt: "Aetna" },
                  { src: "/logos/cisco.svg", alt: "Cisco" },
                  { src: "/logos/Newscorp.svg", alt: "News Corp" },
                  { src: "/logos/Payflex.svg", alt: "Payflex" },
                  { src: "/logos/TeamUSA.svg", alt: "Team USA" },
                  { src: "/logos/All In to go.svg", alt: "All In To Go" },
                  { src: "/logos/Merivale_Logo.png", alt: "Merivale" },
                  /* duplicate set for seamless loop */
                  { src: "/logos/Boldin.svg", alt: "Boldin2" },
                  { src: "/logos/UBS.svg", alt: "UBS2" },
                  { src: "/logos/JetBlue.svg", alt: "JetBlue2" },
                  { src: "/logos/Blockfi 1.svg", alt: "BlockFi2" },
                  { src: "/logos/Inspire.svg", alt: "Inspire2" },
                  { src: "/logos/BOA.svg", alt: "Bank of America2" },
                  { src: "/logos/Bose.svg", alt: "Bose2" },
                  { src: "/logos/Novartis.svg", alt: "Novartis2" },
                  { src: "/logos/Tiffanyco.svg", alt: "Tiffany & Co2" },
                  { src: "/logos/aetna.svg", alt: "Aetna2" },
                  { src: "/logos/cisco.svg", alt: "Cisco2" },
                  { src: "/logos/Newscorp.svg", alt: "News Corp2" },
                  { src: "/logos/Payflex.svg", alt: "Payflex2" },
                  { src: "/logos/TeamUSA.svg", alt: "Team USA2" },
                  { src: "/logos/All In to go.svg", alt: "All In To Go2" },
                  { src: "/logos/Merivale_Logo.png", alt: "Merivale2" },
                ].map((logo) => (
                  <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-7 w-auto flex-shrink-0 brightness-0 md:h-9"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Design Philosophy section label */}
          <div className="mb-6 md:pl-20">
            <p className="font-(family-name:--font-body) text-body-lg font-medium text-[#0032eb]">
              Design Philosophy and values <span className="ml-1">&#x21B4;</span>
            </p>
          </div>

          {/* Values list */}
          <div className="mb-12 md:mb-20 md:pl-20">
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
                  className="font-(family-name:--font-body) text-[28px] font-semibold leading-[1.1] tracking-tight text-black md:text-[56px]"
                >
                  {value}
                </h5>
              ))}
            </div>
          </div>

          {/* Philosophy statement */}
          <div className="mb-12 flex md:mb-20 md:justify-end">
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
    <section className="relative py-16 md:py-32">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="mx-auto max-w-[1200px]">
          <BlueTrigger />

          {/* Driven by clarity and intent label */}
          <div className="mb-6 md:pl-20">
            <p className="font-(family-name:--font-body) text-body-lg font-medium text-[#0032eb]">
              Driven by clarity and intent <span className="ml-1">&#x21B4;</span>
            </p>
          </div>

          {/* Large heading */}
          <div className="mb-16 md:pl-20">
            <h3 className="font-(family-name:--font-body) text-[clamp(40px,6vw,80px)] font-semibold leading-tight tracking-tight">
              Craft with purpose
            </h3>
          </div>

          {/* Three-column philosophy values */}
          <div className="mb-12 grid grid-cols-1 gap-8 md:mb-20 md:grid-cols-3 md:pl-20">
            <div>
              <h4 className="mb-3 text-body font-semibold">
                Design + UX
              </h4>
              <p className="text-body opacity-50">
                Rooted in visual clarity and user empathy. I craft intuitive,
                accessible experiences that balance beauty and purpose.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-body font-semibold">
                Leader + Collaborator
              </h4>
              <p className="text-body opacity-50">
                I mentor, align, and empower teams to move fast with focus.
                Strong partnerships drive meaningful outcomes.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-body font-semibold">
                Iterative Process
              </h4>
              <p className="text-body opacity-50">
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
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex flex-col items-center text-center">
          {/* Label */}
          <p className="mb-4 text-body-sm font-medium uppercase tracking-wider opacity-50">
            Contact <span className="ml-1">&#x21B4;</span>
          </p>

          {/* Large CTA headline */}
          <Link href="/contact" className="group block">
            <h2 className="font-(family-name:--font-display) text-display-md font-medium uppercase leading-none tracking-tight transition-colors group-hover:text-accent-yellow md:text-display-lg">
              Let&apos;s collab.
            </h2>
          </Link>
        </div>
      </div>
    </section>
  );
}
