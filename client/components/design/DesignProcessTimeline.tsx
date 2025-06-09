"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FileText,
  Search,
  Palette,
  BotMessageSquare,
  SendHorizonal,
} from "lucide-react";

const steps = [
  {
    title: "Discovery & Briefing",
    description: "Understanding your goals, audience, and vision.",
    icon: <FileText className="text-green-400" size={28} />,
  },
  {
    title: "User Research & Wireframes",
    description: "Structure and flow based on real user needs.",
    icon: <Search className="text-green-400" size={28} />,
  },
  {
    title: "Visual Design",
    description: "Crafting layouts, colors, icons, and interfaces.",
    icon: <Palette className="text-green-400" size={28} />,
  },
  {
    title: "Prototyping & Feedback",
    description: "Clickable prototypes tested with your team and users.",
    icon: <BotMessageSquare className="text-green-400" size={28} />,
  },
  {
    title: "Handoff & Support",
    description: "Developer-ready assets with ongoing collaboration.",
    icon: <SendHorizonal className="text-green-400" size={28} />,
  },
];

export default function DesignProcessTimeline() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 text-white bg-transparent">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-3xl md:text-4xl text-center mx-auto max-w-3xl font-panchang font-bold mb-12">
          Strategic. Collaborative. Pixel-Perfect.
        </h2>

        <div
          ref={ref}
          className="space-y-10 max-w-3xl mx-auto border-l border-white/20 pl-6 relative"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[30px] top-6 w-3 h-3 bg-green-400 rounded-full shadow-md" />

              <div className="flex items-start gap-4">
                <div className="mt-1">{step.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
