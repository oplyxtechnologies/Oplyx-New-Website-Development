"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogPost() {
  return (
    <section className="text-white px-6 md:px-12 py-20 max-w-4xl mx-auto">
      {/* Blog Header */}
      <div className="mb-12">
        <p className="text-green-400 font-medium text-sm uppercase">
          Featured Story
        </p>
        <h1 className="text-3xl md:text-5xl font-bold font-panchang leading-tight mt-2">
          Oplyx Achieves SOC 2 Type II Compliance
        </h1>
        <p className="mt-4 text-white/80 text-sm">
          Kathmandu, Nepal – Wednesday, February 14, 2025 – Oplyx Technologies
          announced today that it has successfully achieved SOC 2 Type II
          compliance.
        </p>
        <p className="text-xs text-white/50 mt-2">Posted on June 6, 2025</p>
      </div>

      {/* Banner */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-12">
        <Image
          src="/blog/soc2-banner.png"
          alt="SOC 2 Compliance"
          width={800}
          height={420}
          className="w-full object-cover"
        />
      </div>

      {/* Content */}
      <article className="space-y-6 text-white/90 leading-relaxed text-base">
        <p>
          Achieving SOC 2 Type II compliance is a significant step forward in
          our commitment to maintaining world-class security standards. This
          report, governed by the American Institute of Certified Public
          Accountants (AICPA), evaluates how effectively we manage our data
          protection policies.
        </p>

        <p>
          This milestone validates our ongoing work in building secure,
          privacy-first software that safeguards sensitive customer data. Oplyx
          has implemented robust infrastructure, proactive monitoring,
          encryption, and access control across all systems.
        </p>

        <p>
          “Security isn&apos;t just a box we check — it&apos;s embedded in how
          we build,” said our CTO, Aayush Sharma. “This certification reinforces
          our culture of compliance and engineering precision.”
        </p>

        <h2 className="text-xl md:text-2xl font-semibold pt-6">About SOC 2</h2>
        <p>
          SOC 2 reports provide assurances to clients about how service
          providers manage data with respect to security, availability,
          processing integrity, confidentiality, and privacy.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold pt-6">
          About Oplyx Technologies
        </h2>
        <p>
          Oplyx helps startups and enterprises build and scale secure digital
          products. With clients across healthcare, fintech, and SaaS, our
          mission is to deliver innovation without compromising trust.
        </p>

        <div className="pt-8">
          <Image
            src="/blog/soc2-cert.png"
            alt="SOC2 Cert"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>

        <p className="mt-6 text-sm text-white/60 text-center">
          For more information or audit requests, contact us at{" "}
          <a className="underline" href="mailto:security@oplyx.tech">
            security@oplyx.tech
          </a>
        </p>
      </article>

      {/* Share Section */}
      <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60">
        <p className="mb-2 font-semibold">Share this article:</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:underline">
            Facebook
          </Link>
          <Link href="#" className="hover:underline">
            LinkedIn
          </Link>
          <Link href="#" className="hover:underline">
            X (Twitter)
          </Link>
        </div>
      </div>
    </section>
  );
}
