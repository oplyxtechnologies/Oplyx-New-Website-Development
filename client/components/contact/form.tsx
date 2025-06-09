// components/ContactForm.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  "Gen AI Solution",
  "Product Development",
  "AI & Data",
  "Design",
  "DevOps & Cloud",
  "Staff Augmentation",
  "AWS",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    services: [] as string[],
  });

  const [submitting, setSubmitting] = useState(false);

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setSubmitting(false);
  };

  return (
    <section className="text-white py-20 px-6 md:px-12 bg-[#0a0d12]">
      <div className="max-w-4xl mx-auto text-center flex flex-col justify-center min-h-screen">
        <h2 className="text-4xl font-semibold mb-4">
          Let&apos;s build together
        </h2>
        <p className="text-white/70 mb-12 max-w-xl mx-auto">
          Whether you&apos;re a startup trying to launch a business or an
          enterprise looking to scale up, there&apos;s definitely something we
          can do for you.
        </p>

        <div className="flex flex-col gap-4 mb-4">
          <input
            placeholder="Name"
            className="bg-white/5 p-3 rounded text-white"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            placeholder="Email"
            className="bg-white/5 p-3 rounded text-white"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            placeholder="Phone"
            className="bg-white/5 p-3 rounded text-white"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>

        <textarea
          placeholder="Message"
          className="bg-white/5 p-3 w-full min-h-44 rounded text-white mb-6"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />

        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {services.map((service) => {
            const active = formData.services.includes(service);
            return (
              <button
                key={service}
                onClick={() => toggleService(service)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  active
                    ? "bg-white/80 text-black border-white/80"
                    : "bg-transparent text-white/70 border-white/20 hover:bg-white/10"
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
        <Link href="#" className="">
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="px-6 py-3 bg-white cursor-pointer text-black rounded hover:bg-gray-200 transition"
          >
            {submitting ? "Sending..." : "Send a Message"}
          </button>
        </Link>
      </div>

      <div className="grid max-w-7xl mx-auto md:grid-cols-3 gap-6 text-left text-sm text-white/80 mt-16">
        <div>
          <h4 className="text-white font-semibold mb-1">Let&apos;s Talk</h4>
          <p>Call us for a quick chit chat</p>
          <p className="mt-1 font-medium text-white">(977) 9749442103</p>
          <p className="mt-1">
            We&apos;re available Monday through Friday during Nepal working
            hours.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-1">Looking for a job?</h4>
          <p>
            There is always an exciting position open that you can apply right
            away. Don&apos;t worry even if there&apos;s not something that suits
            you immediately, we will get in touch when it becomes available!
          </p>
          <Link
            href="/careers"
            className="mt-2 inline-block text-white font-medium hover:underline"
          >
            Apply Now →
          </Link>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-1">Get a fellowship</h4>
          <p>
            Check out our fellowship page and ways to get in touch if
            you&apos;re looking to get a fellowship at Oplyx Technologies.
          </p>
          <Link
            href="/fellowship"
            className="mt-2 inline-block text-white font-medium hover:underline"
          >
            Apply Now →
          </Link>
        </div>
      </div>
    </section>
  );
}
