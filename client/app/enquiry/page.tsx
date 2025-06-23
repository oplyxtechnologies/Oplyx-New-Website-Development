"use client";
import DownArrowIcon from "@/components/ui/DownArrow";
import React, { useState } from "react";

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

const ContactPage = () => {
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
    <section className="min-h-screen bg-gradient-to-b from-[#1c0f4b] to-[#3b0f59] py-24 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-[30px]">Contact Enquiries</h1>
        <p className="text-gray-400">Contact Request Management Dashboard</p>

        <div className="py-10">
          <h2 className="text-xl font-semibold mb-6">Recent Enquiries</h2>
          <div className="space-y-6">
            {enquiries.map((enquiry) => (
              <div
                key={enquiry.id}
                className="bg-[#2a1b4f] p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white">
                      {enquiry.initials}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{enquiry.name}</h3>
                      <p className="text-sm text-gray-300">
                        {enquiry.email} • {enquiry.phone} • {enquiry.time}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <span
                    className="text-blue-400 cursor-pointer flex gap-2 items-center"
                    onClick={() => toggleDetails(enquiry.id)}
                  >
                    <h1 className="font-semibold">Show Enquiry Details</h1>
                    <DownArrowIcon
                      className={`text-blue-400 transition-transform duration-300 ${
                        openDetails[enquiry.id] ? "rotate-180" : ""
                      }`}
                    />
                  </span>

                  {openDetails[enquiry.id] && (
                    <div className="mt-4 text-sm bg-[#1f133f] p-4 rounded-md">
                      <div className="text-white font-medium">
                        <p>
                          <span className="font-semibold">Name:</span>{" "}
                          {enquiry.name}
                        </p>
                        <p>
                          <span className="font-semibold">Email:</span>{" "}
                          {enquiry.email}
                        </p>
                        <p>
                          <span className="font-semibold">Contact:</span>{" "}
                          {enquiry.contact}
                        </p>
                      </div>
                      <p className="mt-3 text-gray-200">{enquiry.message}</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {enquiry.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-600 px-2 py-1 rounded-full text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
