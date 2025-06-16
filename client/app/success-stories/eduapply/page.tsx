"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function EduApplyCaseStudy() {
  return (
    <main className="text-white overflow-hidden">
      {/* === HERO === */}
      <section className="bg-gradient-to-br from-[#5A4EF4] to-[#7B61FF] py-32 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            One Application, Endless Possibilities
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/80">
            EduApply helps students apply to multiple universities in one go
            with expert help — reducing stress and increasing success.
          </p>

          <p className="px-6 py-3 bg-gray-300 inline-flex text-black/60 rounded-full ">
            Site is Building
          </p>
        </div>
      </section>

      {/* === PROJECT OVERVIEW === */}
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
        <p className="text-white/80 font-medium">
          ✅ Product Development • UX Strategy • Intuitive UI • Seamless
          Multi-Step Flow
        </p>
      </section>

      {/* === FULL PAGE MOCKUP === */}
      <section className="px-6 md:px-12 mb-20">
        <Image
          src="/success-stories/eduapply-fullpage.png"
          alt="EduApply Full Page Preview"
          width={1600}
          height={1000}
          className="max-w-full mx-auto rounded-lg shadow-2xl"
        />
        <p className="text-center text-white/50 mt-4">
          A clear, trusted path to universities — Profile • Shortlist • Apply •
          Succeed.
        </p>
      </section>

      {/* === HIGHLIGHT SECTIONS === */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24 space-y-32">
        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              How It Works
            </h3>
            <p className="text-white/80 font-semibold  leading-relaxed">
              A simple 4-step journey:
            </p>
            <ul className="text-white/60 space-y-2 mt-5 font-light leading-relaxed">
              <li className="flex gap-4">
                <Check /> Create a profile
              </li>
              <li className="flex gap-4">
                {" "}
                <Check />
                Browse & shortlist universities
              </li>
              <li className="flex gap-4">
                {" "}
                <Check />
                Complete a single application
              </li>
              <li className="flex gap-4">
                {" "}
                <Check />
                Track progress and updates in real-time.
              </li>
            </ul>
          </div>
          <Image
            src="/eduapply-howitworks.png"
            alt="How It Works Timeline"
            width={600}
            height={400}
            className="flex-1 w-full rounded-lg shadow-xl"
          />
        </motion.div>

        {/* Student Success */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse items-center gap-12"
        >
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              Student Success
            </h3>
            <p className="text-white/80 leading-relaxed">
              Real success stories show how EduApply simplifies complex
              applications, turning them into easy wins for students like Aditi.
            </p>
          </div>
          <Image
            src="/eduapply-stories.png"
            alt="Student Testimonials"
            width={600}
            height={400}
            className="flex-1 w-full rounded-lg shadow-xl"
          />
        </motion.div>

        {/* Trusted Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              Trusted Partners
            </h3>
            <p className="text-white/80 leading-relaxed">
              Highlighting top partner universities builds trust and credibility
              for students and consultancies alike.
            </p>
          </div>
          <Image
            src="/eduapply-partners.png"
            alt="Partner Universities Logos"
            width={600}
            height={400}
            className="flex-1 w-full rounded-lg shadow-xl"
          />
        </motion.div>
      </section>

      {/* === PROJECT IMPACT === */}
      <section className="py-20 px-6 md:px-12 bg-white/10 backdrop-blur-sm text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Project Impact</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10 text-lg font-medium">
          <div>🎯 500+ Consultancies Onboarded</div>
          <div>🎓 6K+ Universities Listed</div>
          <div>📈 10M+ Student Applications</div>
        </div>
      </section>

      {/* === CLIENT QUOTE === */}
      <section className="py-20 px-6 md:px-12 text-center max-w-2xl mx-auto">
        <blockquote className="italic text-xl text-white/80 mb-4">
          “With Oplyx&apos;s expertise, we launched EduApply quickly and made
          the student journey stress-free. Our reach grows every day.”
        </blockquote>
        <span className="block font-semibold">
          — Aashish Pokhrel, Founder, EduApply
        </span>
      </section>

      {/* === CTA === */}
      <section className="py-20 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Your Education Platform?
        </h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Partner with Oplyx to bring your vision to life — from idea to launch,
          just like EduApply.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link href="/contact">
            <button className="px-6 cursor-pointer py-3 bg-white text-black rounded hover:bg-gray-200 font-semibold transition">
              Start Your Project
            </button>
          </Link>
          <Link href="/success-stories">
            <button className="px-6 cursor-pointer py-3 border border-white rounded hover:bg-white hover:text-black font-semibold transition">
              View More Projects
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
