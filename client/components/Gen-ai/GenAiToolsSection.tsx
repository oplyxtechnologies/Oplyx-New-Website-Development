"use client";

import { Brain, Settings2, Cloud, ImageIcon } from "lucide-react";

export default function GenAiToolsSection() {
  const tools = [
    {
      icon: <Brain className="w-8 h-8 text-green-400" />,
      title: "OpenAI GPT-4, Claude 3, Gemini",
    },
    {
      icon: <Settings2 className="w-8 h-8 text-green-400" />,
      title: "LangChain, Pinecone, ChromaDB",
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-400" />,
      title: "AWS Bedrock, Vertex AI, Azure OpenAI",
    },
    {
      icon: <ImageIcon className="w-8 h-8 text-green-400" />,
      title: "OCR & Image Gen tools",
    },
  ];

  return (
    <section className=" text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl max-w-3xl mx-auto font-bold mb-12">
          We work with cutting-edge AI tools
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2   gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white/5 min-h-44 border border-white/10 rounded-lg p-6 text-left backdrop-blur-sm hover:bg-white/10 transition duration-300 hover:scale-[1.02]"
            >
              <div className="mb-4">{tool.icon}</div>
              <h3 className="text-lg font-semibold text-white">{tool.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
