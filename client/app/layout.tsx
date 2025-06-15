import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

const Sora = localFont({
  src: [
    { path: "../public/font/Sora-Thin.woff2", weight: "100", style: "normal" },
    {
      path: "../public/font/Sora-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    { path: "../public/font/Sora-Light.woff2", weight: "300", style: "normal" },
    {
      path: "../public/font/Sora-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/Sora-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/Sora-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    { path: "../public/font/Sora-Bold.woff2", weight: "700", style: "normal" },
    {
      path: "../public/font/Sora-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-sora",
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

// ✅ SEO-Optimized Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://www.oplyx.tech"),
  title: {
    default: "Oplyx Technologies",
    template: "%s | Oplyx Technologies",
  },
  description:
    "Innovative digital solutions built for your future. We specialize in web development, UI/UX, branding, mobile apps, and more.",
  keywords: [
    "Oplyx",
    "Oplyx Technologies",
    "Web Development Nepal",
    "UI/UX Design",
    "Branding Agency",
    "Mobile App Development",
    "Digital Solutions Company",
    "Next.js Developer",
  ],
  openGraph: {
    title: "Oplyx Technologies",
    description:
      "Your digital transformation partner. Build innovative, scalable, and future-proof solutions.",
    url: "https://www.oplyx.tech",
    siteName: "Oplyx Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oplyx Technologies Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oplyx Technologies",
    description: "Tailored digital solutions for businesses that innovate.",
    site: "@OplyxTech",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.oplyx.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* ✅ Structured Data for Web Development Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Web Development",
              provider: {
                "@type": "Organization",
                name: "Oplyx Technologies",
                url: "https://www.oplyx.tech",
              },
              areaServed: {
                "@type": "Country",
                name: "Nepal",
              },
              description:
                "Custom web development solutions built with Next.js, optimized for performance, design, and scalability.",
              offers: {
                "@type": "Offer",
                url: "https://www.oplyx.tech/services",
                priceCurrency: "USD",
                price: "1000",
              },
            }),
          }}
        />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Sora.variable}font-semibold  antialiased scroll-smooth text-gray-900`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
