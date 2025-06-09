"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Lightbulb, CheckCircle2, Clock, Ban } from "lucide-react";

const features = [
  {
    title: "Handpicked talent",
    description:
      "We match you with vetted specialists based on experience and domain fit.",
    icon: <Lightbulb size={28} className="text-green-400" />,
  },
  {
    title: "Fully trained and ready",
    description: "Our talent is project-ready — skipping onboarding delays.",
    icon: <CheckCircle2 size={28} className="text-green-400" />,
  },
  {
    title: "Short-term or long-term",
    description: "From sprints and launches to ongoing feature scaling.",
    icon: <Clock size={28} className="text-green-400" />,
  },
  {
    title: "No long-term commitments",
    description: "Flexible engagement models with no hidden overhead.",
    icon: <Ban size={28} className="text-green-400" />,
  },
];

export default function SupplementalStaffingSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-12 items-start">
        {/* Right Text Section */}
        <div className="flex-1 max-w-xl text-left lg:text-right">
          <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-4">
            Supplement your team with specialized talent
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Oplyx lets you bring in top-tier engineers and designers to
            accelerate delivery — fast, flexible, and fully integrated into your
            systems.
          </p>
        </div>

        {/* Left Cards Section */}
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
