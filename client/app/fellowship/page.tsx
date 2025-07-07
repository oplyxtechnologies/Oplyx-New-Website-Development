import FellowshipHero from "@/components/Fellowship/CareersFellowship";
import FellowshipFinalSection from "@/components/Fellowship/FellowshipFinalSection";
import FellowshipIntroSection from "@/components/Fellowship/FellowshipIntroSection";
import FellowshipStatusSection from "@/components/Fellowship/FellowshipStatusSection";
import MentorshipBenefits from "@/components/Fellowship/MentorshipBenefits";
import WhatYouWillLearn from "@/components/Fellowship/WhatYouWillLearn";
import WhoShouldApply from "@/components/Fellowship/WhoShouldApply";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Oplyx Fellowship Program",
  description:
    "Join the Oplyx Fellowship Program to enhance your skills, gain mentorship, and contribute to innovative projects.",
};

export default function Fellowship() {
  return (
    <div className="bg-[#020208]  ">
      <FellowshipHero />
      <FellowshipIntroSection />
      <FellowshipStatusSection />
      <WhoShouldApply />
      <WhatYouWillLearn />
      <MentorshipBenefits />
      <FellowshipFinalSection />
    </div>
  );
}
