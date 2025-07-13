"use client";

import Image from "next/image";
import Link from "next/link";

const completedProjects = [
  {
    title: "Oplyx Technologies Website",
    description:
      "Official portfolio and service site for Oplyx. Features smooth UI, custom animations, SEO-optimized blog, and scalable backend.",
    image: "/completed/oplyx-cover.png",
    link: "https://www.oplyx.tech",
  },
  {
    title: "Meridian Poly Clinic",
    description:
      "A comprehensive healthcare platform for Meridian Poly Clinic. Features appointment booking, doctor profiles, and patient management.",
    image: "/completed/meridian.png",
    link: "https://meridianpolyclinic.com.np/",
  },
  {
    title: "Pacific Hunt ",
    description:
      "A job board platform connecting job seekers with employers in the Pacific region. Features job listings, applications, and employer profiles.",
    image: "/completed/pacific.png",
    link: "https://pacifichunt.com/",
  },
  {
    title: "Gentianes Solutions Ltd. - Much Better Adventures",
    description:
      "A travel booking platform for outdoor adventures. Features trip listings, booking management, and user reviews.",
    image: "/completed/adventure.png",
    link: "https://www.muchbetteradventures.com/",
  },
  {
    title: "Stuzip A wide variety of AI Books",
    description:
      "A comprehensive collection of AI books covering various topics and applications. Features book listings, reviews, and recommendations.",
    image: "/completed/stuzip.png",
    link: "https://ebook-inky-gamma.vercel.app/",
  },
];

export default function CompletedProjects() {
  return (
    <main className="min-h-screen bg-[#0a0d12] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mt-10 mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          Completed Projects
        </h1>

        <div className="space-y-10">
          {completedProjects.map((project, idx) => (
            <Link
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:scale-[1.02] transition transform"
            >
              <div className="grid md:grid-cols-[2fr_3fr]">
                <div className="relative aspect-video md:aspect-auto h-full w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm">{project.description}</p>
                  <span className="inline-block mt-4 text-sm text-[#7feccf]">
                    Visit Live Site →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
