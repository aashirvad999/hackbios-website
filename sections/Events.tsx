"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const eventsList = [
  {
    title: "Hackathons",
    desc: "24-hour sprints to build the impossible. From AI to Bio-hacking.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmKDa2csFatMTobXivq7zVNyBUi90HT7KS5j06ffFhyjr6GYanDPbQUJ6P8yZqPmh92rmTlSDs5LXE_sqWWLPvrPfIZnT3tR1_WGgBs7p-9XiGAhZTEgPsGvNKF4YS6NXD1tY5pfotH1LRgzFXJC56J6zssMhdo7H66wupB7xPXRkevR5uh46JWN1Ryky5-AYz0aP8uQGzFUXqQrsA8w4PWhf4GXrPro3ZCGv6nuD8OFCgH_CSeVSzTF-5powOLQRkJMyZ_3bfOy4",
    link: "/hackathon-registration",
  },
  {
    title: "Workshops",
    desc: "Deep-dive technical sessions led by industry pioneers.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCr5DwlMsuLsWdxvSMN6PNG6dpJy__CARQsb4qTYneSHadtsfqxhH6BR8RSbLTwWu01W6Y8-TOwXsE3qnbS6-tna4ytFyet554P3bOLdsXCGeJFA92BHSvQTu3Ty-PGGcHxnX6Xkcow938_OQ7QWVms5ZS6egGFL3BGd70UEVwjkwiv5VZAqfAMykevpkoYc2n83DZJwg8_gW4koFpPgrktBiUmbsYcK4FW0--zS_9mNFHiX5bbezc1fMFVctl68gaAZWK2MuTg8B0",
  },
  {
    title: "Competitions",
    desc: "Competitive programming and CTF challenges for the elite.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9m0sxyPkDN3W3_E5Bi13-zj7FmdG6yWNeFtHYkVZar_7cr3mu7F_TkWSSio-IpjDR6eD9SEAVPK20zZMU6acXGTnM_mm7ubtoWPQMSxJvTGYtFyOo9Qfsb4erBheuCnRVsl6dizZLGs5N_eSyJhnOfJZ6AwO4JSE0L_gTKSOGcdlvrMwbs0PzFuowm_4a2mcMGrhyhYhD1lch8cObr3ZpIZNR_W8h-J_s3KOdUvyZJ2n3adWgm6M1O-4mmrQM6JWj4PHXD_H1HCM",
  },
];

export default function Events() {
  return (
    <section className="py-2xl bg-grid relative" id="events">
      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div className="text-center mb-2xl">
          <span className="font-jetbrains-mono text-xs tracking-[0.2em] text-primary-fixed-dim uppercase">
            Active Nodes
          </span>
          <h2 className="font-space-grotesk text-headline-lg text-white mt-2">
            Building Beyond Limits
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mt-xs font-inter">
            Our roadmap of technical challenges and social gatherings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {eventsList.map((event, idx) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-outline-variant/30 team-card"
            >
              <img
                alt={event.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src={event.image}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-lg flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <h4 className="font-space-grotesk text-headline-sm text-white mb-xs">
                  {event.title}
                </h4>
                <p className="text-on-surface-variant text-sm line-clamp-2 font-inter mb-2">
                  {event.desc}
                </p>
                {event.link ? (
                  <Link
                    className="mt-md w-full bg-primary-container text-black py-2 rounded-lg font-bold text-sm text-center hover:brightness-110 transition-all btn-interact"
                    href={event.link}
                  >
                    Register Now
                  </Link>
                ) : (
                  <div className="h-8" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
