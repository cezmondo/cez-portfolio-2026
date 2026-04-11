import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../../components/Footer";

export const metadata: Metadata = { title: "JetBlue — Cez Corpus" };

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const sections = [
  { id: "challenge", label: "01.  The challenge" },
  { id: "metrics", label: "02.  Metrics of success" },
  { id: "personas", label: "03.  Personas" },
  { id: "reimagine", label: "04.  Reimagine flight results" },
  { id: "concepts", label: "05.  Design concepts" },
  { id: "testing", label: "06.  User testing" },
  { id: "solution", label: "07.  Final solution" },
  { id: "parallel", label: "08.  Parallel work streams" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function JetBlue() {
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
            <div className="aspect-[1704/864] w-full overflow-hidden rounded-3xl bg-jetblue-blue/20">
              <img
                src="/images/jetblue/hero-header.avif"
                alt="JetBlue — Select your departing flight"
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
              <div className="mb-4 pb-4">
                <div className="mb-10 flex flex-wrap gap-x-16 gap-y-4">
                  <div>
                    <p className="mb-1 text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground/40">Role</p>
                    <p className="text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground">Design Lead</p>
                  </div>
                  <div>
                    <p className="mb-1 text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground/40">Squad</p>
                    <p className="text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground">5 initiatives</p>
                  </div>
                  <div>
                    <p className="mb-1 text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground/40">Team</p>
                    <p className="text-[12px] font-semibold uppercase tracking-[-0.12px] text-foreground">Product Owners. Work produced at Big Spaceship.</p>
                  </div>
                </div>
                <h1 className="mb-6 font-(family-name:--font-body) text-[28px] font-semibold leading-[1.2] tracking-[-0.8px] text-foreground md:text-[40px]">
                  JetBlue
                </h1>
                <p className="max-w-[700px] text-[18px] leading-[1.4] text-foreground/50">
                  Born in 1999, JetBlue is a global, award-winning travel company.
                </p>
              </div>

              {/* 01. The challenge */}
              <div id="challenge" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  01. The challenge
                </p>
                <p className="max-w-[700px] text-[18px] leading-[1.4] text-foreground/50">
                  To redesign the customer end-to-end booking experience online. Implement responsive web design and e-commerce best practices. Reinventing how customers purchase travel, by reducing the number of decisions.
                </p>
                <p className="mt-5 max-w-[700px] text-[18px] leading-[1.4] font-medium text-foreground">
                  Business value: To increase booking conversion.
                </p>
                <div className="mt-12 flex flex-col gap-6">
                  <img src="/images/jetblue/photoshoot.png" alt="JetBlue passengers on a flight" className="w-full rounded-2xl object-cover" />
                  <img src="/images/jetblue/areas.png" alt="JetBlue booking flow areas and drop-off rates" className="w-full rounded-2xl object-cover bg-white" />
                  <img src="/images/jetblue/ds.png" alt="JetBlue app screens" className="w-full rounded-2xl object-cover" />
                </div>
              </div>

              {/* 02. Metrics of success and impact */}
              <div id="metrics" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  02. Metrics of success and impact
                </p>
                <div className="mt-8 flex flex-col gap-[10px] sm:flex-row">
                  {[
                    { headline: "Increase booking conversion" },
                    { headline: "Decrease in drop-off after search" },
                    { headline: "Scalable system" },
                    { headline: "High engagement for Trueblue", sub: "(Loyalty Program)" },
                  ].map((stat) => (
                    <div
                      key={stat.headline}
                      className="flex flex-1 flex-col items-center justify-center rounded-2xl p-10 text-center"
                      style={{ backgroundColor: "#00205c" }}
                    >
                      <p className="text-[24px] font-medium leading-[1.2] tracking-[-0.64px] md:text-[32px]" style={{ color: "#ff6a00" }}>
                        {stat.headline}
                      </p>
                      {stat.sub && (
                        <p className="mt-1 text-[14px] leading-[1.2]" style={{ color: "#ff6a00" }}>
                          {stat.sub}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 03. Personas */}
              <div id="personas" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  03. Personas
                </p>
                <p className="mt-8 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                  The project was seen through the lens of 3 different personas.
                  Design decisions were based on their motivations to help
                  personalize the experience.
                </p>
                <div className="mt-10 flex flex-col gap-[24px] sm:flex-row">
                  {[
                    { src: "/images/jetblue/persona-marvin.png", alt: "Marvin — Never flown JetBlue" },
                    { src: "/images/jetblue/persona-jeanine.png", alt: "Jeanine — Loyalist planning family vacations" },
                    { src: "/images/jetblue/persona-hank.png", alt: "Hank — Mosaic Member" },
                  ].map((p) => (
                    <div
                      key={p.alt}
                      className="flex flex-1 items-center justify-center rounded-2xl bg-white p-10"
                    >
                      <img src={p.src} alt={p.alt} className="h-[245px] w-[185px] object-contain" />
                    </div>
                  ))}
                </div>
              </div>

              {/* 04. Reimagine flight results */}
              <div id="reimagine" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  04. Reimagine flight results
                </p>
                <p className="mt-8 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                  Flight results was optimized to include overall UX best practices. Through research and observing recorded videos of customers using the platform (Full story) we were able to get more insight and create a streamlined experience. Below is the legacy system and some highlighted pain points.
                </p>
                <div className="mt-10">
                  <img
                    src="/images/jetblue/reimagine-flight-results.png"
                    alt="JetBlue reimagined flight results UI"
                    className="w-full rounded-2xl object-cover"
                  />
                </div>
              </div>

              {/* 05. Design concepts */}
              <div id="concepts" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  05. Design concepts
                </p>
                <p className="mt-8 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                  Users could enter through the homepage or enter through an OTA
                  (online travel agency, Kayak, Google Flights).
                </p>

                <div className="mt-6 rounded-2xl bg-white p-10">
                  <img
                    src="/images/jetblue/flow-diagram.png"
                    alt="JetBlue booking flow diagram"
                    className="w-full object-contain"
                  />
                </div>

                <div className="mt-6 flex flex-col gap-[24px] sm:flex-row">
                  {[
                    { src: "/images/jetblue/concept-accordion.png", label: "Classic accordion" },
                    { src: "/images/jetblue/concept-filter-nav.png", label: "Filter navigation" },
                  ].map((c) => (
                    <div key={c.label} className="flex flex-1 flex-col gap-[10px]">
                      <div className="flex flex-1 items-center justify-center rounded-2xl bg-white p-10">
                        <img src={c.src} alt={c.label} className="h-[396px] w-[240px] object-contain" />
                      </div>
                      <p className="text-[14px] font-semibold leading-[1.2] text-foreground">{c.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 06. Insights from user testing */}
              <div id="testing" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  06. Insights from user testing
                </p>

                <div className="mt-8 max-w-[800px]">
                  <p className="mb-8 text-[22px] font-bold leading-[1.3] tracking-[-0.4px] text-foreground md:text-[26px]">
                    12 qualitative and 50 quantitative mobile first tests were conducted to learn which of the two UX flows were the most usable for customers. We wanted to learn:
                  </p>

                  <ul className="mb-8 flex flex-col gap-3">
                    {[
                      "Can users easily distinguish between fare classes (Blue Basic, Blue, Blue Extra, Mint)?",
                      "Do the fare details clearly communicate benefits and inclusions?",
                      "Do users have enough context to choose the right fare confidently?",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-[6px] shrink-0 text-foreground/50">·</span>
                        <span className="text-[18px] leading-[1.4] text-foreground/50">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mb-4 text-[18px] font-bold leading-[1.4] text-foreground">Key Findings:</p>

                  <ul className="flex flex-col gap-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-[6px] shrink-0 text-foreground/50">·</span>
                      <span className="text-[18px] leading-[1.4] text-foreground/50"><strong className="font-bold text-foreground">Filter navigation</strong> was the preferred design direction.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-[6px] shrink-0 text-foreground/50">·</span>
                      <span className="text-[18px] leading-[1.4] text-foreground/50">It allowed users to <strong className="font-bold text-foreground">compare fares side by side</strong> and understand price differences quickly.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-[6px] shrink-0 text-foreground/50">·</span>
                      <span className="text-[18px] leading-[1.4] text-foreground/50">Users found it easier to <strong className="font-bold text-foreground">stay oriented</strong> and explore fares in context.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-[6px] shrink-0 text-foreground/50">·</span>
                      <span className="text-[18px] leading-[1.4] text-foreground/50">Described as <strong className="font-bold text-foreground">&ldquo;clean,&rdquo; &ldquo;concise,&rdquo; &ldquo;easy to navigate,&rdquo; and &ldquo;efficient.&rdquo;</strong></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 07. Final solution */}
              <div id="solution" className="scroll-mt-10 pb-16 md:pb-28">
                <p className="mb-6 text-[20px] font-normal leading-[1.2] tracking-[-0.56px] text-foreground md:text-[28px]">
                  07. Final solution
                </p>
                <p className="mt-8 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                  Filter navigation was the preferred UX design direction among
                  users.
                </p>

                <div className="mt-6 max-w-[800px]">
                  <p className="mb-4 text-[18px] font-semibold leading-[1.4] tracking-[-0.18px] text-foreground">
                    Flight Results UX improvements
                  </p>
                  <ol className="flex flex-col gap-0 pl-6 list-decimal">
                    {[
                      "Persistent Booker - Allows users to access and change flights quickly and easily within the flow",
                      "Hero Marquee - Visual interest / branded moment",
                      "Filter navigation (Filter panel) - From price / lowest price allows users to compare fares and choose what's right for them",
                      "Value props for fare class - explanation allowing users to know what class they are on",
                      "Flight card details - We streamlined content and flight information easier to read and implemented, Flight tag recommendations",
                      "Fare upsells - Mint mode. A module to get users to upgrade and spend more!",
                    ].map((item) => (
                      <li key={item} className="text-[18px] leading-[1.4] tracking-[-0.18px] text-foreground/50">
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-6 rounded-2xl bg-white p-10">
                  <img
                    src="/images/jetblue/solution-desktop.png"
                    alt="JetBlue final solution — desktop flight results"
                    className="w-full object-contain"
                  />
                </div>

                <div className="mt-6 flex flex-col gap-[24px] sm:flex-row">
                  <div className="flex h-[464px] shrink-0 items-start justify-center rounded-2xl bg-white p-10 sm:w-[30%]">
                    <img
                      src="/images/jetblue/solution-phone.gif"
                      alt="JetBlue filter navigation — animated phone demo"
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <div className="flex flex-1 items-center justify-center rounded-2xl bg-white p-10">
                    <img
                      src="/images/jetblue/solution-wireflow.png"
                      alt="JetBlue booking flow wireframes"
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
                <p className="mt-2 max-w-[800px] text-[18px] leading-[1.4] text-foreground/50">
                  This concept let users manually prioritize and rearrange withdrawal accounts via drag-and-drop. If users understand the value of an optimized withdrawal order, they&rsquo;ll be more likely to upgrade or renew.
                </p>
                <div className="mt-12 flex flex-col gap-[24px] sm:flex-row">
                  <div className="flex flex-1 items-center justify-center rounded-2xl p-10" style={{ backgroundColor: "#9e9e9e" }}>
                    <img
                      src="/images/jetblue/parallel-shopping-cart.png"
                      alt="JetBlue shopping cart"
                      className="w-full max-w-[479px] object-contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-center rounded-2xl p-10 text-center" style={{ backgroundColor: "#f7f7f7" }}>
                    <p className="text-[32px] font-medium leading-[1.2] tracking-[-0.64px]" style={{ color: "#0f0e0e" }}>
                      Shopping cart
                    </p>
                    <p className="mt-5 text-[28px] font-normal leading-[1.2] tracking-[-0.56px]" style={{ color: "#0f0e0e" }}>
                      Makes it easy for users to book now or save for later.
                    </p>
                  </div>
                </div>

                <div className="mt-[24px] flex flex-col gap-[24px] sm:flex-row">
                  <div className="flex flex-1 flex-col items-center justify-center rounded-2xl p-10 text-center" style={{ backgroundColor: "#f7f7f7" }}>
                    <p className="text-[32px] font-medium leading-[1.2] tracking-[-0.64px]" style={{ color: "#0f0e0e" }}>
                      Checkout
                    </p>
                    <p className="mt-5 text-[28px] font-normal leading-[1.2] tracking-[-0.56px]" style={{ color: "#0f0e0e" }}>
                      A more seamless path to completion. Reducing cognitive load minimized friction and improved recognition, leading to fewer drop-offs and higher conversion.
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center rounded-2xl p-10" style={{ backgroundColor: "#9e9e9e" }}>
                    <img
                      src="/images/jetblue/parallel-checkout.png"
                      alt="JetBlue checkout"
                      className="w-full max-w-[230px] object-contain"
                    />
                  </div>
                </div>

                <div className="mt-[24px] flex flex-col gap-[24px] sm:flex-row">
                  <div className="flex flex-1 items-center justify-center rounded-2xl p-10" style={{ backgroundColor: "#9e9e9e" }}>
                    <img
                      src="/images/jetblue/parallel-seat-selection.png"
                      alt="JetBlue seat selection"
                      className="w-full max-w-[458px] object-contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-center rounded-2xl p-10 text-center" style={{ backgroundColor: "#f7f7f7" }}>
                    <p className="text-[32px] font-medium leading-[1.2] tracking-[-0.64px]" style={{ color: "#0f0e0e" }}>
                      Seat selection
                    </p>
                    <p className="mt-5 text-[28px] font-normal leading-[1.2] tracking-[-0.56px]" style={{ color: "#0f0e0e" }}>
                      An immersive way to select your seats that upsells that responds as the customer scrolls through different segments.
                    </p>
                  </div>
                </div>

                <div className="mt-[24px] flex flex-col gap-[24px] sm:flex-row">
                  <div className="flex flex-1 flex-col items-center justify-center rounded-2xl p-10 text-center" style={{ backgroundColor: "#f7f7f7" }}>
                    <p className="text-[32px] font-medium leading-[1.2] tracking-[-0.64px]" style={{ color: "#0f0e0e" }}>
                      Payment and Confirmation
                    </p>
                    <p className="mt-5 text-[28px] font-normal leading-[1.2] tracking-[-0.56px]" style={{ color: "#0f0e0e" }}>
                      Enables JetBlue card upsells, flexible payments, and travel credit use—reinforcing reward and trip control in one place.
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center rounded-2xl p-10" style={{ backgroundColor: "#9e9e9e" }}>
                    <img
                      src="/images/jetblue/parallel-payment.png"
                      alt="JetBlue payment and confirmation"
                      className="w-full max-w-[445px] object-contain"
                    />
                  </div>
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
    <Link href="/work/ubs" className="block">
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
      <img src="/images/ubs-next-logo.png" alt="UBS" className="h-[80px] w-[80px] flex-shrink-0 rounded-2xl object-contain bg-white" />
      <span className="flex-shrink-0 font-(family-name:--font-display) text-[80px] font-medium uppercase leading-none tracking-tight text-foreground md:text-[120px]">
        NEXT
      </span>
    </>
  );
}
