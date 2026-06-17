"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-2xl bg-surface-container-lowest relative overflow-hidden" id="about">
      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div className="text-center mb-2xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-jetbrains-mono text-xs tracking-[0.2em] text-primary-fixed-dim uppercase"
          >
            Mission Protocol
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-space-grotesk text-headline-lg text-white mt-2"
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-md font-inter"
          >
            HackBios is a premier community for elite developers and visionary builders. We bridge the gap between curiosity and mastery by providing the resources, network, and challenges needed to engineer tomorrow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2xl items-center">
          <div className="space-y-xl">
            <div className="grid grid-cols-3 gap-sm md:gap-lg @container">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-sm md:p-md bg-surface-container-high rounded-xl border border-outline-variant/30 text-center"
              >
                <div className="font-space-grotesk text-[clamp(1.25rem,7cqw,2rem)] text-primary-fixed-dim font-semibold">500+</div>
                <div className="font-jetbrains-mono text-xs text-on-surface-variant uppercase mt-1">Members</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-sm md:p-md bg-surface-container-high rounded-xl border border-outline-variant/30 text-center"
              >
                <div className="font-space-grotesk text-[clamp(1.25rem,7cqw,2rem)] text-primary-fixed-dim font-semibold">20+</div>
                <div className="font-jetbrains-mono text-xs text-on-surface-variant uppercase mt-1">Events</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-sm md:p-md bg-surface-container-high rounded-xl border border-outline-variant/30 text-center"
              >
                <div className="font-space-grotesk text-[clamp(1.25rem,7cqw,2rem)] text-primary-fixed-dim font-semibold">1k+</div>
                <div className="font-jetbrains-mono text-xs text-on-surface-variant uppercase mt-1">Builders</div>
              </motion.div>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-on-surface-variant text-body-md font-inter leading-relaxed"
            >
              Our mission is to foster a culture of radical innovation. We believe that by bringing together the brightest minds in hardware and software, we can solve the world's most complex technical challenges.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square md:aspect-auto h-[400px] rounded-2xl overflow-hidden border border-outline-variant/30 group"
          >
            {/* Native img avoids external Domain whitelisting constraints in NextJS */}
            <img
              alt="Advanced Tech Hub"
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuARF6xkIblPO4zNnUy_7kP57fH832iuR3zzqvNgwtWT1bZGndTfRmXvIaQrE1rQzNF4CpagKjjt0Q5dEOtDkeDKlYQffM9EbXaIytGUAGY-c82tYnCOfRCMOSP9NhfF7TLtT7RDRbq6hZM5MYa1H8G1-8Yzym0GPhfW2FKW4HVpgqmBZomABhShGaEXYFcX1OEWZt6AiNBgc1Oq0uNUwNbcDRGICEkPbx68LO0NslWbeOD9P6yjS6h5Lpdy2VmmDhNfMgXVaaAog"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
