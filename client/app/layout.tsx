import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local"; // ✅ FIXED

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

// Panchang custom font
const panchang = localFont({
  src: [
    { path: "../public/font/Panchang-Bold.woff2" },
    { path: "../public/font/Panchang-Extrabold.woff2" },
    { path: "../public/font/Panchang-Extralight.woff2" },
    { path: "../public/font/Panchang-Light.woff2" },
    { path: "../public/font/Panchang-Medium.woff2" },
    { path: "../public/font/Panchang-Regular.woff2" },
    { path: "../public/font/Panchang-Semibold.woff2" },
    { path: "../public/font/Panchang-Variable.woff2" },
  ],
  variable: "--font-panchang", // ✅ Add variable to apply it
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oplyx Technologies",
  description: "Innovative digital solutions built for your future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  ${geistMono.variable} ${panchang.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
