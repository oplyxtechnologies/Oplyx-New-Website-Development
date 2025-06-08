"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  {
    title: "Product Strategy",
    tools: "Roadmapping, feature prioritization",
  },
  {
    title: "UI/UX Design",
    tools: "Figma, wireframes, prototypes",
  },
  {
    title: "Frontend Dev",
    tools: "React, Next.js",
  },
  {
    title: "Backend Dev",
    tools: "Node.js, Python, Express",
  },
  {
    title: "QA & Testing",
    tools: "Unit, integration, E2E",
  },
  {
    title: "DevOps",
    tools: "CI/CD, Docker, AWS",
  },
];

export default function ProductSkillsGrid() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-4">
          Skills at a Glance
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-12">
          We bring cross-functional excellence to every build.
        </p>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition"
            >
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-gray-300">{skill.tools}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
