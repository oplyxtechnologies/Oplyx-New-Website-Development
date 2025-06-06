"use client";

import { Clock } from "lucide-react";
import Link from "next/link";

const fellowshipStatus = [
  {
    title: "Applications Open",
    info: "Coming Soon",
  },
  {
    title: "Application Deadline",
    info: "To Be Announced",
  },
  {
    title: "Program Starts",
    info: "To Be Announced",
  },
  {
    title: "Duration",
    info: "8 Weeks (Remote)",
  },
];

const FellowshipStatusSection = () => {
  return (
    <section className="bg-[#08121b] text-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          <span className="font-bold">Oplyx Fellowship</span> – Opening Soon
        </h2>

        {/* Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center mb-10">
          {fellowshipStatus.map((item, idx) => (
            <div
              key={idx}
              className="border border-white/10 bg-white/5 rounded-md p-6 text-center hover:bg-white/10 transition"
            >
              <Clock className="mx-auto mb-3 text-white" size={20} />
              <h4 className="text-sm font-semibold">{item.title}</h4>
              <p className="text-sm text-white/60 mt-1">{item.info}</p>
            </div>
          ))}
        </div>

        {/* Notification CTA */}
        <Link href="/contact">
          <button className="mt-4 px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition text-sm font-medium">
            Get Notified When It Launches →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FellowshipStatusSection;
