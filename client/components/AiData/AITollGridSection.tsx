"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Database,
  Library,
  Settings,
  HardDrive,
  Sparkles,
  Cloud,
} from "lucide-react";

const categories = [
  {
    title: "Data Engineering",
    tools: ["Apache Kafka", "DBT", "Airbyte", "BigQuery", "AWS Redshift"],
    icon: <Database size={20} />,
  },
  {
    title: "AI/ML Libraries",
    tools: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Hugging Face Transformers",
      "Keras",
    ],
    icon: <Library size={20} />,
  },
  {
    title: "MLOps",
    tools: ["MLflow", "Weights & Biases", "FastAPI", "Kubeflow", "Prefect"],
    icon: <Settings size={20} />,
  },
  {
    title: "Vector Databases",
    tools: ["Pinecone", "ChromaDB", "Weaviate"],
    icon: <HardDrive size={20} />,
  },
  {
    title: "Generative AI",
    tools: ["OpenAI (GPT-4)", "Claude 3", "Gemini", "LangChain", "LlamaIndex"],
    icon: <Sparkles size={20} />,
  },
  {
    title: "Cloud Platforms",
    tools: ["AWS Bedrock", "Azure OpenAI", "GCP Vertex AI"],
    icon: <Cloud size={20} />,
  },
];

export default function AiToolsGridSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 text-white ">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-panchang font-bold mb-12 text-center">
          The stack that fuels our AI builds
        </h2>
        <div
          ref={ref}
          className="flex flex-col md:flex-row gap-10 bg-white/10 p-4 rounded-xl"
        >
          {/* Tabs Navigation */}
          <div className="md:w-1/4 space-y-3">
            {categories.map((cat, index) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg text-sm transition ${
                  index === activeTab
                    ? "bg-white/10 py-7 text-white font-semibold"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {cat.icon}
                {cat.title}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="md:w-3/4 bg-white/5 border border-white/10 rounded-lg p-6  backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-4">
              {categories[activeTab].title}
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
              {categories[activeTab].tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
