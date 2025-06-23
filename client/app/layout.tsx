import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";

// === FONTS ===
const Sora = localFont({
  src: [
    { path: "../public/font/Sora-Thin.woff2", weight: "100" },
    { path: "../public/font/Sora-ExtraLight.woff2", weight: "200" },
    { path: "../public/font/Sora-Light.woff2", weight: "300" },
    { path: "../public/font/Sora-Regular.woff2", weight: "400" },
    { path: "../public/font/Sora-Medium.woff2", weight: "500" },
    { path: "../public/font/Sora-SemiBold.woff2", weight: "600" },
    { path: "../public/font/Sora-Bold.woff2", weight: "700" },
    { path: "../public/font/Sora-ExtraBold.woff2", weight: "800" },
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

// === DEFAULT SEO ===
export const metadata: Metadata = {
  metadataBase: new URL("https://www.oplyx.tech"),
  title: {
    default: "Oplyx Technologies",
    template: "%s | Oplyx Technologies",
  },
  description:
    "Innovative digital solutions built for your future. Specializing in web development, UI/UX, branding, mobile apps, and more.",
  openGraph: {
    title: "Oplyx Technologies",
    description:
      "Your digital transformation partner — build scalable solutions.",
    url: "https://www.oplyx.tech",
    siteName: "Oplyx Technologies",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oplyx Technologies",
    description: "Tailored digital solutions for your business.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// === ROOT LAYOUT ===
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ✅ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Oplyx Technologies",
              url: "https://www.oplyx.tech",
              logo: "https://www.oplyx.tech/logo192.png",
              description:
                "Innovative digital solutions — web development, branding, UI/UX, and mobile apps in Nepal.",
            }),
          }}
        />

        {/* ✅ Google Tag Manager SCRIPT */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T2K57XVZ');
            `,
          }}
        />

        {/* ✅ Google Analytics SCRIPT */}
        <Script
          id="gtag-script"
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P53G7E45SK"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P53G7E45SK');
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Sora.variable} font-semibold antialiased text-gray-900`}
      >
        {/* ✅ GTM NOSCRIPT fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T2K57XVZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navbar />
        {children}
        <Toaster position="top-center" />
        <Footer />
      </body>
    </html>
  );
}
