"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FileText,
  Layers3,
  TerminalSquare,
  Repeat2,
  BadgeCheck,
  LineChart,
  UploadCloud,
  BookText,
  LifeBuoy,
} from "lucide-react";

const sdlcSteps = [
  {
    title: "Client Brief",
    icon: <FileText size={28} className="text-green-400" />,
  },
  {
    title: "Architecture Review",
    icon: <Layers3 size={28} className="text-green-400" />,
  },
  {
    title: "Dev Environment Setup",
    icon: <TerminalSquare size={28} className="text-green-400" />,
  },
  {
    title: "CI/CD Workflow",
    icon: <Repeat2 size={28} className="text-green-400" />,
  },
  {
    title: "Code Quality Assurance",
    icon: <BadgeCheck size={28} className="text-green-400" />,
  },
  {
    title: "Monitoring & Feedback Loop",
    icon: <LineChart size={28} className="text-green-400" />,
  },
  {
    title: "Deployment",
    icon: <UploadCloud size={28} className="text-green-400" />,
  },
  {
    title: "Documentation",
    icon: <BookText size={28} className="text-green-400" />,
  },
  {
    title: "Ongoing Support",
    icon: <LifeBuoy size={28} className="text-green-400" />,
  },
];

export default function OptimizedSdlcTimelineVertical() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 from px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl mx-auto max-w-3xl font-panchang font-bold mb-16">
          Optimized Software Development Life Cycle
        </h2>

        <div
          ref={ref}
          className="relative border-l border-white/20 pl-8 space-y-10 text-left"
        >
          {sdlcSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Green dot on timeline */}
              <div className="absolute -left-[18px] top-3 w-3 h-3 rounded-full bg-green-400 shadow-lg" />

              {/* Card Content */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition">
                <div className="flex items-center gap-3 mb-2">
                  <div>{step.icon}</div>
                  <h2 className="text-base font-semibold">{step.title}</h2>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
