import Eduapply from "@/components/SuccessStories/Eduapply";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "EduApply Case Study",
  description:
    "Explore how Oplyx built EduApply, a platform simplifying university applications for students with expert guidance.",
};

export default function EduApplyCaseStudy() {
  return <Eduapply />;
}
