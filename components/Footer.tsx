"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import packageInfo from "../package.json";
import buildInfo from "./build-info.json";
import Magnetic from "@/components/Magnetic";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    name: "Discord",
    url: "https://discord.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
      </svg>
    ),
  },
  {
    name: "X/Twitter",
    url: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.52 3.545 12 3.545 12 3.545s-7.52 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.868.508 9.388.508 9.388.508s7.52 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Sync registered: ${email}`);
    setEmail("");
  };

  const formatBuildTime = (isoString: string) => {
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return "";

    const day = String(date.getDate()).padStart(2, "0");
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    let rawHours = date.getHours();
    const ampm = rawHours >= 12 ? "PM" : "AM";
    rawHours = rawHours % 12;
    rawHours = rawHours ? rawHours : 12;
    const hours = String(rawHours).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day} ${month} ${year} • ${hours}:${minutes}:${seconds} ${ampm}`;
  };

  const formattedTime = formatBuildTime(buildInfo.timestamp);

  return (
    <footer className="w-full py-xl bg-surface-container-lowest border-t border-outline-variant">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-lg text-left">
        <div className="space-y-md">
          <div className="font-space-grotesk text-headline-sm font-bold text-primary-fixed-dim flex items-center gap-1 cursor-default select-none">
            <span>HackBios</span>
          </div>

          <div className="flex items-center gap-2 py-1 px-2.5 rounded-md bg-[#071105] border border-primary-container/20 w-fit select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-gps shrink-0" />
            <span className="font-jetbrains-mono text-[9px] text-primary-fixed-dim font-bold tracking-wider uppercase">
              SYSTEM STATUS • ONLINE
            </span>
          </div>

          <p className="text-on-surface-variant text-sm font-inter pt-1">
            Engineering the Future. A student-led annual hackathon bringing together builders, innovators, and creators to build the future.
          </p>
          <p className="text-on-surface-variant text-xs font-jetbrains-mono">
            © 2026 HackBios
          </p>
          <div className="mt-md pt-md border-t border-outline-variant/30 space-y-1">
            <div className="font-jetbrains-mono text-xs text-primary-fixed-dim">
              BUILD v{packageInfo.version}
            </div>
            <div className="font-jetbrains-mono text-[10px] text-on-surface-variant/70 uppercase tracking-wider">
              LAST UPDATE • {mounted ? formattedTime : "-- --- ---- • --:--:--"}
            </div>
          </div>
        </div>

        <div className="space-y-sm">
          <h4 className="font-jetbrains-mono text-label-caps text-primary uppercase">
            Resources
          </h4>
          <nav className="flex flex-col gap-2">
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-inter">
              Documentation
            </Link>
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-inter">
              Privacy Policy
            </Link>
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-inter">
              Code of Conduct
            </Link>
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-inter">
              Status
            </Link>
          </nav>
        </div>

        <div className="space-y-sm text-center md:text-left">
          <h4 className="font-jetbrains-mono text-label-caps text-primary uppercase">
            Community
          </h4>
          <div className="flex justify-center md:justify-start mt-md">
            <div className="grid grid-cols-3 gap-3 justify-items-center sm:flex sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
              {socialLinks.map((social) => (
                <Magnetic key={social.name}>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    className="w-10 h-10 rounded-full border border-primary-fixed-dim/20 bg-primary-fixed-dim/5 text-primary-fixed-dim flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 hover:border-primary-fixed-dim/50 hover:bg-primary-fixed-dim/10 hover:text-primary-fixed hover:shadow-[0_0_15px_rgba(57,255,20,0.25)] block"
                  >
                    {social.icon}
                  </Link>
                </Magnetic>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-sm">
          <h4 className="font-jetbrains-mono text-label-caps text-primary uppercase">
            Join the Community
          </h4>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#050505] border border-outline-variant rounded p-2 text-xs w-full focus:border-primary-fixed-dim outline-none text-white font-inter"
              placeholder="Email"
            />
            <Magnetic>
              <button
                type="submit"
                className="bg-primary-fixed-dim text-on-primary px-4 py-2 rounded text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer block"
              >
                Join
              </button>
            </Magnetic>
          </form>
        </div>
      </div>
    </footer>
  );
}
