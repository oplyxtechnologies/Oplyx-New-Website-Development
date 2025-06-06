"use client";

import {
  DollarSign,
  Rocket,
  Users,
  Briefcase,
  Code2,
  ScrollText,
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Stipend for Your Effort",
    description:
      "Receive a small stipend as a token of appreciation for your time and dedication.",
  },
  {
    icon: ScrollText,
    title: "Certificate of Completion",
    description:
      "Walk away with a recognized certificate that validates your journey and contribution.",
  },
  {
    icon: Users,
    title: "Community & Growth",
    description:
      "Make new friends, meet mentors, and gain the confidence to shape your career path.",
  },
  {
    icon: Briefcase,
    title: "Career Opportunity",
    description:
      "Top fellows may receive an offer to join Oplyx full-time after completing the program.",
  },
  {
    icon: Code2,
    title: "Real-World Project Experience",
    description:
      "Work on actual projects that go live — not just practice tasks.",
  },
  {
    icon: Rocket,
    title: "Resume & LinkedIn Boost",
    description:
      "Gain standout experience that strengthens your portfolio and helps land future roles.",
  },
];

const MentorshipBenefits = () => {
  return (
    <section className="bg-[#08121b] text-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Mentorship Support Block */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Mentorship Support
          </h2>
          <p className="text-white/80 mb-4">
            You&apos;ll be paired with a mentor who&apos;ll guide your progress
            through weekly check-ins, code/design reviews, and career advice. At
            Oplyx, mentorship means partnership — we&apos;re here to help you
            grow, not just assign tasks.
          </p>
          <p className="italic text-sm text-white/60">
            92% of our fellows say mentorship was their biggest takeaway.
          </p>
        </div>

        {/* What You&apos;ll Get */}
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-12">
            What You&apos;ll Get
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="text-center  min-h-64 max-w-xs p-4 border border-white/10 bg-white/5 rounded-lg hover:bg-white/10 transition"
              >
                <benefit.icon className="mx-auto mb-3 text-white" size={24} />
                <h4 className="font-semibold mb-1">{benefit.title}</h4>
                <p className="text-sm text-white/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipBenefits;
