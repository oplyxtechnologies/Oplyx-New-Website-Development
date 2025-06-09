"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  LayoutDashboard,
  MonitorSmartphone,
  Palette,
  MousePointerClick,
  Layers,
} from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    description: "Wireframes, flows, and interfaces that keep users engaged.",
    icon: <LayoutDashboard className="text-green-400" size={28} />,
  },
  {
    title: "Web & App Design",
    description: "Modern, responsive designs tailored for every screen.",
    icon: <MonitorSmartphone className="text-green-400" size={28} />,
  },
  {
    title: "Brand Identity",
    description: "Logo, colors, typography, and brand kits that resonate.",
    icon: <Palette className="text-green-400" size={28} />,
  },
  {
    title: "Prototyping",
    description:
      "High-fidelity clickable prototypes for stakeholder validation.",
    icon: <MousePointerClick className="text-green-400" size={28} />,
  },
  {
    title: "Design Systems",
    description:
      "Reusable components and tokens to scale consistently across teams.",
    icon: <Layers className="text-green-400" size={28} />,
  },
];

export default function DesignServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 text-white bg-transparent">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl md:text-4xl mx-auto text-center max-w-3xl font-panchang font-bold mb-12">
          Comprehensive Digital Design Services
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
