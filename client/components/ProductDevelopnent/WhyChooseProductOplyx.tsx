"use client";

import { HandCoins, Layers3, Users2, FlaskConical } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const benefits = [
  {
    title: "Cost-Efficient Builds",
    description: "High-quality output with lean team structures.",
    icon: <HandCoins size={28} className="text-white" />,
  },
  {
    title: "Scalable Architecture",
    description: "Future-proof systems that grow with your users.",
    icon: <Layers3 size={28} className="text-white" />,
  },
  {
    title: "Collaborative Workflow",
    description: "We work with you, not just for you.",
    icon: <Users2 size={28} className="text-white" />,
  },
  {
    title: "Testing & QA First",
    description: "Bug-free, optimized, and user-validated.",
    icon: <FlaskConical size={28} className="text-white" />,
  },
];

export default function WhyChooseProductOplyx() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-4">
          Why Choose Oplyx?
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 text-left backdrop-blur-sm hover:bg-white/10 transition duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
