"use client";

import Image from "next/image";
import Link from "next/link";

const jobs = [
  "UI/UX Designer",
  "Full-Stack Developer (React + Node)",
  "Project Manager (Remote-first)",
  "Content Strategist / Copywriter",
  "Digital Marketing Specialist",
];

const CareersOpenings = () => {
  return (
    <section className="relative bg-[#08121b] text-white py-24 px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div className="inset-0 -z-10 pointer-events-none">
        <Image
          src="/bg.svg" // your background image here
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Open Position
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base mb-12">
          We&apos;re always open to talent. If there are no current openings,
          feel free to drop your CV—we&apos;d still love to meet you.
        </p>

        <div className="space-y-4 mb-8">
          {jobs.map((role, index) => (
            <div
              key={index}
              className="group flex items-center justify-between px-6 py-4 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition duration-300 cursor-pointer"
            >
              <span className="text-left text-sm md:text-base">{role}</span>
              <button className="text-sm text-white/80 group-hover:text-white transition duration-200">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mb-24">
          <Link href="/careers/roles">
            <button className="border border-white text-white px-5 py-2 rounded hover:bg-white hover:text-black transition text-sm">
              View All Roles →
            </button>
          </Link>
          <Link href="/careers/apply">
            <button className="border border-white text-white px-5 py-2 rounded hover:bg-white hover:text-black transition text-sm">
              Send Your CV →
            </button>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            Ready to build what&apos;s next?
          </h3>
          <p className="text-gray-400 text-sm md:text-base mb-6">
            Join a company where your work has meaning and your growth has
            direction.
          </p>
          <Link href="/contact">
            <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition text-sm">
              Let&apos;s Talk →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareersOpenings;
