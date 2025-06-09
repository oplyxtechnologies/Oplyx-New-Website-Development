"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Workflow, Clock, RefreshCw } from "lucide-react";

const features = [
  {
    title: "Tailored to your needs",
    description: "Built around your product goals, tech stack, and roadmap.",
    icon: <Target size={28} className="text-green-400" />,
  },
  {
    title: "Your team, your systems",
    description:
      "We work inside your existing workflows, tools, and stand-ups.",
    icon: <Workflow size={28} className="text-green-400" />,
  },
  {
    title: "Around-the-clock development",
    description: "Distributed teams across time zones mean faster iteration.",
    icon: <Clock size={28} className="text-green-400" />,
  },
  {
    title: "Scalable and adaptable",
    description:
      "Quickly ramp up or down based on your evolving product needs.",
    icon: <RefreshCw size={28} className="text-green-400" />,
  },
];

export default function TeamDedicatedSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Text Section */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-4">
            All parts included — Your extended team, our engineering force
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Our dedicated team model gives you access to full-cycle delivery:
            design, frontend/backend dev, DevOps, QA, and project coordination.
          </p>
        </div>

        {/* Right Cards */}
        <div
          ref={ref}
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-lg text-left hover:bg-white/10 transition"
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
