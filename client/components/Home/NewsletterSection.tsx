"use client";

import { useState } from "react";
import Image from "next/image";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <section className="relative bg-[#08121b] text-white py-24 px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div className="inset-0 -z-10">
        <Image
          src="/bg.svg"
          alt="Newsletter Background"
          fill
          className="object-cover  pointer-events-none"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-4">
          Join 500+ professionals <br /> getting fresh insights
        </h2>
        <p className="text-gray-400 mb-8">No spam, just smart updates.</p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter Your Email Address"
            className="px-4 py-2 w-full sm:w-80 rounded border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-200 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
