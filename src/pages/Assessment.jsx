import {
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  MapPinIcon,
  TrophyIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function Assessment() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Background */}
      <img
        src="/background.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        alt=""
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Floating accents */}
      <SparklesIcon className="absolute top-24 left-20 w-16 text-[#0e0abf]/30 animate-pulse" />
      <SparklesIcon className="absolute bottom-40 right-32 w-20 text-[#ffc916]/20 animate-pulse" />

      {/* HERO */}
      <section className="relative pt-32 pb-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#ffc916] tracking-wide">
          Assessment Phase
        </h1>
        <p className="mt-6 text-white/70 max-w-xl mx-auto">
          Where potential meets opportunity.
        </p>
      </section>

      {/* STATS */}
      <section className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mb-32">
        {[
          { value: "50+", label: "Applicants Last Year" },
          { value: "20+", label: "Interns Trained" },
          { value: "14+", label: "Successful Placements" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 text-center hover:border-[#ffc916]/40 transition"
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

      {/* FLOW */}
      <section className="relative max-w-5xl mx-auto px-6 space-y-12">

        {/* STEP 1 */}
        <div className="flex gap-6 items-start bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
          <ClipboardDocumentCheckIcon className="w-10 text-[#ffc916]" />
          <div>
            <h3 className="text-xl font-semibold">Invitation</h3>
            <p className="text-white/70 mt-2">
              Shortlisted candidates receive official exam details.
            </p>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="flex gap-6 items-start bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
          <AcademicCapIcon className="w-10 text-[#0e0abf]" />
          <div>
            <h3 className="text-xl font-semibold">Assessment</h3>
            <p className="text-white/70 mt-2">
              Score <span className="text-[#ffc916] font-bold">80%+</span> to qualify for interviews.
            </p>
          </div>
        </div>

        {/* LOCATIONS */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
            <MapPinIcon className="w-6 text-[#ffc916]" />
            Exam Locations
          </h3>

          <div className="flex flex-wrap gap-3">
            {["Douala", "Buea", "Bamenda", "Bafoussam"].map((city) => (
              <span
                key={city}
                className="px-4 py-2 rounded-full border border-white/20 text-sm text-white/70 hover:border-[#0e0abf] transition"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* FINAL */}
        <div className="flex gap-6 items-start bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
          <TrophyIcon className="w-10 text-[#ffc916]" />
          <div>
            <h3 className="text-xl font-semibold">Final Selection</h3>
            <p className="text-white/70 mt-2">
              Accepted interns begin onboarding in <b>April</b>.
            </p>
          </div>
        </div>

        {/* SCHOLARSHIP */}
        <div className="relative bg-gradient-to-r from-[#0e0abf]/20 to-[#ffc916]/10 border border-white/20 rounded-2xl p-10 backdrop-blur mb-32">
          <h3 className="text-2xl font-bold text-[#ffc916] mb-4">
            100% Sponsored Internship
          </h3>
          <p className="text-white/80">
            Fully funded by{" "}
            <span className="text-[#0e0abf] font-semibold">
              Leshey Technologies
            </span>
            . No fees. No barriers. Just talent.
          </p>
        </div>
      </section>
    </div>
  );
}
