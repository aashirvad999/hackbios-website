"use client";

import React, { useEffect, useState, useRef } from "react";
import { Terminal, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function KonamiEgg() {
  const [isActive, setIsActive] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const keySequence = useRef<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Listener for Konami code
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Allow escape to turn off Matrix mode
      if (e.key === "Escape" && isActive) {
        setIsActive(false);
        document.documentElement.classList.remove("matrix-mode");
        return;
      }

      const key = e.key.toLowerCase();
      const codeKey = e.key; // preserve Arrow naming

      // Push key. If arrow key use full key name, otherwise lowercase character name
      const parsedKey = codeKey.startsWith("Arrow") ? codeKey : key;
      keySequence.current.push(parsedKey);
      
      // Limit sequence memory to Konami Code length
      if (keySequence.current.length > konamiCode.length) {
        keySequence.current.shift();
      }

      // Check match
      const isMatch = konamiCode.every(
        (val, index) => val === keySequence.current[index]
      );

      if (isMatch) {
        const nextState = !isActive;
        setIsActive(nextState);
        keySequence.current = []; // Reset sequence

        if (nextState) {
          document.documentElement.classList.add("matrix-mode");
          setShowToast(true);
          // Play a retro click or beep if supported
          try {
            const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
            const context = new AudioContextClass();
            const osc = context.createOscillator();
            const gain = context.createGain();
            osc.connect(gain);
            gain.connect(context.destination);
            osc.frequency.setValueAtTime(800, context.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1200, context.currentTime + 0.15);
            gain.gain.setValueAtTime(0.1, context.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.15);
            osc.start();
            osc.stop(context.currentTime + 0.15);
          } catch {
            // Audio context not supported or user gesture required
          }
          // Hide toast after 4s
          setTimeout(() => setShowToast(false), 4000);
        } else {
          document.documentElement.classList.remove("matrix-mode");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isActive]);

  // Matrix Rain canvas loop
  useEffect(() => {
    if (!isActive) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const matrixChars = "01010101ABCDEFGHIJKLMNOPQRSTUVWXYZｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ".split("");
    const fontSize = 15;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(5, 5, 5, 0.055)"; // Leave trails
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#39ff14";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animFrameId = requestAnimationFrame(draw);
    };

    animFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animFrameId);
    };
  }, [isActive]);

  return (
    <>
      {/* Matrix Canvas background */}
      {isActive && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-[-2] opacity-35 select-none transition-opacity duration-1000"
        />
      )}

      {/* Slide down Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[999999] w-[90%] max-w-sm"
          >
            <div className="glass-panel border border-primary-container p-4 rounded-xl shadow-[0_0_30px_rgba(57,255,20,0.2)] flex items-center justify-between gap-3 text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-container/10 border border-primary-container/30 flex items-center justify-center text-primary-container shrink-0">
                  <Terminal size={16} />
                </div>
                <div>
                  <h5 className="font-space-grotesk font-bold text-xs uppercase text-primary-container tracking-wider">
                    Matrix Mode Initialized
                  </h5>
                  <p className="text-[10px] text-on-surface-variant font-jetbrains-mono mt-0.5">
                    &quot;Welcome, Builder 🚀&quot;
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowToast(false)}
                className="text-on-surface-variant hover:text-white transition-colors cursor-pointer"
              >
                <X size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
