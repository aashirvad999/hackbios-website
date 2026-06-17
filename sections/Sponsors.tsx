"use client";

import { motion } from "framer-motion";

const sponsors = [
  { name: "Cyberdyne Systems", tier: "Platinum", desc: "Automated Systems & Neural Networks" },
  { name: "Stark Industries", tier: "Gold", desc: "Advanced Robotics & Energy" },
  { name: "Tyrell Corp", tier: "Gold", desc: "Genetic Engineering & AI" },
  { name: "Weyland-Yutani", tier: "Silver", desc: "Deep Space Infrastructure" },
  { name: "Umbrella Corp", tier: "Bronze", desc: "Biotechnology & Pharmaceuticals" },
];

export default function Sponsors() {
  return (
    <section className="py-2xl bg-surface-container-lowest/50 border-y border-outline-variant/10 relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div className="text-center mb-xl">
          <span className="font-jetbrains-mono text-xs tracking-[0.2em] text-primary-fixed-dim uppercase">
            Node Partners
          </span>
          <h2 className="font-space-grotesk text-headline-lg text-white mt-4">
            Backed by Industry Pioneers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-md justify-items-center items-center">
          {sponsors.map((sponsor, idx) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="w-full glass-card p-md rounded-xl text-center border border-outline-variant/20 hover:border-primary-fixed-dim/40 hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-all duration-300"
            >
              <div className="font-space-grotesk font-bold text-white text-md tracking-tight group-hover:text-primary-fixed-dim">
                {sponsor.name}
              </div>
              <div className="font-jetbrains-mono text-[10px] uppercase text-primary-fixed-dim/60 mt-1">
                {sponsor.tier}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
