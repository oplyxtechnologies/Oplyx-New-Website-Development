import ComplianceFrameworkSection from "@/components/Security-Compailance/ComplianceFrameworkSection";
import FinalSecurityCTA from "@/components/Security-Compailance/FinalSecurityCTA";
import LatestRead from "@/components/Security-Compailance/LatestRead";
import SecurityHero from "@/components/Security-Compailance/SecurityHero";
import SecurityPrinciples from "@/components/Security-Compailance/SecurityPrinciples";
import Image from "next/image";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Oplyx Security & Compliance",
  description:
    "Explore Oplyx's commitment to security and compliance with industry standards. Learn about our security principles, compliance frameworks, and latest updates.",
};

export default function SecurityCompliancePage() {
  return (
    <div className="relative">
      <SecurityHero />
      <ComplianceFrameworkSection />
      <SecurityPrinciples />
      <LatestRead />
      <FinalSecurityCTA />
      <div className=" absolute inset-0 -z-10 ">
        <Image
          src="/bg.svg" // ✅ Make sure this is the actual background path
          alt="Oplyx-Background"
          fill
          priority
          className="object-cover object-center -z-10"
        />
      </div>
    </div>
  );
}
