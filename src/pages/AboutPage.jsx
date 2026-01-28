import React from "react";
import { useNavigate } from "react-router-dom";
import PublicHeader from "../components/PublicHeader";
import Footer from "../components/Footer";

const AboutPage = () => {
  const navigate = useNavigate();

  const partners = [
    { name: "TechCorp Global", logo: "/jfn.png" },
    { name: "SecureNet Solutions", logo: "/CODAM.png" },
    { name: "CloudScale Systems", logo: "/Fenix Touch logo.png" },
    { name: "DataDriven Inc.", logo: "/HACKTHEBOX.png" },
    { name: "InnovateTech Labs", logo: "/GOOGLE DEVELOPERS.png" },
    { name: "CyberGuard Pro", logo: "/kamcyber.png" },
    { name: "DevOps Masters", logo: "/logos/devops.png" },
    { name: "AI Frontiers", logo: "/logos/aifrontiers.png" },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <PublicHeader />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0e0abf] via-black to-[#e1b787] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About SkillCraft
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Empowering the next generation of tech professionals through
            immersive internship experiences and industry partnerships.
          </p>
        </div>
      </section>

    {/* MISSION & GOAL SECTION */}
<section className="relative py-28 bg-white overflow-hidden">
  {/* Tech background */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(14,10,191,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,10,191,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#0e0abf]/20 blur-[160px] rounded-full animate-pulse" />
    <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#ffc916]/25 blur-[160px] rounded-full animate-pulse" />
  </div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative">
    
    {/* Mission Box */}
    <div className="relative animate-slide-left">
      {/* Floating tech icons */}
      <div className="absolute -top-6 -left-6 text-[#0e0abf]/30 text-4xl animate-float">⌬</div>
      <div className="absolute -bottom-6 -right-6 text-[#ffc916]/40 text-4xl animate-float">⚡</div>

      <div className="bg-white/80 backdrop-blur-xl border border-[#e1b787]/40 rounded-3xl p-12 shadow-xl animate-fade-in">
        <span className="text-xs tracking-widest text-[#ffc916] uppercase">
          Our Mission
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0e0abf] mt-4 mb-6">
          To Foster Technology-driven development and empowerment within our community.
        </h2>
        <p className="text-gray-700 text-lg mb-5">
          SkillCraft exists to eliminate the gap between what students 
          <span className="font-semibold text-[#0e0abf]"> learn </span> 
          and what the tech industry 
          <span className="font-semibold text-[#ffc916]"> demands</span>.
        </p>
        <p className="text-gray-700 text-lg">
          We provide immersive, hands-on internship experiences where learners solve real problems, 
          work with real tools, and gain confidence through real responsibility.
        </p>
      </div>
    </div>

    {/* Goal Box */}
    <div className="relative animate-slide-right">
      {/* Floating tech icons */}
      <div className="absolute -top-6 -left-6 text-[#0e0abf]/30 text-4xl animate-float">⌘</div>
      <div className="absolute -bottom-6 -right-6 text-[#ffc916]/40 text-4xl animate-float">⚙️</div>

      <div className="bg-white/80 backdrop-blur-xl border border-[#e1b787]/40 rounded-3xl p-12 shadow-xl h-96 flex flex-col justify-center text-center animate-fade-in">
        <div className="text-6xl mb-6 text-[#ffc916] animate-pulse">🎯</div>
        <h3 className="text-2xl font-bold text-[#0e0abf] mb-4">Our Vision</h3>
        <p className="text-gray-700 text-lg font-medium leading-relaxed">
          A world where everyone, regardless of their background,  
          <span className="text-[#0e0abf] font-semibold"> has the opportunity to learn about and use technology to create a better future for themselves </span>
           and their communities
          <span className="text-[#ffc916] font-semibold"> To Have a Cyber Space where Everyone feels safe and inspiring technological growth.</span>
        </p>
      </div>
    </div>

  </div>
</section>




      {/* PARTNERS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#0e0abf] mb-4">
            Our Industry Partners
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Collaborating with leaders shaping the future of technology.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((p, i) => (
              <div
                key={i}
                className="bg-white border border-[#e1b787]/40 rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-14 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#0e0abf] mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Take the first step toward a career in technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/signup")}
              className="px-8 py-4 bg-black text-white rounded-lg hover:bg-[#0e0abf] transition"
            >
              Apply Now →
            </button>
            <button
              onClick={() => navigate("/eligibility")}
              className="px-8 py-4 border-2 border-black rounded-lg hover:bg-gray-100 transition"
            >
              Check Eligibility
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
