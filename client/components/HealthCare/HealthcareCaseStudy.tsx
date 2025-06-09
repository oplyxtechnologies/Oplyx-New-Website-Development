"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HealthcareCaseStudy() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 bg-white/5 text-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-10"
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            loading="lazy"
            src="/case-studies/vaccine-campaign.jpg" // ✅ Replace with actual path
            alt="City of People Vaccine Campaign"
            width={600}
            height={400}
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 text-left">
          <h2 className="text-3xl md:text-4xl font-panchang font-bold leading-snug">
            How Oplyx Helped City of People Vaccinate Over 250,000 Citizens
          </h2>
          <p className="text-white/80 text-base leading-relaxed">
            We partnered with a public health department to build a scalable,
            secure vaccine scheduling and tracking platform — enabling rapid
            rollout across city clinics, mobile units, and telehealth support.
          </p>
          <Link
            href="/case-studies/city-of-people-vaccination"
            className="inline-block text-green-400 font-semibold hover:underline mt-2"
          >
            Read More →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
