"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ChasingHorizonCaseStudy() {
  return (
    <main className="text-white">
      {/* Hero */}
      <section className="bg-black relative py-32 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/chasinghorizon-logo.svg" // Add your Chasing Horizon logo
            alt="Chasing Horizon Logo"
            width={160}
            height={40}
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Adventure Bookings, Simplified.
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/80">
            A custom travel & booking portal built to help travelers plan
            unforgettable journeys.
          </p>
          <Link href="/contact">
            <button className="px-6 py-3 cursor-pointer bg-white text-black rounded hover:bg-gray-200 transition">
              Build Project like Chasing Horizon
            </button>
          </Link>
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
          Chasing Horizon Tours & Travels wanted a modern platform to let
          travelers search, compare, and book flights, hotels, and activities in
          one smooth flow. We crafted a clean UI, powerful search integrations,
          and intuitive booking experience.
        </p>
        <p className="text-white/80">
          ✅ Product Dev • UI/UX • API Integrations • Booking Engine
        </p>
      </section>

      {/* Full Page */}
      <section className="px-6 md:px-12 mb-20">
        <Image
          src="/success-stories/chasinghorizon-fullpage.png"
          alt="Chasing Horizon Full Page"
          width={1200}
          height={800}
          className="max-w-full mx-auto rounded-lg shadow-lg"
        />
        <p className="text-center text-white/50 mt-2">
          Complete booking experience: search, compare, and book with
          confidence.
        </p>
      </section>

      {/* Key Highlights */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto mb-20 space-y-20">
        <div className="md:flex gap-12 items-center">
          <Image
            src="/chasinghorizon-search.png" // Add image of search tool section
            alt="Booking Tool"
            width={600}
            height={400}
            className="w-full rounded-lg shadow-lg mb-6 md:mb-0"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Smart Search & Booking
            </h3>
            <p className="text-white/80">
              A responsive booking widget for flights & stays, with clear
              filters and user-friendly flow.
            </p>
          </div>
        </div>

        <div className="md:flex gap-12 items-center md:flex-row-reverse">
          <Image
            src="/chasinghorizon-destinations.png" // Add image of destinations grid
            alt="Popular Destinations"
            width={600}
            height={400}
            className="w-full rounded-lg shadow-lg mb-6 md:mb-0"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Popular Destinations
            </h3>
            <p className="text-white/80">
              Clean cards showcase the most visited cities & packages — easy to
              explore & compare.
            </p>
          </div>
        </div>

        <div className="md:flex gap-12 items-center">
          <Image
            src="/chasinghorizon-reviews.png" // Add image of review cards
            alt="Customer Reviews"
            width={600}
            height={400}
            className="w-full rounded-lg shadow-lg mb-6 md:mb-0"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-2">Traveler Reviews</h3>
            <p className="text-white/80">
              Social proof with real feedback boosts trust & drives bookings.
              Designed for clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 px-6 md:px-12 bg-white/5 backdrop-blur-sm text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Project Impact</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 text-lg">
          <div>✅ 2x increase in bookings</div>
          <div>✅ Seamless cross-device experience</div>
          <div>✅ Lower bounce rate</div>
        </div>
      </section>

      {/* Client Quote */}
      <section className="py-20 px-6 md:px-12 text-center max-w-3xl mx-auto">
        <blockquote className="italic text-xl text-white/80 mb-4">
          “Working with Oplyx made it so easy to launch a polished booking site.
          Customers love it, and we&apos;ve seen great growth.”
        </blockquote>
        <span className="block font-semibold">
          — Nikum Singh, Founder, Chasing Horizon
        </span>
      </section>

      {/* Closing CTA */}
      <section className="py-20 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Want a Booking Platform Like Chasing Horizon?
        </h2>
        <p className="text-white/80 mb-8">
          Let&apos;s build a seamless travel experience together.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <button className="px-6 py-3 cursor-pointer bg-white text-black rounded hover:bg-gray-200 transition">
              Start Your Project
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
}
