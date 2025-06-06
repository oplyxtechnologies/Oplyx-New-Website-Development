"use client";

import { FileText, Bot, FileSearch, FileCheck2 } from "lucide-react";
import Link from "next/link";

export default function GenAiUseCases() {
  const useCases = [
    {
      icon: <FileText className="w-8 h-8 text-green-400" />,
      title: "Content Generation for E-commerce",
    },
    {
      icon: <Bot className="w-8 h-8 text-green-400" />,
      title: "Chatbot & Support Automation",
    },
    {
      icon: <FileSearch className="w-8 h-8 text-green-400" />,
      title: "Document Summarization & Analysis",
    },
    {
      icon: <FileCheck2 className="w-8 h-8 text-green-400" />,
      title: "Invoice Extraction with OCR + GPT",
    },
  ];

  return (
    <section className=" text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          GenAI in Action
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white/5 border min-h-44 border-white/10 rounded-lg p-6 text-left backdrop-blur-sm hover:bg-white/10 transition duration-300 hover:scale-[1.02]"
            >
              <div className="mb-4">{useCase.icon}</div>
              <h3 className="text-lg font-semibold text-white">
                {useCase.title}
              </h3>
            </div>
          ))}
        </div>

        <Link href="/contact" className="inline-block">
          <button className="px-6 py-3 cursor-pointer bg-white text-black font-medium rounded hover:bg-gray-200 transition">
            See Demo / Book a Call →
          </button>
        </Link>
      </div>
    </section>
  );
}
