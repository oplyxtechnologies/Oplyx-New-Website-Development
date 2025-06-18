"use client";

import { useState } from "react";

export default function StudentEnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/student-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        alert("Thank you! We’ll get in touch soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        });
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Please try again later.");
    }
    setSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-[#0a0d12] text-white px-6 md:px-12 py-24 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white/5 backdrop-blur-sm p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Course Enquiry Form
        </h1>
        <p className="text-center text-white/70 mb-8">
          Fill out your details and we&apos;ll get back to you with course
          guidance.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-white/5 text-white placeholder-white/50"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-white/5 text-white placeholder-white/50"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-white/5 text-white placeholder-white/50"
          />
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-white/5 text-white placeholder-white/50"
          >
            <option className="text-black/40" value="">
              Select Course
            </option>
            <option className="text-black/70" value="MERN Stack">
              MERN Stack
            </option>
            <option className="text-black/70" value="Graphic Design">
              Graphic Design
            </option>
            <option className="text-black/70" value="UI/UX Design">
              UI/UX Design
            </option>
            <option className="text-black/70" value="AI & Data">
              AI & Data
            </option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message (optional)"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/5 text-white placeholder-white/50"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 bg-[#7feccf] text-black font-semibold rounded hover:bg-[#65ddbc] transition"
          >
            {submitting ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </main>
  );
}
