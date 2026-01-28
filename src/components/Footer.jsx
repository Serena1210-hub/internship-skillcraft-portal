import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#000000] text-white relative overflow-hidden">
      {/* subtle tech grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:100px_100px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Top */}
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              {/* LOGO */}
              <img
                src="/logo1.png"  // place logo in public folder
                alt="SkillCraft Logo"
                className="w-26 h-12 object-contain"
              />
              <br></br>
              <span className="text-2xl font-extrabold tracking-wide">
                Skill<span className="text-[#ffc916]">Craft</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              SkillCraft is a selective, industry-driven internship program
              designed to produce job-ready software engineers and
              cybersecurity professionals.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-5 text-[#ffc916] uppercase tracking-wider text-sm">
              Navigate
            </h4>
            <div className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Eligibility", path: "/eligibility" },
                { label: "Apply", path: "/signup" },
              ].map((link, i) => (
                <button
                  key={i}
                  onClick={() => navigate(link.path)}
                  className="block text-gray-400 hover:text-white text-sm transition"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold mb-5 text-[#ffc916] uppercase tracking-wider text-sm">
              Programs
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Software Engineering</li>
              <li>Cybersecurity</li>
              <li>Industry Mentorship</li>
              <li>Career Placement</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5 text-[#ffc916] uppercase tracking-wider text-sm">
              Contact
            </h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>Email: <span className="text-white">obengladys@gmail.com</span></p>
              <p>Phone: <span className="text-white">+237 693 759 722</span></p>
              <p>
                Location:
                <br />
                <span className="text-white">
                  Bonaberi, Douala<br />Cameroon
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SkillCraft. All rights reserved.
          </p>

          <div className="flex gap-6">
            <button className="text-gray-400 hover:text-[#ffc916] text-sm transition">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-[#ffc916] text-sm transition">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
