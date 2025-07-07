import AwsCtaSection from "@/components/aws/awsCTA";
import AWSHero from "@/components/aws/AWSHero";
import AwsWhatWeOffer from "@/components/aws/AwsWhatWeOffer";
import CertifiedAwsPartnership from "@/components/aws/CertifiedAwsPartnership";
import DevopsDrivenDelivery from "@/components/aws/DevopsDrivenDelivery";
import FlexibleEngagementModels from "@/components/aws/FlexibleEngagementModels";
import ToolsAndTechSection from "@/components/aws/ToolsAndTechSection";
import WhyPartnerAws from "@/components/aws/WhyPartnerAWS";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Oplyx AWS Partnership",
  description:
    "Explore Oplyx's partnership with AWS, offering cloud solutions, DevOps services, and flexible engagement models to drive innovation and efficiency.",
};

export default function AWSpage() {
  return (
    <div>
      <AWSHero />
      <WhyPartnerAws />
      <AwsWhatWeOffer />
      <ToolsAndTechSection />
      <CertifiedAwsPartnership />
      <DevopsDrivenDelivery />
      <FlexibleEngagementModels />
      <AwsCtaSection />
    </div>
  );
}
