"use client";

import { useEffect, useState, useRef } from "react";

interface SpotlightConfig {
  size: number;
  gradient: string;
  blur: string;
  zIndex: number;
  mixBlendMode: React.CSSProperties["mixBlendMode"];
  opacity: number;
}

const config: SpotlightConfig = {
  size: 700,
  gradient: "radial-gradient(circle, rgba(57, 255, 20, 0.18) 0%, rgba(57, 255, 20, 0.015) 60%, transparent 80%)",
  blur: "35px",
  zIndex: -5, // Behind text/cards, but overlays grid lines
  mixBlendMode: "normal",
  opacity: 0.8,
};

export default function MouseFollower() {
  const [isMounted, setIsMounted] = useState(false);

  const followerRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const initialized = useRef(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      
      if (!initialized.current) {
        currentPos.current = { x: e.clientX, y: e.clientY };
        initialized.current = true;
        
        // Show immediately and snap to cursor to prevent long animation from (-1000, -1000)
        if (followerRef.current) {
          followerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
          followerRef.current.style.opacity = config.opacity.toString();
        }
      }
    };

    const handleMouseLeave = () => {
      if (followerRef.current) {
        followerRef.current.style.opacity = "0";
      }
    };

    const handleMouseEnter = () => {
      if (followerRef.current) {
        followerRef.current.style.opacity = config.opacity.toString();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    let animationFrameId: number;
    const updatePosition = () => {
      if (!initialized.current) {
        animationFrameId = requestAnimationFrame(updatePosition);
        return;
      }

      // Buttery smooth easing spring factor
      const easing = 0.08;
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;

      currentPos.current.x += dx * easing;
      currentPos.current.y += dy * easing;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div
      ref={followerRef}
      className="mouse-follower hidden md:block"
      style={{
        position: "fixed",
        width: `${config.size}px`,
        height: `${config.size}px`,
        background: config.gradient,
        filter: config.blur !== "0px" ? `blur(${config.blur})` : undefined,
        zIndex: config.zIndex,
        mixBlendMode: config.mixBlendMode,
        pointerEvents: "none",
        left: 0,
        top: 0,
      }}
    />
  );
}
