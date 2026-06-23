"use client";



const sponsors = [
  { name: "Vercel", tier: "Platinum", desc: "Frontend Cloud & Hosting" },
  { name: "Stripe", tier: "Gold", desc: "Financial Infrastructure for the Web" },
  { name: "GitHub", tier: "Gold", desc: "AI-Powered Developer Platform" },
  { name: "Google Cloud", tier: "Silver", desc: "Cloud Computing & AI Services" },
  { name: "Linear", tier: "Bronze", desc: "Issue Tracking & Project Management" },
];

export default function Sponsors() {
  // Triplicating the list to guarantee infinite scroll coverage across large displays
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section className="py-2xl bg-surface-container-lowest/50 border-y border-outline-variant/10 relative overflow-hidden" id="sponsors">
      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div className="text-center mb-xl">
          <span className="font-jetbrains-mono text-xs tracking-[0.2em] text-primary-fixed-dim uppercase">
            Sponsors
          </span>
          <h2 className="font-space-grotesk text-headline-lg text-white mt-4">
            Supported by Leading Organizations
          </h2>
        </div>
      </div>

      {/* Infinite Horizontal Logo Marquee */}
      <div 
        className="w-full overflow-hidden flex relative py-4 select-none"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
        }}
      >
        <div className="animate-marquee flex gap-md pr-md">
          {duplicatedSponsors.map((sponsor, idx) => (
            <div
              key={`${sponsor.name}-${idx}`}
              className="w-56 shrink-0 glass-card p-md rounded-xl text-center border border-outline-variant/20 hover:border-primary-fixed-dim/40 hover:shadow-[0_0_20px_rgba(57,255,20,0.12)] transition-all duration-300"
            >
              <div className="font-space-grotesk font-bold text-white text-md tracking-tight">
                {sponsor.name}
              </div>
              <div className="font-jetbrains-mono text-[9px] uppercase text-primary-fixed-dim/60 mt-1">
                {sponsor.tier}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
