import { Metadata } from "next";
import LushGlowComponent from "@/components/SuccessStories/LushGlowComponent";
export const metadata: Metadata = {
  title: "LushGlow Case Study",
  description:
    "Explore how Oplyx designed and developed a modern e-commerce site for LushGlow, a Nepali skincare brand, enhancing user experience and boosting sales.",
};

export default function LushGlowCaseStudy() {
  return <LushGlowComponent />;
}
