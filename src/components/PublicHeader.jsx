import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../logo.png";

const PublicHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItemClass = (path) =>
    `relative text-[13px] tracking-wide transition-all duration-300
     ${
       location.pathname === path
         ? "text-[#ffc916]"
         : "text-white/70 hover:text-white"
     }
     after:absolute after:left-0 after:-bottom-1
     after:h-[1px] after:w-full after:bg-[#ffc916]
     after:origin-left after:scale-x-0
     after:transition-transform after:duration-300
     hover:after:scale-x-100
     ${location.pathname === path ? "after:scale-x-100" : ""}`;

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Glass background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />

      <div className="relative max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={logo} alt="SkillCraft Logo" className="h-24 w-24 object-contain" />
          <span className="text-[#ffc916] text-xs font-semibold tracking-[0.25em]">
            SKILLCRAFT
          </span>
        </div>

        {/* Center navigation */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10">
          <button onClick={() => navigate("/")} className={navItemClass("/")}>
            Dashboard
          </button>
          <button
            onClick={() => navigate("/about")}
            className={navItemClass("/about")}
          >
            About
          </button>
          <button
            onClick={() => navigate("/eligibility")}
            className={navItemClass("/eligibility")}
          >
            Eligibility
          </button>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/signin")}
            className="hidden md:block text-white/70 hover:text-[#ffc916] transition text-sm"
          >
            Sign In
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="hidden md:block px-4 py-1.5 text-sm rounded-full
                       bg-[#ffc916] text-black font-medium
                       hover:bg-white transition"
          >
            Apply
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white/80 hover:text-[#ffc916]"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-black/90 backdrop-blur-xl px-6 py-6 space-y-4">
          {[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Eligibility", path: "/eligibility" },
          ].map((item) => (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left text-sm transition
                ${
                  location.pathname === item.path
                    ? "text-[#ffc916]"
                    : "text-white/70 hover:text-white"
                }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-4 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                navigate("/signin");
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-white/70 hover:text-white"
            >
              Sign In
            </button>

            <button
              onClick={() => {
                navigate("/signup");
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 rounded-full bg-[#ffc916] text-black font-medium"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PublicHeader;
