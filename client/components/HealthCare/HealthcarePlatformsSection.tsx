"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Compass, BarChart, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Compass size={28} className="text-green-400" />,
    title: "Improve workflows & access",
    description:
      "Build tools that streamline care and empower both patients and practitioners.",
  },
  {
    icon: <BarChart size={28} className="text-green-400" />,
    title: "Unlock the value of your data",
    description:
      "Integrate analytics, clinical insights, and visual dashboards for smarter care decisions.",
  },
  {
    icon: <ShieldCheck size={28} className="text-green-400" />,
    title: "Be secure from the ground up",
    description:
      "HIPAA-compliant, encrypted, and privacy-respecting platforms built for trust.",
  },
];

export default function HealthcarePlatformsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Text Side */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-4">
            Future-Ready Healthcare Platforms
          </h2>
          <p className="text-white/70 text-base md:text-lg">
            We design, build, and optimize digital health systems that are
            secure, compliant, and easy to scale.
          </p>
        </div>

        {/* Cards Side */}
        <div ref={ref} className="md:w-1/2 space-y-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition"
            >
              <div className="mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
