import ExpertiseSection from "@/components/Home/ExpertiseSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Our Expertise -Oplyx Technologies",
  description:
    "Explore our expertise in various fields and discover how we can help you achieve your goals.",
};

export default function Page() {
  return <ExpertiseSection />;
}
