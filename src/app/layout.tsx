import type { Metadata } from "next";
import { displayFont, bodyFont } from "./fonts";
import "./globals.css";
import ChatWidget from "./components/ChatWidget";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Cez Corpus — Staff Product Designer",
  description:
    "Portfolio of Cesar 'Cez' Corpus — Staff-Level Product Designer blending AI, product design, and visual craft.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        data-scroll-behavior="smooth"
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        <body className="font-(family-name:--font-body)">
          {children}
          <ChatWidget />
        </body>
      </html>
    </ViewTransitions>
  );
}
