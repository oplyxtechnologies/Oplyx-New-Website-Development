"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AiCtaSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12  text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-panchang mb-4">
          Ready to activate your AI advantage?
        </h2>
        <p className="text-white/80 mb-8 text-base md:text-lg">
          Let&apos;s build AI that&apos;s accurate, explainable, and deployable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <button className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition">
              Talk to an AI Strategist
            </button>
          </Link>
          <Link href="/contact">
            <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-black transition">
              Book Free Discovery Call
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
