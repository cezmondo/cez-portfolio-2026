import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../../components/Footer";
import LottiePlayer from "../../../components/LottiePlayer";

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
          <div className="flex flex-1 gap-6 md:gap-8 lg:gap-14">
            {/* Sidebar nav */}
            <nav className="sticky top-10 hidden h-fit w-[200px] shrink-0 md:block lg:w-[280px]">
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
              <ProblemFrameSection />
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
    <section className="relative pt-[80px] md:pt-[100px] lg:pt-[140px]">
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
      <h1 className="mb-6 font-(family-name:--font-body) text-[28px] font-semibold leading-[1.2] tracking-[-0.8px] text-foreground md:text-[34px] lg:text-[40px]">
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
/*  Problem Frame                                                      */
/* ------------------------------------------------------------------ */

function ProblemFrameSection() {
  return (
    <div className="mb-16 md:mb-28 rounded-2xl bg-[#0d3f4a] p-8 md:p-10 flex flex-col gap-8 md:gap-10">
      {/* Label + HMW question */}
      <div className="flex flex-col gap-4">
        <p className="text-[12px] font-semibold uppercase tracking-[-0.12px] text-[#f7f7f7]/60">
          The problem we need to solve
        </p>
        <p className="text-[24px] font-medium leading-[1.2] tracking-[-0.64px] text-[#f7f7f7] md:text-[32px]">
          How might we empower users to optimize their withdrawal order — minimizing taxes, extending savings longevity, and building trust in the plan?
        </p>
      </div>

      {/* Business goal cards */}
      <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
        <div className="flex items-center justify-center rounded-2xl bg-white/[0.08] px-10 py-10 text-center">
          <p className="text-[24px] font-medium leading-[1.2] tracking-[-0.64px] text-[#ff6a00] md:text-[32px]">
            Reduce churn &<br />increase retention
          </p>
        </div>
        <div className="flex items-center justify-center rounded-2xl bg-white/[0.08] px-10 py-10 text-center">
          <p className="text-[24px] font-medium leading-[1.2] tracking-[-0.64px] text-[#ff6a00] md:text-[32px]">
            Drive subscription<br />growth &amp; engagement
          </p>
        </div>
      </div>

      {/* Body */}
      <p className="text-[18px] leading-[1.4] tracking-[-0.36px] text-[#f7f7f7]/80">
        Armed with key user insights, I explored multiple design directions — balancing automation, user control, and ease of understanding — to best address user needs.
      </p>
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
      <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[24px] lg:text-[28px]">
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
      <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[24px] lg:text-[28px]">
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
      <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[24px] lg:text-[28px]">
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
        <p className="text-[18px] leading-[1.4] text-foreground/50">
          I introduced goal-based optimization, a dynamic system powered by Boldin&apos;s Financial
          Planning Engine (FPE). When a user selects a goal, the engine evaluates multiple withdrawal
          strategies and recommends the one that best achieves that outcome. This shifts the experience
          from a one-size-fits-all model to a personalized, data-driven strategy selection.
        </p>
      </div>

      {/* FPE solver diagram */}
      <div className="mb-6 w-full overflow-hidden rounded-2xl bg-white p-10 md:p-20">
        <img
          src="/images/boldin-wo/concept-1a-fpe-solver.png"
          alt="FPE goal-based optimization flowchart"
          className="w-full h-auto block"
        />
      </div>

      {/* Caption */}
      <p className="mb-8 max-w-[700px] text-[18px] leading-[1.4] text-foreground/50">
        This concept helps users avoid having to pick from technical strategies like
        proportional, reverse traditional while still offering transparency and control.
      </p>

      {/* Two panel row */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Orange — recommendation */}
        <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-[#ff6a00] p-10 min-h-[280px] md:min-h-[400px]">
          <img
            src="/images/boldin-wo/concept-1a-recommendation-card.png"
            alt="Recommended: Optimized Order card"
            className="w-full h-auto block"
          />
        </div>

        {/* Lottie — savings animation */}
        <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-white min-h-[280px] md:min-h-[400px]">
          <LottiePlayer
            src="/images/boldin-wo/concept-1a-savings.json"
            className="w-full h-full"
          />
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
      <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[24px] lg:text-[28px]">
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
        <div className="flex items-start justify-center overflow-hidden rounded-2xl bg-[#04b477] p-10 pt-10 min-h-[320px] md:min-h-[464px]">
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
        <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-[#04b477] p-10 min-h-[320px] md:min-h-[464px]">
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

      <div className="mt-6 overflow-hidden rounded-2xl">
        <img
          src="/images/boldin-wo/concept-1b-explorer-chart.png"
          alt="Withdrawal Order Explorer — Tax Liability chart and strategy comparison"
          className="w-full"
        />
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
      <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[24px] lg:text-[28px]">
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
        {/* Left — Lottie animation */}
        <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-white min-h-[300px] md:min-h-[420px]">
          <LottiePlayer
            src="/images/boldin-wo/concept-2-animation.json"
            className="w-full h-full"
          />
        </div>

        {/* Right — plan updated notification (orange) */}
        <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-[#ff6a00] p-10 min-h-[300px] md:min-h-[420px]">
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

      {/* Copy */}
      <p className="mt-8 max-w-[700px] text-[18px] leading-[1.4] text-foreground/50">
        I designed a Withdrawal Insight Report to give users a clear, detailed view of how and
        when their savings would be drawn down over time. The report shows annual
        withdrawals, the specific accounts funding expenses each year, and the impact of their
        chosen withdrawal order. This transparency builds trust in Boldin&apos;s recommendations
        and empowers users and their advisors to make confident, informed retirement
        decisions.
      </p>

      {/* Withdrawal Insight Report — high-res product screenshot */}
      <div className="mt-8 overflow-hidden rounded-2xl">
        <img
          src="/images/boldin-wo/final-solution-screens.png"
          alt="Boldin final solution — Money Flows and Retirement Withdrawals screens"
          className="w-full"
        />
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
      <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[24px] lg:text-[28px]">
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
      <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[24px] lg:text-[28px]">
        06. Final solution
      </p>
      <p className="mb-10 max-w-[700px] text-[18px] leading-[1.4] text-foreground/50">
        This concept let users manually prioritize and rearrange withdrawal accounts
        via drag-and-drop. If users understand the value of an optimized withdrawal
        order, they&apos;ll be more likely to upgrade or renew.
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl">
        <img
          src="/images/boldin-wo/final-solution-mockup.png"
          alt="Boldin final solution — Money Flows and Retirement Withdrawals screens"
          className="w-full"
        />
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
