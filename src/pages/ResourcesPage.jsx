import React from "react";
import {
  ShieldCheckIcon,
  CodeBracketIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function ResourcesPage() {
  const cybersecurity = [
    {
      title: "Cybersecurity Basics",
      description:
        "Understand core security principles, threat models, and digital safety fundamentals.",
      icon: ShieldCheckIcon,
      lessons: "12 Lessons",
      duration: "6 Hours",
    },
    {
      title: "Network Security",
      description:
        "Learn firewalls, VPNs, IDS/IPS, and techniques for securing modern networks.",
      icon: ShieldCheckIcon,
      lessons: "15 Lessons",
      duration: "8 Hours",
    },
  ];

  const software = [
    {
      title: "Programming Fundamentals",
      description:
        "Master variables, control flow, functions, and essential data structures.",
      icon: CodeBracketIcon,
      lessons: "20 Lessons",
      duration: "10 Hours",
    },
    {
      title: "Algorithms",
      description:
        "Develop problem-solving skills with sorting, searching, and complexity analysis.",
      icon: CodeBracketIcon,
      lessons: "18 Lessons",
      duration: "9 Hours",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <img
        src="/gallery4.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-black/75" />

      {/* ACCENTS */}
      <SparklesIcon className="absolute top-24 left-16 w-16 text-[#0e0abf]/30" />
      <SparklesIcon className="absolute bottom-40 right-24 w-20 text-[#ffc916]/20" />

      {/* HERO */}
      <section className="relative pt-32 pb-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#ffc916]">
          Learning Resources
        </h1>
        <p className="mt-6 text-white/70 max-w-xl mx-auto">
          Structured learning paths to build real-world technical skills.
        </p>
      </section>

      {/* STATS */}
      <section className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mb-32">
        {[
          { value: "40+", label: "Learning Modules" },
          { value: "100+", label: "Hours of Content" },
          { value: "2", label: "Career Tracks" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 text-center"
          >
            <h2 className="text-4xl font-bold text-[#0e0abf]">
              {item.value}
            </h2>
            <p className="mt-2 text-white/60 uppercase tracking-wider text-sm">
              {item.label}
            </p>
          </div>
        ))}
      </section>

      {/* CYBERSECURITY */}
      <section className="relative max-w-5xl mx-auto px-6 mb-28">
        <h2 className="text-3xl font-bold text-[#ffc916] mb-10">
          Cybersecurity & Network Security
        </h2>

        <div className="space-y-10">
          {cybersecurity.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur"
            >
              <div className="flex gap-6">
                <item.icon className="w-10 text-[#0e0abf]" />

                <div className="flex-1">
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-white/70 mt-2">
                    {item.description}
                  </p>

                  <div className="flex gap-6 mt-4 text-sm text-white/60">
                    <span>{item.lessons}</span>
                    <span>{item.duration}</span>
                  </div>

                  {/* BUTTON */}
                  <button
                    className="mt-6 inline-block px-6 py-2.5 rounded-lg
                               bg-[#ffc916] text-black font-semibold
                               hover:bg-transparent hover:text-[#ffc916]
                               border border-[#ffc916] transition"
                  >
                    Start Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOFTWARE ENGINEERING */}
      <section className="relative max-w-5xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-bold text-[#ffc916] mb-10">
          Computer Science & Software Engineering
        </h2>

        <div className="space-y-10">
          {software.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur"
            >
              <div className="flex gap-6">
                <item.icon className="w-10 text-[#ffc916]" />

                <div className="flex-1">
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-white/70 mt-2">
                    {item.description}
                  </p>

                  <div className="flex gap-6 mt-4 text-sm text-white/60">
                    <span>{item.lessons}</span>
                    <span>{item.duration}</span>
                  </div>

                  {/* BUTTON */}
                  <button
                    className="mt-6 inline-block px-6 py-2.5 rounded-lg
                               bg-[#ffc916] text-black font-semibold
                               hover:bg-transparent hover:text-[#ffc916]
                               border border-[#ffc916] transition"
                  >
                    Start Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL SUPPORT */}
      <section className="relative max-w-5xl mx-auto px-6 mb-32">
        <div className="bg-gradient-to-r from-[#0e0abf]/20 to-[#ffc916]/10 border border-white/20 rounded-2xl p-10 backdrop-blur">
          <h3 className="text-2xl font-bold text-[#ffc916] mb-4">
            Learn With Full Support
          </h3>
          <p className="text-white/80">
            Mentorship, community collaboration, and guided learning — built to
            help you succeed from start to finish.
          </p>
        </div>
      </section>

    </div>
  );
}
