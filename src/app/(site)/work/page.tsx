import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";

export const metadata: Metadata = { title: "Select Work — Cez Corpus" };

/* ------------------------------------------------------------------ */
/*  Project data for work index                                        */
/* ------------------------------------------------------------------ */

interface WorkProject {
  number: string;
  slug: string;
  company: string;
  title: string;
  description: string;
  tags: string[];
  accentBg: string;
  textColor: "light" | "dark";
}

const workProjects: WorkProject[] = [
  {
    number: "01",
    slug: "boldin-withdrawal-order",
    company: "Boldin",
    title: "Withdrawal Order Feature",
    description: "Designing Financial Confidence in Retirement",
    tags: ["Fintech", "SaaS", "Product Design"],
    accentBg: "bg-surface-warm",
    textColor: "dark",
  },
  {
    number: "02",
    slug: "boldin-design-system",
    company: "Boldin",
    title: "Design System",
    description: "Building a scalable design system for enterprise",
    tags: ["Design Systems", "SaaS"],
    accentBg: "bg-boldin-teal",
    textColor: "light",
  },
  {
    number: "03",
    slug: "boldin-brand-social",
    company: "Boldin",
    title: "Brand & Social",
    description: "Evolving the Boldin brand identity",
    tags: ["Branding", "Marketing"],
    accentBg: "bg-boldin-orange",
    textColor: "light",
  },
  {
    number: "04",
    slug: "blockfi",
    company: "BlockFi",
    title: "BlockFi",
    description: "Simplifying Onboarding and Payments in Crypto",
    tags: ["Crypto", "App", "Product Design"],
    accentBg: "bg-blockfi-blue",
    textColor: "light",
  },
  {
    number: "05",
    slug: "jetblue",
    company: "JetBlue",
    title: "JetBlue",
    description: "Creating a seamless booking experience",
    tags: ["Travel", "Web", "Product Design"],
    accentBg: "bg-blockfi-navy",
    textColor: "light",
  },
  {
    number: "06",
    slug: "ubs",
    company: "UBS",
    title: "UBS",
    description: "Wealth management for high net worth individuals",
    tags: ["Fintech", "App", "Product Design"],
    accentBg: "bg-[#e8cfc0]",
    textColor: "dark",
  },
  {
    number: "07",
    slug: "kidventure-hub",
    company: "Kidventure Hub",
    title: "Kidventure Hub",
    description: "Helping parents find kid-friendly places across NYC",
    tags: ["Parenting", "Web App"],
    accentBg: "bg-kidventure-green",
    textColor: "dark",
  },
];

/* ------------------------------------------------------------------ */
/*  Work index page                                                    */
/* ------------------------------------------------------------------ */

export default function Work() {
  return (
    <div>
      {/* ========== PAGE HEADER ========== */}
      <HeaderSection />

      {/* ========== PROJECT LIST ========== */}
      <ProjectListSection />
      <Footer transparent />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Header Section                                                     */
/* ------------------------------------------------------------------ */

function HeaderSection() {
  return (
    <section className="relative pt-48 pb-16">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="pl-(--spacing-sidebar)">
          {/* Label */}
          <p className="mb-6 text-body-sm font-medium uppercase tracking-wider text-foreground-muted">
            Select Work <span className="ml-1">&#x21B4;</span>
          </p>

          {/* Display heading */}
          <h1 className="max-w-[900px] font-(family-name:--font-display) text-display-md font-medium uppercase leading-tight tracking-tight lg:text-display-lg">
            Selected
            <br />
            Projects
          </h1>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Project List Section                                               */
/* ------------------------------------------------------------------ */

function ProjectListSection() {
  return (
    <section className="relative pb-32">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="pl-(--spacing-sidebar)">
          {/* Divider line at top */}
          <div className="border-t border-foreground/10" />

          {/* Project rows */}
          {workProjects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Project Row                                                        */
/* ------------------------------------------------------------------ */

function ProjectRow({ project }: { project: WorkProject }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="border-b border-foreground/10 py-10 transition-colors hover:border-foreground/20">
        <div className="grid grid-cols-[60px_1fr] items-start gap-6">
          {/* Project number */}
          <span className="pt-1 font-(family-name:--font-display) text-body-sm font-medium uppercase tracking-wide text-foreground-muted">
            {project.number}
          </span>

          {/* Main content area */}
          <div className="grid grid-cols-[1fr_auto] items-start gap-8">
            {/* Left: company, title, description */}
            <div>
              {/* Company + title */}
              <h2 className="font-(family-name:--font-display) text-heading font-medium uppercase leading-tight tracking-tight transition-colors group-hover:text-accent-yellow">
                {project.company}
                {project.company !== project.title && (
                  <span className="text-foreground-muted">
                    {" "}
                    &mdash; {project.title}
                  </span>
                )}
              </h2>

              {/* Description */}
              <p className="mt-3 max-w-[560px] text-body text-foreground-muted">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-foreground/15 px-3.5 py-1.5 text-body-sm font-medium uppercase tracking-wide text-foreground-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: arrow */}
            <div className="pt-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 10 10"
                fill="none"
                className="text-foreground-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-yellow"
              >
                <path
                  d="M1 9L9 1M9 1H2M9 1V8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
