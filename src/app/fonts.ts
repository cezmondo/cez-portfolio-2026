import { Barlow_Condensed, Instrument_Sans } from "next/font/google";

// Display font — Barlow Condensed as stand-in for Onsra TRIAL
// TODO: Replace with next/font/local when Onsra .woff2 files are available
export const displayFont = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const bodyFont = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "600", "700"],
});
