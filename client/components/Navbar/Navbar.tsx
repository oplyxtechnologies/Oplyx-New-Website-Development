"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Resources",
    submenu: [
      { label: "Blog", href: "/blog" },
      // { label: "Success Stories", href: "/success-stories" },
      // { label: "Play Book", href: "/playbook" },
    ],
  },
  {
    label: "Join Oplyx",
    submenu: [
      { label: "Fellowship", href: "/fellowship" },
      { label: "Career", href: "/careers" },
    ],
  },
  {
    label: "Services",
    submenu: [
      { label: "Gen AI Solution", href: "/services/gen-ai" },
      { label: "Product Development", href: "/services/product-development" },
      { label: "AI and Data", href: "/services/ai-data" },
      { label: "Design", href: "/services/design" },
      { label: "DevOps and Cloud", href: "/services/devops-cloud" },
      { label: "Staff Augmentation", href: "/services/staff-augmentation" },
      { label: "AWS", href: "/services/aws" },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current || currentScrollY < 10) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-[#020208]/40 backdrop-blur-3xl text-white py-4 px-6 shadow-sm"
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              priority
              src="/oplyxlogo2.svg"
              alt="Oplyx- Logo"
              width={100}
              height={100}
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-panchang tracking-wide relative">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {link.submenu ? (
                <span className="hover:text-gray-300 transition-colors cursor-pointer">
                  {link.label}
                </span>
              ) : (
                <Link
                  href={link.href || "#"}
                  className="hover:text-gray-300 transition-colors"
                >
                  {link.label}
                </Link>
              )}
              <AnimatePresence>
                {link.submenu && openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full -mt-0.5 w-56 bg-white text-black shadow z-10"
                  >
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                      >
                        <ChevronRight size={14} />
                        {sublink.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>
        <Link href="/contact">
          <div className="ml-4 hidden md:flex items-center gap-1 font-panchang font-semibold hover:bg-white px-3 py-2 hover:text-black transition-colors">
            Build With Us <ArrowUpRight size={16} />
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 px-4 space-y-4 font-panchang text-white overflow-hidden"
          >
            {navLinks.map((link) => (
              <div key={link.label} className="flex flex-col gap-4">
                {link.submenu ? (
                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.label ? null : link.label
                        )
                      }
                      className="w-full text-left hover:text-gray-300"
                    >
                      {link.label}
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="mt-1 space-y-1 bg-white/5 flex flex-col p-2 gap-2"
                        >
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.href}
                              href={sublink.href}
                              className="flex items-center gap-2 hover:text-gray-300 ml-4"
                            >
                              <ChevronRight size={14} />
                              {sublink.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href || "#"}
                    className="block hover:text-gray-300"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contact">
              <div className="flex items-center gap-1 font-semibold hover:bg-white p-2 hover:text-black transition-colors">
                Build With Us <ArrowUpRight size={16} />
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
