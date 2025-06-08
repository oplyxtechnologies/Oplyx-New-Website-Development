"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BrainCircuit,
  PencilRuler,
  Rocket,
  Repeat,
  ShipWheel,
} from "lucide-react";

const processSteps = [
  {
    icon: <BrainCircuit size={26} className="text-white" />,
    title: "Discovery & Research",
    description: "Understand your market, users, and goals.",
  },
  {
    icon: <PencilRuler size={26} className="text-white" />,
    title: "UI/UX Wireframes",
    description: "Sketch the core journeys and interactions.",
  },
  {
    icon: <Rocket size={26} className="text-white" />,
    title: "MVP Build",
    description: "Develop the first version with essential features.",
  },
  {
    icon: <Repeat size={26} className="text-white" />,
    title: "Iteration & Feedback",
    description: "Improve quickly with real user input.",
  },
  {
    icon: <ShipWheel size={26} className="text-white" />,
    title: "Launch & Beyond",
    description: "Deploy with DevOps support and scale confidently.",
  },
];

export default function ProductProcess() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="text-white py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto ">
        <h2 className="text-3xl md:text-4xl text-center font-panchang font-bold mb-12">
          How We Work
        </h2>

        <div ref={ref} className="relative border-l border-white/10 pl-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10 relative"
            >
              {/* Dot */}
              <div className="w-4 h-4 bg-white rounded-full absolute -left-2 top-1.5 border border-[#08121b]" />

              {/* Content */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition">
                <div className="flex items-center gap-3 mb-3">
                  {step.icon}
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
