import type { Metadata } from "next";
import Footer from "../../components/Footer";
import SetHeaderTheme from "../../components/SetHeaderTheme";
import { ImageCursorTrail } from "@/components/ui/image-cursor-trail";

export const metadata: Metadata = { title: "Archive — Cez Corpus" };

const archiveImages = [
  "/archive/Cez-Design-Archive-2006-2012.png",
  "/archive/Cez-Design-Archive-2006-2012 (1).png",
  "/archive/Cez-Design-Archive-2006-2012 (2).png",
  "/archive/Poster-1500px-300dpi-Parklife2006.jpg",
  "/archive/Poster-1500px-300dpi-SFF.jpg",
  "/archive/Poster-1500px-300dpi-Shorething.jpg",
  "/archive/MSG-1500px-Menu2.jpg",
  "/archive/MSG-1500px-Menu4.jpg",
  "/archive/Project-Thumbs-Merivale.jpg",
  "/archive/DCLK-Thumb-FINAL.jpg",
  "/archive/Desktop-Explore-Gridview-A Copy.jpg",
  "/archive/Desktop-Results-Voting Closed.jpg",
  "/archive/NB-2.jpg",
  "/archive/seymour_2.jpg",
  "/archive/Pacha girls 1.jpg",
  "/archive/Payflex-Goal-rev.png",
  "/archive/Payflex-Main2-rev.png",
  "/archive/Isometric-site-app-screenshot-copy 1.png",
];

export default function Archive() {
  return (
    <div className="-mt-20 bg-white">
      <SetHeaderTheme theme="light" />
      <ImageCursorTrail
        items={archiveImages}
        maxNumberOfImages={5}
        distance={20}
        fadeAnimation
        imgClass="w-32 h-40 sm:w-44 sm:h-56"
        className="h-[700px] rounded-none bg-white pt-20"
      >
        <div className="relative z-10 text-center">
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
      </ImageCursorTrail>
      <Footer light />
    </div>
  );
}
