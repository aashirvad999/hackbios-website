"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";

export default function Hero() {
  const phrases = [
    "Engineering the Future",
    "Empowering Builders",
    "Fueling Innovation",
    "Shaping the Future"
  ];
  const [currentText, setCurrentText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIdx];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentPhrase.slice(0, currentText.length + 1));
      }, 85);
    }

    if (!isDeleting && currentText === currentPhrase) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIdx]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden pt-24"
      id="home"
    >
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #111 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Floating Glassmorphic Labels */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute top-[28%] left-[8%] xl:left-[12%] glass-card px-4 py-2 rounded-lg text-xs font-jetbrains-mono text-primary/70 border border-primary/20 neon-glow hidden lg:block z-10"
      >
        Hackathons
      </motion.div>
      
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[25%] right-[10%] xl:right-[15%] glass-card px-4 py-2 rounded-lg text-xs font-jetbrains-mono text-primary/70 border border-primary/20 neon-glow hidden lg:block z-10"
      >
        Innovation
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-[40%] right-[6%] xl:right-[10%] glass-card px-4 py-2 rounded-lg text-xs font-jetbrains-mono text-primary/70 border border-primary/20 neon-glow hidden lg:block z-10"
      >
        Sponsors
      </motion.div>

      <div className="relative z-10 max-w-container-max mx-auto px-gutter text-center">

        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 text-primary-fixed-dim font-jetbrains-mono text-label-caps tracking-[0.2em] uppercase"
        >
          Engineering the Future
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-space-grotesk text-display-xl-mobile md:text-display-xl mb-6 max-w-5xl mx-auto leading-tight text-white font-bold min-h-[3em] md:min-h-[2.4em] flex flex-col justify-center items-center"
        >
          <div className="text-white">HackBios 2026</div>
          <div className="text-primary-container inline-block">
            {currentText}
            <span className="animate-[blink_1s_step-end_infinite] text-primary-container font-normal">_</span>
          </div>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-xl font-inter"
        >
          HackBios is the flagship annual hackathon of our college, bringing together developers, engineers, designers, and technology enthusiasts to collaborate, innovate, and turn ideas into impactful solutions.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-md justify-center items-center mt-6"
        >
          <Magnetic>
            <Link
              href="/hackathon-registration"
              className="bg-primary-container text-black px-6 py-3 rounded-lg font-bold transition-all duration-300 neon-glow btn-interact text-center hover:brightness-110 font-inter text-body-md block"
            >
              Register Now
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href="/sponsor-registration"
              className="border border-primary-fixed-dim bg-[#0c1609]/80 px-6 py-3 rounded-lg text-primary-fixed-dim font-bold transition-all duration-300 neon-glow btn-interact text-center hover:bg-primary-fixed-dim hover:text-black font-inter text-body-md block"
            >
              Become a Sponsor
            </Link>
          </Magnetic>
        </motion.div>
      </div>

      {/* Glow Orbs */}
      <div className="glow-orb w-96 h-96 bg-primary/10 top-1/4 left-1/4" />
      <div className="glow-orb w-[500px] h-[500px] bg-primary-container/5 bottom-0 right-1/4" />
    </section>
  );
}
