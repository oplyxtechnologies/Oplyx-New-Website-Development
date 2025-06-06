"use client";

const categories = [
  "All",
  "Design",
  "Development",
  "Product",
  "Team",
  "Data & AI",
  "Devops",
  "Life at Oplyx",
  "Health Care",
];

type Props = {
  selected: string;
  setSelected: (category: string) => void;
};

export default function BlogTabs({ selected, setSelected }: Props) {
  return (
    <div className="flex max-w-7xl mx-auto py-10 flex-wrap gap-6 text-sm font-medium mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelected(category)}
          className={`${
            selected === category
              ? "font-bold border-b  "
              : "text-gray-400 cursor-pointer"
          } transition`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
