import type { Metadata } from "next";

export const metadata: Metadata = { title: "Archive — Cez Corpus" };

/* ------------------------------------------------------------------ */
/*  Placeholder archive entries                                        */
/* ------------------------------------------------------------------ */

interface ArchiveEntry {
  year: string;
  title: string;
  type: string;
}

const placeholderEntries: ArchiveEntry[] = [
  { year: "2024", title: "Design System Documentation", type: "Systems" },
  { year: "2023", title: "Mobile Exploration", type: "Product" },
  { year: "2022", title: "Brand Identity Concepts", type: "Branding" },
  { year: "2021", title: "Dashboard Prototypes", type: "Product" },
  { year: "2020", title: "Illustration Series", type: "Visual" },
  { year: "2019", title: "Consumer App Concepts", type: "Product" },
];

/* ------------------------------------------------------------------ */
/*  Archive page                                                       */
/* ------------------------------------------------------------------ */

export default function Archive() {
  return (
    <div>
      {/* ========== HEADER ========== */}
      <HeaderSection />

      {/* ========== ARCHIVE LIST ========== */}
      <ArchiveListSection />
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
            Archive <span className="ml-1">&#x21B4;</span>
          </p>

          {/* Display heading */}
          <h1 className="font-(family-name:--font-display) text-display-md font-medium uppercase leading-tight tracking-tight lg:text-display-lg">
            Archive
          </h1>

          {/* Subtitle */}
          <p className="mt-8 max-w-[560px] text-body-lg text-foreground-muted">
            A collection of past projects, experiments, and explorations.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Archive List Section                                               */
/* ------------------------------------------------------------------ */

function ArchiveListSection() {
  return (
    <section className="relative pb-32">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="pl-(--spacing-sidebar)">
          {/* Top divider */}
          <div className="border-t border-foreground/10" />

          {/* Placeholder rows */}
          {placeholderEntries.map((entry) => (
            <div
              key={entry.title}
              className="border-b border-foreground/10 py-8"
            >
              <div className="grid grid-cols-[80px_1fr_auto] items-center gap-6">
                {/* Year */}
                <span className="font-(family-name:--font-display) text-body-sm font-medium uppercase tracking-wide text-foreground-muted">
                  {entry.year}
                </span>

                {/* Title */}
                <span className="font-(family-name:--font-display) text-body-lg font-medium uppercase tracking-tight text-foreground/30">
                  {entry.title}
                </span>

                {/* Type tag */}
                <span className="rounded-full border border-foreground/10 px-3.5 py-1.5 text-body-sm font-medium uppercase tracking-wide text-foreground-muted/50">
                  {entry.type}
                </span>
              </div>
            </div>
          ))}

          {/* Coming soon message */}
          <div className="mt-20">
            <p className="font-(family-name:--font-display) text-display-sm font-medium uppercase leading-tight tracking-tight text-foreground/10">
              More coming
              <br />
              soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
