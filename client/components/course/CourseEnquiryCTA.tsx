"use client";

import Link from "next/link";

export default function CourseEnquiryCTA() {
  return (
    <section className="bg-gradient-to-r from-[#7feccf] to-[#4ce3ae] text-black py-20 px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Learn with Oplyx?
      </h2>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Have questions about our courses or need help choosing the right one for
        you? Our team is ready to guide you!
      </p>
      <Link href="/courses/courseenquiry">
        <button className="px-8 py-4 cursor-pointer bg-black text-[#7feccf] font-semibold rounded hover:bg-gray-900 transition">
          Make an Enquiry
        </button>
      </Link>
    </section>
  );
}
