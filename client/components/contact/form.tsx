"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const service = [
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
    phoneNumber: "",
    message: "",
    service: [] as string[],
  });

  const [submitting, setSubmitting] = useState(false);
  const [status] = useState("");

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.service.includes(service);
      return {
        ...prev,
        service: exists
          ? prev.service.filter((s) => s !== service)
          : [...prev.service, service],
      };
    });
  };

  console.log("Form Data:", formData);

  const handleSubmit = async () => {
    setSubmitting(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/enquiry/submit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
          service: [],
        });
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch {
      toast.error("Failed to send. Please try again later.");
    } finally {
      setSubmitting(false);
    }
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
            value={formData.name}
            placeholder="Name"
            className="bg-white/5 p-3 rounded text-white"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            value={formData.email}
            placeholder="Email"
            className="bg-white/5 p-3 rounded text-white"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            value={formData.phoneNumber}
            placeholder="Phone"
            className="bg-white/5 p-3 rounded text-white"
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
          />
        </div>

        <textarea
          value={formData.message}
          placeholder="Message"
          className="bg-white/5 p-3 w-full min-h-44 rounded text-white mb-6"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />

        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {service.map((service) => {
            const active = formData.service.includes(service);
            return (
              <button
                key={service}
                type="button"
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

        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="px-6 py-3 bg-white cursor-pointer text-black rounded hover:bg-gray-200 transition"
        >
          {submitting ? "Sending..." : "Send a Message"}
        </button>

        {status && <p className="mt-4 text-sm text-white/70">{status}</p>}
      </div>

      {/* Rest of your static contact info blocks stay the same */}
    </section>
  );
}
