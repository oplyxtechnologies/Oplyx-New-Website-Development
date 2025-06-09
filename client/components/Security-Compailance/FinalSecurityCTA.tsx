"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const FinalSecurityCTA = () => {
  return (
    <section className="bg-gradient-to-t from-green-500/60 to-transparent to-50% text-white py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-panchang mb-4">
          Ready to Secure What You&apos;re Building?
        </h2>
        <p className="text-white/90 text-base md:text-lg mb-8">
          Whether you&apos;re a healthcare startup or fintech platform,
          we&apos;ll help you launch with confidence.
        </p>

        <Link href="/contact">
          <button className="px-6 py-3 cursor-pointer bg-green-200 text-black rounded hover:bg-green-500 font-semibold transition">
            Book a Free Security Audit
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default FinalSecurityCTA;
