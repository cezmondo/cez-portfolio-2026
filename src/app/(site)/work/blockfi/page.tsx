import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../../components/Footer";

export const metadata: Metadata = { title: "BlockFi — Cez Corpus" };

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const sections = [
  { id: "challenge", label: "01.  The challenge" },
  { id: "metrics", label: "02.  Metrics of success & impact" },
  { id: "pain-points", label: "03.  User pain points" },
  { id: "approach", label: "04.  Approach" },
  { id: "concepts", label: "05.  Design concepts" },
  { id: "testing", label: "06.  User testing" },
  { id: "parallel", label: "07.  Parallel work streams" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function BlockFi() {
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
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/images/blockfi/hero-header.avif"
                alt="BlockFi mobile app screens"
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
/*  Info                                                                */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  Content — two-column: sticky sidebar + main                        */
/* ------------------------------------------------------------------ */

function ContentSection() {
  return (
    <section className="pt-16 md:pt-24">
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
            </nav>

            {/* Main content */}
            <div className="flex-1">
              {/* Page info */}
              <div className="mb-4 pb-4">
                <div className="mb-10 flex flex-wrap gap-x-16 gap-y-4">
                  <div>
                    <p className="mb-1 text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground/40">Role</p>
                    <p className="text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground">Design Lead</p>
                  </div>
                  <div>
                    <p className="mb-1 text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground/40">Squad</p>
                    <p className="text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground">Onboarding &amp; Activations</p>
                  </div>
                  <div>
                    <p className="mb-1 text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground/40">Team</p>
                    <p className="text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground">Product Manager, Engineering (FE &amp; BE)</p>
                    <p className="text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground">Research, Content Strategist, QA</p>
                  </div>
                </div>
                <h1 className="mb-4 font-(family-name:--font-body) text-[28px] font-semibold leading-[1.2] tracking-[-0.8px] text-foreground md:text-[40px]">
                  BlockFi
                </h1>
                <p className="max-w-[700px] text-[18px] leading-[1.4] text-foreground/50">
                  BlockFi is a platform that redefines the future of banking where
                  users can earn interest, borrow cash, and trade crypto from
                  financial services providers.
                </p>
              </div>

              {/* 01. The challenge */}
              <div id="challenge" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  01. The challenge
                </p>
                <p className="max-w-[700px] text-[18px] leading-[1.4] text-foreground/50">
                  Clients today experience onboarding as &ldquo;a necessary
                  evil&rdquo; to endure vs an experience that supports their
                  investment goals. Users have to go through over 20 screens
                  before they can even add money to the platform.
                </p>

                <div className="mt-6 max-w-[700px] space-y-2 text-[18px] leading-[1.4] text-foreground/50">
                  <p>Business value: Increase # of clients who can immediately begin using our services.</p>
                  <p>• Drives 925K new accounts.</p>
                  <p>• Add $1.5M in revenue for newly acquired US clients.</p>
                  <p>• Save $76K on FTE headcount for manual KYC reviews by decreasing # of manual workflow events.</p>
                  <p>• Estimate 10%+ increase in conversion for US.</p>
                </div>


                <div className="mt-10 overflow-hidden rounded-2xl">
                  <img
                    src="/images/blockfi/challenge-flows.png"
                    alt="BlockFi onboarding flows — Signup, Onboarding, Risk, KYC"
                    className="w-full"
                  />
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl">
                  <img
                    src="/images/blockfi/conversion-funnel.png"
                    alt="BlockFi mobile full conversion funnel chart"
                    className="w-full"
                  />
                </div>
              </div>

              {/* 02. Metrics of success & impact */}
              <div id="metrics" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  02. Metrics of success and impact
                </p>
                <p className="mt-8 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                  The redesign streamlined BlockFi&apos;s onboarding and
                  verification flows, improving both user experience and
                  operational efficiency.
                </p>
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                  {[
                    {
                      label: "Efficiency",
                      value:
                        "Decrease number of pages and required fields.",
                    },
                    {
                      label: "KYC Success",
                      value:
                        "Improve coverage and accuracy with new data partners.",
                    },
                    {
                      label: "Conversion",
                      value:
                        "10%+ increase in conversion for US customers.",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-blockfi-blue p-8"
                    >
                      <p className="mb-2 font-(family-name:--font-display) text-body-sm font-medium uppercase tracking-wide text-white/60">
                        {item.label}
                      </p>
                      <p className="text-body text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  {[
                    {
                      label: "Revenue",
                      value:
                        "$1.5M in additional revenue for newly acquired US clients.",
                    },
                    {
                      label: "Operational",
                      value:
                        "Headcount savings by removing manual KYC review.",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-blockfi-blue p-8"
                    >
                      <p className="mb-2 font-(family-name:--font-display) text-body-sm font-medium uppercase tracking-wide text-white/60">
                        {item.label}
                      </p>
                      <p className="text-body text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 03. User pain points */}
              <div id="pain-points" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  03. User pain points
                </p>
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                  {[
                    `"Invasive as hell. They want to know everything about me before I could even browse the app. Felt like it was a cult leader or the DMV questioning me."`,
                    `"I tried many times to complete my KYC but every time it got unsuccessful. Now it's telling me that it can't offer our services. What a useless app."`,
                    `"I can't even get an account started. I tried 8 times to scan my Drivers License to prove that I am a legal human being...Moving on to another platform."`,
                  ].map((quote) => (
                    <div
                      key={quote}
                      className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#faa9d2] p-10 text-center"
                    >
                      <p className="text-[14px] leading-[1.6] text-[#0f0e0e]">{quote}</p>
                      <div className="flex gap-1 text-[20px]">
                        <span className="text-[#ee1e87]">★</span>
                        <span className="text-[#ee1e87]/30">★</span>
                        <span className="text-[#ee1e87]/30">★</span>
                        <span className="text-[#ee1e87]/30">★</span>
                        <span className="text-[#ee1e87]/30">★</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 04. Approach */}
              <div id="approach" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  04. Approach &mdash; Experience deep dive
                </p>
                <p className="mt-8 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                  To overhaul the onboarding experience, I started by completing
                  a full UX audit, scrutinizing every screen and taking note of
                  potential opportunities for improvement.
                </p>
                <p className="mt-5 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                  I worked closely with product managers and engineers to develop
                  a detailed map documenting all the different touchpoints in the
                  customer journey.
                </p>
                {/* UX audit + journey map image placeholders */}
                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="aspect-[4/3] rounded-2xl bg-blockfi-blue/10" />
                  <div className="aspect-[4/3] rounded-2xl bg-blockfi-blue/10" />
                </div>
              </div>

              {/* 05. Design concepts */}
              <div id="concepts" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  05. Design concepts &mdash; Architecting a new future
                </p>

                {/* Happy path */}
                <div className="mt-10">
                  <h3 className="text-body font-semibold text-foreground">
                    The happy path flow
                  </h3>
                  <p className="mt-3 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                    The end result was an easy, quick, streamlined, personalized
                    experience that set clients up for success by only asking for
                    necessary info, using geo-location, and prefilled form
                    fields. By overhauling onboarding for web and mobile
                    applications, it enabled a 66% decrease in # of pages/form
                    fields required.
                  </p>

                  <ul className="mt-6 flex max-w-[800px] flex-col gap-3">
                    {[
                      "The splash screen is a moment to educate the user about value props.",
                      "All major identifiers (PII) are on the initial page allowing more time for background verification.",
                      "Offloading the address to its own page gives more breathing room.",
                      "Consolidated T&Cs to own page for a final declaration of action.",
                      "Buttons hug content, making them more reachable by thumb.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-blockfi-blue" />
                        <span className="text-[18px] leading-[1.4] text-foreground/50">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Happy path image placeholder */}
                  <div className="mt-8 aspect-[16/9] w-full rounded-2xl bg-blockfi-blue/10" />
                </div>

                {/* Unhappy path */}
                <div className="mt-14">
                  <h3 className="text-body font-semibold text-foreground">
                    The unhappy path flow
                  </h3>
                  <p className="mt-3 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                    By replacing Persona and integrating with 3rd party vendors,
                    Telesign, Lexisnexis, and Sentilink, our verification process
                    becomes more seamless with only 10% of users going through
                    the unhappy path.
                  </p>

                  {/* Unhappy path image placeholder */}
                  <div className="mt-8 aspect-[16/9] w-full rounded-2xl bg-blockfi-blue/10" />
                </div>
              </div>

              {/* 06. User testing */}
              <div id="testing" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  06. Insights from user testing
                </p>
                <div className="mt-8 flex max-w-[800px] flex-col gap-5">
                  <p className="text-[18px] leading-[1.4] text-foreground/50">
                    The experience was considered standard by most participants
                    and the length of the flow was as expected.
                  </p>
                  <p className="text-[18px] leading-[1.4] text-foreground/50">
                    No major usability or comprehension challenges were observed.
                  </p>
                  <p className="text-[18px] leading-[1.4] text-foreground/50">
                    Since Trust was a point users called out during testing we
                    added a Trust value prop to the carousel on the splash
                    screen.
                  </p>
                </div>
              </div>

              {/* 07. Parallel work streams */}
              <div id="parallel" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  07. Parallel work streams
                </p>
                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "Home redesigned",
                      description:
                        "Snapshot of a client's financial health with insights, quick actions, and tailored suggestions driving engagement.",
                    },
                    {
                      title: "Quick Actions",
                      description:
                        "Easy access to most relevant actions from anywhere in the app.",
                    },
                    {
                      title: "Portfolio",
                      description:
                        "A clear overview of crypto assets, showing cross-portfolio data and detailed balances.",
                    },
                    {
                      title: "Credit Card",
                      description:
                        "A clear, scannable snapshot of a client's credit card health with balance, payment due, and rewards tracking.",
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
                      <div className="mt-6 aspect-[4/3] w-full rounded-xl bg-blockfi-blue/10" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom spacer */}
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
    <Link href="/work/jetblue" className="block">
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
      <img
        src="/images/blockfi/jetblue-icon.png"
        alt="JetBlue"
        className="h-[80px] w-[80px] flex-shrink-0 rounded-2xl"
      />
      <span className="flex-shrink-0 font-(family-name:--font-display) text-[80px] font-medium uppercase leading-none tracking-tight text-foreground md:text-[120px]">
        NEXT
      </span>
    </>
  );
}
