import React from "react";
import { useNavigate } from "react-router-dom";
import { Check, X } from "lucide-react";
import PublicHeader from "../components/PublicHeader";
import Footer from "../components/Footer";

const EligibilityPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#000000] overflow-x-hidden">
      <PublicHeader />

      {/* HERO */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e0abf] via-[#000000] to-[#0e0abf]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse" />

        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <span className="uppercase tracking-widest text-sm text-[#ffc916]">
            SkillCraft Internship Program
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mt-6 mb-6">
            Eligibility Requirements
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            SkillCraft selects high-potential candidates prepared to build real-world technology.
          </p>
        </div>
      </section>

      {/* BASIC REQUIREMENTS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#0e0abf] mb-4">
            Basic Requirements
          </h2>
          <p className="text-center text-gray-600 mb-14 text-lg">
            Applicants must meet all criteria below.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "University Student",
                desc: "Currently enrolled in an accredited institution.",
                icon: "🎓",
              },
              {
                title: "Minimum GPA 3.0",
                desc: "Strong academic consistency is required.",
                icon: "⭐",
              },
              {
                title: "Required Documents",
                desc: "Resume, request letter, and portfolio link.",
                icon: "📄",
              },
              {
                title: "Tech Interest",
                desc: "Demonstrated interest in engineering or security.",
                icon: "💻",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#e1b787]/40 rounded-2xl p-8 hover:shadow-xl transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#0e0abf]/10 rounded-xl flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <Check className="text-[#ffc916]" />
                    </div>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM TRACKS */}
      <section className="py-24 bg-[#f9f9ff]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#0e0abf] mb-4">
            Choose Your Track
          </h2>
          <p className="text-center text-gray-600 mb-14 text-lg">
            Select one specialization aligned with your career goals.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Software */}
            <div className="bg-white border-2 border-[#0e0abf]/30 rounded-3xl p-10 hover:shadow-2xl transition">
              <div className="w-20 h-20 bg-[#0e0abf]/10 rounded-2xl flex items-center justify-center mb-6 text-4xl">
                💻
              </div>
              <h3 className="text-3xl font-bold mb-4">Software Engineering</h3>
              <p className="text-gray-600 mb-6">
                Full-stack development, system design, and scalable applications.
              </p>
              {[
                "Programming fundamentals",
                "Data structures & algorithms",
                "Git & version control",
                "Project portfolio",
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-2 mb-2">
                  <Check className="text-[#ffc916]" />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            {/* Cyber */}
            <div className="bg-white border-2 border-[#ffc916]/50 rounded-3xl p-10 hover:shadow-2xl transition">
              <div className="w-20 h-20 bg-[#ffc916]/20 rounded-2xl flex items-center justify-center mb-6 text-4xl">
                🛡️
              </div>
              <h3 className="text-3xl font-bold mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-6">
                Security fundamentals, threat analysis, and defensive systems.
              </p>
              {[
                "Networking basics",
                "Operating systems",
                "Security awareness",
                "Problem-solving mindset",
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-2 mb-2">
                  <Check className="text-[#0e0abf]" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DISQUALIFIERS */}
      <section className="py-24 bg-[#000000] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14 text-[#ffc916]">
            Automatic Disqualifiers
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Incomplete application",
              "Below required GPA",
              "Not currently enrolled",
              "Plagiarized submissions",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white text-black border border-[#e1b787]/40 rounded-xl p-6 flex items-start gap-3"
              >
                <X className="text-[#0e0abf]" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-br from-[#000000] to-[#0e0abf] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-[#ffc916] rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl">
            🚀
          </div>
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Prove Your Skills?
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Apply now and begin your professional journey with SkillCraft.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="px-10 py-4 bg-[#ffc916] text-black font-bold rounded-lg hover:bg-white transition"
          >
            Apply Now →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EligibilityPage;
