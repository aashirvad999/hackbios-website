"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/components/Magnetic";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      const sections = ["home", "about", "events", "team", "faq", "contact"];
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveItem(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-surface/60 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_0_20px_rgba(42,229,0,0.1)]">
      <div className="max-w-container-max mx-auto px-gutter py-4 flex justify-between items-center">
        <Magnetic>
          <Link
            href="/#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="font-space-grotesk text-headline-sm font-bold tracking-tight text-primary-fixed-dim logo-cursor block"
          >
            HackBios
          </Link>
        </Magnetic>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-lg">
          {navItems.map((item) => (
            <Magnetic key={item.label}>
              <a
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`font-inter text-body-md transition-all duration-200 block px-2 py-1 ${
                  activeItem === item.href.slice(1)
                    ? "nav-link-active text-primary-fixed-dim"
                    : "text-on-surface-variant hover:text-primary-fixed-dim"
                }`}
              >
                {item.label}
              </a>
            </Magnetic>
          ))}
        </div>

        <div className="flex items-center gap-md">
          <Magnetic>
            <Link
              href="/hackathon-registration"
              className="bg-primary-container text-on-primary px-6 py-2 rounded-xl font-bold active:scale-95 duration-200 transition-all hover:bg-primary-container/90 neon-glow btn-interact hidden sm:block"
            >
              Register Now
            </Link>
          </Magnetic>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-on-surface-variant hover:text-primary-fixed-dim p-2 cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0c1609]/95 backdrop-blur-xl border-b border-outline-variant/30 flex flex-col p-lg space-y-md"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`font-inter text-body-md transition-colors py-2 border-b border-outline-variant/10 ${
                  activeItem === item.href.slice(1)
                    ? "text-primary-fixed-dim font-semibold"
                    : "text-on-surface-variant hover:text-primary-fixed-dim"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/hackathon-registration"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary-container text-on-primary text-center px-6 py-3 rounded-xl font-bold active:scale-95 duration-200 transition-all hover:bg-primary-container/90 neon-glow"
            >
              Register Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
