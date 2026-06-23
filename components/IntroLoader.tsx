"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootSequence = [
  "HackBios_",
  "Initializing Modules...",
  "Loading Community...",
  "Engineering the Future...",
  "Done.",
];

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [lines, setLines] = useState<string[]>([]);
  const [hasVisited, setHasVisited] = useState(true); // Default to true for SSR safety

  useEffect(() => {
    // Check if the user has already loaded the site in this session
    const visited = sessionStorage.getItem("hackbios_visited");
    if (visited) {
      setHasVisited(true);
      setVisible(false);
      return;
    }

    setHasVisited(false);

    let index = 0;
    const interval = setInterval(() => {
      if (index < bootSequence.length) {
        setLines((prev) => [...prev, bootSequence[index]]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          sessionStorage.setItem("hackbios_visited", "true");
          setVisible(false);
        }, 800); // Hold final text before fading out
      }
    }, 450); // Timing of steps in seconds

    return () => clearInterval(interval);
  }, []);

  if (hasVisited) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 bg-[#050505] z-[999999] flex items-center justify-center font-mono p-6 select-none"
        >
          <div className="w-full max-w-md text-left space-y-2.5">
            {lines.map((line, idx) => {
              const isLast = idx === lines.length - 1;
              const isFirst = idx === 0;
              return (
                <div
                  key={idx}
                  className={`text-sm md:text-base font-jetbrains-mono tracking-wide ${
                    isFirst
                      ? "text-primary-fixed-dim font-bold text-headline-sm mb-4"
                      : "text-on-surface-variant"
                  } ${line === "Done." ? "text-primary-container font-bold" : ""}`}
                >
                  {line}
                  {isLast && line !== "Done." && (
                    <span className="animate-[blink_1s_step-end_infinite] text-primary-container font-bold ml-0.5">_</span>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
