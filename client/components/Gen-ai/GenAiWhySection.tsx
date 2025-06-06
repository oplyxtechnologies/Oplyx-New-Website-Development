"use client";

import { BrainCog, Repeat, BarChart3 } from "lucide-react"; // import icons from lucide-react

export default function GenAiWhySection() {
  const features = [
    {
      icon: <BrainCog className="w-8 h-8 text-green-400" />,
      title: "Ideate Fast",
      description:
        "Use GenAI to brainstorm, summarize, and generate content at scale.",
    },
    {
      icon: <Repeat className="w-8 h-8 text-green-400" />,
      title: "Automate Repetitive Work",
      description:
        "From document processing to customer queries, reduce manual tasks.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "Make Data Work for You",
      description: "Extract insights and generate reports intelligently.",
    },
  ];

  return (
    <section className=" text-white py-44 px-6 md:px-12 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl max-w-3xl mx-auto font-bold mb-12">
          Start your AI Transformation Journey
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg p-6 text-left backdrop-blur-sm hover:bg-white/10 transition duration-300 hover:scale-[1.02]"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
