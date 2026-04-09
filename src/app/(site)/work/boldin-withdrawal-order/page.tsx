import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boldin — Withdrawal Order — Cez Corpus",
  description:
    "Designing personalized withdrawal strategies for Boldin's retirement planning platform.",
};

/* ------------------------------------------------------------------ */
/*  Section data                                                       */
/* ------------------------------------------------------------------ */

const navSections = [
  { id: "challenge", label: "01.  The challenge" },
  { id: "results", label: "02.  The results" },
  { id: "pain-points", label: "03.  User pain points" },
  { id: "design-concepts", label: "04.  Design concepts" },
  { id: "user-testing", label: "05.  User testing" },
  { id: "final-solution", label: "06.  Final solution" },
];

const nextProjects = [
  {
    slug: "boldin-design-system",
    label: "Boldin",
    bg: "bg-boldin-teal",
  },
  {
    slug: "boldin-brand-social",
    label: "Boldin",
    bg: "bg-boldin-orange",
  },
  {
    slug: "blockfi",
    label: "BlockFi",
    bg: "bg-blockfi-blue",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function BoldinWithdrawalOrder() {
  return (
    <div>
      {/* ========== HERO ========== */}
      <HeroSection />

      {/* ========== INFO ========== */}
      <InfoSection />

      {/* ========== CONTENT ========== */}
      <ContentSection />

      {/* ========== NEXT PROJECTS ========== */}
      <NextProjectsSection />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative pt-[140px]">
      <div className="mx-auto w-full max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          {/* Left sidebar spacer */}
          <div className="w-(--spacing-sidebar) shrink-0" />

          {/* Hero image placeholder */}
          <div className="flex-1">
            <div className="relative aspect-[1704/864] w-full overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-foreground-muted/10" />
              {/* Placeholder for hero image -- replaced in Phase 3 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Info Section                                                       */
/* ------------------------------------------------------------------ */

function InfoSection() {
  return (
    <section className="relative py-20">
      <div className="mx-auto w-full max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          {/* Left sidebar spacer */}
          <div className="w-(--spacing-sidebar) shrink-0" />

          {/* Main content */}
          <div className="flex-1">
            {/* Title */}
            <h1 className="font-(family-name:--font-display) text-display-lg font-medium uppercase leading-none tracking-tight">
              Boldin
            </h1>

            {/* Subtitle */}
            <p className="mt-0 max-w-[741px] text-body-lg text-foreground-muted">
              Boldin is a retirement and financial planning platform that
              empowers users to make smarter decisions about their savings,
              investments, and income strategies.
            </p>

            {/* Meta row */}
            <div className="mt-12 flex gap-16">
              <MetaEntry label="Role" value="Design Lead" />
              <MetaEntry label="Squad" value="Consumer D2C" />
              <MetaEntry
                label="Team"
                value={`Product Manager, Engineering (FE & BE)\nSME (Coach & Advisors), QA`}
              />
            </div>

            {/* Related case studies */}
            <div className="mt-10">
              <p className="text-body-xs font-semibold uppercase tracking-wide text-boldin-orange">
                Related case studies
              </p>
              <div className="mt-2 flex gap-4">
                <Link
                  href="/work/boldin-design-system"
                  className="text-body-sm text-foreground transition-colors hover:text-foreground-muted"
                >
                  Design system &rarr;
                </Link>
                <Link
                  href="/work/boldin-brand-social"
                  className="text-body-sm text-foreground transition-colors hover:text-foreground-muted"
                >
                  Brand and social &rarr;
                </Link>
              </div>
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
      <p className="text-body-xs font-semibold uppercase tracking-wide text-foreground-muted/40">
        {label}
      </p>
      <p className="mt-1 whitespace-pre-line text-body-xs font-semibold uppercase tracking-wide text-foreground">
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
    <section className="relative pb-24">
      <div className="mx-auto w-full max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          {/* Left sidebar spacer */}
          <div className="w-(--spacing-sidebar) shrink-0" />

          {/* Content area with sticky sidebar nav */}
          <div className="flex flex-1 gap-14">
            {/* Sticky sidebar nav */}
            <nav className="sticky top-[140px] h-fit w-[259px] shrink-0">
              <p className="text-body-xs font-semibold uppercase tracking-wide text-foreground-muted/40">
                on this page
              </p>
              <ul className="mt-2 flex flex-col gap-2">
                {navSections.map((s) => (
                  <li key={s.id}>
                    <span className="text-body-sm text-foreground">
                      {s.label}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Main content sections */}
            <div className="flex-1">
              {/* Section title heading */}
              <div className="mb-16">
                <h2 className="font-(family-name:--font-display) text-display-sm font-medium uppercase leading-tight tracking-tight text-foreground">
                  Withdrawal order
                </h2>
              </div>

              {/* ===== 01. The challenge ===== */}
              <div className="mb-20" id="challenge">
                <p className="mb-2 text-body-sm uppercase tracking-wider text-foreground-muted">
                  01
                </p>
                <p className="mb-8 text-body-lg font-medium text-foreground">
                  The challenge
                </p>
                <p className="max-w-[740px] text-body text-foreground-muted">
                  Withdrawal timing can make or break a retirement plan.
                  Boldin&apos;s tools were strong, but users lacked control over
                  how their savings were drawn down. I set out to give them
                  personalized, flexible withdrawal strategies aligned to their
                  goals.
                </p>
              </div>

              {/* HMW callout */}
              <div className="mb-20 rounded-2xl bg-foreground/5 p-10">
                <p className="mb-2 text-body-sm uppercase tracking-wider text-foreground-muted">
                  Problem statement
                </p>
                <p className="max-w-[740px] text-body-lg font-medium text-foreground">
                  How might we empower users to optimize their withdrawal order
                  &mdash; minimizing taxes, extending savings longevity, and
                  building trust in the plan?
                </p>
              </div>

              {/* Goals */}
              <div className="mb-20 grid grid-cols-2 gap-6">
                <div className="rounded-2xl bg-boldin-orange p-8 text-center">
                  <p className="font-(family-name:--font-display) text-display-sm font-medium leading-tight text-foreground">
                    Reduce churn &amp;
                    <br />
                    increase retention
                  </p>
                </div>
                <div className="rounded-2xl bg-boldin-orange p-8 text-center">
                  <p className="font-(family-name:--font-display) text-display-sm font-medium leading-tight text-foreground">
                    Drive subscription
                    <br />
                    growth &amp; engagement
                  </p>
                </div>
              </div>

              <div className="mb-20 max-w-[740px]">
                <p className="text-body text-foreground-muted">
                  Armed with key user insights, I explored multiple design
                  directions &mdash; balancing automation, user control, and ease
                  of understanding &mdash; to best address user needs.
                </p>
              </div>

              {/* Image placeholder */}
              <div className="mb-20 aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <div className="h-full w-full bg-foreground-muted/10" />
              </div>

              {/* ===== 02. The results ===== */}
              <div className="mb-20" id="results">
                <p className="mb-2 text-body-sm uppercase tracking-wider text-foreground-muted">
                  02
                </p>
                <p className="mb-8 text-body-lg font-medium text-foreground">
                  The results: Impact at a glance
                </p>
                <p className="max-w-[740px] text-body text-foreground-muted">
                  The new withdrawal order experience empowered users to
                  personalize how their savings were drawn down &mdash; boosting
                  confidence, engagement, and key business metrics in the
                  process.
                </p>
              </div>

              {/* Stats */}
              <div className="mb-20 grid grid-cols-3 gap-6">
                <StatCard
                  value="40%"
                  description="Plus users engaged with the feature within 30 days"
                />
                <StatCard
                  value="18%"
                  description="Upgrade rate from Basic users who explored it"
                />
                <StatCard
                  value="10%"
                  description="Drop in monthly cancellations after launch"
                />
              </div>

              {/* Image placeholder */}
              <div className="mb-20 aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <div className="h-full w-full bg-foreground-muted/10" />
              </div>

              {/* ===== 03. Persona and identifying user pain points ===== */}
              <div className="mb-20" id="pain-points">
                <p className="mb-2 text-body-sm uppercase tracking-wider text-foreground-muted">
                  03
                </p>
                <p className="mb-8 text-body-lg font-medium text-foreground">
                  Persona and identifying user painpoints
                </p>

                <div className="mb-8 max-w-[740px]">
                  <p className="mb-1 text-body-sm uppercase tracking-wider text-foreground-muted">
                    Users
                  </p>
                  <p className="text-body text-foreground-muted">
                    Pre-retirees and retirees, often collaborating with advisors,
                    who want transparency and control over their financial
                    futures.
                  </p>
                </div>

                <div className="mb-8 max-w-[740px]">
                  <p className="mb-1 text-body-sm uppercase tracking-wider text-foreground-muted">
                    Business goals
                  </p>
                  <p className="text-body text-foreground-muted">
                    Strengthen user confidence, retention, and premium upgrades
                    by improving in-platform decision-making tools.
                  </p>
                </div>

                <div className="mb-12 max-w-[740px]">
                  <p className="mb-1 text-body-sm uppercase tracking-wider text-foreground-muted">
                    Key insights
                  </p>
                  <ul className="flex flex-col gap-2 text-body text-foreground-muted">
                    <li>
                      &bull; Users wanted to choose which accounts to withdraw
                      from first.
                    </li>
                    <li>
                      &bull; Limited control over drawdown strategy reduced trust
                      in the plan.
                    </li>
                    <li>
                      &bull; Retiring users sought clear, actionable guidance for
                      optimizing withdrawals.
                    </li>
                  </ul>
                </div>
              </div>

              {/* User quotes */}
              <div className="mb-20 grid grid-cols-3 gap-6">
                <QuoteCard quote="Not being able to specify funding source is a deal breaker for me." />
                <QuoteCard quote="I want to withdraw from my brokerage account first, before starting distributions from my retirement account." />
                <QuoteCard quote="Without control over the withdrawal order, it feels like I'm guessing how to manage my savings — I need more guidance and flexibility." />
              </div>

              {/* Image placeholder */}
              <div className="mb-20 aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <div className="h-full w-full bg-foreground-muted/10" />
              </div>

              {/* ===== 04. Design concepts ===== */}
              <div className="mb-20" id="design-concepts">
                <p className="mb-2 text-body-sm uppercase tracking-wider text-foreground-muted">
                  04
                </p>
                <p className="mb-8 text-body-lg font-medium text-foreground">
                  Design concepts
                </p>
              </div>

              {/* Concept 1a */}
              <div className="mb-12 max-w-[740px]">
                <p className="mb-4 text-body font-semibold text-foreground">
                  04. Design concept 1a: Dynamic Solver
                </p>
                <p className="mb-5 text-body text-foreground-muted">
                  Automatically recommends the best withdrawal strategy based on
                  financial goals. Users would be able to select goals like:
                  Lowest Lifetime Taxes, Highest Retirement Chance of Success,
                  Highest Estate Value.
                </p>
                <p className="mb-5 text-body text-foreground-muted">
                  The solver uses financial modeling to optimize drawdown
                  sequences based on account types, tax brackets, and projected
                  market conditions &mdash; giving users a recommended path
                  without requiring deep financial expertise.
                </p>
                <p className="text-body text-foreground-muted">
                  This concept helps users avoid having to pick from technical
                  strategies like proportional, reverse traditional while still
                  offering transparency and control.
                </p>
              </div>

              {/* Image placeholder */}
              <div className="mb-20 aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <div className="h-full w-full bg-foreground-muted/10" />
              </div>

              {/* Concept 1b */}
              <div className="mb-12 max-w-[740px]">
                <p className="mb-4 text-body font-semibold text-foreground">
                  04. Design concept 1b: Explorer
                </p>
                <p className="text-body text-foreground-muted">
                  In this iteration, I wanted to explore another key idea &mdash;
                  that some users really want to compare different withdrawal
                  strategies side by side to see what actually works best for
                  their goals.
                </p>
              </div>

              {/* Image placeholder */}
              <div className="mb-20 aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <div className="h-full w-full bg-foreground-muted/10" />
              </div>

              {/* Concept 2 */}
              <div className="mb-12 max-w-[740px]">
                <p className="mb-4 text-body font-semibold text-foreground">
                  04. Design concept 2: User control
                </p>
                <p className="mb-5 text-body text-foreground-muted">
                  This concept let users manually prioritize and rearrange
                  withdrawal accounts via drag-and-drop. If users understand the
                  value of an optimized withdrawal order, they&apos;ll be more
                  likely to upgrade or renew.
                </p>
                <p className="text-body text-foreground-muted">
                  We also introduced the Withdrawal Insight Report &mdash; a
                  transparent breakdown showing projected account drawdowns,
                  timelines, and tax impacts across each phase of retirement.
                </p>
              </div>

              {/* Image placeholder */}
              <div className="mb-20 aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <div className="h-full w-full bg-foreground-muted/10" />
              </div>

              {/* ===== 05. User testing ===== */}
              <div className="mb-20" id="user-testing">
                <p className="mb-2 text-body-sm uppercase tracking-wider text-foreground-muted">
                  05
                </p>
                <p className="mb-8 text-body-lg font-medium text-foreground">
                  Insights from user testing
                </p>
                <p className="mb-8 max-w-[740px] text-body text-foreground-muted">
                  The Withdrawal Insight Report tested strongly across all
                  sessions. Participants quickly understood the purpose of the
                  report and appreciated the clarity it provided around their
                  withdrawal timelines and account drawdowns.
                </p>

                {/* Key feedback */}
                <div className="mb-8 grid grid-cols-3 gap-6">
                  <FeedbackCard label="High confidence" />
                  <FeedbackCard label="Perceived transparency" />
                  <FeedbackCard label="Ease of understanding" />
                </div>

                <p className="max-w-[740px] text-body text-foreground-muted">
                  Overall, the report reinforced trust, addressed key user pain
                  points around &ldquo;black box&rdquo; calculations, and
                  validated the decision to prioritize transparency and education
                  in the withdrawal experience.
                </p>
              </div>

              {/* Image placeholder */}
              <div className="mb-20 aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <div className="h-full w-full bg-foreground-muted/10" />
              </div>

              {/* ===== 06. Final solution ===== */}
              <div className="mb-12" id="final-solution">
                <p className="mb-2 text-body-sm uppercase tracking-wider text-foreground-muted">
                  06
                </p>
                <p className="mb-8 text-body-lg font-medium text-foreground">
                  Final solution
                </p>
                <p className="max-w-[740px] text-body text-foreground-muted">
                  This concept let users manually prioritize and rearrange
                  withdrawal accounts via drag-and-drop. If users understand the
                  value of an optimized withdrawal order, they&apos;ll be more
                  likely to upgrade or renew.
                </p>
              </div>

              {/* Final image placeholders */}
              <div className="mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <div className="h-full w-full bg-foreground-muted/10" />
              </div>
              <div className="mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <div className="h-full w-full bg-foreground-muted/10" />
              </div>
              <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <div className="h-full w-full bg-foreground-muted/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Stat Card                                                          */
/* ------------------------------------------------------------------ */

function StatCard({
  value,
  description,
}: {
  value: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-foreground/5 p-8 text-center">
      <p className="font-(family-name:--font-display) text-display-sm font-medium leading-none text-foreground">
        {value}
      </p>
      <p className="mt-3 text-body-sm text-foreground-muted">{description}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Quote Card                                                         */
/* ------------------------------------------------------------------ */

function QuoteCard({ quote }: { quote: string }) {
  return (
    <div className="flex flex-col justify-center rounded-2xl border-l-2 border-boldin-orange bg-foreground/5 p-8">
      <p className="text-body italic text-foreground-muted">
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Feedback Card                                                      */
/* ------------------------------------------------------------------ */

function FeedbackCard({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center rounded-2xl bg-boldin-teal p-6 text-center">
      <p className="font-(family-name:--font-display) text-body-lg font-medium uppercase text-foreground">
        {label}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Next Projects Section                                              */
/* ------------------------------------------------------------------ */

function NextProjectsSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          {/* Left sidebar spacer */}
          <div className="w-(--spacing-sidebar) shrink-0" />

          <div className="flex-1">
            <p className="mb-8 text-body-sm uppercase tracking-wider text-foreground-muted">
              Next
            </p>

            <div className="grid grid-cols-3 gap-6">
              {nextProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group block"
                >
                  <div
                    className={`${project.bg} flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-2xl p-8 transition-opacity group-hover:opacity-90`}
                  >
                    <p className="font-(family-name:--font-display) text-display-md font-medium uppercase leading-none tracking-tight text-foreground/20">
                      NEXT
                    </p>
                    <div>
                      <span className="inline-block rounded-full bg-foreground/10 px-4 py-1.5 text-body-sm font-medium uppercase tracking-wide text-foreground">
                        {project.label}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
