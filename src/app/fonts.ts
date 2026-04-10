import localFont from "next/font/local";
import { Instrument_Sans } from "next/font/google";

export const displayFont = localFont({
  src: [
    { path: "./fonts/onsratrial-regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/onsratrial-medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/onsratrial-bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

export const bodyFont = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
