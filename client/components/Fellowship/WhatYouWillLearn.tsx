"use client";

import {
  Users,
  ClipboardList,
  Laptop,
  RefreshCcw,
  FolderOpen,
  Mic,
} from "lucide-react";

const learningPoints = [
  {
    icon: Users,
    title: "Real Project Collaboration",
    desc: "Work side-by-side with the Oplyx team on actual projects that solve real problems.",
  },
  {
    icon: ClipboardList,
    title: "Guided Mentorship",
    desc: "Learn from experienced designers and developers with weekly check-ins and feedback.",
  },
  {
    icon: Laptop,
    title: "Tool-Based Learning",
    desc: "Master tools like Next.js, Tailwind CSS, Figma, Git, and more by using them.",
  },
  {
    icon: RefreshCcw,
    title: "Real-World Workflow",
    desc: "Practice agile development, design handoff, and client-ready communication.",
  },
  {
    icon: FolderOpen,
    title: "Portfolio & Confidence Building",
    desc: "Walk away with portfolio-ready work, real skills, and the confidence to go pro.",
  },
  {
    icon: Mic,
    title: "Soft Skills & Communication",
    desc: "Develop your communication, teamwork, and presentation skills — essential for any career path.",
  },
];

const WhatYouWillLearn = () => {
  return (
    <section className="bg-[#08121b] text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">
          What You&apos;ll Learn
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {learningPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 border min-h-64 border-white/10 rounded-lg p-6 text-center w-full max-w-xs hover:bg-white/10 transition"
            >
              <item.icon className="mb-4 mx-auto text-white" size={24} />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;
