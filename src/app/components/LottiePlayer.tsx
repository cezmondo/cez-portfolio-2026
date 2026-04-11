"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function LottiePlayer({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const [animationData, setAnimationData] = useState<unknown>(null);

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then(setAnimationData);
  }, [src]);

  if (!animationData) return null;

  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      className={className}
    />
  );
}
