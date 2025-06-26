"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const VoltRideComponent = () => {
  return (
    <main className="text-white">
      {/* Hero Section */}
      <section className="bg-black relative py-32 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/voltride-logo.svg" // use your project logo
            alt="VoltRide Logo"
            width={160}
            height={40}
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Empowering Sustainable E-Mobility
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/80">
            A smart, scalable e-bike platform designed to make urban mobility
            effortless.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <button className="px-6 cursor-pointer py-3 bg-white text-black rounded hover:bg-gray-200 transition">
                Build Website like Volt ride
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
          VoltRide is an innovative e-mobility platform that lets customers
          explore, customize, and purchase e-bikes seamlessly. Oplyx partnered
          with VoltRide to craft a modern online experience, from custom battery
          estimators to smooth checkout flows.
        </p>
        <p className="text-white/80">
          Product Strategy • UI/UX Design • E-commerce Development • API
          Integration • Ongoing Support
        </p>
      </section>

      {/* Full Figma Showcase */}
      <section className="px-6 md:px-12 mb-20">
        <Image
          src="/success-stories/voltride-fullpage.png" // full Figma export
          alt="VoltRide Full Landing Page"
          width={1200}
          height={800}
          className="max-w-full mx-auto rounded-lg shadow-lg"
          priority
        />
        <p className="text-center text-white/50 mt-2">
          Full landing page design crafted in Figma
        </p>
      </section>

      {/* Feature Highlights */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto mb-20 space-y-20">
        {/* Section Block */}
        <div className="md:flex gap-12 items-center">
          <Image
            src="/success-stories/voltride-battery.png" // cropped section screenshot
            alt="Battery Estimator"
            width={600}
            height={400}
            className="w-full rounded-lg shadow-lg mb-6 md:mb-0"
            priority
          />
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Custom Battery Estimator
            </h3>
            <p className="text-white/80">
              An interactive tool that lets riders estimate battery range based
              on terrain and usage — driving engagement and informed purchases.
            </p>
          </div>
        </div>

        <div className="md:flex gap-12 items-center md:flex-row-reverse">
          <Image
            src="/success-stories/voltride-comparison.png"
            alt="Product Comparison"
            width={600}
            height={400}
            className="w-full rounded-lg shadow-lg mb-6 md:mb-0"
            priority
          />
          <div>
            <h3 className="text-2xl font-semibold mb-2">Product Comparison</h3>
            <p className="text-white/80">
              A clear comparison module helps users pick the perfect model,
              boosting confidence and conversions.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 px-6 md:px-12 bg-white/5 backdrop-blur-sm text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Results that Ride Far
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 text-lg">
          <div>✅ 45% Increase in conversions</div>
          <div>✅ 3x Faster page load speed</div>
          <div>✅ Great customer feedback</div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 md:px-12 text-center max-w-3xl mx-auto">
        <blockquote className="italic text-xl text-white/80 mb-4">
          “Oplyx delivered exactly what we needed — a modern platform that
          reflects our brand and makes buying e-bikes a joy. We couldn’t be
          happier with the results.”
        </blockquote>
        <span className="block font-semibold">
          — Sandeep Shrestha, Co-founder, VoltRide
        </span>
      </section>

      {/* Closing CTA */}
      <section className="py-20 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Have a Project Like VoltRide in Mind?
        </h2>
        <p className="text-white/80 mb-8">
          Let&apos;s turn your idea into a scalable, high-impact digital
          product.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <button className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition">
              Talk to Us
            </button>
          </Link>
          <Link href="/success-stories">
            <button className="px-6 py-3 border border-white rounded hover:bg-white hover:text-black transition">
              See More Projects
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default VoltRideComponent;
