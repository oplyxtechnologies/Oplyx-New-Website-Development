"use client";

import { useState } from "react";

export default function CurriculumToggle({
  curriculum,
}: {
  curriculum: { title: string; lectures: string[] }[];
}) {
  const [expanded, setExpanded] = useState(false);
  const visibleSections = expanded ? curriculum : curriculum.slice(0, 3);

  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold mb-4">Curriculum</h2>
      <div className="border border-white/10 rounded-lg divide-y divide-white/10 overflow-hidden">
        {visibleSections.map((section, idx) => (
          <div key={idx} className="p-4 bg-white/5">
            <h4 className="font-semibold mb-2">{section.title}</h4>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              {section.lectures.map((lec, i) => (
                <li key={i}>{lec}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {curriculum.length > 3 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 px-4 py-2 border border-white/20 rounded text-sm hover:bg-white/10 transition"
        >
          {expanded ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
}
