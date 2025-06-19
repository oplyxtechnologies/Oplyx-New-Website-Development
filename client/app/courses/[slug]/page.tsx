import {
  Book,
  Gauge,
  Globe,
  Star,
  Timer,
  PenIcon as UserPen,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import CurriculumToggle from "@/components/course/CurriculumToggle";
import Image from "next/image";

import courses from "@/components/data/course.json"; // your static JSON

// Updated type definition for Next.js 15
type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  // Await the params Promise
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return notFound();

  return (
    <main className="bg-[#0a0d12] mt-10 min-h-screen px-6 md:px-12 py-16 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[2fr_1fr] gap-12">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {course.title}
          </h1>
          <p className="text-white/80 mb-4">{course.description}</p>

          <div className="flex items-center flex-wrap gap-4 text-sm text-[#65ddbc] mb-6">
            <span className="flex items-center gap-2">
              <Star /> {course.instructor?.rating || "N/A"}/5.0
            </span>
            <span className="flex items-center gap-2">
              <Book /> {course.level}
            </span>
            <span className="flex items-center gap-2">
              <Timer /> {course.duration}
            </span>
          </div>

          <Image
            src={course.image || "/placeholder.svg?height=400&width=800"}
            alt={course.title}
            width={1200}
            height={800}
            className="w-full h-96 rounded mb-4 object-cover"
            priority
          />

          <div className="mb-10 text-white/80 leading-relaxed">
            {course.longDescription || course.description}
          </div>

          {/* ✅ Curriculum Toggle */}
          <CurriculumToggle curriculum={course.curriculum || []} />

          {/* ✅ FAQs */}
          <div>
            <h2 className="text-2xl font-bold mb-6">FAQs</h2>
            <div className="space-y-4">
              {course.faqs && course.faqs.length > 0 ? (
                course.faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-white/10 rounded-lg p-4 bg-white/5 backdrop-blur-sm transition-all"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-medium">
                      <span>{faq.q}</span>
                      <svg
                        className="ml-2 h-4 w-4 flex-shrink-0 transform transition-transform duration-300 group-open:rotate-45"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </summary>
                    <div className="overflow-hidden transition-all duration-300 mt-2 text-white/80">
                      <p>{faq.a}</p>
                    </div>
                  </details>
                ))
              ) : (
                <p className="text-white/60">
                  No FAQs available at the moment.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* ✅ RIGHT SIDEBAR */}
        <div className="relative">
          <div className="md:sticky md:top-24 border border-white/20 p-6 rounded-lg shadow-sm bg-white/5 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Rs. {course.price}</h3>
            <Link href="/courses/courseenquiry">
              <button className="w-full py-3 cursor-pointer bg-[#7feccf] text-black font-semibold rounded hover:bg-[#65ddbc] transition mb-6">
                Enroll Now
              </button>
            </Link>
            <h4 className="font-semibold mb-4">This course includes:</h4>
            <ul className="text-sm text-white/90 space-y-3 mb-6">
              <li className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Book size={20} /> Lectures
                </div>
                {course.lectures || "TBD"}
              </li>
              <li className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Timer size={20} /> Duration
                </div>
                {course.duration}
              </li>
              <li className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Gauge size={20} /> Level:
                </div>
                {course.level}
              </li>
              <li className="flex items-center justify-between">
                <div className="flex gap-2">
                  <UserPen size={20} /> Instructor:
                </div>
                {course.instructor?.name || "TBD"}
              </li>
              <li className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Globe size={20} /> Language:
                </div>
                English, Nepali
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}
