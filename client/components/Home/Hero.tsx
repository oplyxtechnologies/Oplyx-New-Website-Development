"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className=" h-[100vh] bg-gradient-to-br from-[#327B9E]/40 to-transparent text-white py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-panchang font-bold leading-tight">
            Future-Proof Digital Solutions, Tailored to You
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-lg leading-relaxed">
            We help businesses grow with modern web development, design, and
            branding.
          </p>
          <Link href="/contact">
            <div className="inline-flex items-center gap-2 hover:bg-white hover:text-black px-5 py-3 rounded-md font-panchang font-semibold text-sm md:text-base border-2 border-white text-white transition-all duration-200">
              Build With Us <ArrowUpRight size={18} />
            </div>
          </Link>
        </div>

        {/* Image Content */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/hero.svg"
            alt="Digital globe illustration"
            width={420}
            height={420}
            className="w-[280px] md:w-[380px] lg:w-[420px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
