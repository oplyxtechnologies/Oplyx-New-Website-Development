"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BookOpenCheck,
  Globe2,
  Lightbulb,
  HeartPulse,
  Sprout,
  Brain,
} from "lucide-react";

const features = [
  {
    title: "Continuous Learning",
    description: "Weekly knowledge shares and workshops.",
    icon: <BookOpenCheck size={28} className="text-green-400" />,
  },
  {
    title: "Global Exposure",
    description:
      "Collaboration with clients across industries and geographies.",
    icon: <Globe2 size={28} className="text-green-400" />,
  },
  {
    title: "Empowering Leadership",
    description: "Mentorship programs for engineers to grow into leaders.",
    icon: <Lightbulb size={28} className="text-green-400" />,
  },
  {
    title: "Work-life Balance",
    description: "Flexible schedules and mental health initiatives.",
    icon: <HeartPulse size={28} className="text-green-400" />,
  },
  {
    title: "Opportunities for Growth",
    description: "Career roadmaps and promotion pathways.",
    icon: <Sprout size={28} className="text-green-400" />,
  },
  {
    title: "Product Mindset",
    description: "Our teams think in features, outcomes, and ROI.",
    icon: <Brain size={28} className="text-green-400" />,
  },
];

export default function TeamCultureSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-panchang mb-4">
          We invest in people — so they invest in your product
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-12 max-w-3xl mx-auto">
          We create a culture of growth, mentorship, and product ownership — so
          our teams care like co-founders.
        </p>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition"
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
