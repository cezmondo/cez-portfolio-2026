import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../../components/Footer";

export const metadata: Metadata = { title: "UBS — Cez Corpus" };

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const sections = [
  { id: "challenge", label: "01.  The challenge" },
  { id: "metrics", label: "02.  Metrics of success & impact" },
  { id: "personas", label: "03.  Personas" },
  { id: "mvp", label: "04.  Define MVP scope" },
  { id: "concepts", label: "05.  Design concepts" },
  { id: "testing", label: "06.  User testing dashboard" },
  { id: "solution", label: "07.  Final solution" },
  { id: "parallel", label: "08.  Parallel work streams" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function UBS() {
  return (
    <div>
      <HeroSection />
      <ContentSection />
      <NextSection />
      <Footer transparent />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                                */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="pt-[140px]">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          <div className="w-(--spacing-sidebar) shrink-0" />
          <div className="flex-1">
            <div className="aspect-[1704/864] w-full overflow-hidden rounded-3xl bg-[#e8cfc0]">
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
/*  Info                                                                */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  Content                                                             */
/* ------------------------------------------------------------------ */

function ContentSection() {
  return (
    <section className="pt-16 md:pt-24">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          <div className="w-(--spacing-sidebar) shrink-0" />

          <div className="flex flex-1 gap-14">
            {/* Sidebar nav */}
            <nav className="sticky top-10 h-fit w-[307px] shrink-0">
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
            </nav>

            {/* Main content */}
            <div className="flex-1">
              {/* Page info */}
              <div className="mb-16 pb-16">
                <div className="mb-10 flex flex-wrap gap-x-16 gap-y-4">
                  <div>
                    <p className="mb-1 text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground/40">Role</p>
                    <p className="text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground">Design Lead</p>
                    <p className="text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground">Work produced at Deloitte Digital.</p>
                  </div>
                  <div>
                    <p className="mb-1 text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground/40">Client</p>
                    <p className="text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground">UBS</p>
                  </div>
                  <div>
                    <p className="mb-1 text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground/40">Team</p>
                    <p className="text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground">GCD, CD, Snr Manager, Product Managers</p>
                    <p className="text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground">UX/UI Designers, Research (Doblin), Development</p>
                    <p className="text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground">3 Workstreams, 3 Product Owners</p>
                  </div>
                </div>
                <h1 className="font-(family-name:--font-display) text-display-lg font-medium uppercase leading-none tracking-tight">
                  UBS
                </h1>
                <p className="mt-4 max-w-[720px] text-body-lg text-white/50">
                  UBS Wealthway is a wealth management product app for high net worth individuals.
                </p>
              </div>

              {/* 01. The challenge */}
              <div id="challenge" className="scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  Redesigning the UBS Online Services Platform
                </h2>
                <p className="mt-1 text-body-sm text-white/40">
                  01. The challenge
                </p>
                <p className="mt-8 max-w-[800px] text-body text-white/50">
                  To redesign UBS&apos;s digital services and create an iPad
                  experience that engages high-net-worth clients in a more
                  elevated, human conversation about their wealth, building
                  confidence in their financial planning and future. The result:
                  a truly user-centered experience that supports clients through
                  discovery, planning, and advice, empowering them to thrive
                  while driving organic growth.
                </p>
                {/* Image placeholder */}
                <div className="mt-12 aspect-[16/9] w-full rounded-2xl bg-ubs-red/10" />
              </div>

              {/* 02. Metrics of success & impact */}
              <div id="metrics" className="mt-[120px] scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  02. Metrics of success &amp; impact
                </h2>
                <div className="mt-8 grid grid-cols-3 gap-6">
                  {[
                    {
                      metric: "34%",
                      label:
                        "high net worth individuals was conducted",
                    },
                    {
                      metric: "94%",
                      label:
                        "indicated the app appeared easy & intuitive to use",
                    },
                    {
                      metric: "76%",
                      label: "indicated they would download the app",
                    },
                  ].map((item) => (
                    <div
                      key={item.metric}
                      className="rounded-2xl bg-ubs-red/10 p-8"
                    >
                      <p className="font-(family-name:--font-display) text-display-sm font-medium uppercase leading-none tracking-tight">
                        {item.metric}
                      </p>
                      <p className="mt-3 text-body-sm text-white/60">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-10 max-w-[800px] text-body text-white/50">
                  Story point capacity has steadily trended upward over 16
                  two-week sprints. Built organizational confidence both in the
                  product and the process. Praised as a role model for future
                  digital experience development.
                </p>
              </div>

              {/* 03. Personas */}
              <div id="personas" className="mt-[120px] scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  03. Personas
                </h2>
                <p className="mt-8 max-w-[800px] text-body text-white/50">
                  Jim represents a near-retirement household persona used to
                  guide design decisions around financial planning behavior. At
                  61, he&apos;s a seasoned executive balancing wealth
                  preservation, family obligations, and the emotional transition
                  away from work. His profile highlights both the rational
                  (asset management, health costs, legacy planning) and
                  emotional (identity, purpose, independence) dimensions of
                  retirement planning, helping the team humanize data-driven
                  features and design for empathy, not just efficiency.
                </p>
                {/* Persona card image placeholder */}
                <div className="mt-12 aspect-[16/9] w-full rounded-2xl bg-ubs-red/10" />
              </div>

              {/* 04. Define MVP scope */}
              <div id="mvp" className="mt-[120px] scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  04. Defining the MVP scope
                </h2>
                <p className="mt-8 max-w-[800px] text-body text-white/50">
                  Feature set and site map &mdash; Through the workshop and
                  audit of the old experiences, the team was able to hone in on
                  the particular areas of the MVP that was most feasible for
                  tech and for the client&apos;s launch date.
                </p>
                {/* Site map / feature matrix image placeholder */}
                <div className="mt-12 aspect-[16/9] w-full rounded-2xl bg-ubs-red/10" />
              </div>

              {/* 05. Design concepts */}
              <div id="concepts" className="mt-[120px] scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  05. Design concepts
                </h2>

                {/* Sub-section: Initial dashboard iterations */}
                <div className="mt-10">
                  <h3 className="text-body font-semibold text-foreground">
                    Initial dashboard iterations and explorations
                  </h3>
                  <p className="mt-3 max-w-[800px] text-body text-white/50">
                    The early concepts relied heavily on charts and graphs to
                    visualize wealth.
                  </p>
                  {/* Image placeholders for early concepts */}
                  <div className="mt-6 grid grid-cols-2 gap-6">
                    <div className="aspect-[4/3] rounded-2xl bg-ubs-red/10" />
                    <div className="aspect-[4/3] rounded-2xl bg-ubs-red/10" />
                  </div>
                </div>

                {/* Sub-section: Revised dashboards */}
                <div className="mt-16">
                  <h3 className="text-body font-semibold text-foreground">
                    Revised dashboards
                  </h3>
                  <p className="mt-3 max-w-[800px] text-body text-white/50">
                    Through collaboration with product owners, the vision
                    evolved into something far more meaningful.
                  </p>
                  <p className="mt-5 max-w-[800px] text-body text-white/50">
                    The experience shifted from graphical to conversational
                    &mdash; moving beyond numbers to spark engagement and
                    reflection. Contextual insights now surface dynamically,
                    prompting users to take action and explore their goals.
                  </p>
                  <p className="mt-5 max-w-[800px] text-body text-white/50">
                    The redesigned dashboard became more human, personalized,
                    and educational, helping clients see their total wealth not
                    just as assets, but as a foundation for their life
                    milestones and future plans.
                  </p>
                  <p className="mt-5 max-w-[800px] text-body font-medium text-white/70">
                    Action cards &amp; insights: Action and relevant insight
                    cards surface to the user. These action cards prompt the
                    user to think about their wealth, and relevant statistics
                    are also surfaced to the client.
                  </p>
                  {/* Image placeholders for revised concepts */}
                  <div className="mt-6 aspect-[16/9] w-full rounded-2xl bg-ubs-red/10" />
                  <div className="mt-6 grid grid-cols-2 gap-6">
                    <div className="aspect-[4/3] rounded-2xl bg-ubs-red/10" />
                    <div className="aspect-[4/3] rounded-2xl bg-ubs-red/10" />
                  </div>
                </div>
              </div>

              {/* 06. User testing dashboard */}
              <div id="testing" className="mt-[120px] scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  06. User testing the dashboard
                </h2>
                <p className="mt-8 max-w-[800px] text-body text-white/50">
                  Through user testing the dashboard experience resonated with
                  UBS clients on four key themes:
                </p>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  {[
                    {
                      title: "Financial snapshot",
                      description:
                        "Seeing the numbers behind their wealth",
                    },
                    {
                      title: "Holistic wealth view",
                      description:
                        "Thinking about wealth in a human way",
                    },
                    {
                      title: "Relevant content",
                      description:
                        "Getting personalized, actionable insights",
                    },
                    {
                      title: "Integration with FAs",
                      description:
                        "Enhancing highly-valued FA relationships",
                    },
                  ].map((theme) => (
                    <div
                      key={theme.title}
                      className="rounded-2xl bg-white/5 p-8"
                    >
                      <h3 className="text-body font-semibold text-foreground">
                        {theme.title}
                      </h3>
                      <p className="mt-2 text-body-sm text-white/50">
                        {theme.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 07. Final solution */}
              <div id="solution" className="mt-[120px] scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  07. Final solution
                </h2>
                <p className="mt-8 max-w-[800px] text-body text-white/50">
                  What is total wealth? The digital experience evolved from a
                  transactional app to a compelling and engaging digital
                  conversation. A cube was created to embody the idea that
                  clients held different aspects of wealth, each side
                  represented the following:
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    "Mindsets and interests",
                    "Relationships",
                    "Milestones",
                    "Planning and advice",
                    "Cashflow",
                    "Net Worth",
                  ].map((side) => (
                    <div
                      key={side}
                      className="rounded-xl bg-ubs-red/10 px-6 py-4 text-center"
                    >
                      <p className="text-body-sm font-medium text-foreground">
                        {side}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-8 max-w-[800px] text-body text-white/50">
                  The features enabled clients to share different aspects of
                  their financial life with UBS and the advisors, while using
                  engaging and intuitive tools to define their goals.
                </p>
                {/* Image placeholders */}
                <div className="mt-12 aspect-[16/9] w-full rounded-2xl bg-ubs-red/10" />
                <div className="mt-6 grid grid-cols-3 gap-6">
                  <div className="aspect-[3/4] rounded-2xl bg-ubs-red/10" />
                  <div className="aspect-[3/4] rounded-2xl bg-ubs-red/10" />
                  <div className="aspect-[3/4] rounded-2xl bg-ubs-red/10" />
                </div>
              </div>

              {/* 08. Parallel work streams */}
              <div id="parallel" className="mt-[120px] scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  08. Parallel work streams
                </h2>
                <div className="mt-12 grid grid-cols-2 gap-6">
                  {[
                    {
                      title: "Set a milestone",
                      description:
                        "This feature allows users to set up goals in the future.",
                    },
                    {
                      title: "Milestones timeline",
                      description:
                        "This feature allows users to see all their planned goals from the past and future.",
                    },
                    {
                      title: "Mindset and Interests",
                      description:
                        "Perspective questions: Lets UBS clients share their goals and interests to receive personalized insights.",
                    },
                    {
                      title: "Understanding your account balances",
                      description:
                        "Clients are able to view all their assets and liabilities.",
                    },
                    {
                      title: "Educational cube",
                      description:
                        "This feature allows users to explore the different parts of their wealth.",
                    },
                  ].map((stream) => (
                    <div
                      key={stream.title}
                      className="flex flex-col rounded-2xl bg-white/5 p-8"
                    >
                      <h3 className="text-body font-semibold text-foreground">
                        {stream.title}
                      </h3>
                      <p className="mt-2 text-body-sm text-white/50">
                        {stream.description}
                      </p>
                      {/* Image placeholder */}
                      <div className="mt-6 aspect-[4/3] w-full rounded-xl bg-ubs-red/10" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Next Project                                                        */
/* ------------------------------------------------------------------ */

function NextSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          <div className="w-(--spacing-sidebar) shrink-0" />
          <div className="flex-1">
            <p className="mb-6 text-body-sm font-semibold uppercase tracking-wide text-white/40">
              More work
            </p>
            <div className="grid grid-cols-3 gap-6">
              <Link
                href="/work/kidventure-hub"
                className="group block overflow-hidden rounded-2xl bg-kidventure-green p-8 text-background transition-opacity hover:opacity-90"
              >
                <p className="font-(family-name:--font-display) text-display-sm font-medium uppercase leading-none tracking-tight">
                  NEXT
                </p>
                <p className="mt-3 text-body-sm font-medium uppercase tracking-wide">
                  Kidventure Hub
                </p>
              </Link>
              <Link
                href="/work/boldin-withdrawal-order"
                className="group block overflow-hidden rounded-2xl bg-boldin-teal p-8 text-foreground transition-opacity hover:opacity-90"
              >
                <p className="font-(family-name:--font-display) text-display-sm font-medium uppercase leading-none tracking-tight">
                  NEXT
                </p>
                <p className="mt-3 text-body-sm font-medium uppercase tracking-wide">
                  Boldin
                </p>
              </Link>
              <Link
                href="/work/blockfi"
                className="group block overflow-hidden rounded-2xl bg-blockfi-blue p-8 text-foreground transition-opacity hover:opacity-90"
              >
                <p className="font-(family-name:--font-display) text-display-sm font-medium uppercase leading-none tracking-tight">
                  NEXT
                </p>
                <p className="mt-3 text-body-sm font-medium uppercase tracking-wide">
                  BlockFi
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
