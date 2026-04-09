import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Say G'day — Cez Corpus" };

/* ------------------------------------------------------------------ */
/*  Contact page                                                       */
/* ------------------------------------------------------------------ */

export default function Contact() {
  return (
    <div>
      {/* ========== HERO ========== */}
      <HeroSection />

      {/* ========== CONTACT INFO ========== */}
      <ContactInfoSection />

      {/* ========== LOCATION ========== */}
      <LocationSection />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative pt-48 pb-24">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="pl-(--spacing-sidebar)">
          {/* Label */}
          <p className="mb-6 text-body-sm font-medium uppercase tracking-wider text-foreground-muted">
            Contact <span className="ml-1">&#x21B4;</span>
          </p>

          {/* Display heading */}
          <h1 className="font-(family-name:--font-display) text-display-md font-medium uppercase leading-none tracking-tight lg:text-display-lg">
            Say G&apos;day.
          </h1>

          {/* Intro paragraph */}
          <p className="mt-12 max-w-[560px] text-body-lg text-foreground-muted">
            Whether you have a project in mind, want to collaborate, or just want
            to chat about design — I&apos;d love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact Info Section                                               */
/* ------------------------------------------------------------------ */

function ContactInfoSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="pl-(--spacing-sidebar)">
          {/* Email — prominent */}
          <div className="mb-16">
            <p className="mb-4 text-body-sm font-medium uppercase tracking-wider text-foreground-muted">
              Email
            </p>
            <a
              href="mailto:hello@cesarcorpus.com"
              className="font-(family-name:--font-display) text-display-sm font-medium uppercase tracking-tight transition-colors hover:text-accent-yellow"
            >
              hello@cesarcorpus.com
            </a>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-6">
            <p className="text-body-sm font-medium uppercase tracking-wider text-foreground-muted">
              Connect <span className="ml-1">&#x21B4;</span>
            </p>

            <div className="flex items-center gap-8">
              <Link
                href="https://www.linkedin.com/in/cesarcorpus"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-body-sm font-medium uppercase tracking-wide text-foreground-muted transition-colors hover:text-foreground"
              >
                LinkedIn
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  <path
                    d="M1 7L7 1M7 1H2M7 1V6"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <Link
                href="https://www.instagram.com/cezcorpus"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-body-sm font-medium uppercase tracking-wide text-foreground-muted transition-colors hover:text-foreground"
              >
                Instagram
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  <path
                    d="M1 7L7 1M7 1H2M7 1V6"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Location Section                                                   */
/* ------------------------------------------------------------------ */

function LocationSection() {
  return (
    <section className="relative pb-32 pt-12">
      <div className="mx-auto max-w-(--max-width-content) px-(--spacing-gutter)">
        <div className="pl-(--spacing-sidebar)">
          {/* Divider */}
          <div className="mb-12 border-t border-foreground/10" />

          <p className="text-body text-foreground-muted">
            Currently based in{" "}
            <span className="text-foreground">New York</span>
          </p>
        </div>
      </div>
    </section>
  );
}
