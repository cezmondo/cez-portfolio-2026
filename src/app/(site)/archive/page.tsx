import type { Metadata } from "next";
import Footer from "../../components/Footer";
import SetHeaderTheme from "../../components/SetHeaderTheme";

export const metadata: Metadata = { title: "Archive — Cez Corpus" };

export default function Archive() {
  return (
    <div className="-mt-20 bg-white">
      <SetHeaderTheme theme="light" />
      <section className="relative overflow-hidden bg-white pt-64 pb-96 text-black">
        <div className="relative mx-auto max-w-(--max-width-content) px-(--spacing-gutter) text-center">
          {/* Date range */}
          <p className="mb-4 text-[28px] font-medium tracking-tight text-black">
            2006 – 2019 <span className="ml-1">&#x21B4;</span>
          </p>

          {/* Giant ARCHIVE title */}
          <h1
            className="font-(family-name:--font-display) font-bold uppercase leading-none tracking-tight text-black"
            style={{ fontSize: "clamp(48px, 7vw, 130px)" }}
          >
            ARCHIVE
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-[18px] leading-[1.4] text-black/60 md:text-[22px]">
            Over a decade of designing products, brands, and campaigns
          </p>
        </div>
      </section>
      <Footer light />
    </div>
  );
}
