import AwsPartnership from "@/components/devopscloud/Awspartnership";
import CloudValuePropositions from "@/components/devopscloud/CloudValuePropositions";
import DevOpsCloudHero from "@/components/devopscloud/DevopsCloudHero";
import DevOpsCloudTestimonial from "@/components/devopscloud/DevopsCloudTestimonial";
import DevOpsCtaSection from "@/components/devopscloud/DevopsCTASection";
import DevOpsFeatures from "@/components/devopscloud/DevopsFeatures";
import DevOpsToolsTabs from "@/components/devopscloud/DevOpsToolsTabs";
import InfraLoopSection from "@/components/devopscloud/InfraLoopSection";
import OptimizedSdlcTimeline from "@/components/devopscloud/OptimizedSdlcTimeline";
import Image from "next/image";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Oplyx DevOps Cloud Services",
  description:
    "Explore Oplyx's DevOps Cloud Services, offering optimized SDLC, cloud value propositions, and a partnership with AWS for enhanced efficiency and innovation.",
};

export default function DevopsCloudPage() {
  return (
    <div className="relative bg-gradient-to-t from-[#0b1b26] from-0% to-[#542525]/0 to-10% ">
      <DevOpsCloudHero />
      <DevOpsCloudTestimonial />
      <AwsPartnership />
      <InfraLoopSection />
      <DevOpsFeatures />
      <CloudValuePropositions />
      <OptimizedSdlcTimeline />
      <DevOpsToolsTabs />
      <DevOpsCtaSection />
      <div>
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
    </div>
  );
}
