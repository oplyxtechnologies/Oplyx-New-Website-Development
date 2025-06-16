"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Target, Users, Globe2 } from "lucide-react";

const stats = [
  {
    title: "Successful project launches",
    value: 20,
    icon: <Target size={40} className="text-green-400" />,
  },
  {
    title: "Experts across design, development, and DevOps",
    value: 50,
    icon: <Users size={40} className="text-green-400" />,
  },
  {
    title: "Industries served, from healthcare to e-commerce",
    value: 15,
    icon: <Globe2 size={40} className="text-green-400" />,
  },
];

export default function StatsBlock() {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: idx * 0.2 },
              },
            }}
            className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/10 transition"
          >
            <div className="mb-4 flex justify-center">{stat.icon}</div>
            <CountUpNumber value={stat.value} suffix="+" start={isInView} />
            <p className="mt-2 text-sm text-gray-300">{stat.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CountUpNumber({
  value,
  suffix = "",
  start,
}: {
  value: number;
  suffix?: string;
  start: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 15 });

  useEffect(() => {
    if (start) {
      motionValue.set(value);
    }
  }, [start, value, motionValue]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
  }, [spring]);

  return (
    <span className="text-4xl font-panchang font-bold">
      {display} {suffix}
    </span>
  );
}
