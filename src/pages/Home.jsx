import {
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 -z-10">
        {/* Background Image */}
        <img
          src="/content1.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center scale-105"
        />

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Glow accents */}
        <div className="absolute top-[-250px] left-[-250px] w-[600px] h-[600px] bg-[#0e0abf]/20 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-250px] right-[-250px] w-[600px] h-[600px] bg-[#ffc916]/20 blur-[160px] rounded-full animate-pulse" />
      </div>

      {/* ================= FLOATING TECH STICKERS ================= */}
      <div className="pointer-events-none fixed inset-0 -z-5">
        <CpuChipIcon className="absolute top-24 left-20 w-12 text-[#ffc916]/30 animate-bounce" />
        <ShieldCheckIcon className="absolute top-1/3 right-24 w-14 text-[#0e0abf]/30 animate-spin-slow" />
        <CloudIcon className="absolute bottom-32 left-1/4 w-16 text-white/20 animate-float" />
        <CodeBracketIcon className="absolute bottom-24 right-1/3 w-12 text-[#ffc916]/30 animate-floatSlow" />
      </div>

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-36 pb-28 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#ffc916] tracking-tight animate-fade-in">
          SkillCraft Internship Portal
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-white/80 text-lg animate-fade-in delay-150">
          A next-generation internship experience for future engineers,
          innovators, and cybersecurity professionals — fully sponsored by
          Leshey Technologies.
        </p>

        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <a
            href="#tracks"
            className="border border-white/30 px-8 py-4 rounded-full hover:border-[#0e0abf] hover:text-[#0e0abf] hover:scale-105 transition"
          >
            Explore Tracks
          </a>
          <a
            href="/Application"
            className="bg-[#ffc916] text-black font-bold px-8 py-4 rounded-full shadow-xl hover:bg-white hover:scale-105 transition"
          
            >
            Apply Now
          </a>
        </div>
      </section>

      {/* ================= TRACKS ================= */}
      <section
        id="tracks"
        className="max-w-6xl mx-auto px-6 pb-32 grid md:grid-cols-2 gap-10"
      >
        {[
          {
            title: "Cybersecurity & Network Security",
            desc: "Hands-on security training covering cybersecurity, network defense, and ICT protection.",
            color: "#ffc916",
          },
          {
            title: "Computer Science & Software Engineering",
            desc: "Deep focus on software engineering, systems, and modern computing disciplines.",
            color: "#0e0abf",
          },
        ].map((track, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/30 hover:-translate-y-2 transition"
          >
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: track.color }}
            >
              {track.title}
            </h3>
            <p className="text-white/70">{track.desc}</p>
          </div>
        ))}
      </section>

      {/* ================= ELIGIBILITY ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-[#ffc916] mb-6">
            Eligibility Criteria
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-white/80">
            {[
              "Cameroonian citizen",
              "Level 3 or Final Year student",
              "Minimum GPA of 3.0",
              "Actively seeking internship",
              "Community or leadership involvement",
              "Strong interest in technology",
              "Available to start in April",
            ].map((item, i) => (
              <p key={i}>• {item}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ASSESSMENT ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <h2 className="text-3xl font-bold text-[#0e0abf] mb-6">
          Assessment Process
        </h2>
        <p className="text-white/80 mb-4">
          Shortlisted applicants receive an invitation letter with assessment
          locations across major cities.
        </p>
        <p className="text-white/80">
          Candidates scoring{" "}
          <span className="text-[#ffc916] font-bold">80%+</span> advance to
          interviews. Others receive feedback to reapply next cycle.
        </p>
      </section>

      {/* ================= FINAL SELECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-[#0e0abf] mb-6">
            Final Selection & Sponsorship
          </h2>
          <ul className="text-white/80 space-y-2">
            <li>• Acceptance & onboarding emails sent in April</li>
            <li>• Waitlist available for high-potential candidates</li>
            <li>• Fully sponsored by Leshey Technologies — zero fees</li>
          </ul>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="pb-32">
        <h2 className="text-3xl font-bold text-center text-[#ffc916] mb-10">
          Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {["gallery1.jpg", "gallery2.jpg", "gallery6.jpg"].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-white/10 hover:border-[#ffc916]/40 transition group"
            >
              <img
                src={`/${img}`}
                alt="Gallery"
                className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

