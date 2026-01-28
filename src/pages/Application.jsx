import {
  CpuChipIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import CountUp from "../components/CountUp";

export default function Application() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/2026.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Floating Tech Icons */}
      <CpuChipIcon className="absolute top-24 left-16 w-16 text-[#0e0abf]/40 animate-pulse" />
      <ShieldCheckIcon className="absolute bottom-40 right-20 w-20 text-[#ffc916]/30 animate-pulse" />
      <SparklesIcon className="absolute top-1/2 right-1/3 w-12 text-white/20 animate-ping" />

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>
          <h1 className="text-5xl font-bold text-[#ffc916] leading-tight">
            SkillCraft Internship
            <span className="block text-white text-3xl mt-2">
              Program 2025
            </span>
          </h1>

          <p className="mt-6 text-white/70 text-lg max-w-xl">
            A hands-on, elite technology internship designed to produce
            industry-ready engineers, innovators, and security professionals.
          </p>
        </div>

        {/* Glass Card */}
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-[0_0_80px_rgba(255,255,255,0.06)]">

          <p className="text-sm text-white/50 uppercase tracking-wider mb-6">
            Program Overview — 2025
          </p>

          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0e0abf]">
                <CountUp end={50} />
              </h2>
              <p className="text-xs text-white/60 mt-2">Applicants</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#ffc916]">
                <CountUp end={20} />
              </h2>
              <p className="text-xs text-white/60 mt-2">Trained</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#0e0abf]">
                <CountUp end={14} />
              </h2>
              <p className="text-xs text-white/60 mt-2">Successful</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section className="relative max-w-6xl mx-auto px-6 pb-32 grid md:grid-cols-2 gap-10">

        <div className="bg-black/60 backdrop-blur border border-[#ffc916]/20 rounded-2xl p-8 hover:border-[#ffc916] transition">
          <ShieldCheckIcon className="w-10 text-[#ffc916] mb-4" />
          <h2 className="text-xl font-semibold text-white mb-3">
            Cybersecurity & Network Security
          </h2>
          <ul className="text-white/70 space-y-2 text-sm">
            <li>• Cybersecurity</li>
            <li>• Network Security</li>
            <li>• ICT Security Fields</li>
          </ul>
        </div>

        <div className="bg-black/60 backdrop-blur border border-[#0e0abf]/20 rounded-2xl p-8 hover:border-[#0e0abf] transition">
          <CpuChipIcon className="w-10 text-[#0e0abf] mb-4" />
          <h2 className="text-xl font-semibold text-white mb-3">
            Computer Science & Software Engineering
          </h2>
          <ul className="text-white/70 space-y-2 text-sm">
            <li>• Computer Science</li>
            <li>• Software Engineering</li>
            <li>• Computing Disciplines</li>
          </ul>
        </div>

      </section>

      {/* ELIGIBILITY + APPLY */}
      <section className="relative max-w-5xl mx-auto px-6 mb-32">
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

          <h2 className="text-2xl font-bold text-white mb-8">
            Eligibility Criteria
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-white/75 text-sm">
            {[
              "Cameroonian citizen",
              "Level 3 or Final Year student",
              "Minimum GPA of 3.0",
              "Seeking internship",
              "Tech community involvement",
              "Strong interest in technology",
              "Foundational knowledge",
              "Available to start in April",
            ].map(item => (
              <div key={item} className="flex gap-3">
                <span className="text-[#ffc916]">•</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          {/* APPLY BUTTON */}
          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/applicationformpage")}
              className="
                bg-[#ffc916]
                text-black
                font-bold
                px-12 py-4
                rounded-full
                shadow-[0_0_30px_rgba(255,201,22,0.35)]
                hover:bg-[#0e0abf]
                hover:text-white
                transition
              "
            >
              Apply Now
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
