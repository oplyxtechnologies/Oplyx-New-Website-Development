"use client";

import { Crosshair, Handshake, Rocket, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "Precision Execution",
    description: "Every detail is intentional — from spacing to interactions.",
    icon: <Crosshair className="text-green-400" size={28} />,
  },
  {
    title: "Collaborative Process",
    description: "You’re involved at every stage — not just at the end.",
    icon: <Handshake className="text-green-400" size={28} />,
  },
  {
    title: "Fast Turnaround",
    description: "Speed without sacrificing quality or detail.",
    icon: <Rocket className="text-green-400" size={28} />,
  },
  {
    title: "Cross-Platform Ready",
    description: "Designs optimized for mobile, desktop, and beyond.",
    icon: <Smartphone className="text-green-400" size={28} />,
  },
];

export default function WhyChooseOplyxForDesign() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 text-white bg-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl mx-auto max-w-3xl font-panchang font-bold mb-12">
          More Than Pretty Screens — We Design for Impact
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition"
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
