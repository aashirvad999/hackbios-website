import Link from "next/link";
import SponsorRegistrationForm from "@/components/SponsorRegistrationForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sponsor Registration | HackBios",
  description: "Sponsor HackBios 2026 and support the next generation of software developers, engineers, and creators.",
};

export default function SponsorRegistrationPage() {
  return (
    <>
      {/* Simplified Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_0_20px_rgba(42,229,0,0.1)]">
        <div className="max-w-container-max mx-auto px-gutter py-4 flex justify-between items-center">
          <Link
            href="/"
            className="font-space-grotesk text-headline-sm font-bold tracking-tight text-primary-fixed-dim logo-cursor"
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

      <main className="pt-32 pb-24 px-gutter max-w-4xl mx-auto bg-grid">
        {/* Header */}
        <header className="mb-2xl text-center animate-fade-up">
          <div className="inline-block mb-md">
            <span className="font-jetbrains-mono text-xs text-primary-fixed-dim uppercase">
              Partnership Program 2026
            </span>
          </div>
          <h1 className="font-space-grotesk text-display-xl-mobile md:text-display-xl mb-md text-white text-center font-bold">
            Sponsor HackBios <span className="text-primary-container">2026.</span>
          </h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-center font-inter text-body-lg">
            Empower student builders, innovators, and engineering students by supporting our annual flagship college hackathon.
          </p>
        </header>

        <SponsorRegistrationForm />
      </main>

      <Footer />
    </>
  );
}
