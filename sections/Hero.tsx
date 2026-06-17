"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
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

      <div className="relative z-10 max-w-container-max mx-auto px-gutter text-center">
        {/* Floating Glassmorphic Labels */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="absolute top-0 left-[-100px] glass-card px-4 py-2 rounded-lg text-xs font-jetbrains-mono text-primary/70 border border-primary/20 neon-glow hidden lg:block"
        >
          Hackathons
        </motion.div>
        
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-10 right-[-80px] glass-card px-4 py-2 rounded-lg text-xs font-jetbrains-mono text-primary/70 border border-primary/20 neon-glow hidden lg:block"
        >
          Innovation
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute top-1/2 right-[-150px] glass-card px-4 py-2 rounded-lg text-xs font-jetbrains-mono text-primary/70 border border-primary/20 neon-glow hidden lg:block"
        >
          Sponsors
        </motion.div>

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
          className="font-space-grotesk text-display-xl-mobile md:text-display-xl mb-6 max-w-5xl mx-auto leading-tight text-white font-bold"
        >
          Empowering <span className="text-primary-container">Builders.</span>
          <br />
          Finding Solutions.
          <br />
          Shaping the Future.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-xl font-inter"
        >
          The search into advanced hardware and software engineering starts here. Join a collective of visionaries building the impossible.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-md justify-center mt-6"
        >
          <Link
            href="/sponsor-registration"
            className="border border-primary-fixed-dim bg-[#0c1609]/80 px-6 py-3 rounded-lg text-primary-fixed-dim font-bold transition-all duration-300 neon-glow btn-interact text-center hover:bg-primary-fixed-dim hover:text-black font-inter text-body-md"
          >
            Become a Sponsor
          </Link>
        </motion.div>
      </div>

      {/* Glow Orbs */}
      <div className="glow-orb w-96 h-96 bg-primary/10 top-1/4 left-1/4" />
      <div className="glow-orb w-[500px] h-[500px] bg-primary-container/5 bottom-0 right-1/4" />
    </section>
  );
}
