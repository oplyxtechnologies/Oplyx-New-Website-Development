"use client";

import Image from "next/image";
import Link from "next/link";

const HeroCourse = () => {
  return (
    <section className="bg-gradient-to-b from-[#06C790]  to-transparent to-90% ">
      <div
        className="max-w-7xl mx-auto min-h-[80vh] md:min-h-screen
 flex flex-col md:flex-row items-center justify-between py-32 px-6 md:px-12 text-white gap-12"
      >
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter leading-tight">
            <span className="">Master Skills</span> <br />
            for Tomorrow, Today
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/80">
            Learn in-demand tech, design, and AI skills from industry experts.
            Hands-on courses to build real-world projects and advance your
            career.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#courselist">
              <button className="animated-button">
                <svg
                  viewBox="0 0 24 24"
                  className="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">View Courses</span>
                <span className="circle"></span>
                <svg
                  viewBox="0 0 24 24"
                  className="arr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1  flex justify-center md:justify-end">
          <Image
            src="/course-hero.jpg"
            alt="Oplyx Course Hero"
            height={1350}
            width={1000}
            priority
            className="max-w-full max-h-[500px] md:max-h-[650px] object-contain "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroCourse;
