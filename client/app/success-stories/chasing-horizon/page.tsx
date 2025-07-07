import ChasingHorizion from "@/components/SuccessStories/ChasingHorizion";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Chasing Horizon Case Study",
  description:
    "Explore how Oplyx built a custom travel booking platform for Chasing Horizon, enhancing user experience and increasing bookings.",
};

export default function ChasingHorizonCaseStudy() {
  return <ChasingHorizion />;
}
