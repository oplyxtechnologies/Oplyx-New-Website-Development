"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, MousePointerClick, LayoutTemplate } from "lucide-react";

const features = [
  {
    title: "User-Centered Thinking",
    description: "Build with empathy, usability, and real user goals in mind.",
    icon: <Users className="text-green-400" size={28} />,
  },
  {
    title: "Conversion-Driven Layouts",
    description:
      "Design that leads users to take meaningful action — not just look good.",
    icon: <MousePointerClick className="text-green-400" size={28} />,
  },
  {
    title: "Scalable & Consistent Systems",
    description: "Design systems that grow with your product and brand.",
    icon: <LayoutTemplate className="text-green-400" size={28} />,
  },
];

export default function WhyGreatDesignMatters() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 text-white bg-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl max-w-3xl mx-auto font-panchang font-bold mb-12">
          Design Isn&apos;t Decoration. It&apos;s Strategy.
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition"
            >
              <div className="mb-4">{feature.icon}</div>
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
