"use client";

import { useEffect, useState } from "react";

export default function AuroraBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[-2] overflow-hidden opacity-[0.03] md:opacity-[0.04] select-none">
      <div 
        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_50%_50%,#39ff14_0%,transparent_55%)] animate-aurora" 
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
