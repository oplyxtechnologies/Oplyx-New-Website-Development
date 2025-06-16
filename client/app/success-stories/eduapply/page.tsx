"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EduApplyCaseStudy() {
  return (
    <main className="text-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#5A4EF4] to-[#7B61FF] py-32 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            One Application, Endless Possibilities
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/80">
            EduApply helps students apply to multiple universities in one go
            with expert help — reducing stress and increasing success.
          </p>
          <Link href="#">
            <button className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition">
              Visit Live Site
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
          EduApply streamlines the student application journey by combining
          guided profiles, curated shortlists, and a single application for
          multiple universities — all with real consultant guidance.
        </p>
        <p className="text-white/80">
          ✅ Product Dev • UX Strategy • Clean UI • Seamless Multi-Step Flow
        </p>
      </section>

      {/* Full Page Image */}
      <section className="px-6 md:px-12 mb-20">
        <Image
          src="/success-stories/eduapply-fullpage.png"
          alt="EduApply Full Page"
          width={1200}
          height={800}
          className="max-w-full mx-auto rounded-lg shadow-lg"
        />
        <p className="text-center text-white/50 mt-2">
          A clear, trusted path to universities — profile, shortlist, apply,
          succeed.
        </p>
      </section>

      {/* Highlights */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto mb-20 space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:flex gap-12 items-center"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-2">How It Works</h3>
            <p className="text-white/80">
              A simple 4-step timeline: Create profile → Browse & shortlist →
              Complete one form → Track progress & updates.
            </p>
          </div>
          <Image
            src="/eduapply-howitworks.png" // Optional: export just the timeline part
            alt="How It Works Timeline"
            width={600}
            height={400}
            className="w-full rounded-lg shadow-lg mt-6 md:mt-0"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:flex gap-12 items-center md:flex-row-reverse"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-2">Student Success</h3>
            <p className="text-white/80">
              Real testimonials highlight how EduApply turns complex
              applications into wins for students like Aditi.
            </p>
          </div>
          <Image
            src="/eduapply-stories.png" // Optional: export just the reviews carousel
            alt="Student Stories"
            width={600}
            height={400}
            className="w-full rounded-lg shadow-lg mt-6 md:mt-0"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:flex gap-12 items-center"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-2">Trusted Partners</h3>
            <p className="text-white/80">
              Highlighting partner universities builds trust and credibility for
              both students and consultancies.
            </p>
          </div>
          <Image
            src="/eduapply-partners.png" // Optional: export partner logos section
            alt="Partner Universities"
            width={600}
            height={400}
            className="w-full rounded-lg shadow-lg mt-6 md:mt-0"
          />
        </motion.div>
      </section>

      {/* Impact */}
      <section className="py-20 px-6 md:px-12 bg-white/5 backdrop-blur-sm text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Project Impact</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 text-lg">
          <div>✅ 500+ Consultancies Onboarded</div>
          <div>✅ 6K+ Universities Listed</div>
          <div>✅ 10M+ Student Applications</div>
        </div>
      </section>

      {/* Client Quote */}
      <section className="py-20 px-6 md:px-12 text-center max-w-3xl mx-auto">
        <blockquote className="italic text-xl text-white/80 mb-4">
          “With Oplyx&apos;s expertise, we launched EduApply fast and made the
          student journey stress-free. Our network is growing every day.”
        </blockquote>
        <span className="block font-semibold">
          — Aashish Pokhrel, Founder, EduApply
        </span>
      </section>

      {/* Closing CTA */}
      <section className="py-20 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Your Education Platform?
        </h2>
        <p className="text-white/80 mb-8">
          Partner with Oplyx to bring your idea to life, just like EduApply.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <button className="px-6 py-3 cursor-pointer bg-white text-black rounded hover:bg-gray-200 transition">
              Start Your Project
            </button>
          </Link>
          <Link href="/success-stories">
            <button className="px-6 py-3 cursor-pointer border border-white rounded hover:bg-white hover:text-black transition">
              View More Projects
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
