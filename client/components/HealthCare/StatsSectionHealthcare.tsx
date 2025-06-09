"use client";

import { Brain, Users2, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    icon: <Brain className="text-green-400" size={28} />,
    title: 10,
    suffix: "+",
    subtitle: "Healthcare projects delivered",
  },
  {
    icon: <Users2 className="text-green-400" size={28} />,
    title: 50,
    suffix: "+",
    subtitle: "Engineers & domain experts",
  },
  {
    icon: <BarChart3 className="text-green-400" size={28} />,
    title: 450000,
    suffix: "+",
    subtitle: "Users impacted globally",
  },
];

const StatsSectionHealthcare = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition"
          >
            <div className="flex justify-center mb-4">{stat.icon}</div>
            <h3 className="text-3xl font-bold font-panchang">
              {inView && (
                <CountUp
                  end={stat.title}
                  duration={2}
                  separator=","
                  suffix={stat.suffix}
                />
              )}
            </h3>
            <p className="text-sm text-gray-300 mt-1">{stat.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSectionHealthcare;
