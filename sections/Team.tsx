"use client";

import { motion } from "framer-motion";
import { Link2, Code2 } from "lucide-react";
import InteractiveCard from "@/components/InteractiveCard";

export default function Team() {
  return (
    <section className="py-2xl bg-surface-container-lowest" id="team">
      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div className="text-center mb-2xl">
          <span className="font-jetbrains-mono text-xs tracking-[0.2em] text-primary-fixed-dim uppercase">
            Meet the Team
          </span>
          <h2 className="font-space-grotesk text-headline-lg text-white mt-2">
            Organizers
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mt-xs font-inter">
            The passionate team of students and organizers putting this hackathon together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg justify-center items-center">
          <div className="hidden md:block" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <InteractiveCard className="glass-card rounded-2xl overflow-hidden border border-outline-variant/30 bg-[#0c1609] group">
              <div className="aspect-square relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-container/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  alt="Team Member"
                  className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEBBU6w6imaeuU7yJ3MAe_V8pJNmM3C8IcdaiQj9oox_tI4L9MtCC69UtZ7_gC4_2n3BEmq7rzgJ0ppX3i_GEzpvh9H1RtemCDbLUMT3Fsv8P1Psh-tELB4IciaJcd_98r9S8GCXmYRZh4fBIvvNYAu089Ko-g_ao4F7O1ecKPn7tA4zdZFmu5M9KV8yw5S2mF53dK8RyTc6L6sJjVziF3JSkuT6yL2Ulvoflac4k8ZJezXlJzw0bKYtUWQn_4zmWkG9f0Ad5tOs8"
                  loading="lazy"
                />
                <div className="absolute bottom-4 right-4 flex gap-2 translate-y-12 group-hover:translate-y-0 transition-all duration-300 z-20">
                  <button
                    type="button"
                    aria-label="Link"
                    className="bg-black/60 p-2 rounded-full text-primary cursor-pointer hover:bg-primary hover:text-black transition-all"
                  >
                    <Link2 size={16} />
                  </button>
                  <button
                    type="button"
                    aria-label="Code"
                    className="bg-black/60 p-2 rounded-full text-primary cursor-pointer hover:bg-primary hover:text-black transition-all"
                  >
                    <Code2 size={16} />
                  </button>
                </div>
              </div>
              <div className="p-lg text-center bg-surface-container/30">
                <h4 className="font-space-grotesk text-headline-sm text-white">Alex Rivera</h4>
              <p className="text-on-surface-variant text-sm font-jetbrains-mono text-label-caps uppercase mt-1">
                Founder &amp; Lead Organizer
              </p>
              </div>
            </InteractiveCard>
          </motion.div>
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
