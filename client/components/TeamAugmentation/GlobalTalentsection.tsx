"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, Users } from "lucide-react";

const cards = [
  {
    title: "Onsite & Remote Options",
    description: "Collaborate with us in your timezone — or ours.",
    icon: <Globe size={28} className="text-green-400" />,
  },
  {
    title: "Borderless Synergy",
    description: "Global teams with local accountability.",
    icon: <Users size={28} className="text-green-400" />,
  },
];

export default function GlobalTalentSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 text-white bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left Column (Cards) */}
        <div className="md:w-1/2 space-y-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition"
            >
              <div className="mb-3">{card.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
              <p className="text-sm text-gray-300">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Right Column (Text) */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-6">
            Flexible collaboration across borders
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            From Nepal to North America, Oplyx bridges time zones, languages,
            and cultures to deliver seamless collaboration and continuous
            delivery.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
