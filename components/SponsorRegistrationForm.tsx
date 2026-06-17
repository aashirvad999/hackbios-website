"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Contact, Share2, Award, Check, Loader2 } from "lucide-react";

const tiers = [
  {
    id: "bronze",
    name: "Bronze",
    price: "₹25,000",
    icon: Award,
    perks: ["Logo on web", "1x Social shout"],
  },
  {
    id: "silver",
    name: "Silver",
    price: "₹50,000",
    icon: Award,
    perks: ["Bronze perks", "Booth space"],
  },
  {
    id: "gold",
    name: "Gold",
    price: "₹1,00,000",
    icon: Award,
    perks: ["Silver perks", "Keynote slot"],
  },
  {
    id: "platinum",
    name: "Platinum",
    price: "₹2,50,000",
    icon: Award,
    perks: ["Gold perks", "Naming rights"],
  },
];

export default function SponsorRegistrationForm() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Input states
  const [brandName, setBrandName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [industry, setIndustry] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [website, setWebsite] = useState("");
  const [twitter, setTwitter] = useState("");
  const [message, setMessage] = useState("");
  const [expectations, setExpectations] = useState("");
  const [prevExperience, setPrevExperience] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTier) {
      alert("Please select a Sponsorship Tier.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      alert("Partnership request transmitted to HackBios central node. Code: 200 OK");
      // Reset states
      setBrandName("");
      setOrgName("");
      setIndustry("");
      setContactName("");
      setEmail("");
      setPhone("");
      setLinkedin("");
      setInstagram("");
      setWebsite("");
      setTwitter("");
      setMessage("");
      setExpectations("");
      setPrevExperience("");
      setSelectedTier(null);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-xl">
      {/* Section 1: Company Info */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel p-xl rounded-xl"
      >
        <div className="flex items-center gap-sm mb-lg text-primary-fixed-dim">
          <Building2 size={24} />
          <h2 className="font-space-grotesk text-headline-lg text-white">Company Info</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div className="space-y-sm">
            <label className="font-jetbrains-mono text-label-caps text-on-surface-variant uppercase">
              Brand Name
            </label>
            <input
              type="text"
              required
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="w-full bg-[#050505] border border-outline-variant rounded-lg p-md text-on-surface font-inter transition-all outline-none"
              placeholder="e.g. Cyberdyne Systems"
            />
          </div>
          <div className="space-y-sm">
            <label className="font-jetbrains-mono text-label-caps text-on-surface-variant uppercase">
              Organization Name
            </label>
            <input
              type="text"
              required
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              className="w-full bg-[#050505] border border-outline-variant rounded-lg p-md text-on-surface font-inter transition-all outline-none"
              placeholder="Legal entity name"
            />
          </div>
          <div className="md:col-span-2 space-y-sm">
            <label className="font-jetbrains-mono text-label-caps text-on-surface-variant uppercase">
              Industry
            </label>
            <select
              required
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full bg-[#050505] border border-outline-variant rounded-lg p-md text-on-surface font-inter transition-all appearance-none outline-none"
            >
              <option value="" disabled>
                Select industry
              </option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Cloud Infrastructure">Cloud Infrastructure</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Web3 / Blockchain">Web3 / Blockchain</option>
              <option value="Fintech">Fintech</option>
              <option value="Bio-engineering">Bio-engineering</option>
            </select>
          </div>
        </div>
      </motion.section>

      {/* Section 2: Contact Info */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel p-xl rounded-xl"
      >
        <div className="flex items-center gap-sm mb-lg text-primary-fixed-dim">
          <Contact size={24} />
          <h2 className="font-space-grotesk text-headline-lg text-white">Contact Info</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div className="space-y-sm">
            <label className="font-jetbrains-mono text-label-caps text-on-surface-variant uppercase">
              Contact Person Name
            </label>
            <input
              type="text"
              required
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className="w-full bg-[#050505] border border-outline-variant rounded-lg p-md text-on-surface font-inter transition-all outline-none"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-sm">
            <label className="font-jetbrains-mono text-label-caps text-on-surface-variant uppercase">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#050505] border border-outline-variant rounded-lg p-md text-on-surface font-inter transition-all outline-none"
              placeholder="partners@company.com"
            />
          </div>
          <div className="md:col-span-2 space-y-sm">
            <label className="font-jetbrains-mono text-label-caps text-on-surface-variant uppercase">
              Phone Number
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-[#050505] border border-outline-variant rounded-lg p-md text-on-surface font-inter transition-all outline-none"
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>
      </motion.section>

      {/* Section 3: Social & Web */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel p-xl rounded-xl"
      >
        <div className="flex items-center gap-sm mb-lg text-primary-fixed-dim">
          <Share2 size={24} />
          <h2 className="font-space-grotesk text-headline-lg text-white">Social Presence</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div className="space-y-sm">
            <label className="font-jetbrains-mono text-label-caps text-on-surface-variant uppercase">
              LinkedIn
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-md text-on-surface-variant text-sm font-inter">in/</span>
              <input
                type="text"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                className="w-full bg-[#050505] border border-outline-variant rounded-lg p-md pl-12 text-on-surface font-inter transition-all outline-none"
                placeholder="company-name"
              />
            </div>
          </div>
          <div className="space-y-sm">
            <label className="font-jetbrains-mono text-label-caps text-on-surface-variant uppercase">
              Instagram
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-md text-on-surface-variant text-sm font-inter">@</span>
              <input
                type="text"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                className="w-full bg-[#050505] border border-outline-variant rounded-lg p-md pl-10 text-on-surface font-inter transition-all outline-none"
                placeholder="company"
              />
            </div>
          </div>
          <div className="space-y-sm">
            <label className="font-jetbrains-mono text-label-caps text-on-surface-variant uppercase">
              Website
            </label>
            <input
              type="url"
              required
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full bg-[#050505] border border-outline-variant rounded-lg p-md text-on-surface font-inter transition-all outline-none"
              placeholder="https://company.com"
            />
          </div>
          <div className="space-y-sm">
            <label className="font-jetbrains-mono text-label-caps text-on-surface-variant uppercase">
              Twitter / X
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-md text-on-surface-variant text-sm font-inter">@</span>
              <input
                type="text"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                className="w-full bg-[#050505] border border-outline-variant rounded-lg p-md pl-10 text-on-surface font-inter transition-all outline-none"
                placeholder="company"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 4: Sponsorship Tiers */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-xl"
      >
        <div className="flex items-center gap-sm mb-lg text-primary-fixed-dim">
          <Award size={24} />
          <h2 className="font-space-grotesk text-headline-lg text-white">Sponsorship Tier</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md mb-xl">
          {tiers.map((tier) => {
            const isActive = selectedTier === tier.id;
            return (
              <div
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`tier-card group glass-panel p-lg rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                  isActive ? "active" : ""
                }`}
              >
                <div className="flex justify-between items-start mb-md">
                  <tier.icon
                    size={24}
                    className={`transition-colors duration-300 ${
                      isActive ? "text-primary-fixed-dim" : "text-on-surface-variant group-hover:text-primary-fixed-dim"
                    }`}
                  />
                  {isActive && (
                    <div className="h-6 w-6 rounded-full bg-primary-fixed-dim flex items-center justify-center text-on-primary">
                      <Check size={14} strokeWidth={3} />
                    </div>
                  )}
                </div>
                <h3 className="font-space-grotesk text-headline-sm text-white mb-xs">{tier.name}</h3>
                <p className="text-primary-fixed-dim font-jetbrains-mono text-code-md mb-md">{tier.price}</p>
                <ul className="text-on-surface-variant text-sm space-y-2 font-inter">
                  {tier.perks.map((perk, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check size={12} className="text-primary-fixed-dim" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="glass-panel p-xl rounded-xl space-y-lg">
          <div className="space-y-sm">
            <label className="font-jetbrains-mono text-label-caps text-on-surface-variant uppercase">
              Message to Organizers
            </label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-[#050505] border border-outline-variant rounded-lg p-md text-on-surface font-inter transition-all outline-none resize-none"
              placeholder="Tell us why you'd like to partner with HackBios..."
              rows={4}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            <div className="space-y-sm">
              <label className="font-jetbrains-mono text-label-caps text-on-surface-variant uppercase">
                Expectations
              </label>
              <textarea
                required
                value={expectations}
                onChange={(e) => setExpectations(e.target.value)}
                className="w-full bg-[#050505] border border-outline-variant rounded-lg p-md text-on-surface font-inter transition-all outline-none resize-none"
                placeholder="Recruitment, brand awareness, specific technical focus, etc."
                rows={3}
              />
            </div>
            <div className="space-y-sm">
              <label className="font-jetbrains-mono text-label-caps text-on-surface-variant uppercase">
                Previous Experience
              </label>
              <textarea
                value={prevExperience}
                onChange={(e) => setPrevExperience(e.target.value)}
                className="w-full bg-[#050505] border border-outline-variant rounded-lg p-md text-on-surface font-inter transition-all outline-none resize-none"
                placeholder="e.g. Sponsored HackMIT 2024, hosted workshops at DevCon..."
                rows={3}
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Submit */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="pt-xl"
      >
        <button
          type="submit"
          disabled={isSubmitting || submitted}
          className="w-full border border-primary-fixed-dim bg-[#0c1609]/80 py-lg rounded-xl text-primary-fixed-dim font-bold transition-all duration-300 neon-glow btn-interact hover:bg-primary-fixed-dim hover:text-black cursor-pointer font-space-grotesk text-headline-sm uppercase"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 size={18} className="animate-spin" />
              PROCESSING
            </span>
          ) : submitted ? (
            "PARTNERSHIP REQUEST TRANSMITTED"
          ) : (
            "SUBMIT PARTNERSHIP REQUEST"
          )}
        </button>
        <p className="text-center text-on-surface-variant text-sm mt-md font-jetbrains-mono uppercase">
          System response within 48 standard business hours.
        </p>
      </motion.div>
    </form>
  );
}
