import React, { useState } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom"; 
import { Menu, X, Search, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import logo from "../logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signOut } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  // define role from user context
  const role = user?.role;

  const hideNavbarPaths = [
    "/",
    "/about",
    "/eligibility",
    "/signin",
    "/signup",
    "/login",
    "/register",
  ];
  if (hideNavbarPaths.includes(location.pathname)) return null;

  const isActive = (path) => location.pathname === path;

  const handleSignOut = async () => {
    await signOut();
    setProfileMenuOpen(false);
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/50 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      

        {/* TOP BAR */}
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <div
            onClick={() => navigate("/home")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <img src={logo} alt="SkillCraft" className="w-20 h-20 object-contain" />
            <span className="text-xl font-extrabold text-[#ffc916]">
              SkillCraft
            </span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", path: "/home" },
              { name: "Application", path: "/application" },
              { name: "Resources", path: "/resources" },
              { name: "Assessment", path: "/assessment" },
            ].map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`group relative text-sm font-semibold transition-colors duration-300
                  ${isActive(item.path)
                    ? "text-[#0e0abf]"
                    : "text-black hover:text-[#0e0abf]"}
                `}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#ffc916] transition-all duration-300
                    ${isActive(item.path)
                      ? "w-full"
                      : "w-0 group-hover:w-full"}
                  `}
                />
              </button>
            ))}
          </nav>

            {/* ✅ Admin Dashboard link only for admins */}
        {role === "admin" && (
          <NavLink
            to="/admindashboard"
            className="px-4 py-2 rounded-lg text-gray-700 hover:text-[#0e0abf] font-medium transition-colors"
          >
            Admin Dashboard
          </NavLink>
        )}

          {/* RIGHT TOOLS */}
          <div className="hidden md:flex items-center space-x-3">
            {/* SEARCH */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2 rounded-lg transition
                ${searchOpen
                  ? "bg-[#0e0abf]/10 text-[#0e0abf]"
                  : "text-black hover:bg-gray-100"}
              `}
            >
              <Search className="w-5 h-5" />
            </button>

            {/* PROFILE */}
            <div className="relative">
              <button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="flex items-center p-1.5 rounded-lg hover:bg-gray-100 transition"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <User className="w-5 h-5" />
                </div>
              </button>

              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="px-4 py-3 bg-gray-50 border-b">
                    <p className="text-sm font-semibold">
                      {user?.displayName || "User"}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {user?.email}
                    </p>
                  </div>

                  <button
                    onClick={() => navigate("/profile")}
                    className="w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 flex items-center"
                  >
                    <User className="w-4 h-4 mr-2" /> View Profile
                  </button>

                  <button
                    onClick={() => navigate("/home")}
                    className="w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50"
                  >
                    Dashboard
                  </button>

                  <div className="border-t">
                    <button
                      onClick={handleSignOut}
                      className="w-full px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* SEARCH BAR */}
        {searchOpen && (
          <div className="py-4 border-t">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0e0abf]/30"
              />
            </div>
          </div>
        )}
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-2 shadow-xl">
          {[
            { name: "Home", path: "/home" },
            { name: "Application", path: "/application" },
            { name: "Resources", path: "/resources" },
            { name: "Assessment", path: "/assessment" },
          ].map((item) => (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left p-3 rounded-lg font-semibold
                ${isActive(item.path)
                  ? "text-[#0e0abf] bg-[#ffc916]/10"
                  : "text-black hover:bg-gray-50"}
              `}
            >
              {item.name}
            </button>
          ))}

          <div className="pt-2 border-t">
            <button
              onClick={handleSignOut}
              className="block w-full p-3 text-left text-red-600 font-semibold"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
