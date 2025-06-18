"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can join these courses?",
    answer:
      "Anyone! Whether you’re a student, working professional, or entrepreneur, our courses are designed for all skill levels.",
  },
  {
    question: "Do I get a certificate?",
    answer:
      "Yes — after successfully completing the course and assignments, you’ll receive an official Oplyx certificate.",
  },
  {
    question: "Are the courses live or recorded?",
    answer:
      "Most courses offer a hybrid model — live interactive sessions plus recorded lectures you can access anytime.",
  },
  {
    question: "Can I get personal mentorship?",
    answer:
      "Absolutely. Many courses include dedicated mentorship and 1:1 sessions with industry experts.",
  },
];

export default function CourseFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-12 text-white bg-[#0a0d12]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-4 text-gray-300 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
