"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Search, Laptop, Terminal, User, FileText, ArrowRight, CornerDownLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface PaletteItem {
  name: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
  category: "Navigation" | "Registration";
}

const ITEMS: PaletteItem[] = [
  {
    name: "Home",
    desc: "Go to main page overview",
    href: "#home",
    icon: <Laptop size={16} />,
    category: "Navigation",
  },
  {
    name: "Our Mission",
    desc: "Learn about the hackathon mission and values",
    href: "#about",
    icon: <Terminal size={16} />,
    category: "Navigation",
  },
  {
    name: "Events & Activities",
    desc: "Browse coding tracks, workshops, and schedule",
    href: "#events",
    icon: <FileText size={16} />,
    category: "Navigation",
  },
  {
    name: "Sponsors",
    desc: "Supported by leading technology organizations",
    href: "#sponsors",
    icon: <Laptop size={16} />,
    category: "Navigation",
  },
  {
    name: "Meet the Team (Organizers)",
    desc: "Meet the student organizing team",
    href: "#team",
    icon: <User size={16} />,
    category: "Navigation",
  },
  {
    name: "Frequently Asked Questions",
    desc: "Browse commonly asked event questions",
    href: "#faq",
    icon: <FileText size={16} />,
    category: "Navigation",
  },
  {
    name: "Get In Touch (Contact)",
    desc: "Send a message to the organizers",
    href: "#contact",
    icon: <Terminal size={16} />,
    category: "Navigation",
  },
  {
    name: "Hackathon Registration",
    desc: "Register as a participant",
    href: "/hackathon-registration",
    icon: <ArrowRight size={16} className="text-primary-container" />,
    category: "Registration",
  },
  {
    name: "Become a Sponsor",
    desc: "Register as an event sponsor",
    href: "/sponsor-registration",
    icon: <ArrowRight size={16} className="text-primary-container" />,
    category: "Registration",
  },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setSearch("");
      setSelectedIndex(0);
      // Short delay to allow animation to complete
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const filtered = ITEMS.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.desc.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    // Reset selection index when search query changes
    setSelectedIndex(0);
  }, [search]);

  const handleSelect = useCallback((item: PaletteItem) => {
    setIsOpen(false);
    
    if (item.href.startsWith("#")) {
      if (pathname === "/") {
        // Scroll directly
        const element = document.querySelector(item.href);
        if (element) {
          const offsetTop = (element as HTMLElement).offsetTop - 80;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      } else {
        // Navigate back to home section
        router.push("/" + item.href);
      }
    } else {
      router.push(item.href);
    }
  }, [pathname, router]);

  useEffect(() => {
    const handleNavigationKeys = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          handleSelect(filtered[selectedIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleNavigationKeys);
    return () => window.removeEventListener("keydown", handleNavigationKeys);
  }, [isOpen, selectedIndex, filtered, handleSelect]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-start justify-center pt-[15vh]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Dialog Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            ref={containerRef}
            className="w-full max-w-lg mx-4 glass-panel border border-outline-variant/40 rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8),0_0_30px_rgba(57,255,20,0.08)] text-white relative z-10 flex flex-col"
          >
            {/* Input Wrapper */}
            <div className="flex items-center px-4 border-b border-outline-variant/30">
              <Search className="text-on-surface-variant mr-3 shrink-0" size={18} />
              <input
                ref={inputRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search pages or hackathon info..."
                className="w-full bg-transparent py-4 text-sm text-white placeholder-on-surface-variant outline-none border-none font-inter"
              />
              <span className="text-[10px] font-mono border border-outline-variant/30 rounded px-1.5 py-0.5 bg-black/30 text-on-surface-variant shrink-0">
                ESC
              </span>
            </div>

            {/* List */}
            <div className="max-h-[340px] overflow-y-auto p-2 scrollbar-thin">
              {filtered.length === 0 ? (
                <div className="py-12 text-center text-sm text-on-surface-variant font-inter">
                  No records match search sequence
                </div>
              ) : (
                <div>
                  {/* Navigation Category */}
                  {filtered.some(i => i.category === "Navigation") && (
                    <div className="px-3 py-1.5 text-[10px] font-mono text-primary-fixed-dim/60 uppercase tracking-widest font-bold">
                      Event Navigation
                    </div>
                  )}
                  {filtered
                    .filter((i) => i.category === "Navigation")
                    .map((item) => {
                      const idx = filtered.indexOf(item);
                      const active = selectedIndex === idx;
                      return (
                        <button
                          key={item.name}
                          onClick={() => handleSelect(item)}
                          onMouseEnter={() => setSelectedIndex(idx)}
                          className={`w-full flex items-center gap-3 px-3 py-3.5 rounded-xl transition-all text-left cursor-pointer ${
                            active
                              ? "bg-primary-fixed-dim/10 text-primary-fixed-dim border border-primary-fixed-dim/20 shadow-[0_0_12px_rgba(57,255,20,0.05)]"
                              : "text-on-surface-variant hover:text-white border border-transparent"
                          }`}
                        >
                          <div className={`p-1.5 rounded-lg ${active ? "bg-primary-fixed-dim/10 text-primary-fixed-dim" : "bg-white/5 text-on-surface-variant"}`}>
                            {item.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold font-space-grotesk tracking-wide">{item.name}</div>
                            <div className="text-[10px] text-on-surface-variant truncate mt-0.5">{item.desc}</div>
                          </div>
                          {active && (
                            <CornerDownLeft size={12} className="text-primary-fixed-dim/80 shrink-0" />
                          )}
                        </button>
                      );
                    })}

                  {/* Registration Category */}
                  {filtered.some(i => i.category === "Registration") && (
                    <div className="px-3 py-1.5 mt-2 text-[10px] font-mono text-primary-container/70 uppercase tracking-widest font-bold">
                      Registration Access
                    </div>
                  )}
                  {filtered
                    .filter((i) => i.category === "Registration")
                    .map((item) => {
                      const idx = filtered.indexOf(item);
                      const active = selectedIndex === idx;
                      return (
                        <button
                          key={item.name}
                          onClick={() => handleSelect(item)}
                          onMouseEnter={() => setSelectedIndex(idx)}
                          className={`w-full flex items-center gap-3 px-3 py-3.5 rounded-xl transition-all text-left cursor-pointer ${
                            active
                              ? "bg-primary-container/10 text-primary-container border border-primary-container/20 shadow-[0_0_12px_rgba(57,255,20,0.05)]"
                              : "text-on-surface-variant hover:text-white border border-transparent"
                          }`}
                        >
                          <div className={`p-1.5 rounded-lg ${active ? "bg-primary-container/10 text-primary-container" : "bg-white/5 text-on-surface-variant"}`}>
                            {item.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold font-space-grotesk tracking-wide">{item.name}</div>
                            <div className="text-[10px] text-on-surface-variant truncate mt-0.5">{item.desc}</div>
                          </div>
                          {active && (
                            <CornerDownLeft size={12} className="text-primary-container/80 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-black/40 border-t border-outline-variant/20 flex justify-between items-center text-[10px] font-mono text-on-surface-variant/80">
              <div className="flex items-center gap-2">
                <span>↑↓ navigate</span>
                <span>•</span>
                <span>enter select</span>
              </div>
              <div>Press ctrl+k to close</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
