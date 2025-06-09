"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HealthCareTestimonial = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="text-white py-24 px-6 md:px-12 ">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-left"
      >
        {/* Image */}
        <div className="flex-shrink-0">
          <Image
            loading="lazy"
            src="/testimonials/nandana.jpeg" // 🔁 Replace with correct image path
            alt="Nandana Rajendra"
            width={100}
            height={100}
            className="rounded-full border-2 border-white object-cover "
          />
        </div>

        {/* Text */}
        <div>
          <p className="text-lg md:text-xl italic text-white/80 mb-2">
            “Oplyx helped us build a scalable patient management system that
            improved care delivery across the board.”
          </p>
          <div className="text-sm font-semibold">
            — Nandana Rajendran{" "}
            <span className="block text-white/60 font-normal">
              VP of Digital Transformation, CareBridge
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HealthCareTestimonial;
