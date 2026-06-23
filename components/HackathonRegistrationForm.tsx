"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { School, Info, Loader2 } from "lucide-react";

export default function HackathonRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [leader, setLeader] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form Fields State
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState([
    { name: "", year: "", role: "", github: "", linkedin: "", instagram: "" },
    { name: "", year: "", role: "", github: "", linkedin: "", instagram: "" },
    { name: "", year: "", role: "", github: "", linkedin: "", instagram: "" },
    { name: "", year: "", role: "", github: "", linkedin: "", instagram: "" },
  ]);
  const [collegeName, setCollegeName] = useState("");
  const [contactData, setContactData] = useState({
    email: "",
    phone: "",
    city: "",
    techStack: "",
    previousExp: "",
    manifesto: "",
  });

  const updateMemberField = (index: number, field: string, value: string) => {
    const updated = [...members];
    updated[index] = { ...updated[index], [field]: value };
    setMembers(updated);
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 180, behavior: "smooth" });
    } else {
      // Final Submit
      setIsSubmitting(true);
      setTimeout(() => {
        alert("Registration submitted successfully! We have sent a confirmation email.");
        setIsSubmitting(false);
        // Reset state
        setTeamName("");
        setMembers([
          { name: "", year: "", role: "", github: "", linkedin: "", instagram: "" },
          { name: "", year: "", role: "", github: "", linkedin: "", instagram: "" },
          { name: "", year: "", role: "", github: "", linkedin: "", instagram: "" },
          { name: "", year: "", role: "", github: "", linkedin: "", instagram: "" },
        ]);
        setCollegeName("");
        setContactData({
          email: "",
          phone: "",
          city: "",
          techStack: "",
          previousExp: "",
          manifesto: "",
        });
        setCurrentStep(1);
        setLeader(1);
      }, 2000);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 180, behavior: "smooth" });
    }
  };

  const stepTitles = ["01. TEAM", "02. COLLEGE", "03. SOCIALS", "04. FINAL"];

  return (
    <div className="glass-panel rounded-xl overflow-hidden shadow-2xl animate-fade-up">
      {/* Progress Indicator */}
      <div className="flex border-b border-outline-variant/30">
        {stepTitles.map((title, index) => {
          const stepNum = index + 1;
          const isActive = currentStep === stepNum;
          return (
            <button
              type="button"
              key={title}
              onClick={() => setCurrentStep(stepNum)}
              className={`flex-1 py-4 text-center border-b-2 transition-all duration-300 font-jetbrains-mono text-label-caps uppercase cursor-pointer hover:bg-white/5 outline-none ${
                isActive
                  ? "border-primary-container text-primary-container"
                  : "border-transparent text-on-surface-variant hover:text-white"
              }`}
            >
              <span>{title}</span>
            </button>
          );
        })}
      </div>

      <form className="p-8" onSubmit={(e) => e.preventDefault()}>
        <AnimatePresence mode="wait">
          {/* Step 1: Team Info */}
          {currentStep === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-10">
                <label className="font-jetbrains-mono text-label-caps text-on-surface-variant mb-3 block">
                  TEAM NAME
                </label>
                <input
                  type="text"
                  required
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-4 focus:ring-0 focus:border-primary-container text-primary-container font-space-grotesk text-headline-sm transition-all placeholder:text-outline-variant/50 neon-border-focus outline-none"
                  placeholder="Enter Team Name"
                />
              </div>

              <div className="mb-4">
                <label className="font-jetbrains-mono text-label-caps text-on-surface-variant mb-4 block">
                  TEAM MEMBERS (EXACTLY 4)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {members.map((member, i) => {
                    const memberNum = i + 1;
                    const isLeader = leader === memberNum;
                    return (
                      <div
                        key={memberNum}
                        className={`glass-panel p-5 rounded-lg border hover:border-primary-container/40 transition-all duration-300 group relative ${
                          isLeader
                            ? "border-primary-container/60 bg-primary-container/5 shadow-[0_0_15px_rgba(57,255,20,0.1)]"
                            : "border-outline-variant/30"
                        }`}
                      >
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-jetbrains-mono text-label-caps text-on-surface-variant">
                            MEMBER 0{memberNum}
                          </span>
                          <label className="flex items-center cursor-pointer">
                            <span className="text-xs text-on-surface-variant mr-2 font-inter">LEADER</span>
                            <input
                              type="radio"
                              name="team_leader"
                              checked={isLeader}
                              onChange={() => setLeader(memberNum)}
                              className="form-radio text-primary-container bg-background border-outline-variant focus:ring-0 cursor-pointer h-4 w-4"
                            />
                          </label>
                        </div>

                        <div className="space-y-4">
                          <input
                            type="text"
                            required
                            placeholder="Full Name"
                            value={member.name}
                            onChange={(e) => updateMemberField(i, "name", e.target.value)}
                            className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg p-3 text-sm text-white focus:border-primary-container focus:ring-0 transition-all outline-none"
                          />
                          <div className="grid grid-cols-2 gap-3">
                            <select
                              required
                              value={member.year}
                              onChange={(e) => updateMemberField(i, "year", e.target.value)}
                              className="bg-surface-container-low border border-outline-variant/50 rounded-lg p-3 text-sm focus:border-primary-container focus:ring-0 appearance-none text-on-surface outline-none"
                            >
                              <option value="" disabled>
                                Year of Study
                              </option>
                              <option value="Year 1">Year 1</option>
                              <option value="Year 2">Year 2</option>
                              <option value="Year 3">Year 3</option>
                              <option value="Year 4">Year 4</option>
                            </select>
                            <input
                              type="text"
                              required
                              placeholder="Role (e.g. Backend)"
                              value={member.role}
                              onChange={(e) => updateMemberField(i, "role", e.target.value)}
                              className="bg-surface-container-low border border-outline-variant/50 rounded-lg p-3 text-sm text-white focus:border-primary-container focus:ring-0 transition-all outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: College Info */}
          {currentStep === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <label className="font-jetbrains-mono text-label-caps text-on-surface-variant mb-3 block">
                  INSTITUTIONAL DATA
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-4 pr-12 focus:ring-0 focus:border-primary-container text-white transition-all neon-border-focus outline-none"
                    placeholder="Search College Name..."
                  />
                  <School className="absolute right-4 top-4 text-outline-variant" size={20} />
                </div>
              </div>

              <div className="bg-primary-container/5 border border-primary-container/20 p-6 rounded-lg mb-6">
                <h4 className="text-primary-container font-space-grotesk text-headline-sm mb-2 flex items-center gap-2">
                  <Info size={16} />
                  Verification Policy
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed font-inter">
                  Ensure your institution allows inter-disciplinary collaboration if your team consists of members from different departments. Academic credentials will be validated during the check-in phase.
                </p>
              </div>
            </motion.div>
          )}

          {/* Step 3: Social Presence */}
          {currentStep === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {members.map((member, i) => {
                const memberNum = i + 1;
                return (
                  <div key={memberNum} className="border-l-2 border-primary-container/30 pl-6 py-2">
                    <h3 className="font-jetbrains-mono text-label-caps text-primary-container mb-4">
                      SOCIAL LINKS - MEMBER 0{memberNum}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="relative flex items-center">
                        <span className="absolute left-3 text-sm text-outline-variant font-jetbrains-mono">
                          github/
                        </span>
                        <input
                          type="text"
                          value={member.github}
                          onChange={(e) => updateMemberField(i, "github", e.target.value)}
                          placeholder="username"
                          className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg p-3 pl-20 text-sm text-white focus:border-primary-container focus:ring-0 outline-none transition-all"
                        />
                      </div>
                      <div className="relative flex items-center">
                        <span className="absolute left-3 text-sm text-outline-variant font-jetbrains-mono">
                          linked/
                        </span>
                        <input
                          type="text"
                          value={member.linkedin}
                          onChange={(e) => updateMemberField(i, "linkedin", e.target.value)}
                          placeholder="username"
                          className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg p-3 pl-20 text-sm text-white focus:border-primary-container focus:ring-0 outline-none transition-all"
                        />
                      </div>
                      <div className="relative flex items-center">
                        <span className="absolute left-3 text-sm text-outline-variant font-jetbrains-mono">
                          insta/
                        </span>
                        <input
                          type="text"
                          value={member.instagram}
                          onChange={(e) => updateMemberField(i, "instagram", e.target.value)}
                          placeholder="username"
                          className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg p-3 pl-16 text-sm text-white focus:border-primary-container focus:ring-0 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* Step 4: Contact & Details */}
          {currentStep === 4 && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div>
                  <label className="font-jetbrains-mono text-label-caps text-on-surface-variant mb-2 block">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={contactData.email}
                    onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg p-4 text-white focus:border-primary-container focus:ring-0 transition-all outline-none"
                    placeholder="team@example.com"
                  />
                </div>
                <div>
                  <label className="font-jetbrains-mono text-label-caps text-on-surface-variant mb-2 block">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactData.phone}
                    onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg p-4 text-white focus:border-primary-container focus:ring-0 transition-all outline-none"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div>
                  <label className="font-jetbrains-mono text-label-caps text-on-surface-variant mb-2 block">
                    CITY
                  </label>
                  <input
                    type="text"
                    required
                    value={contactData.city}
                    onChange={(e) => setContactData({ ...contactData, city: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg p-4 text-white focus:border-primary-container focus:ring-0 transition-all outline-none"
                    placeholder="Your City"
                  />
                </div>
                <div>
                  <label className="font-jetbrains-mono text-label-caps text-on-surface-variant mb-2 block">
                    TECH STACK
                  </label>
                  <input
                    type="text"
                    required
                    value={contactData.techStack}
                    onChange={(e) => setContactData({ ...contactData, techStack: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg p-4 text-white focus:border-primary-container focus:ring-0 transition-all outline-none"
                    placeholder="React, Node, Solidity..."
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="font-jetbrains-mono text-label-caps text-on-surface-variant mb-2 block">
                    PREVIOUS EXPERIENCE
                  </label>
                  <textarea
                    rows={3}
                    value={contactData.previousExp}
                    onChange={(e) => setContactData({ ...contactData, previousExp: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg p-4 text-white focus:border-primary-container focus:ring-0 resize-none transition-all outline-none"
                    placeholder="List any notable hackathons or projects..."
                  />
                </div>
                <div>
                  <label className="font-jetbrains-mono text-label-caps text-on-surface-variant mb-2 block">
                    WHAT ARE YOU PLANNING TO BUILD?
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={contactData.manifesto}
                    onChange={(e) => setContactData({ ...contactData, manifesto: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg p-4 text-white focus:border-primary-container focus:ring-0 resize-none transition-all outline-none"
                    placeholder="Briefly describe what you'd like to build or learn at HackBios 2026..."
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="mt-12 pt-8 border-t border-outline-variant/30 flex justify-between items-center">
          <button
            type="button"
            onClick={handlePrev}
            className={`px-xl py-4 border border-outline-variant rounded-lg font-jetbrains-mono text-label-caps hover:bg-white/5 transition-all text-on-surface-variant ${
              currentStep === 1 ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            PREVIOUS
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={isSubmitting}
            className="bg-primary-container text-on-primary px-2xl py-4 rounded-lg font-bold hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] transition-all active:scale-95 min-w-[200px] flex items-center justify-center gap-2 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                SUBMITTING...
              </>
            ) : currentStep === 4 ? (
              "SUBMIT REGISTRATION"
            ) : (
              "NEXT"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
