"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ShieldCheck } from "lucide-react";

export default function CertifiedAwsPartnership() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 bg-transparent text-white">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <ShieldCheck size={32} className="text-green-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-4">
            Certified AWS Partnership
          </h2>
          <h3 className="text-lg md:text-xl text-gray-300 font-medium mb-4">
            Your Trusted Cloud Advisor
          </h3>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            As your AWS partner, we guide you from planning to scaling. Our team
            brings engineering precision with a product mindset — enabling your
            team to deliver faster, safer, and smarter in the cloud.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
