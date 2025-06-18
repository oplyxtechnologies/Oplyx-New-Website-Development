"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpenCheck, Laptop, PenTool, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: <BookOpenCheck size={28} className="text-[#7feccf]" />,
    title: "Enroll in a Course",
    description: "Choose a skill-focused course and sign up in minutes.",
  },
  {
    icon: <Laptop size={28} className="text-[#7feccf]" />,
    title: "Learn from Experts",
    description: "Watch engaging lessons & get mentor guidance anytime.",
  },
  {
    icon: <PenTool size={28} className="text-[#7feccf]" />,
    title: "Practice & Build",
    description: "Work on real-world projects to sharpen your skills.",
  },
  {
    icon: <BadgeCheck size={28} className="text-[#7feccf]" />,
    title: "Get Certified",
    description: "Complete the course & earn a certificate to showcase.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* LEFT: Steps */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-white/70 mb-8 max-w-md">
            Learn new skills step-by-step with a clear, proven learning journey.
          </p>

          <div className="space-y-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex items-start gap-4"
              >
                <div>{step.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-white/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="flex-1">
          <Image
            src="/courses/course-howitworks.png" // Replace with your relevant image path
            alt="How Oplyx Courses Work"
            width={600}
            height={600}
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
