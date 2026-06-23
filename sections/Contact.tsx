"use client";

import { useState } from "react";
import { Mail, MapPin, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      alert("Message sent successfully. We will get back to you shortly!");
      setFormData({ name: "", email: "", message: "" });
      setStatus("idle");
    }, 1500);
  };

  return (
    <section className="py-2xl relative overflow-hidden" id="contact">
      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div className="text-center mb-2xl">
          <span className="font-jetbrains-mono text-xs tracking-[0.2em] text-primary-fixed-dim uppercase">
            Get In Touch
          </span>
          <h2 className="font-space-grotesk text-headline-lg text-white mt-2">
            Contact Us
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-xs font-inter">
            Have a question, feedback, or want to sponsor us? Reach out to the organizing team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2xl max-w-5xl mx-auto">
          <div className="space-y-xl flex flex-col justify-center">
            <div className="space-y-lg">
              <div className="flex items-center gap-md">
                <div className="w-12 h-12 rounded-xl bg-primary-fixed-dim/10 border border-primary-fixed-dim/30 flex items-center justify-center text-primary-fixed-dim">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-jetbrains-mono text-label-caps text-on-surface-variant uppercase">
                    General Inquiries
                  </div>
                  <div className="font-jetbrains-mono text-sm text-white">ops@hackbios.io</div>
                </div>
              </div>

              <div className="flex items-center gap-md">
                <div className="w-12 h-12 rounded-xl bg-primary-fixed-dim/10 border border-primary-fixed-dim/30 flex items-center justify-center text-primary-fixed-dim">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs font-jetbrains-mono text-label-caps text-on-surface-variant uppercase">
                    Event Location
                  </div>
                  <div className="font-jetbrains-mono text-sm text-white">College Campus</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-xl rounded-2xl border border-outline-variant/30">
            <form onSubmit={handleSubmit} className="space-y-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="space-y-xs">
                  <label className="font-jetbrains-mono text-label-caps text-on-surface-variant uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-surface-container-lowest border border-outline-variant focus:border-primary-fixed-dim rounded-lg px-md py-sm outline-none text-white font-inter transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-xs">
                  <label className="font-jetbrains-mono text-label-caps text-on-surface-variant uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-surface-container-lowest border border-outline-variant focus:border-primary-fixed-dim rounded-lg px-md py-sm outline-none text-white font-inter transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-xs">
                <label className="font-jetbrains-mono text-label-caps text-on-surface-variant uppercase">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-surface-container-lowest border border-outline-variant focus:border-primary-fixed-dim rounded-lg px-md py-sm outline-none text-white font-inter resize-none transition-all"
                  placeholder="How can we build together?"
                />
              </div>
              <button
                type="submit"
                disabled={status !== "idle"}
                className="w-full bg-primary-container text-black font-bold py-md rounded-xl neon-glow hover:brightness-110 active:scale-95 transition-all btn-interact flex items-center justify-center gap-2 cursor-pointer"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    SENDING...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
