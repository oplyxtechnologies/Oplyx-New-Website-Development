import AwsCtaSection from "@/components/aws/awsCTA";
import AWSHero from "@/components/aws/AWSHero";
import AwsWhatWeOffer from "@/components/aws/AwsWhatWeOffer";
import CertifiedAwsPartnership from "@/components/aws/CertifiedAwsPartnership";
import DevopsDrivenDelivery from "@/components/aws/DevopsDrivenDelivery";
import FlexibleEngagementModels from "@/components/aws/FlexibleEngagementModels";
import ToolsAndTechSection from "@/components/aws/ToolsAndTechSection";
import WhyPartnerAws from "@/components/aws/WhyPartnerAWS";

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
