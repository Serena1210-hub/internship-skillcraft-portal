import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import PublicHeader from '../components/PublicHeader';
import Footer from '../components/Footer';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-[#000000]">
      <PublicHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0e0abf] via-[#000000] to-[#e1b787] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#ffc916] text-black text-sm font-medium shadow-md">
              <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
              Applications Open · 2025 Cohort
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Launch Your Tech Career<br />
            with <span className="text-[#ffc916]">SkillCraft</span>
          </h1>
          
          <p className="text-lg text-[#ffffff]/80 mb-10 max-w-3xl mx-auto">
            Join our selective, fully sponsored internship program and transform into a job‑ready professional in Software Engineering or Cybersecurity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/signup')} 
              className="px-8 py-4 bg-[#ffc916] text-black rounded-full hover:bg-[#e1b787] font-semibold text-lg transition shadow-lg"
            >
              Apply Now →
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="px-8 py-4 border border-white/40 text-white rounded-full hover:bg-white hover:text-[#0e0abf] font-semibold text-lg transition shadow-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Choose Your Path Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#0e0abf]">Choose Your Path</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Select from two industry‑leading tracks designed to prepare you for high‑demand careers in technology.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "💻",
                title: "Software Engineering",
                desc: "Master full‑stack development, cloud technologies, and software architecture.",
                tech: "React • TypeScript • Cloud"
              },
              {
                icon: "🛡️",
                title: "Cybersecurity",
                desc: "Learn threat analysis, security protocols, and ethical hacking fundamentals.",
                tech: "Network Security • SOC • Ethics"
              }
            ].map((track, i) => (
              <div key={i} className="bg-[#f9f9f9] border border-[#e1b787]/40 rounded-2xl p-8 hover:shadow-xl transition">
                <div className="w-16 h-16 bg-[#0e0abf]/10 rounded-2xl flex items-center justify-center mb-6 text-3xl">
                  {track.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#0e0abf]">{track.title}</h3>
                <p className="text-gray-700 mb-6">{track.desc}</p>
                <div className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 mr-2 text-[#ffc916]" />
                  <span>{track.tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#0e0abf]">Our Core Values</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            The principles that guide everything we do at SkillCraft.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💡", title: "Innovation", desc: "Future‑ready technologies & methods" },
              { icon: "🤝", title: "Collaboration", desc: "Team‑driven professional growth" },
              { icon: "⭐", title: "Excellence", desc: "High standards, real outcomes" },
              { icon: "💻", title: "Inclusivity", desc: "Opportunity for driven talent" }
            ].map((value, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-[#e1b787]/40 hover:shadow-md transition">
                <div className="w-12 h-12 bg-[#ffc916]/20 rounded-xl flex items-center justify-center mb-4 text-2xl">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0e0abf]">{value.title}</h3>
                <p className="text-gray-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0e0abf] to-[#000000] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-[#ffc916] rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl">
            🎓
          </div>
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-[#ffffff]/80 mb-8">
            Apply now and take the first step towards a rewarding career in technology. Limited spots available for the upcoming cohort.
          </p>
          <button 
            onClick={() => navigate('/signup')}
            className="px-8 py-4 bg-[#ffc916] text-black rounded-full hover:bg-[#e1b787] font-semibold text-lg transition shadow-lg"
          >
            Apply Now →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
