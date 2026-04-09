import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "JetBlue — Cez Corpus" };

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const sections = [
  { id: "challenge", label: "01.  The challenge" },
  { id: "metrics", label: "02.  Metrics of success" },
  { id: "personas", label: "03.  Personas" },
  { id: "legacy-audit", label: "04.  Legacy audit" },
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
      <InfoSection />
      <ContentSection />
      <NextSection />
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
            <div className="aspect-[1704/864] w-full overflow-hidden rounded-3xl bg-jetblue-blue/20" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Info                                                                */
/* ------------------------------------------------------------------ */

function InfoSection() {
  return (
    <section className="pt-20">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          <div className="w-(--spacing-sidebar) shrink-0" />
          <div className="flex-1">
            <h1 className="font-(family-name:--font-display) text-display-lg font-medium uppercase leading-none tracking-tight">
              JetBlue
            </h1>

            <p className="mt-6 max-w-[720px] text-body-lg text-white/50">
              Born in 1999, JetBlue is a global, award-winning travel company.
            </p>

            <div className="mt-16 flex gap-20">
              <div>
                <p className="text-body-sm font-semibold uppercase tracking-wide text-white/40">
                  Role
                </p>
                <p className="mt-1 text-body-sm text-foreground">
                  Design Lead
                </p>
              </div>
              <div>
                <p className="text-body-sm font-semibold uppercase tracking-wide text-white/40">
                  Squad
                </p>
                <p className="mt-1 text-body-sm text-foreground">
                  5 initiatives
                </p>
              </div>
              <div>
                <p className="text-body-sm font-semibold uppercase tracking-wide text-white/40">
                  Team
                </p>
                <p className="mt-1 max-w-[400px] text-body-sm text-foreground">
                  Product Owners. Work produced at Big Spaceship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Content                                                             */
/* ------------------------------------------------------------------ */

function ContentSection() {
  return (
    <section className="pt-20">
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
              {/* 01. The challenge */}
              <div id="challenge" className="scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  Redesigning JetBlue booking
                </h2>
                <p className="mt-1 text-body-sm text-white/40">
                  01. The challenge
                </p>
                <p className="mt-8 max-w-[800px] text-body text-white/50">
                  Redesign the booking experience to reduce the number of
                  decisions and friction in the flow.
                </p>
                <p className="mt-5 max-w-[800px] text-body font-semibold text-foreground">
                  Business value: To increase booking conversion.
                </p>
                {/* Image placeholder */}
                <div className="mt-12 aspect-[16/9] w-full rounded-2xl bg-jetblue-blue/10" />
              </div>

              {/* 02. Metrics of success and impact */}
              <div id="metrics" className="mt-[120px] scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  02. Metrics of success and impact
                </h2>
                <div className="mt-8 grid grid-cols-3 gap-6">
                  {[
                    "Conversion for Trueblue (Loyalty Program)",
                    "Decrease in drop-off after search",
                    "Scalable system",
                  ].map((stat) => (
                    <div
                      key={stat}
                      className="rounded-2xl bg-jetblue-blue p-8"
                    >
                      <p className="text-body font-medium text-white">
                        {stat}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 03. Personas */}
              <div id="personas" className="mt-[120px] scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  03. Personas
                </h2>
                <p className="mt-8 max-w-[800px] text-body text-white/50">
                  The project was seen through the lens of 3 different personas.
                  Design decisions were based on their motivations to help
                  personalize the experience.
                </p>
                {/* Persona cards image placeholder */}
                <div className="mt-12 aspect-[16/9] w-full rounded-2xl bg-jetblue-blue/10" />
              </div>

              {/* 04. Legacy audit */}
              <div id="legacy-audit" className="mt-[120px] scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  04. Legacy audit
                </h2>
                <p className="mt-8 max-w-[800px] text-body text-white/50">
                  In order to redesign the experience, I first needed to audit
                  the existing system to create a streamlined experience. Below
                  is the legacy system and some highlighted painpoints.
                </p>
                {/* Legacy screenshots image placeholder */}
                <div className="mt-12 aspect-[16/9] w-full rounded-2xl bg-jetblue-blue/10" />
              </div>

              {/* 05. Design concepts */}
              <div id="concepts" className="mt-[120px] scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  05. Design concepts
                </h2>
                <p className="mt-8 max-w-[800px] text-body text-white/50">
                  Users could enter through the homepage or enter through an OTA
                  (online travel agency, Kayak, Google Flights).
                </p>

                {/* Concept A */}
                <div className="mt-10">
                  <h3 className="text-body font-semibold text-foreground">
                    Classic accordion approach
                  </h3>
                  <div className="mt-6 aspect-[16/9] w-full rounded-2xl bg-jetblue-blue/10" />
                </div>

                {/* Concept B */}
                <div className="mt-10">
                  <h3 className="text-body font-semibold text-foreground">
                    Filter navigation approach
                  </h3>
                  <div className="mt-6 aspect-[16/9] w-full rounded-2xl bg-jetblue-blue/10" />
                </div>
              </div>

              {/* 06. Insights from user testing */}
              <div id="testing" className="mt-[120px] scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  06. Insights from user testing
                </h2>

                <div className="mt-8 max-w-[800px]">
                  <p className="mb-4 text-body font-semibold text-foreground">
                    Key findings:
                  </p>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Can users easily distinguish between fare classes (Blue Basic, Blue, Blue Extra, Mint)?",
                      "Do the fare details clearly communicate benefits and inclusions?",
                      "Do users have enough context to choose the right fare confidently?",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-jetblue-blue" />
                        <span className="text-body text-white/50">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 max-w-[800px] rounded-2xl border-l-4 border-jetblue-blue bg-white/5 p-8">
                  <p className="text-body text-white/50">
                    Filter navigation was the preferred direction. Users
                    described it as &ldquo;clean, concise, easy to navigate, and
                    efficient.&rdquo;
                  </p>
                </div>
              </div>

              {/* 07. Final solution */}
              <div id="solution" className="mt-[120px] scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  07. Final solution
                </h2>
                <p className="mt-8 max-w-[800px] text-body text-white/50">
                  Filter navigation was the preferred UX design direction among
                  users.
                </p>

                <ul className="mt-6 flex max-w-[800px] flex-col gap-4">
                  {[
                    {
                      title: "Persistent Booker",
                      desc: "Allows users to access and change flights quickly and easily within the flow.",
                    },
                    {
                      title: "Hero Marquee",
                      desc: "Visual interest / branded moment.",
                    },
                    {
                      title: "Flight tag recommendations",
                      desc: "",
                    },
                    {
                      title: "Fare upsells - Mint mode",
                      desc: "A module to get users to upgrade and spend more!",
                    },
                  ].map((feature) => (
                    <li key={feature.title} className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-jetblue-blue" />
                      <span className="text-body text-white/50">
                        <span className="font-semibold text-foreground">
                          {feature.title}
                        </span>
                        {feature.desc && ` - ${feature.desc}`}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Final solution image placeholder */}
                <div className="mt-12 aspect-[16/9] w-full rounded-2xl bg-jetblue-blue/10" />
              </div>

              {/* 08. Parallel work streams */}
              <div id="parallel" className="mt-[120px] scroll-mt-10">
                <h2 className="text-body-lg font-medium text-foreground">
                  08. Parallel work streams
                </h2>
                <div className="mt-12 grid grid-cols-2 gap-6">
                  {[
                    {
                      title: "Shopping cart",
                      description: "Now or save for later.",
                    },
                    {
                      title: "Checkout",
                      description: "Conversion.",
                    },
                    {
                      title: "Seat selection",
                      description: "Different segments.",
                    },
                    {
                      title: "Payment and Confirmation",
                      description: "And trip control in one place.",
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
                      <div className="mt-6 aspect-[4/3] w-full rounded-xl bg-jetblue-blue/10" />
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

function NextSection() {
  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="flex">
          <div className="w-(--spacing-sidebar) shrink-0" />
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-6">
              {[
                {
                  slug: "ubs",
                  label: "UBS",
                  bg: "bg-[#e8cfc0]",
                  dark: true,
                },
                {
                  slug: "kidventure-hub",
                  label: "Kidventure Hub",
                  bg: "bg-kidventure-green",
                  dark: true,
                },
                {
                  slug: "boldin-withdrawal-order",
                  label: "Boldin",
                  bg: "bg-boldin-teal",
                  dark: false,
                },
              ].map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group block"
                >
                  <div
                    className={`${project.bg} flex flex-col justify-between overflow-hidden rounded-2xl p-8 ${
                      project.dark ? "text-background" : "text-foreground"
                    }`}
                    style={{ minHeight: 280 }}
                  >
                    <p className="font-(family-name:--font-display) text-display-sm font-medium uppercase leading-none tracking-tight transition-opacity group-hover:opacity-70">
                      Next
                    </p>
                    <p
                      className={`text-body-sm font-medium uppercase tracking-wide ${
                        project.dark
                          ? "text-background/60"
                          : "text-foreground/60"
                      }`}
                    >
                      {project.label}
                    </p>
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
