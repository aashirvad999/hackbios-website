"use client";

import React, { useRef, useState, useEffect } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function InteractiveCard({ children, className = "" }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Respect accessibility settings
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // X position inside element
    const y = e.clientY - rect.top;  // Y position inside element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Small tilt limits (max 5 degrees)
    const maxTilt = 5;
    const tiltX = ((centerY - y) / centerY) * maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`transition-all ease-out ${className}`}
      style={{
        transform: !reducedMotion && isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.015, 1.015, 1.015)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        boxShadow: isHovered
          ? "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(57, 255, 20, 0.12)"
          : "none",
        borderColor: isHovered ? "rgba(57, 255, 20, 0.35)" : undefined,
        transition: isHovered ? "border-color 0.3s ease, box-shadow 0.3s ease" : "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}
