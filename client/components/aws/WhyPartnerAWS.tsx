"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RefreshCcw, Repeat, ShieldCheck, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Modernize legacy workloads for AWS",
    icon: <RefreshCcw size={28} className="text-green-400" />,
  },
  {
    title: "Automate with CI/CD and IaC",
    icon: <Repeat size={28} className="text-green-400" />,
  },
  {
    title: "Implement secure, compliant, scalable environments",
    icon: <ShieldCheck size={28} className="text-green-400" />,
  },
  {
    title: "Monitor, optimize, and iterate faster",
    icon: <BarChart3 size={28} className="text-green-400" />,
  },
];

export default function WhyPartnerAws() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 text-white bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Features List */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 space-y-6"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div>{feature.icon}</div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {feature.title}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Right: Title + Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 text-left"
        >
          <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-4">
            Why Partner with Oplyx for AWS?
          </h2>
          <p className="text-lg text-gray-300 mb-2">
            <strong className="text-white">
              Cloud Expertise. Startup Speed.
            </strong>
          </p>
          <p className="text-base text-gray-400 leading-relaxed">
            We&apos;re not just AWS practitioners — we&apos;re your cloud
            strategy allies. With cross-functional experts in infrastructure,
            DevOps, FinOps, and security, we help you drive results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
