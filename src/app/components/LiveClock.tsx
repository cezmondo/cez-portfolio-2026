"use client";

import { useEffect, useState } from "react";

export default function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const h = (hours % 12 || 12).toString().padStart(2, "0");
      setTime(`${h}:${minutes}:${seconds} ${ampm}`);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div className="inline-flex items-center gap-2.5 rounded-full bg-accent-yellow px-4 py-1.5 text-body-xs font-semibold uppercase tracking-wide text-black">
      <span>Brooklyn [NY] {time}</span>
      <span className="h-2 w-2 rounded-full bg-black" style={{ animation: "flash 1.5s ease-in-out infinite" }} />
    </div>
  );
}
