import Link from "next/link";
import HackathonRegistrationForm from "@/components/HackathonRegistrationForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Register | HackBios 2026",
  description: "Complete the registration protocol to secure your terminal in the HackBios 2026 arena.",
};

export default function HackathonRegistrationPage() {
  return (
    <>
      {/* Simplified Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-gutter py-4 flex justify-between items-center">
          <Link
            href="/"
            className="font-space-grotesk text-headline-sm font-bold tracking-tight text-primary-container logo-cursor"
          >
            HackBios
          </Link>
          <div className="flex items-center gap-md">
            <Link
              className="border border-primary-fixed-dim bg-[#0c1609]/80 px-4 py-1.5 rounded-full text-primary-fixed-dim font-semibold transition-all duration-300 neon-glow btn-interact hover:bg-primary-fixed-dim hover:text-black font-inter text-body-md cursor-pointer"
              href="/"
            >
              Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-4 min-h-screen bg-grid">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-12 text-center animate-fade-up">
            <span className="font-jetbrains-mono text-xs tracking-wider text-primary-container uppercase">
              SYSTEM ACCESS
            </span>
            <h1 className="font-space-grotesk text-display-xl-mobile md:text-display-xl mt-4 leading-tight text-white font-bold">
              Engineer the <span className="text-primary-container">Future.</span>
            </h1>
            <p className="text-on-surface-variant mt-4 mx-auto max-w-2xl font-inter text-body-lg">
              Complete the registration protocol to secure your terminal in the HackBios 2026 arena.
            </p>
          </div>

          <HackathonRegistrationForm />
        </div>
      </main>

      <Footer />
    </>
  );
}
