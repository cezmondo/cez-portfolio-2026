import type { Metadata } from "next";
import { Link } from "next-view-transitions";
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
      <NextMarquee />
      <Footer transparent />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                                */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="pt-[80px] md:pt-[140px]">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          <div className="hidden w-(--spacing-sidebar) shrink-0 md:block" />
          <div className="flex-1">
            <div className="aspect-[1704/864] w-full overflow-hidden rounded-3xl">
              <img
                src="/images/ubs/hero-header.avif"
                alt="UBS — case study hero"
                className="h-full w-full object-cover"
              />
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
          <div className="hidden w-(--spacing-sidebar) shrink-0 md:block" />

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
            </nav>

            {/* Main content */}
            <div className="flex-1">
              {/* Page info */}
              <div className="mb-16 pb-4">
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
                <h1 className="mb-6 font-(family-name:--font-body) text-[28px] font-semibold leading-[1.2] tracking-[-0.8px] text-foreground md:text-[40px]">
                  UBS
                </h1>
                <p className="max-w-[700px] text-[18px] leading-[1.4] text-foreground/50">
                  UBS Wealthway is a wealth management product app for high net worth individuals.
                </p>
              </div>

              {/* 01. The challenge */}
              <div id="challenge" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  01. The challenge
                </p>
                <p className="max-w-[700px] text-[18px] leading-[1.4] text-foreground/50">
                  To redesign UBS&apos;s digital services and create an iPad
                  experience that engages high-net-worth clients in a more
                  elevated, human conversation about their wealth, building
                  confidence in their financial planning and future. The result:
                  a truly user-centered experience that supports clients through
                  discovery, planning, and advice, empowering them to thrive
                  while driving organic growth.
                </p>
                <div className="mt-12 overflow-hidden rounded-2xl">
                  <video
                    src="/images/ubs/challenge.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full object-cover"
                  />
                </div>
                <div className="mt-6 overflow-hidden rounded-2xl">
                  <img
                    src="/images/ubs/header-scaled.jpg"
                    alt="UBS Wealthway — family on a beach"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              {/* 02. Metrics of success & impact */}
              <div id="metrics" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  02. Metrics of success &amp; impact
                </p>
                <div className="mt-8 flex flex-col gap-[24px] sm:flex-row">
                  {[
                    { metric: "34%", label: "high net worth individuals was conducted" },
                    { metric: "94%", label: "indicated the app appeared easy & intuitive to use" },
                    { metric: "76%", label: "indicated they would download the app" },
                  ].map((item) => (
                    <div
                      key={item.metric}
                      className="flex flex-1 flex-col rounded-2xl p-[60px]"
                      style={{ backgroundColor: "#fbf7f0" }}
                    >
                      <p className="text-[52px] font-medium leading-[1.2] tracking-[-1.04px]" style={{ color: "#0f0e0e" }}>
                        {item.metric}
                      </p>
                      <p className="mt-5 text-[32px] font-medium leading-[1.2] tracking-[-0.64px]" style={{ color: "#0f0e0e" }}>
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-10 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                  Story point capacity has steadily trended upward over 16
                  two-week sprints. Built organizational confidence both in the
                  product and the process. Praised as a role model for future
                  digital experience development.
                </p>
              </div>

              {/* 03. Personas */}
              <div id="personas" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  03. Personas
                </p>
                <p className="mt-8 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
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
                <div className="mt-12 overflow-hidden rounded-2xl">
                  <img
                    src="/images/ubs/persona.png"
                    alt="UBS persona — Jim"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              {/* 04. Define MVP scope */}
              <div id="mvp" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  04. Defining the MVP scope
                </p>
                <p className="mt-8 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                  Feature set and site map &mdash; Through the workshop and
                  audit of the old experiences, the team was able to hone in on
                  the particular areas of the MVP that was most feasible for
                  tech and for the client&apos;s launch date.
                </p>
                <div className="mt-12 overflow-hidden rounded-2xl bg-white p-10">
                  <img
                    src="/images/ubs/mvp-scope.png"
                    alt="UBS MVP scope — navigation icons"
                    className="w-full object-contain"
                  />
                </div>
                <div className="mt-6 overflow-hidden rounded-2xl bg-white p-10">
                  <img
                    src="/images/ubs/mvp-sitemap.png"
                    alt="UBS MVP sitemap"
                    className="w-full object-contain"
                  />
                </div>
              </div>

              {/* 05. Design concepts */}
              <div id="concepts" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  05. Design concepts
                </p>

                {/* Sub-section: Initial dashboard iterations */}
                <div className="mt-10">
                  <h3 className="text-body font-semibold text-foreground">
                    Initial dashboard iterations and explorations
                  </h3>
                  <p className="mt-3 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                    The early concepts relied heavily on charts and graphs to
                    visualize wealth.
                  </p>
                  <div className="mt-6 overflow-hidden rounded-2xl bg-white p-10">
                    <img
                      src="/images/ubs/design-concepts.avif"
                      alt="UBS design concepts — dashboard iterations"
                      className="w-full object-contain"
                    />
                  </div>
                </div>

                {/* Sub-section: Revised dashboards */}
                <div className="mt-16">
                  <h3 className="text-body font-semibold text-foreground">
                    Revised dashboards
                  </h3>
                  <p className="mt-3 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                    Through collaboration with product owners, the vision
                    evolved into something far more meaningful.
                  </p>
                  <p className="mt-5 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                    The experience shifted from graphical to conversational
                    &mdash; moving beyond numbers to spark engagement and
                    reflection. Contextual insights now surface dynamically,
                    prompting users to take action and explore their goals.
                  </p>
                  <p className="mt-5 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                    The redesigned dashboard became more human, personalized,
                    and educational, helping clients see their total wealth not
                    just as assets, but as a foundation for their life
                    milestones and future plans.
                  </p>
                  <p className="mt-5 max-w-[700px] text-[18px] leading-[1.4] font-medium text-foreground/70">
                    Action cards &amp; insights: Action and relevant insight
                    cards surface to the user. These action cards prompt the
                    user to think about their wealth, and relevant statistics
                    are also surfaced to the client.
                  </p>
                  <div className="mt-6 flex flex-col gap-[24px] sm:flex-row">
                    {[
                      { src: "/images/ubs/revised-dashboard-1.webp", alt: "UBS revised dashboard — personalised wealth view" },
                      { src: "/images/ubs/revised-dashboard-2.webp", alt: "UBS revised dashboard — action cards and insights" },
                    ].map((img) => (
                      <div key={img.src} className="flex flex-1 items-center justify-center rounded-2xl p-10" style={{ backgroundColor: "#bababa" }}>
                        <div className="w-full overflow-hidden rounded-lg bg-white shadow-[0px_1px_12px_2px_rgba(0,0,0,0.1)]">
                          <img src={img.src} alt={img.alt} className="w-full object-contain" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 06. User testing dashboard */}
              <div id="testing" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  06. User testing the dashboard
                </p>
                <p className="mt-8 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                  Through user testing the dashboard experience resonated with UBS clients on four key themes:
                </p>
                <div className="mt-5 flex flex-col gap-0">
                  {[
                    { title: "Financial snapshot:", desc: "Seeing the numbers behind their wealth" },
                    { title: "Holistic wealth view:", desc: "Thinking about wealth in a human way" },
                    { title: "Relevant content:", desc: "Getting personalized, actionable insights" },
                    { title: "Integration with FAs:", desc: "Enhancing highly-valued FA relationships" },
                  ].map((item) => (
                    <p key={item.title} className="text-[18px] leading-[1.4] tracking-[-0.18px]">
                      <span className="text-foreground">{item.title}</span>
                      <span className="text-foreground/50"> {item.desc}</span>
                    </p>
                  ))}
                </div>
              </div>

              {/* 07. Final solution */}
              <div id="solution" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  07. Final solution
                </p>
                <div className="mt-8 max-w-[800px]">
                  <p className="text-[18px] leading-[1.4] tracking-[-0.18px] text-foreground">
                    What is total wealth?
                  </p>
                  <p className="text-[18px] leading-[1.4] tracking-[-0.18px] text-foreground/50">
                    The digital experience evolved from a transactional app to a compelling and engaging digital conversation. A cube was created to embody the idea that client held different aspects of wealth, each side represented the following:
                  </p>

                  <div className="mt-5 flex flex-col gap-0">
                    {[
                      { title: "Mindsets and interests:", desc: "How clients view wealth and their interests" },
                      { title: "Relationships:", desc: "Important people in your life" },
                      { title: "Milestones:", desc: "Life timeline" },
                      { title: "Planning and advice:", desc: "How UBS helps clients reach their goals" },
                      { title: "Cashflow:", desc: "Client's income and spending" },
                      { title: "Net Worth:", desc: "Client's assets and liabilities" },
                    ].map((item) => (
                      <p key={item.title} className="text-[18px] leading-[1.4] tracking-[-0.18px]">
                        <span className="text-foreground">{item.title}</span>
                        <span className="text-foreground/50"> {item.desc}</span>
                      </p>
                    ))}
                  </div>

                  <p className="mt-5 text-[18px] leading-[1.4] tracking-[-0.18px] text-foreground/50">
                    The features enabled clients to share different aspects of their financial life with UBS and the advisors, while using engaging and intuitive tools to define their goals in the short-term and long-term.
                  </p>
                </div>
                <div className="mt-12 flex flex-col gap-[24px] sm:flex-row">
                  <div className="flex flex-1 items-center justify-center rounded-2xl p-10" style={{ backgroundColor: "#bababa" }}>
                    <img
                      src="/images/ubs/final-solution-ipad.webp"
                      alt="UBS final solution — iPad app"
                      className="w-full max-w-[463px] object-contain"
                    />
                  </div>
                  <div className="flex flex-1 items-center justify-center overflow-hidden rounded-2xl" style={{ backgroundColor: "#fbf7f0" }}>
                    <video
                      src="/images/ubs/final-solution-cube.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* 08. Parallel work streams */}
              <div id="parallel" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  08. Parallel work streams
                </p>
              </div>

              {/* Set a milestone — video */}
              <div className="mt-8 overflow-hidden rounded-3xl">
                <video
                  src="/images/ubs/milestone.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full"
                />
              </div>

              {/* Set a milestone — two-card row */}
              <div className="mt-6 flex flex-col gap-6 md:flex-row">
                {/* Left: text card */}
                <div
                  className="flex flex-1 flex-col items-center justify-center rounded-2xl px-10 py-[168px] text-center"
                  style={{ backgroundColor: "#fbf7f0" }}
                >
                  <p className="text-[32px] font-medium leading-[38.4px] tracking-[-0.64px] text-[#0f0e0e]">
                    Set a milestone
                  </p>
                  <p className="mt-5 text-[28px] font-normal leading-[33.6px] tracking-[-0.56px] text-[#0f0e0e]">
                    This feature allows users to set<br />up goals in the future.
                  </p>
                </div>
                {/* Right: image card */}
                <div
                  className="flex flex-1 items-center justify-center rounded-3xl p-10"
                  style={{ backgroundColor: "#bababa" }}
                >
                  <img
                    src="/images/ubs/milestone.png"
                    alt="Set a milestone screen"
                    className="w-full rounded-2xl object-contain"
                  />
                </div>
              </div>

              {/* Milestones timeline — video */}
              <div className="mt-6 overflow-hidden rounded-3xl">
                <video
                  src="/images/ubs/milestones-timeline.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full"
                />
              </div>

              {/* Milestones timeline — two-card row (image left, text right) */}
              <div className="mt-6 flex flex-col gap-6 md:flex-row">
                {/* Left: image card */}
                <div
                  className="flex flex-1 items-center justify-center rounded-2xl p-10"
                  style={{ backgroundColor: "#bababa" }}
                >
                  <img
                    src="/images/ubs/milestones-timeline.png"
                    alt="Milestones timeline screen"
                    className="w-full max-w-[464px] object-contain"
                  />
                </div>
                {/* Right: text card */}
                <div
                  className="flex flex-1 flex-col items-center justify-center rounded-2xl px-10 py-[152px] text-center"
                  style={{ backgroundColor: "#fbf7f0" }}
                >
                  <p className="text-[32px] font-medium leading-[38.4px] tracking-[-0.64px] text-[#0f0e0e]">
                    Milestones timeline
                  </p>
                  <p className="mt-5 text-[28px] font-normal leading-[33.6px] tracking-[-0.56px] text-[#0f0e0e]">
                    This feature allows users to see<br />all their planned goals from the<br />past and future.
                  </p>
                </div>
              </div>

              {/* Mindset and Interests — video */}
              <div className="mt-6 overflow-hidden rounded-3xl">
                <video
                  src="/images/ubs/mindset-interests.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full"
                />
              </div>

              {/* Mindset and Interests — two-card row (text left, image right) */}
              <div className="mt-6 flex flex-col gap-6 md:flex-row">
                {/* Left: text card */}
                <div
                  className="flex flex-1 flex-col items-center justify-center rounded-2xl px-10 py-[140px] text-center"
                  style={{ backgroundColor: "#fbf7f0" }}
                >
                  <p className="text-[32px] font-medium leading-[38.4px] tracking-[-0.64px] text-[#0f0e0e]">
                    Mindset and Interests –<br />Perspective questions
                  </p>
                  <p className="mt-5 text-[28px] font-normal leading-[33.6px] tracking-[-0.56px] text-[#0f0e0e]">
                    Lets UBS clients share their goals<br />and interests to receive<br />personalized insights and<br />advisor guidance.
                  </p>
                </div>
                {/* Right: image card */}
                <div
                  className="flex flex-1 items-center justify-center rounded-2xl p-10"
                  style={{ backgroundColor: "#bababa" }}
                >
                  <img
                    src="/images/ubs/mindset-interests.png"
                    alt="Mindset and Interests screen"
                    className="w-full rounded-2xl object-contain"
                  />
                </div>
              </div>

              {/* Account balances — video */}
              <div className="mt-6 overflow-hidden rounded-3xl">
                <video
                  src="/images/ubs/account-balances.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full"
                />
              </div>

              {/* Understanding your account balances — two-card row (image left, text right) */}
              <div className="mt-6 flex flex-col gap-6 md:flex-row">
                {/* Left: image card */}
                <div
                  className="flex flex-1 items-center justify-center rounded-2xl p-10"
                  style={{ backgroundColor: "#bababa" }}
                >
                  <img
                    src="/images/ubs/account-balances-ipad.png"
                    alt="Account Balances screen on tablet"
                    className="w-full max-w-[434px] object-contain"
                  />
                </div>
                {/* Right: text card */}
                <div
                  className="flex flex-1 flex-col items-center justify-center rounded-2xl px-10 py-[152px] text-center"
                  style={{ backgroundColor: "#fbf7f0" }}
                >
                  <p className="text-[32px] font-medium leading-[38.4px] tracking-[-0.64px] text-[#0f0e0e]">
                    Understanding your<br />account balances
                  </p>
                  <p className="mt-5 text-[28px] font-normal leading-[33.6px] tracking-[-0.56px] text-[#0f0e0e]">
                    Clients are able to view all their<br />assets and liabilities. They are<br />able to pay bills and transfer<br />funds.
                  </p>
                </div>
              </div>

              {/* Educational cube — video */}
              <div className="mt-6 overflow-hidden rounded-3xl">
                <video
                  src="/images/ubs/educational-cube.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full"
                />
              </div>

              {/* Educational cube — two-card row (text left, image right) */}
              <div className="mt-6 flex flex-col gap-6 md:flex-row">
                {/* Left: text card */}
                <div
                  className="flex flex-1 flex-col items-center justify-center rounded-2xl px-10 py-[118px] text-center"
                  style={{ backgroundColor: "#fbf7f0" }}
                >
                  <p className="text-[32px] font-medium leading-[38.4px] tracking-[-0.64px] text-[#0f0e0e]">
                    Educational cube
                  </p>
                  <p className="mt-5 text-[28px] font-normal leading-[33.6px] tracking-[-0.56px] text-[#0f0e0e]">
                    This feature allows users to<br />explore the different parts of<br />their wealth. It educates and<br />poses actions for them to<br />complete.
                  </p>
                </div>
                {/* Right: image card */}
                <div
                  className="flex flex-1 items-center justify-center rounded-2xl p-10"
                  style={{ backgroundColor: "#bababa" }}
                >
                  <img
                    src="/images/ubs/educational-cube.png"
                    alt="Educational cube screen"
                    className="w-full rounded-2xl object-contain"
                  />
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

function NextMarquee() {
  const items = Array.from({ length: 6 });
  return (
    <Link href="/work/kidventure-hub" className="block group">
      <section className="relative overflow-hidden bg-[#0d0d0d] py-12 cursor-pointer transition-opacity hover:opacity-90">
        <div
          className="flex items-center gap-8 whitespace-nowrap w-max animate-marquee-ltr"
        >
          {items.map((_, i) => <MarqueeItem key={i} />)}
          {items.map((_, i) => <MarqueeItem key={`dup-${i}`} />)}
        </div>
      </section>
    </Link>
  );
}

function MarqueeItem() {
  return (
    <>
      <div className="flex-shrink-0 flex flex-col items-center gap-2">
        <img src="/images/kidventure-next-logo.png" alt="Kidventure Hub" className="h-[80px] w-[80px] rounded-2xl object-cover" />
        <span className="text-[13px] font-medium text-white opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap">
          Kidventure Hub →
        </span>
      </div>
      <span className="flex-shrink-0 font-(family-name:--font-display) text-[80px] font-medium uppercase leading-none tracking-tight text-foreground md:text-[120px]">
        NEXT
      </span>
    </>
  );
}
