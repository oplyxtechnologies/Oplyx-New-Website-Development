"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, X as Twitter } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  {
    heading: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "Security and Compliance", href: "/security-compliance" },
    ],
  },
  {
    heading: "Services",
    links: [
      { name: "Gen AI Solutions", href: "/services/gen-ai" },
      { name: "Product Development", href: "/services/product-development" },
      { name: "AI & Data", href: "/services/ai-data" },
      { name: "Design", href: "/services/design" },
      { name: "DevOps and Cloud", href: "/services/devops-cloud" },
      { name: "Staff Augmentation", href: "/services/staff-augmentation" },
      { name: "AWS", href: "/services/aws" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Success Stories", href: "/success-stories" },
      // { name: "Playbook", href: "/playbook" },
    ],
  },
  {
    heading: "Work With Us",
    links: [
      { name: "Career", href: "/careers" },
      { name: "Fellowship", href: "/fellowship" },
      // { name: "Life At Oplyx", href: "/life-at-oplyx" },
    ],
  },
  // {
  //   heading: "More",
  //   links: [
  //     { name: "Oplyx Brand", href: "/brand" },
  //     { name: "Education Mission", href: "/education" },
  //     { name: "Student Partnership", href: "/student-partnership" },
  //   ],
  // },
];

const Footer = () => {
  return (
    <footer className="bg-[#06141f] text-white px-6 py-16 md:px-12 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 font-sans">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              loading="lazy"
              width={100}
              height={100}
              src="/oplyxlogo2.svg"
              alt="Oplyx- Logo"
              className="w-24"
            />
          </Link>
          <p className="text-white/80 mt-4">Innovate. Elevate. Dominate.</p>
        </div>

        {/* Footer Links */}
        {footerLinks.map((section) => (
          <div key={section.heading}>
            <h2 className="font-semibold text-white mb-3">{section.heading}</h2>
            <ul className="space-y-2 text-white/70">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Connect With Us */}
        <div>
          <h2 className="font-semibold text-white mb-3">Connect With Us</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="https://www.instagram.com/oplyxtechnologies/"
                target="_blank"
                className="flex items-center gap-2 text-white/70 hover:text-white transition"
              >
                <Instagram size={16} /> Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/profile.php?id=61572351668846"
                target="_blank"
                className="flex items-center gap-2 text-white/70 hover:text-white transition"
              >
                <Facebook size={16} /> Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/oplyxtech"
                target="_blank"
                className="flex items-center gap-2 text-white/70 hover:text-white transition"
              >
                <Linkedin size={16} /> LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com/oplyxtech"
                target="_blank"
                className="flex items-center gap-2 text-white/70 hover:text-white transition"
              >
                <Twitter size={16} /> X
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/50 text-xs font-sans">
        © 2025 Oplyx Technologies. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
