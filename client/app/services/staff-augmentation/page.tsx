import FinalCtaSection from "@/components/TeamAugmentation/FinalCtaSection";
import GlobalTalentSection from "@/components/TeamAugmentation/GlobalTalentsection";
import HowWeWorkTogether from "@/components/TeamAugmentation/HowWeWorkTogether";
import SupplementalStaffingSection from "@/components/TeamAugmentation/SupplementalStaffingSection";
import TeamAugmentationHero from "@/components/TeamAugmentation/TeamAugmentationHero";
import TeamCultureSection from "@/components/TeamAugmentation/TeamCultureSection";
import TeamDedicatedSection from "@/components/TeamAugmentation/TeamDedicatedSection";
import WhyOplyxSection from "@/components/TeamAugmentation/WhyOplyxSection";

export default function StaffAaugmentation() {
  return (
    <div>
      <TeamAugmentationHero />
      <TeamDedicatedSection />
      <SupplementalStaffingSection />
      <TeamCultureSection />
      <WhyOplyxSection />
      <HowWeWorkTogether />
      <GlobalTalentSection />
      <FinalCtaSection />
    </div>
  );
}
