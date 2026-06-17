"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Sync registered: ${email}`);
    setEmail("");
  };

  return (
    <footer className="w-full py-xl bg-surface-container-lowest border-t border-outline-variant">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-lg text-left">
        <div className="space-y-md">
          <div className="font-space-grotesk text-headline-sm font-bold text-primary-fixed-dim">
            HackBios
          </div>
          <p className="text-on-surface-variant text-sm font-inter">
            Engineering the Future. A global gathering for visionaries, coders, and architects of the digital age.
          </p>
          <p className="text-on-surface-variant text-xs font-jetbrains-mono uppercase">
            © 2026 HackBios
          </p>
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

        <div className="space-y-sm">
          <h4 className="font-jetbrains-mono text-label-caps text-primary uppercase">
            Community
          </h4>
          <nav className="flex flex-col gap-2">
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-inter">
              Discord Server
            </Link>
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-inter">
              Dev.to
            </Link>
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-inter">
              GitHub
            </Link>
          </nav>
        </div>

        <div className="space-y-sm">
          <h4 className="font-jetbrains-mono text-label-caps text-primary uppercase">
            Stay Synced
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
            <button
              type="submit"
              className="bg-primary-fixed-dim text-on-primary px-4 py-2 rounded text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              GO
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
