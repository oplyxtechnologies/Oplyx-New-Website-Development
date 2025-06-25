"use client";

import React, { useState } from "react";
import DownArrowIcon from "@/components/ui/DownArrow"; // keep this or replace with lucide `ChevronDown`

const enquiries = [
  {
    id: 1,
    initials: "AS",
    name: "Aaryan Sharma",
    email: "lazyfox916@gmail.com",
    phone: "+977 9764849910",
    time: "12m ago",
    title: "Advanced API Integration & Real-time Webhooks",
    status: "Urgent",
    statusColor: "bg-orange-500",
    progress: 75,
    tags: ["API", "Webhooks", "Enterprise"],
    barColor: "bg-orange-400",
    contact: "+977 9764849910",
    message:
      "We need help with integrating real-time webhooks for our enterprise application.",
  },
  {
    id: 2,
    initials: "MR",
    name: "Marcus Rodriguez",
    email: "marcus@securebase.com",
    phone: "+1 312-456-7890",
    time: "1h ago",
    title: "Enterprise Security Audit & Compliance Review",
    status: "Active",
    statusColor: "bg-sky-500",
    progress: 45,
    tags: ["Security", "Compliance", "Audit"],
    barColor: "bg-sky-400",
    contact: "+1 312-456-7890",
    message:
      "Requesting a security audit for our financial systems to ensure compliance.",
  },
  {
    id: 3,
    initials: "EW",
    name: "Emily Watson",
    email: "emily@datavizpro.com",
    phone: "+44 20 7946 0123",
    time: "3h ago",
    title: "Custom Analytics Dashboard Implementation",
    status: "Review",
    statusColor: "bg-emerald-500",
    progress: 90,
    tags: ["Analytics", "Dashboard", "Custom"],
    barColor: "bg-emerald-400",
    contact: "+44 20 7946 0123",
    message: "Need a custom dashboard to visualize key business metrics.",
  },
  {
    id: 4,
    initials: "DK",
    name: "David Kim",
    email: "david@cloudscale.io",
    phone: "+82 10-1234-5678",
    time: "1d ago",
    title: "Multi-tenant Architecture Consultation",
    status: "Pending",
    statusColor: "bg-gray-500",
    progress: 20,
    tags: ["Architecture", "Multi-tenant", "Scaling"],
    barColor: "bg-gray-400",
    contact: "+82 10-1234-5678",
    message: "Looking for advice on designing a scalable multi-tenant system.",
  },
];

export default function ContactPage() {
  const [openDetails, setOpenDetails] = useState<{ [key: number]: boolean }>(
    {}
  );

  const toggleDetails = (id: number) => {
    setOpenDetails((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="min-h-screen bg-[#121417] py-20 px-4 text-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-1">Contact Enquiries</h1>
        <p className="text-gray-400 mb-10">
          Manage and review all your contact requests in one place.
        </p>

        <div className="space-y-6">
          {enquiries.map((enquiry) => (
            <div
              key={enquiry.id}
              className="bg-[#1c1f24] p-6 rounded-lg border border-[#2a2d31] hover:border-emerald-500 transition"
            >
              {/* Header */}
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-white bg-emerald-600`}
                  >
                    {enquiry.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{enquiry.name}</h3>
                    <p className="text-sm text-gray-400">
                      {enquiry.email} • {enquiry.phone} • {enquiry.time}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${enquiry.statusColor}`}
                  >
                    {enquiry.status}
                  </span>
                  <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`${enquiry.barColor} h-full`}
                      style={{ width: `${enquiry.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h4 className="mt-4 font-semibold text-md text-emerald-400">
                {enquiry.title}
              </h4>

              {/* Toggle Details */}
              <button
                onClick={() => toggleDetails(enquiry.id)}
                className="mt-4 flex items-center gap-2 text-sm text-gray-300 hover:text-emerald-400 transition"
              >
                {openDetails[enquiry.id] ? "Hide" : "Show"} Enquiry Details
                <DownArrowIcon
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openDetails[enquiry.id] ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Details */}
              {openDetails[enquiry.id] && (
                <div className="mt-4 bg-[#171c23] p-4 rounded-md">
                  <p>
                    <span className="font-medium">Name:</span> {enquiry.name}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> {enquiry.email}
                  </p>
                  <p>
                    <span className="font-medium">Contact:</span>{" "}
                    {enquiry.contact}
                  </p>
                  <p className="mt-3 text-gray-300">{enquiry.message}</p>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {enquiry.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-emerald-600/10 border border-emerald-500 text-emerald-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
