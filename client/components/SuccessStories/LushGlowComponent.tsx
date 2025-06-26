"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const LushGlowComponent = () => {
  return (
    <main className="text-white">
      {/* Hero Section */}
      <section className="bg-black relative py-32 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/lushglow-logo.svg" // your logo for LushGlow
            alt="LushGlow Logo"
            width={160}
            height={40}
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Naturally Radiant Skincare, Elevated Online
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/80">
            A modern e-commerce experience for a Nepali skincare brand rooted in
            science and nature.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <button className="px-6 cursor-pointer py-3 bg-white text-black rounded hover:bg-gray-200 transition">
                Build Website like Lush Glow
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Project Overview
        </motion.h2>
        <p className="text-white/80 mb-4">
          LushGlow is a premium Nepali skincare line blending modern science
          with traditional herbal ingredients. Oplyx crafted a clean, elegant
          e-commerce site to showcase products, educate users, and convert
          visitors effortlessly.
        </p>
        <p className="text-white/80">
          ✅ UI/UX Design • Shopify Dev • Responsive • Branding Support
        </p>
      </section>

      {/* Full Page Design */}
      <section className="px-6 md:px-12 mb-20">
        <Image
          src="/success-stories/lushglow-fullpage.png"
          alt="LushGlow Full Landing Page"
          width={1200}
          height={800}
          className="max-w-full mx-auto rounded-lg shadow-lg"
        />
        <p className="text-center text-white/50 mt-2">
          Complete landing page designed for beauty & clarity
        </p>
      </section>

      {/* Key Sections */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto mb-20 space-y-20">
        <div className="md:flex gap-12 items-center">
          <Image
            src="/lushglow-hero.png"
            alt="Hero Banner"
            width={600}
            height={400}
            className="w-full rounded-lg shadow-lg mb-6 md:mb-0"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-2">Elegant Hero Banner</h3>
            <p className="text-white/80">
              A soft, earthy hero section with product shots & clear CTA — sets
              the brand tone immediately.
            </p>
          </div>
        </div>

        <div className="md:flex gap-12 items-center md:flex-row-reverse">
          <Image
            src="/lushglow-products.png"
            alt="Product Section"
            width={600}
            height={400}
            className="w-full rounded-lg shadow-lg mb-6 md:mb-0"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Curated Product Grid
            </h3>
            <p className="text-white/80">
              Clean product cards highlight key items with easy add-to-cart flow
              — optimized for mobile shoppers.
            </p>
          </div>
        </div>

        <div className="md:flex gap-12 items-center">
          <Image
            src="/lushglow-testimonial.png"
            alt="Customer Testimonials"
            width={600}
            height={400}
            className="w-full rounded-lg shadow-lg mb-6 md:mb-0"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-2">Social Proof</h3>
            <p className="text-white/80">
              Authentic reviews and testimonials build trust and highlight real
              customer glow stories.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 px-6 md:px-12 bg-white/5 backdrop-blur-sm text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Impact & Results
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 text-lg">
          <div>✅ 40% Increase in mobile sales</div>
          <div>✅ Faster page loads & smooth UX</div>
          <div>✅ Stronger brand perception</div>
        </div>
      </section>

      {/* Client Quote */}
      <section className="py-20 px-6 md:px-12 text-center max-w-3xl mx-auto">
        <blockquote className="italic text-xl text-white/80 mb-4">
          “The Oplyx team transformed our online store into an experience that
          feels truly aligned with our brand. Customers love it, and so do we.”
        </blockquote>
        <span className="block font-semibold">
          — Rachana Thapa, Founder, LushGlow
        </span>
      </section>

      {/* Closing CTA */}
      <section className="py-20 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Want a Beauty Store Like LushGlow?
        </h2>
        <p className="text-white/80 mb-8">
          Let&apos;s design a storefront that delights, converts, and grows your
          brand.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <button className="px-6 py-3 cursor-pointer bg-white text-black rounded hover:bg-gray-200 transition">
              Talk to Us
            </button>
          </Link>
          <Link href="/success-stories">
            <button className="px-6 py-3 cursor-pointer border border-white rounded hover:bg-white hover:text-black transition">
              See More Projects
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LushGlowComponent;
