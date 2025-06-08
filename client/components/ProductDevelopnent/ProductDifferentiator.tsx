"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Rocket, Code, Hammer } from "lucide-react";

const highlights = [
  {
    title: "Rapid Prototyping",
    description:
      "Bring your ideas to life faster with clickable prototypes and visual walkthroughs.",
    icon: <Hammer size={26} className="text-white" />,
  },
  {
    title: "MVP Delivery",
    description: "Build only what matters first—validate fast, ship smarter.",
    icon: <Rocket size={26} className="text-white" />,
  },
  {
    title: "Engineering at Scale",
    description:
      "Clean code, modular architecture, and CI/CD for long-term reliability.",
    icon: <Code size={26} className="text-white" />,
  },
];

export default function ProductDifferentiator() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-panchang max-w-3xl mx-auto font-bold mb-12">
          Modern Product Development that Moves Faster
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 text-left hover:bg-white/10 transition duration-300 min-h-44 flex flex-col justify-start"
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
