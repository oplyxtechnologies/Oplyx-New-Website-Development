"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#327B9E]/40 to-transparent text-white px-6 md:px-12 flex items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-between">
        {/* Text Content */}
        <div className=" space-y-6 mt-26 text-center ">
          <h1 className=" text-2xl md:text-4xl max-w-2xl mx-auto mt-26 font-panchang font-bold leading-tight">
            Future-Proof Digital Solutions, Tailored to You
          </h1>
          <p className=" max-w-2xl text-xs md:text-base  leading-relaxed mx-auto ">
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
        <div className="w-full hidden md:flex justify-center">
          <Image
            src="/hero.png"
            alt="Oplyx-Digital globe illustration"
            width={1010}
            height={1010}
            className="w-full "
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
