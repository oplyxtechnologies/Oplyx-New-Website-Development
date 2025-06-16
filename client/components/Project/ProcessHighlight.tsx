"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Lightbulb, Layout, Code, UploadCloud } from "lucide-react"; // example icons

const steps = [
  {
    title: "Discovery & Research",
    description: "Align on vision, market fit, and tech feasibility.",
    icon: <Lightbulb size={20} className="text-green-400" />,
  },
  {
    title: "Prototyping & Design",
    description: "Rapid wireframes, UI concepts, and user testing.",
    icon: <Layout size={20} className="text-green-400" />,
  },
  {
    title: "Build & Iterate",
    description: "Agile sprints with clear milestones and demos.",
    icon: <Code size={20} className="text-green-400" />,
  },
  {
    title: "Launch & Support",
    description: "Deployment, monitoring, and iterative improvements.",
    icon: <UploadCloud size={20} className="text-green-400" />,
  },
];

export default function ProcessHighlight() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-6 md:px-12 text-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold">
          How We Bring Projects to Life
        </h2>
      </div>

      <div ref={ref} className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/20" />

        <div className="space-y-12 pl-12 md:pl-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition"
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-8 top-6 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0c1117]" />

              {/* Content */}
              <div className="flex items-start gap-4">
                <div className="mt-1">{step.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-300">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
