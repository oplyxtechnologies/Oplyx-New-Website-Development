// app/blog/soc-2-type-ii-compliance/page.tsx

import { Metadata } from "next";

import Securitycomponent from "./securitycomponent";

export const metadata: Metadata = {
  title: "Oplyx Achieves SOC 2 Type II Compliance",
  description:
    "Oplyx Technologies has successfully achieved SOC 2 Type II compliance, validating our commitment to world-class security standards.",
};

export default function Page() {
  return <Securitycomponent />;
}
