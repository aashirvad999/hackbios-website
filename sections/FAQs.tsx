"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="bg-surface-container rounded-xl border border-outline-variant/30 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-lg text-left font-space-grotesk text-headline-sm text-white hover:text-primary-fixed-dim transition-colors"
      >
        <span>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-on-surface-variant"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-lg pb-lg">
              <p className="text-on-surface-variant text-body-md font-inter leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqs = [
  {
    question: "How do I register?",
    answer: "Simply click the 'Register Now' button at the top of the page to access the registration form. Complete the multi-step protocol to secure your spot.",
  },
  {
    question: "How many members are allowed for the hackathon?",
    answer: "Teams can consist of up to 4 members. You can also register individually and find a team through our Discord community.",
  },
  {
    question: "What is the duration of the Hackathon?",
    answer: "The hackathon is a 24-hour intensive build session, followed by judging and showcase presentations.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-2xl bg-grid" id="faq">
      <div className="max-w-3xl mx-auto px-gutter relative z-10">
        <div className="text-center mb-2xl">
          <span className="font-jetbrains-mono text-xs tracking-[0.2em] text-primary-fixed-dim uppercase">
            Protocol Docs
          </span>
          <h2 className="font-space-grotesk text-headline-lg text-white mt-2">
            Common Queries
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mt-xs font-inter">
            Everything you need to know about the HackBios ecosystem.
          </p>
        </div>

        <div className="space-y-md">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
