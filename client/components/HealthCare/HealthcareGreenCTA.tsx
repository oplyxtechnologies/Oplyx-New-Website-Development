"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";

const ctaItems = [
  "EHR & CRM Systems",
  "Secure Patient Platforms",
  "Staff Augmentation",
  "AI + Health Data Integration",
];

export default function HealthcareGreenCTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 px-6 md:px-12 text-white rounded-t-xl">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left - Text */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-panchang font-bold leading-tight">
            Let&apos;s build the next great thing in digital health
          </h2>
          <p className="text-base md:text-lg text-white/80">
            Oplyx is your long-term partner for modernizing healthcare delivery
            with scalable tech.
          </p>
          <Link href="/contact">
            <button className="mt-4 cursor-pointer inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-900 transition">
              Talk to Our Experts
            </button>
          </Link>
        </div>

        {/* Right - Bullet List */}
        <ul className="space-y-4">
          {ctaItems.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-lg font-medium"
            >
              <CheckCircle size={20} className="text-green-500" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
