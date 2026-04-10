import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: "Boldin — Withdrawal Order — Cez Corpus",
  description:
    "Designing personalized withdrawal strategies for Boldin's retirement planning platform.",
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const sections = [
  { id: "challenge", label: "01.  The challenge" },
  { id: "results", label: "02.  The results" },
  { id: "pain-points", label: "03.  User pain points" },
  { id: "concept-1a", label: "04.  Design concepts" },
  { id: "testing", label: "05.  User testing" },
  { id: "final", label: "06.  Final solution" },
];

const relatedCaseStudies = [
  { label: "Design system", href: "/work/boldin-design-system" },
  { label: "Brand and social", href: "/work/boldin-brand-social" },
];

export default function BoldinWithdrawalOrder() {
  return (
    <div>
      <HeroSection />
      <ContentSection />
      <NextMarquee />
      <Footer transparent />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Content — two-column: sticky sidebar + main                        */
/* ------------------------------------------------------------------ */

function ContentSection() {
  return (
    <section className="relative pt-16 md:pt-24">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          <div className="hidden w-(--spacing-sidebar) shrink-0 md:block" />

          {/* Two-column layout */}
          <div className="flex flex-1 gap-14">
            {/* Sidebar nav */}
            <nav className="sticky top-10 hidden h-fit w-[307px] shrink-0 md:block">
              <p className="mb-2 text-body-sm font-semibold uppercase tracking-wide text-white/40">
                on this page
              </p>
              <ul className="flex flex-col gap-2">
                {sections.map((s) => (
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
                  {relatedCaseStudies.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        className="flex items-center gap-1 text-[14px] leading-[16.8px] text-foreground transition-colors hover:text-white/60"
                      >
                        {r.label} <span aria-hidden>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* Main content */}
            <div className="flex-1">
              <DescriptionSection />
              <ResultsSection />
              <PainPointsSection />
              <ConceptSection1a />
              <ConceptSection1b />
              <ConceptSection2 />
              <UserTestingSection />
              <FinalSolutionSection />
              <div className="h-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  01. Hero                                                           */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative pt-[80px] md:pt-[140px]">
      <div className="mx-auto w-full max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          <div className="hidden w-(--spacing-sidebar) shrink-0 md:block" />
          <div className="flex-1">
            <div className="overflow-hidden rounded-[24px] bg-[#0d3f4a]">
              <img
                src="/images/boldin-wo/hero-header.png"
                alt="Boldin Withdrawal Order feature"
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
/*  02. Description / Challenge                                        */
/* ------------------------------------------------------------------ */

function DescriptionSection() {
  return (
    <div id="challenge" className="scroll-mt-10 pb-20 md:pb-28">
      {/* Meta labels row */}
      <div className="mb-10 flex flex-wrap gap-x-16 gap-y-4">
        <MetaEntry label="Role" value="Design Lead" />
        <MetaEntry label="Squad" value="Consumer D2C" />
        <MetaEntry
          label="Team"
          value={["Product Manager, Engineering (FE & BE)", "SME (Coach & Advisors), QA"]}
        />
      </div>

      {/* Main heading */}
      <h1 className="mb-6 font-(family-name:--font-body) text-[28px] font-semibold leading-[1.2] tracking-[-0.8px] text-foreground md:text-[40px]">
        Withdrawal order
      </h1>

      {/* Section label */}
      <p className="mb-4 text-[28px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground">
        01. The challenge
      </p>

      {/* Body */}
      <p className="max-w-[700px] text-[18px] leading-[1.4] text-foreground/50">
        Withdrawal timing can make or break a retirement plan. Boldin&apos;s
        tools were strong, but users lacked control over how their savings were
        drawn down. I set out to give them personalized, flexible withdrawal
        strategies aligned to their goals.
      </p>
    </div>
  );
}

function MetaEntry({ label, value }: { label: string; value: string | string[] }) {
  const lines = Array.isArray(value) ? value : [value];
  return (
    <div>
      <p className="mb-1 text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground/40">
        {label}
      </p>
      {lines.map((line, i) => (
        <p key={i} className="text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground">
          {line}
        </p>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  03. Results                                                        */
/* ------------------------------------------------------------------ */

function ResultsSection() {
  return (
    <div id="results" className="scroll-mt-10 pb-16 md:pb-28">
      {/* Section label */}
      <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
        02. The results: Impact at a glance
      </p>

      {/* Body */}
      <p className="mb-10 max-w-[600px] text-[18px] leading-[1.4] text-foreground/50">
        The new withdrawal order experience empowered users to personalize how
        their savings were drawn down—boosting confidence, engagement, and key
        business metrics in the process.
      </p>

      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
    </div>
  );
}

function StatCard({ value, description }: { value: string; description: string }) {
  return (
    <div className="flex flex-col justify-center rounded-2xl bg-[#fbf7f0] px-6 py-12 md:px-10 md:py-[72px]">
      <p className="text-[36px] font-medium leading-[1.2] tracking-[-1.04px] text-[#0f0e0e] md:text-[52px]">
        {value}
      </p>
      <p className="mt-3 text-[18px] font-normal leading-[1.2] tracking-[-0.56px] text-black md:mt-5 md:text-[28px]">
        {description}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  04. Pain Points                                                    */
/* ------------------------------------------------------------------ */

function PainPointsSection() {
  return (
    <div id="pain-points" className="scroll-mt-10 pb-16 md:pb-28">
      {/* Section label */}
      <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
        03. Persona and identifying user painpoints
      </p>

      {/* Persona text */}
      <div className="mb-6 max-w-[700px] space-y-5">
        <p className="text-[18px] leading-[1.4] text-foreground/50">
          <span className="font-bold">Users:</span>{" "}
          Pre-retirees and retirees, often collaborating with advisors, who want
          transparency and control over their financial futures.
        </p>
        <p className="text-[18px] leading-[1.4] text-foreground/50">
          <span className="font-bold">Business goals:</span>{" "}
          Strengthen user confidence, retention, and premium upgrades by
          improving in-platform decision-making tools.
        </p>
        <p className="text-[18px] leading-[1.4] text-foreground/50">
          <span className="font-bold">Key insights from feedback and support channels:</span>
        </p>
        <p className="text-[18px] leading-[1.4] text-foreground/50">
          • Users wanted to choose which accounts to withdraw from first.<br />
          • Limited control over drawdown strategy reduced trust in the plan.<br />
          • Retiring users sought clear, actionable guidance for optimizing withdrawals.
        </p>
      </div>

      {/* Lifestyle photo */}
      <div className="mb-6 w-full overflow-hidden rounded-2xl">
        <img
          src="/images/boldin-wo/pain-points-photo.jpg"
          alt="User research context"
          className="w-full h-auto block"
        />
      </div>

      {/* Quote cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <QuoteCard
          quote="Not being able to specify funding source is a deal breaker for me.."
          stars={4}
        />
        <QuoteCard
          quote="I want to withdraw from my brokerage account first, before starting distributions from my retirement account."
          stars={5}
        />
        <QuoteCard
          quote="Without control over the withdrawal order, it feels like I'm guessing how to manage my savings — I need more guidance and flexibility."
          stars={5}
        />
      </div>
    </div>
  );
}

function QuoteCard({ quote, stars }: { quote: string; stars: number }) {
  return (
    <div className="flex flex-col justify-center rounded-2xl bg-[#fbf7f0] px-8 py-8">
      <p className="text-[18px] leading-[1.2] tracking-[-0.36px] text-[#0f0e0e]">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-8 flex items-center gap-2.5">
        <StarRow count={stars} />
      </div>
    </div>
  );
}

function StarRow({ count }: { count: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <img
          key={i}
          src="/images/boldin-wo/star-icon.svg"
          alt=""
          className="h-[26px] w-[26px]"
        />
      ))}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  05. Design concept 1a: Dynamic Solver                             */
/* ------------------------------------------------------------------ */

function ConceptSection1a() {
  return (
    <div id="concept-1a" className="scroll-mt-10 pb-16 md:pb-28">
      {/* Section label */}
      <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
        04. Design concept 1a: Dynamic Solver
      </p>

      {/* Body */}
      <div className="mb-8 max-w-[700px] space-y-1">
        <p className="text-[18px] leading-[1.4] text-foreground/50">
          Automatically recommends the best withdrawal strategy based on financial goals.
          Users would be able to select goals like:
        </p>
        <p className="text-[18px] leading-[1.4] text-foreground/50">
          • Lowest Lifetime Taxes<br />
          • Highest Retirement Chance of Success<br />
          • Highest Estate Value
        </p>
      </div>

      {/* Flowchart panel (dark teal) */}
      <div className="mb-6 w-full overflow-hidden rounded-2xl bg-[#0d3f4a] px-10 py-14 md:px-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
          {/* Left: Goals */}
          <div className="flex flex-col gap-3">
            <p className="text-[13px] font-medium uppercase tracking-wide text-white/40">Goals</p>
            {["Goal 1: Lowest lifetime taxes", "Goal 2: Highest chance of success", "Goal 3: Highest estate value"].map((g, i) => (
              <div key={i} className="rounded-xl border border-white/20 px-4 py-3">
                <p className="text-[14px] text-white/80">{g}</p>
              </div>
            ))}
          </div>

          {/* Center: FPE */}
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
            <div className="rounded-xl border border-white/20 px-6 py-4">
              <p className="text-[13px] font-medium uppercase tracking-wide text-white/40">FPE Engine</p>
              <p className="mt-1 text-[14px] text-white/80">Platform decides dynamically what strategy is best and changes as the plan does</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {["Traditional", "Reverse-Traditional", "Proportional", "Cash-First", "…"].map((s, i) => (
                <span key={i} className="rounded-lg border border-white/20 px-3 py-1 text-[13px] text-white/60">{s}</span>
              ))}
            </div>
          </div>

          {/* Right: Output */}
          <div className="flex flex-col gap-3">
            <p className="text-[13px] font-medium uppercase tracking-wide text-white/40">Output</p>
            <div className="rounded-xl border border-white/20 px-4 py-3">
              <p className="text-[14px] text-white/80">Traditional withdrawal order</p>
            </div>
            <div className="rounded-xl border border-[#ff6a00]/60 bg-[#ff6a00]/10 px-4 py-3">
              <p className="text-[14px] text-white/80">&ldquo;Optimised&rdquo; withdrawal order</p>
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="mb-8 max-w-[700px] text-[18px] leading-[1.4] text-foreground/50">
        This concept helps users avoid having to pick from technical strategies like
        proportional, reverse traditional while still offering transparency and control.
      </p>

      {/* Two panel row */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Orange — recommendation */}
        <div className="relative flex items-end overflow-hidden rounded-2xl bg-[#ff6a00] p-10 min-h-[400px]">
          <div className="w-full max-w-[320px] rounded-2xl bg-white p-6 shadow-lg">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-[#0f0e0e]/50">Recommended</p>
            <p className="mb-2 text-[16px] font-semibold text-[#0f0e0e]">Optimized Order</p>
            <p className="text-[13px] leading-[1.5] text-[#0f0e0e]/60">
              The Optimal Withdrawal Strategy reviews your financial situation and provides a tailored strategy and withdrawal order from your accounts that best suits your financial goals.
            </p>
          </div>
        </div>

        {/* White — savings confirmation */}
        <div className="flex items-center overflow-hidden rounded-2xl bg-white p-10 min-h-[400px]">
          <div className="w-full">
            <div className="mb-6 flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-[#04b477]" />
              <p className="text-[14px] font-semibold text-[#0f0e0e]/80">Boldin</p>
            </div>
            <p className="mb-2 text-[20px] font-medium leading-[1.3] text-[#0f0e0e]">
              Congratulations! By optimizing your withdrawal order we calculate that...
            </p>
            <p className="mb-4 text-[13px] text-[#0f0e0e]/50">Lifetime Taxes</p>
            <p className="text-[36px] font-semibold tracking-[-1px] text-[#0f0e0e]">$124,300 saved</p>
            <p className="mt-1 text-[13px] text-[#0f0e0e]/50">compared to $323,000 when using a default withdrawal order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  06. Design concept 1b: Explorer                                   */
/* ------------------------------------------------------------------ */

function ConceptSection1b() {
  return (
    <div id="concept-1b" className="scroll-mt-10 pb-16 md:pb-28">
      {/* Section label */}
      <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
        04. Design concept 1b: Explorer
      </p>

      {/* Body */}
      <p className="mb-8 max-w-[700px] text-[18px] leading-[1.4] text-foreground/50">
        In this iteration, I wanted to explore another key idea — that some users
        really want to compare different withdrawal strategies side by side to see
        what actually works best for their goals.
      </p>

      {/* Two green panels */}
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Left — strategy selector mockup */}
        <div className="flex items-start justify-center overflow-hidden rounded-2xl bg-[#04b477] p-10 pt-10 min-h-[464px]">
          <div className="w-full max-w-[350px] rounded-2xl bg-white p-5 shadow-lg">
            <div className="mb-4 flex items-center justify-between border-b border-[#0f0e0e]/10 pb-3">
              <p className="text-[14px] font-semibold text-[#0f0e0e]">Edit Withdrawal Strategy</p>
              <button className="text-[12px] text-[#0f0e0e]/50">Cancel</button>
            </div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-[#04b477]">Withdrawal Order</p>
            <p className="mb-4 text-[15px] font-semibold text-[#0f0e0e]">Which withdrawal strategy do you prefer?</p>
            <div className="mb-3 rounded-xl border border-[#04b477]/40 bg-[#04b477]/5 p-4">
              <div className="mb-1 flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-[#04b477]">Recommended</p>
              </div>
              <p className="mb-1 text-[13px] font-semibold text-[#0f0e0e]">Dynamic Strategy</p>
              <p className="text-[11px] leading-[1.5] text-[#0f0e0e]/50">
                Our &ldquo;dynamic strategy&rdquo; feature continuously refreshes your withdrawal order based on information in &ldquo;My Plan&rdquo; and makes recommendations based on your financial needs.
              </p>
            </div>
            <div className="rounded-xl border border-[#0f0e0e]/10 p-4">
              <p className="mb-1 text-[13px] font-semibold text-[#0f0e0e]">Fixed Strategy</p>
              <p className="mb-3 text-[11px] leading-[1.5] text-[#0f0e0e]/50">
                We will continue to use the chosen strategy unless you make a change.
              </p>
              <p className="mb-1 text-[10px] text-[#0f0e0e]/40">Strategy Type</p>
              <div className="flex items-center justify-between rounded-lg border border-[#0f0e0e]/15 px-3 py-2">
                <p className="text-[12px] text-[#0f0e0e]">Traditional</p>
                <span className="text-[#0f0e0e]/40">▾</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — comparison tooltip */}
        <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-[#04b477] p-10 min-h-[464px]">
          <div className="max-w-[360px] rounded-2xl bg-[#10182c] p-6">
            <p className="mb-3 text-[16px] font-semibold text-white">
              Don&apos;t know which strategy to choose?
            </p>
            <p className="mb-4 text-[14px] leading-[1.5] text-white/70">
              Our new comparison tool evaluates strategies based on your financial situation. Discover the pros and cons of each and decide with confidence.
            </p>
            <button className="rounded-full bg-[#ff8f43] px-5 py-2.5 text-[13px] font-medium text-white">
              Help me choose
            </button>
          </div>
        </div>
      </div>

      {/* Explorer chart panel (cream) */}
      <div className="w-full overflow-hidden rounded-2xl bg-[#fbf7f0] px-6 pb-5 pt-6 md:px-10 md:pt-10">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[#0f0e0e]/10 pb-3">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-[#0f0e0e]/5 p-1.5"><span className="block h-3 w-3">✕</span></button>
            <p className="text-[14px] font-medium text-[#0f0e0e]">Withdrawal Order Explorer</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-[#0f0e0e]/50">Scenario: Move to Nevada</span>
            <button className="rounded-lg border border-[#0f0e0e]/15 px-4 py-1.5 text-[13px] text-[#0f0e0e]">Help</button>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-[160px] md:shrink-0">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-[#0f0e0e]/40">Forecast</p>
            <div className="mb-6 rounded-lg border border-[#0f0e0e]/15 px-3 py-2 text-[13px] text-[#0f0e0e]">
              Optimistic ▾
            </div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-[#0f0e0e]/40">Tax Impact</p>
            <p className="mb-2 text-[13px] text-[#0f0e0e]">Tax Liability</p>
            <div className="rounded-lg border border-[#0f0e0e]/15 px-3 py-2 text-center text-[13px] text-[#0f0e0e]">Edit</div>
          </div>

          {/* Chart area */}
          <div className="flex-1">
            <h3 className="mb-1 text-[20px] font-medium text-[#0f0e0e]">Tax Liability</h3>
            <p className="mb-6 text-[13px] leading-[1.5] text-[#0f0e0e]/50">
              This is the projected amount you owe for taxes each year. It includes both state and federal income tax, as well as long-term capital gains.
            </p>
            {/* Chart placeholder */}
            <div className="mb-4 h-[120px] rounded-xl bg-[#0f0e0e]/5 flex items-end px-4 pb-4">
              <div className="flex w-full items-end gap-1">
                {[40, 55, 35, 60, 45, 70, 50, 80, 65, 90, 75, 85].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-[#04b477]/30" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex items-center gap-1.5 text-[12px] text-[#0f0e0e]/60">
                <span className="block h-2 w-2 rounded-full bg-[#0f0e0e]" />Traditional
              </span>
              <span className="flex items-center gap-1.5 text-[12px] text-[#0f0e0e]/60">
                <span className="block h-2 w-2 rounded-full bg-[#04b477]" />Reverse-Traditional
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#0f0e0e]/10 pt-6">
          <p className="mb-4 text-[14px] font-medium text-[#0f0e0e]">Choose up to 3 strategies you want to compare</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {["Traditional", "Reverse-Traditional", "Proportional"].map((s, i) => (
              <div key={i} className="rounded-xl border border-[#0f0e0e]/15 p-4">
                <div className="mb-1 flex items-center justify-between">
                  <p className="text-[13px] font-semibold text-[#0f0e0e]">{s}</p>
                  <span className="h-4 w-4 rounded border border-[#0f0e0e]/20 bg-[#04b477] flex items-center justify-center text-[10px] text-white">✓</span>
                </div>
                <p className="text-[11px] text-[#0f0e0e]/50">{i === 0 ? "Taxable, Tax deferred, Tax Free" : i === 1 ? "Tax Free, Tax deferred, Taxable" : "Proportional amount from each account"}</p>
                <p className="mt-2 text-[11px] text-[#0f0e0e]/40">Lifetime Liability · $222,354</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  07. Design concept 2: User control                                */
/* ------------------------------------------------------------------ */

function ConceptSection2() {
  return (
    <div id="concept-2" className="scroll-mt-10 pb-16 md:pb-28">
      {/* Section label */}
      <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
        04. Design concept 2: User control
      </p>

      {/* Body */}
      <p className="mb-8 max-w-[700px] text-[18px] leading-[1.4] text-foreground/50">
        This concept let users manually prioritize and rearrange withdrawal accounts
        via drag-and-drop. If users understand the value of an optimized withdrawal
        order, they&apos;ll be more likely to upgrade or renew.
      </p>

      {/* Two-panel row */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Left — drag-drop list (white) */}
        <div className="overflow-hidden rounded-2xl bg-white px-8 py-10 min-h-[420px]">
          <p className="mb-1 text-[13px] text-[#0f0e0e]/50">
            Drag and drop your accounts based on the order you expect to withdraw funds.
            We&apos;ll put any new accounts you add later at the end of the list.
          </p>
          <p className="mb-4 mt-4 text-[16px] font-semibold text-[#0f0e0e]">Order list</p>
          <div className="flex flex-col divide-y divide-[#0f0e0e]/8">
            {[
              { n: 1, name: "Cash (Default Account)", type: "After-Tax: Investments / Savings / Checking", value: "$10,000", rate: "5%" },
              { n: 2, name: "Empower Retirement 401k", type: "Pre-Tax: 401(k)", value: "$200,021", rate: "10%" },
              { n: 3, name: "Charles Schwab", type: "Pre-Tax: Other PreTax", value: "$5,2782", rate: "6.2%" },
              { n: 4, name: "Fidelity IRA Account 401k", type: "Pre-Tax: Traditional IRA", value: "$12,362", rate: "4.2%" },
            ].map((row) => (
              <div key={row.n} className="flex items-center gap-3 py-3">
                <span className="text-[#0f0e0e]/30">⠿</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0f0e0e]/8 text-[12px] font-medium text-[#0f0e0e]">{row.n}</span>
                <div className="flex-1">
                  <p className="text-[13px] font-medium text-[#0f0e0e]">{row.name}</p>
                  <p className="text-[11px] text-[#0f0e0e]/50">{row.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-[13px] font-medium text-[#0f0e0e]">{row.value}</p>
                  <p className="text-[11px] text-[#0f0e0e]/50">{row.rate}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 rounded-xl border border-[#0f0e0e]/15 px-5 py-2 text-[13px] text-[#0f0e0e]">
            Reset order
          </button>
        </div>

        {/* Right — plan updated notification (orange) */}
        <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-[#ff6a00] p-10 min-h-[420px]">
          <div className="w-full max-w-[380px] rounded-2xl bg-white p-5 shadow-lg">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[#04b477] text-[12px]">✓</span>
                <p className="text-[13px] font-semibold text-[#0f0e0e]">Plan Updated</p>
              </div>
              <button className="text-[12px] text-[#0f0e0e]/40">Dismiss Alert ✕</button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[12px] text-[#04b477]">▲</span>
                <p className="text-[13px] text-[#0f0e0e]">Out of savings <strong>5 year(s) later</strong></p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] text-[#04b477]">▲</span>
                <p className="text-[13px] text-[#0f0e0e]"><strong>$535,101 more</strong> in your estate at 93</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] text-[#ff6a00]">▼</span>
                <p className="text-[13px] text-[#0f0e0e]">Pay <strong>$93,507 more</strong> in your lifetime taxes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  08. User testing                                                   */
/* ------------------------------------------------------------------ */

function UserTestingSection() {
  return (
    <div id="testing" className="scroll-mt-10 pb-16 md:pb-28">
      <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
        05. Insights from user testing
      </p>
      <div className="max-w-[700px] space-y-5 text-[18px] leading-[1.4] text-foreground/50">
        <p>
          The Withdrawal Insight Report tested strongly across all sessions.
          Participants quickly understood the purpose of the report and appreciated
          the clarity it provided around their withdrawal timelines and account drawdowns.
        </p>
        <p>Key feedback themes included:</p>
        <p>
          <strong className="font-bold text-foreground/50">High confidence:</strong>{" "}
          Users felt reassured seeing a detailed breakdown of when and from which accounts
          their withdrawals would happen.
        </p>
        <p>
          <strong className="font-bold text-foreground/50">Perceived transparency:</strong>{" "}
          The visualizations helped users trust the platform&apos;s projections and
          strategies more fully.
        </p>
        <p>
          <strong className="font-bold text-foreground/50">Ease of understanding:</strong>{" "}
          Most users could navigate and interpret the report without requiring additional
          explanation.
        </p>
        <p>
          Overall, the report reinforced trust, addressed key user pain points around
          &ldquo;black box&rdquo; calculations, and validated the decision to prioritize
          transparency and education in the withdrawal experience.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  09. Final solution                                                 */
/* ------------------------------------------------------------------ */

function FinalSolutionSection() {
  return (
    <div id="final" className="scroll-mt-10 pb-16 md:pb-28">
      <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
        06. Final solution
      </p>
      <p className="mb-10 max-w-[700px] text-[18px] leading-[1.4] text-foreground/50">
        This concept let users manually prioritize and rearrange withdrawal accounts
        via drag-and-drop. If users understand the value of an optimized withdrawal
        order, they&apos;ll be more likely to upgrade or renew.
      </p>

      {/* Final solution mockups — cream background with overlapping screens */}
      <div className="relative overflow-hidden rounded-2xl bg-[#ebf8f2] px-6 pt-8 pb-0 md:px-10 md:pt-10">
        <div className="relative flex flex-col gap-4 md:flex-row md:items-end md:justify-center md:gap-0">
          {/* Back screen (slightly offset) */}
          <div className="relative z-10 w-full overflow-hidden rounded-2xl shadow-2xl md:-mb-1 md:mr-[-60px] md:w-[55%] md:max-w-[520px]">
            <div className="bg-white p-4">
              <div className="mb-3 flex items-center justify-between border-b border-[#0f0e0e]/8 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-md bg-[#04b477]" />
                  <span className="text-[12px] font-semibold text-[#0f0e0e]">Boldin</span>
                  <span className="text-[10px] text-[#0f0e0e]/40">formerly NewRetirement</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#0f0e0e]/8 px-2 py-0.5 text-[10px] font-medium text-[#0f0e0e]">BASELINE</span>
                </div>
              </div>
              <h3 className="mb-3 text-[18px] font-semibold text-[#0f0e0e]">Money Flows</h3>
              <div className="mb-2">
                <p className="text-[12px] font-medium text-[#04b477]">Recurring Contributions</p>
                <p className="text-[11px] text-[#0f0e0e]/50">1 contribution</p>
              </div>
              <div className="mb-2">
                <p className="text-[12px] font-medium text-[#04b477]">Excess Income</p>
                <p className="text-[11px] text-[#0f0e0e]/50">Save 80% to other savings</p>
              </div>
              <div>
                <p className="mb-2 text-[12px] font-medium text-[#04b477]">Withdrawal Order</p>
                <div className="flex gap-2">
                  <button className="rounded-full border border-[#04b477] bg-white px-4 py-1 text-[11px] font-medium text-[#0f0e0e]">Traditional</button>
                  <button className="rounded-full px-4 py-1 text-[11px] text-[#0f0e0e]/40">Customized</button>
                </div>
              </div>
            </div>
          </div>

          {/* Front screen */}
          <div className="relative z-20 w-full overflow-hidden rounded-2xl shadow-2xl md:w-[55%] md:max-w-[520px]">
            <div className="bg-white p-4">
              <div className="mb-3 flex items-center gap-2 border-b border-[#0f0e0e]/8 pb-3">
                <div className="h-5 w-5 rounded-md bg-[#04b477]" />
                <span className="text-[12px] font-semibold text-[#0f0e0e]">Boldin</span>
                <span className="text-[10px] text-[#0f0e0e]/40">formerly NewRetirement</span>
              </div>
              <h3 className="mb-2 text-[18px] font-semibold text-[#0f0e0e]">Retirement Withdrawals</h3>
              <p className="mb-4 text-[12px] leading-[1.5] text-[#0f0e0e]/50">
                This report provides detailed insights into how withdrawals will be used to fund your retirement. Explore timing, amounts, and account sources for your withdrawals.
              </p>
              <div className="mb-3 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] text-[#0f0e0e]/40">Budgeter Scenario</p>
                  <p className="text-[14px] font-medium text-[#0f0e0e]">Basic Budgeter</p>
                </div>
                <div>
                  <p className="text-[11px] text-[#0f0e0e]/40">Withdrawal Order</p>
                  <p className="text-[14px] font-medium text-[#0f0e0e]">Traditional</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] text-[#0f0e0e]/40">Average Retirement Withdrawal Rate</p>
                  <p className="text-[20px] font-semibold text-[#0f0e0e]">8%</p>
                </div>
                <div>
                  <p className="text-[11px] text-[#0f0e0e]/40">Out of Money Date</p>
                  <p className="text-[20px] font-semibold text-[#0f0e0e]">May 2058</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  10. Next marquee                                                   */
/* ------------------------------------------------------------------ */

function NextMarquee() {
  const items = Array.from({ length: 6 });
  return (
    <Link href="/work/blockfi" className="block">
      <section className="relative overflow-hidden bg-[#0d0d0d] py-12 cursor-pointer transition-opacity hover:opacity-90">
        <div
          className="flex items-center gap-8 whitespace-nowrap"
          style={{
            animation: "marquee-ltr 30s linear infinite",
          }}
        >
          {items.map((_, i) => (
            <MarqueeItem key={i} />
          ))}
          {/* Duplicate for seamless loop */}
          {items.map((_, i) => (
            <MarqueeItem key={`dup-${i}`} />
          ))}
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
