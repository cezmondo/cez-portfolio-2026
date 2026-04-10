"use client";

import Lottie from "lottie-react";

export default function LottiePlayer({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <Lottie
      path={src}
      loop
      autoplay
      className={className}
    />
  );
}
